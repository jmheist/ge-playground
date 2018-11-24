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

  public exchange: Observable<Exchange>;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private db: DbServiceService,
    
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.loadExchange();
  }

  async loadExchange() {
    // load data from firestore for this exhange
    this.exchange = await this.db.getExchange(this.id);
  }

}
