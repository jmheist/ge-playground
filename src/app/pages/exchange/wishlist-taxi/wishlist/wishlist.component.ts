import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { currentId } from 'async_hooks';

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
        private route: Router,
        private db: DbServiceService,
        private userSrv: UserService,
        private fb: FormBuilder,

    ) {
        this.router.parent.parent.params.subscribe(params => {
            this.exchangeId = params['id'];
        });
        this.router.parent.params.subscribe(params => {
            this.userSrv.setActiveUserId(params['userId']);
        });
        this.router.params.subscribe(params => {
            this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(user => {
                this.currentUser = user;
                this.wishlist = this.db.getWishlist(this.exchangeId, this.currentUser.uid);
                var sub = this.wishlist.subscribe(items => {
                    items.forEach(item => {
                        this.addItem(item.name, item.url, item.uid)
                    });
                    sub.unsubscribe();
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

        for (const item in this.items.controls) {
            var url = this.items.controls[item].get('itemName').value;
            if (url.startsWith('http') && url.indexOf('amazon') > -1) {
                this.items.controls[item].get('itemName').setValue(url+'&tag=jmheist-20');
            }
            
        }

        this.db.setWishList(this.exchangeId, this.currentUser.uid, this.wishlistForm.value.items);
        this.route.navigate(['/exchange/J56O1pNNIMY2QX5tvBtI/wishlist/p4Ffw5TIgdMo8AbmPad5/edit/wishlistSaved']);
    }

    remove(i) {
        const itemUid = this.items.controls[i].get('itemUid').value;
        // remove from db
        if (itemUid && itemUid != '') {
            this.db.removeWishlistItem(this.exchangeId, this.currentUser.uid, itemUid);
        }
        // remove from form
        this.items.removeAt(i);
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

        //console.log(this.items)

    }

}
