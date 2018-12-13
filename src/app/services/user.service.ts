import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { DbServiceService } from './db-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public emailToUpdateId: string;
  private activeUserId: string;
  public currentUser: User;

  constructor(
    private db: DbServiceService
    ) {}

  setActiveUserId(id) {
    this.activeUserId = id;
  }
  
  getActiveUserId() {
    return this.activeUserId;
  }
}
