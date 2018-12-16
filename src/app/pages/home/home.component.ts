import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Angulartics2Module, Angulartics2 } from "angulartics2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private angulartics2: Angulartics2) {}

  ngOnInit() {}

  buttonClick() {
    // this.router.navigate(['setup/step1']);
    // console.log('click')
    this.angulartics2.eventTrack.next({ 
      action: 'click',
      properties: { 
        category: 'setup'
      },
    });
    this.router.navigate(['/setup/step1']);
  }
}
