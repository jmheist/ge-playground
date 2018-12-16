import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from 'src/app/services/db-service.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
    public currentUserUid: string;
    public savedMsg: string;
    public isDirty = false;
    public exchangeId: string;
    private exDoc;
    private sub = undefined;

    constructor(
        private router: ActivatedRoute,
        private route: Router,
        private db: DbServiceService,
        private userSrv: UserService,
        private fb: FormBuilder,

    ) {
        this.router.parent.parent.params.subscribe(params => {
            this.exchangeId = params['exchangeId'];
            this.userSrv.setActiveUserId(params['curentUserId']);
        });
        var exSub = this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(user => {
            this.currentUser = user;
            this.currentUserUid = this.currentUser.id;
            this.wishlist = this.db.getWishlist(this.exchangeId, this.currentUser.id);
            var sub = this.wishlist.subscribe(items => {
                items.forEach(item => {
                    this.addItem(item.itemName, item.itemUrl, item.itemUid)
                });
                sub.unsubscribe();
                this.addItem() // add a blank
                this.watchForm();
            });
            exSub.unsubscribe();
        });
    }

    wishlistForm = this.fb.group({
        items: this.fb.array([])
    });

    createItemFields(itemName = "", itemUrl = "", itemUid = ""): FormGroup {
        const reg = "";
        return this.fb.group({
            itemName: [itemName],
            itemUrl: [itemUrl, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)],
            itemUid: [itemUid]
        })
    }

    get items() {
        return this.wishlistForm.get('items') as FormArray;
    }

    addItem(itemName = "", itemUrl = "", itemUid = "") {
        
        this.items.push(this.createItemFields(itemName, itemUrl, itemUid));
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.addEmpyRow();
    }

    submitData() {
        this.db.setWishList(this.exchangeId, this.currentUser.id, this.wishlistForm.value.items);
        this.setSavedMsg('Your wishlist has been saved!');
        this.isDirty = false;
        if (!this.currentUser.wishlistCreated) {
            this.currentUser.wishlistCreated = true;
            this.db.addExchangeesToExchange( this.exchangeId, this.currentUser );
        }
        //this.route.navigate(['/exchange/J56O1pNNIMY2QX5tvBtI/p4Ffw5TIgdMo8AbmPad5/wishlist/edit/wishlistSaved']);
    }

    setSavedMsg(txt = "") {
        this.savedMsg = txt;
        if (this.savedMsg && this.savedMsg != '') {
            setTimeout(() => {
                this.savedMsg = null;
            }, 12000);
        }
    }

    remove(i) {
        const itemUid = this.items.controls[i].get('itemUid').value;
        // remove from db
        if (itemUid && itemUid != '') {
            this.db.removeWishlistItem(this.exchangeId, this.currentUser.id, itemUid);
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

    watchForm() {
        var sub = this.wishlistForm.statusChanges.subscribe(val => {
            this.isDirty = true;
            sub.unsubscribe();
        });
    }

    addEmpyRow(): void {
        var total = this.items.controls.length
        for (const item in this.items.controls) {
            var num = parseInt(item, 10);
            if ((1 + num) == total) {
                var form = this.items.controls[item].get('itemName');
                this.sub = form.valueChanges.subscribe(val => {
                    if (form.dirty) {
                        this.addItem()
                    }
                });
            }
        }
    }

}
