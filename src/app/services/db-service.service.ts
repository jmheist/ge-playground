import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Exchange {
  id?:string;
  name?:string;
  date?:{};
  budget?:string;
  nameCount?:string;
  includeAdmin?:boolean;
  adminName?:string;
  adminEmail?:string;
  exchangees?:[];
  welcomeEmail?:string;
}
export interface User {
  id?:string;
  name?:string;
  email?:string;
  exchanges?:[];
}

@Injectable()
export class DbServiceService {
  exchangesCollection: AngularFirestoreCollection<Exchange>;
  exchanges: Observable<Exchange[]>;
  exchangeDoc: AngularFirestoreDocument<Exchange>;
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  usersDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) { 
    //this.exchanges = this.afs.collection('exchanges').valueChanges();

    this.exchangesCollection = this.afs.collection('exchanges', ref => ref.orderBy('name','asc'));

    this.exchanges = this.exchangesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Exchange;
        data.id = a.payload.doc.id;
        return data;
      });
    });
		
		
		this.usersCollection = this.afs.collection('users', ref => ref.orderBy('name','asc'));

    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.exchanges;
  }

  addItem(exchange: Exchange){
    this.exchangesCollection.add(exchange);
  }

  deleteItem(exchange: Exchange){
    this.exchangeDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exchangeDoc.delete();
  }

  updateItem(exchange: Exchange){
    this.exchangeDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exchangeDoc.update(exchange);
	}
	
	getUsers(){
    return this.exchanges;
  }

  addUser(user: User){
    this.exchangesCollection.add(user);
  }

  deleteUser(user: User){
    this.exchangeDoc = this.afs.doc(`users/${user.id}`);
    this.exchangeDoc.delete();
  }

  updateUser(user: User){
    this.exchangeDoc = this.afs.doc(`users/${user.id}`);
    this.exchangeDoc.update(user);
  }

}