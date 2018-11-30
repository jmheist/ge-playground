import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { WishlistItem } from 'src/app/models/wishlist.model';

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
                        console.log(item);
                        this.addItem(item.name, item.url, item.uid)
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

    wishlistForm = this.fb.group({
        items: this.fb.array([])
    });

    createItemFields(name = "", url = "", uid = ""): FormGroup {
        return this.fb.group({
            itemName: [name],
            itemUrl: [url],
            itemUid: [uid]
        })
    }

    get items() {
        return this.wishlistForm.get('items') as FormArray;
    }

    addItem(name = "", url = "", uid = "") {
        this.items.push(this.createItemFields(name, url, uid));
    }

    submitData() {
        console.log(this.wishlistForm.value);
    }

    remove(i) {
        //delete this.items[i];
        
        this.items.removeAt(i);
        
        // const index = this.items.controls.indexOf(i, 0);
        // if (i > -1) {
        //     console.log(this.items);
        //     if (this.items.controls.length === 1) {
        //         this.items.controls[i].setValue("")
        //     } else {
        //         this.items.controls.splice(i, 1);
        //         this.checkForBlank();
        //     }
        // }

    }

    checkForBlank() {
        var blanks = false;
        this.items.controls.forEach(control => {
            if (control.value === "") {
                blanks = true;
            }
        });
        if (!blanks) {
            this.addItem();
        }
    }

    ngOnInit() {
        console.log();
        console.log(this.items)
    }

}
