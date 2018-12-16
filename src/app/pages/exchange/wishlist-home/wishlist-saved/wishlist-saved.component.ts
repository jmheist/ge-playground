import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-saved',
  templateUrl: './wishlist-saved.component.html',
  styleUrls: ['./wishlist-saved.component.scss']
})
export class WishlistSavedComponent implements OnInit {
  prevUrl;
  constructor(
    private router: Router,
  ) {
  }
  ngOnInit() {
  }

  goBack() {
    // console.log(this.prevUrl);
    window.history.back()
  }

}
