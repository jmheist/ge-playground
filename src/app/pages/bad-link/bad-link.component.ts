import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bad-link',
  templateUrl: './bad-link.component.html',
  styleUrls: ['./bad-link.component.scss']
})
export class BadLinkComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.navigate([''])
  }

}
