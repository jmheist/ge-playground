import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-saved',
  templateUrl: './wishlist-saved.component.html',
  styleUrls: ['./wishlist-saved.component.scss']
})
export class WishlistSavedComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/exchange/J56O1pNNIMY2QX5tvBtI/wishlist/p4Ffw5TIgdMo8AbmPad5/edit']);
  }

}
