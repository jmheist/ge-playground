import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { DbServiceService } from './db-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public activeUser: User;

  constructor(
    private db: DbServiceService
    ) {}

  setActiveUser(id) {
    this.db.getUser(id).subscribe(user =>{
      this.activeUser = user;
    });
  }

}
