import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  public wishlist: Observable<any>;
  public wishlistSaved: [];
  public exchange: {};
  public currentUser: User;
  public currentUserUid: string;
  private exchangeId: string;
  private exDoc;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private db: DbServiceService,
    private userSrv: UserService

  ) {
    this.router.parent.parent.params.subscribe(params => {
      this.exchangeId = params['exchangeId'];
      this.userSrv.setActiveUserId(params['curentUserId']);
    });
    this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(user => {
      this.currentUser = user;
      this.currentUserUid = this.currentUser.id;
      this.wishlist = this.db.getWishlist(this.exchangeId, this.currentUser.drawnUid);
      // var sub = this.wishlist.subscribe(items => { 
      //   console.log(items)
      // });
      if (!this.currentUser.viewedDrawnWishlist) {
        this.currentUser.viewedDrawnWishlist = true;
        this.db.addExchangeesToExchange( this.exchangeId, this.currentUser );
      }
    });
  }

  ngOnInit() {
  }

  updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

  openItemUrl(item) {
    if (item.itemUrl) {
      if (item.itemUrl.match(/https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+com(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+/g)) {
        item.itemUrl = this.updateQueryStringParameter(item.itemUrl, 'tag', 'jmheist-20');
      }
      window.open(item.itemUrl,'_blank');
    } else {
      const url = "https://www.amazon.com/s/?field-keywords="+item.itemName.split(" ").join("+")+"&tag=jmheist-20"
      window.open(url,'_blank');
    }
  }
}
