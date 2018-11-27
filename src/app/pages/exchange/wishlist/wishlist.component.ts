import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { Exchange } from 'src/app/models/exchange.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishlist: Observable<any>;
  public exchange: {};
  public currentUser: User;
  private exchangeId: string;
  private exDoc;

  constructor(
    private router: ActivatedRoute,
    private db: DbServiceService,
    private userSrv: UserService,
    
  ) { 
    this.router.parent.params.subscribe(params => {
      this.exchangeId = params['id'];
    });
    this.router.params.subscribe(params => {
      this.userSrv.setActiveUserId(params['userId']);
      this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(user => {
        this.currentUser = user;
        this.wishlist = this.db.getWishlist(this.exchangeId, this.currentUser.uid);
      });
    });
    this.exDoc = this.db.getExchange(this.exchangeId);
    this.exDoc.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
