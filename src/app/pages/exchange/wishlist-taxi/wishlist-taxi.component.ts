import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-taxi',
  templateUrl: './wishlist-taxi.component.html',
  styleUrls: ['./wishlist-taxi.component.scss']
})
export class WishlistTaxiComponent implements OnInit {

  constructor() {
    // if the user is viewing their wishlist, take them to edit page
    // otherwise, take them to the draw page where they see their name's wishlist
  }

  ngOnInit() {
  }

}
