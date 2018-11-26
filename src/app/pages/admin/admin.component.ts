import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from '../../services/db-service.service';
import { Observable } from 'rxjs';
import { Exchange } from '../../models/exchange.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {};
  ngOnInit() {

  }

}
