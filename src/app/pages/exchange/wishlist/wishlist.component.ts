import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { exists } from 'fs';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

    public wishlist: Observable<any>;
    public wishlistSaved: [];
    public exchange: {};
    public currentUser: User;
    private exchangeId: string;
    private exDoc;

    wishlistForm = this.fb.group({
        items: this.fb.array([])
    });

    constructor(
        private router: ActivatedRoute,
        private db: DbServiceService,
        private userSrv: UserService,
        private fb: FormBuilder,

    ) {
        this.router.parent.params.subscribe(params => {
            this.exchangeId = params['id'];
        });
        this.router.params.subscribe(params => {
            this.userSrv.setActiveUserId(params['userId']);
            this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(user => {
                this.currentUser = user;
                this.wishlist = this.db.getWishlist(this.exchangeId, this.currentUser.uid);
                var sub = this.wishlist.subscribe(items => {
                    items.forEach(item => {
                        this.addItem(item.name)
                        sub.unsubscribe();
                    });
                    this.addItem() // add a blank
                })

            });
        });
        this.exDoc = this.db.getExchange(this.exchangeId);
        this.exDoc.subscribe(data => {
            //console.log(data);
        });
    }

    get items() {
        return this.wishlistForm.get('items') as FormArray;
    }

    addItem(itemName = '') {
        this.items.push(this.fb.control(itemName));
    }

    submitData() {
        console.log(this.wishlistForm.value);
    }

    remove(i) {
        //delete this.items[i];
        const index = this.items.controls.indexOf(i, 0);
        if (i > -1) {
            if (this.items.controls.length === 1) {
                this.items.controls[i].setValue("")
            } else {
                this.items.controls.splice(i, 1);
                this.checkForBlank();
            }
        }

    }

    checkForBlank() {
        var blanks = false;
        this.items.controls.forEach(control => {
            if (control.value === "") {
                blanks = true;
            }
        });
        if (!blanks) {
            this.addItem('');
        }
    }

    ngOnInit() {

    }

}
