import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from '../../../services/db-service.service';
import { Observable } from 'rxjs';
import { Exchange } from '../../../models/exchange.model';

@Component({
  selector: 'app-exchange-admin',
  templateUrl: './exchange-admin.component.html',
  styleUrls: ['./exchange-admin.component.scss']
})
export class ExchangeAdminComponent implements OnInit {

  public exchange: Observable<Exchange>;
  public people: Observable<any>;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbServiceService,
    
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  async ngOnInit() {
    await this.loadExchange();
    this.loadPeople();
  }

  async loadExchange() {
    // load data from firestore for this exhange
    this.exchange = await this.db.getExchange(this.id);
  }

  loadPeople() {
    this.people = this.db.getExchangePeople(this.id);
  }

  editWishlist(id) {
    this.router.navigate(['/exchange/VY8jZdyROiybSOeugaPH/'+id+'/wishlist/edit']);
  }

}
