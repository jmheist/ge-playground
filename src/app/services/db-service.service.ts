import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { FirestoreService } from "./firestore.service";
import { Exchange } from "../models/exchange.model";
import { User } from "../models/user.model";
import { WishlistItem } from "../models/wishlist.model";
import "rxjs/add/operator/take";
import { firestore } from "firebase";

@Injectable()
export class DbServiceService {
  exchangesCollection: AngularFirestoreCollection<Exchange>;
  WishlistCollection: AngularFirestoreCollection<WishlistItem>;
  WishlistDoc: AngularFirestoreDocument<WishlistItem>;
  PeopleCollection: AngularFirestoreCollection<User>;
  exchanges: Observable<Exchange[]>;
  exDoc: AngularFirestoreDocument<Exchange>;
  ex: Observable<Exchange>;
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  usersDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  exchCollection: AngularFirestoreCollection<User>;
  exchs: Observable<User[]>;
  exchDoc: AngularFirestoreDocument<User>;
  exch: Observable<User>;

  constructor(public afs: AngularFirestore, public db: FirestoreService) {
    //this.exchanges = this.afs.collection('exchanges').valueChanges();

    this.exchangesCollection = this.afs.collection("exchanges", ref =>
      ref.orderBy("name", "asc")
    );

    this.exchanges = this.exchangesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Exchange;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.usersCollection = this.afs.collection("users", ref =>
      ref.orderBy("name", "asc")
    );
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getExchanges() {
    return this.exchanges;
  }

  getExchange(id): Observable<Exchange> {
    return this.db.doc$(`exchanges/${id}`);
  }

  async addExchange(exchange: Exchange): Promise<string> {
    const data = {
      name: exchange.name,
      date: exchange.date,
      budget: exchange.budget,
      nameCount: exchange.nameCount,
      includeAdmin: exchange.includeAdmin,
      adminName: exchange.adminName,
      adminEmail: exchange.adminEmail,
      adminUid: exchange.adminUid,
      welcomeMessage: exchange.welcomeMessage
    };

    // db.set('items/ID', data) })

    // const docRef = await this.afs.collection('users').add(data);
    const id = await this.afs.createId();
    const docRef = await this.db.set(`exchanges/${id}`, data);
    return id;
  }

  deleteExchange(exchange: Exchange) {
    this.exDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exDoc.delete();
  }

  updateExchange(exchange: Exchange) {
    this.exDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exDoc.update(exchange);
  }

  async addExchangeesToExchange(exchangeId, data) {
    console.log(data);
    this.exchDoc = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exchangeId)
      .collection<User>("exchangees")
      .doc(data.uid);
    await this.db.upsertExchangeeUser(this.exchDoc, data);
  }

  getUsers() {
    return this.users;
  }

  getUser(id): Observable<User> {
    return this.db.doc$(`users/${id}`);
  }

  getUserOnce(id): Promise<any> {
    return this.afs
      .collection("users")
      .doc(id)
      .valueChanges()
      .take(1)
      .toPromise()
      .then((user: User) => user);
  }

  getExchangee(exId, id): Observable<any> {
    this.exchDoc = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exId)
      .collection<User>("exchangees")
      .doc(id);
    return this.db.doc$(this.exchDoc);
  }

  getExchangePeople(exId): Observable<any> {
    this.PeopleCollection = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exId)
      .collection<User>("exchangees");
    return this.db.colWithIds$(this.PeopleCollection);
  }

  getWishlist(exId, id): Observable<any> {
    this.WishlistCollection = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exId)
      .collection<User>("exchangees")
      .doc(id)
      .collection("wishlist", ref => ref.orderBy("createdAt", "asc"));
    return this.db.colWithIds$(this.WishlistCollection);
  }

  setWishList(exId, id, data: Array<any>): Promise<any> {
    this.WishlistCollection = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exId)
      .collection<User>("exchangees")
      .doc(id)
      .collection("wishlist");
    data.forEach(async item => {
      if (item.itemName != "") {
        var cleanItem = { itemName: item.itemName };
        if (item.itemUrl != "") {
          cleanItem["itemUrl"] = item.itemUrl;
        }
        if (item.itemUid != "") {
          cleanItem["itemUid"] = item.itemUid;
        }
        var itemUid = await this.db.upsertItem(
          this.WishlistCollection,
          cleanItem
        );
        item.itemUid = itemUid;
      }
    });
    return;
  }

  removeWishlistItem(exId, userId, uid) {
    this.WishlistDoc = this.afs
      .collection<Exchange>(`exchanges`)
      .doc(exId)
      .collection<User>("exchangees")
      .doc(userId)
      .collection("wishlist")
      .doc(uid);
    this.WishlistDoc.delete();
  }

  addUser(user): Promise<void> {
    const data = {
      name: user.name,
      email: user.email
    };

    return this.db.upsertUser(`users/${data.email}`, data, true);
  }

  deleteUser(user: User) {
    this.usersDoc = this.afs.doc(`users/${user.id}`);
    this.usersDoc.delete();
  }

  updateUser(user: User) {
    this.usersDoc = this.afs.doc(`users/${user.id}`);
    this.usersDoc.update(user);
  }

  addExchangeIdToUser(userId, exchangeId) {
    const ref = this.afs.collection("users").doc(userId);
    ref.update({ exchanges: firestore.FieldValue.arrayUnion(exchangeId) });
  }

  userRequestedEmail(userEmail): Promise<any> {
    const ref = this.afs.collection("users").doc(userEmail);
    return ref.update({ requestedEmail: this.db.timestamp });
  }
}
