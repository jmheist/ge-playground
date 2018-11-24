import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FirestoreService } from './firestore.service';
import { Exchange } from '../models/exchange.model';
import { User } from '../models/user.model';

@Injectable()
export class DbServiceService {
  exchangesCollection: AngularFirestoreCollection<Exchange>;
  exchanges: Observable<Exchange[]>;
  exDoc: AngularFirestoreDocument<Exchange>;
  ex: Observable<Exchange>;
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  usersDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(
    public afs: AngularFirestore,
    public db: FirestoreService
  ) {
    //this.exchanges = this.afs.collection('exchanges').valueChanges();

    this.exchangesCollection = this.afs.collection('exchanges', ref => ref.orderBy('name', 'asc'));

    this.exchanges = this.exchangesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Exchange;
        data.id = a.payload.doc.id;
        return data;
      });
    });


    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('name', 'asc'));
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

  getExchange(id) {
    return this.db.doc$('exchanges/'+id);
  }

  async addExchange(exchange: Exchange) {
    const data = {
      name: exchange.name,
      date: exchange.date,
      budget: exchange.budget,
      nameCount: exchange.nameCount,
      includeAdmin: exchange.includeAdmin,
      adminName: exchange.adminName,
      adminEmail: exchange.adminEmail,
      exchangees: exchange.exchangees,
      welcomeMessage: exchange.welcomeMessage,
    };

    // db.set('items/ID', data) })

    // const docRef = await this.afs.collection('users').add(data);
    const id = await this.afs.createId();
    const docRef = await this.db.set(`exchanges/${id}`, data);
  }

  deleteExchange(exchange: Exchange) {
    this.exDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exDoc.delete();
  }

  updateExchange(exchange: Exchange) {
    this.exDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exDoc.update(exchange);
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.db.doc$('users/' + id);
  }

  async addUser(user) {
    const data = {
      name: user.name,
      email: user.email
    };

    // this.db.upsert('notes/xyz', { content: 'hello dude'}, false)
    // false = do not update

    // const docRef = await this.afs.collection('users').add(data);
    const docRef = await this.db.upsert(`users/${data.email}`, data, false);
  }

  deleteUser(user: User) {
    this.usersDoc = this.afs.doc(`users/${user.id}`);
    this.usersDoc.delete();
  }

  updateUser(user: User) {
    this.usersDoc = this.afs.doc(`users/${user.id}`);
    this.usersDoc.update(user);
  }

}