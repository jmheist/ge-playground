import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-home',
  templateUrl: './wishlist-home.component.html',
  styleUrls: ['./wishlist-home.component.scss']
})
export class WishlistHomeComponent implements OnInit {

  constructor() {
    // if the user is viewing their wishlist, take them to edit page
    // otherwise, take them to the draw page where they see their name's wishlist
  }

  ngOnInit() {
  }

}
