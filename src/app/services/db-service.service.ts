import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, SnapshotOptions } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Exchange {
  id?: string;
  name?: string;
  date?: {};
  budget?: string;
  nameCount?: string;
  includeAdmin?: boolean;
  adminName?: string;
  adminEmail?: string;
  exchangees?: [];
  welcomeMessage?: string;
}
export interface User {
  id?: string;
  name?: string;
  email?: string;
  exchanges?: [];
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

  getExchange() {
    return this.exchanges;
  }

  async addExchange(exchange: Exchange) {
    const data = {
      createdAt: Date.now(),
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

    const docRef = await this.afs.collection('exchanges').add(data);
    return docRef;
  }

  deleteExchange(exchange: Exchange) {
    this.exchangeDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exchangeDoc.delete();
  }

  updateExchange(exchange: Exchange) {
    this.exchangeDoc = this.afs.doc(`exchanges/${exchange.id}`);
    this.exchangeDoc.update(exchange);
  }

  getUsers() {
    return this.users;
  }

  async addUser(user) {
    const data = {
      createdAt: Date.now(),
      name: user.name,
      email: user.email
    };

    const docRef = await this.afs.collection('users').add(data);
    return docRef;
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