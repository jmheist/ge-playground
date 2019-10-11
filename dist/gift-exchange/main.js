(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/setup/setup.component */ "./src/app/pages/setup/setup.component.ts");
/* harmony import */ var _pages_setup_step1_step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/setup/step1/step1.component */ "./src/app/pages/setup/step1/step1.component.ts");
/* harmony import */ var _pages_setup_step2_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/setup/step2/step2.component */ "./src/app/pages/setup/step2/step2.component.ts");
/* harmony import */ var _pages_setup_step3_step3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/setup/step3/step3.component */ "./src/app/pages/setup/step3/step3.component.ts");
/* harmony import */ var _pages_setup_step4_step4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/setup/step4/step4.component */ "./src/app/pages/setup/step4/step4.component.ts");
/* harmony import */ var _pages_setup_final_step_final_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/setup/final-step/final-step.component */ "./src/app/pages/setup/final-step/final-step.component.ts");
/* harmony import */ var _pages_list_exchanges_list_exchanges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/list-exchanges/list-exchanges.component */ "./src/app/pages/list-exchanges/list-exchanges.component.ts");
/* harmony import */ var _pages_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/exchange/exchange.component */ "./src/app/pages/exchange/exchange.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist/wishlist.component */ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_draw_draw_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/draw/draw.component */ "./src/app/pages/exchange/wishlist-home/draw/draw.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_saved_wishlist_saved_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component */ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist-home.component */ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.ts");
/* harmony import */ var _pages_exchange_exchange_view_exchange_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/exchange/exchange-view/exchange-view.component */ "./src/app/pages/exchange/exchange-view/exchange-view.component.ts");
/* harmony import */ var _pages_send_login_email_send_login_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/send-login-email/send-login-email.component */ "./src/app/pages/send-login-email/send-login-email.component.ts");
/* harmony import */ var _pages_exchange_exchange_view_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/exchange/exchange-view/update-email/update-email.component */ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.ts");
/* harmony import */ var _pages_exchange_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/exchange/verify-email/verify-email.component */ "./src/app/pages/exchange/verify-email/verify-email.component.ts");
/* harmony import */ var _pages_exchange_lookup_exchange_lookup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/exchange-lookup/exchange-lookup.component */ "./src/app/pages/exchange-lookup/exchange-lookup.component.ts");
/* harmony import */ var _pages_bad_link_bad_link_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/bad-link/bad-link.component */ "./src/app/pages/bad-link/bad-link.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { AdminComponent } from './pages/admin/admin.component';
// import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';
// import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';











var desc = "Create secret santa gift exchanges";
var tags = "gift, giving, exchange, secret, santa, christmas, holidays, shopping, family, co-workers, friends";
var routes = [
    {
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: {
            title: "Secret Santa Gift Exchange Tool",
            metatags: {
                description: desc,
                keywords: tags
            }
        }
    },
    {
        path: "setup",
        component: _pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"],
        data: {
            title: "Gift Exchange Setup",
            metatags: {
                description: desc,
                keywords: tags
            }
        },
        children: [
            { path: "step1", component: _pages_setup_step1_step1_component__WEBPACK_IMPORTED_MODULE_4__["Step1Component"] },
            { path: "step2", component: _pages_setup_step2_step2_component__WEBPACK_IMPORTED_MODULE_5__["Step2Component"] },
            { path: "step3", component: _pages_setup_step3_step3_component__WEBPACK_IMPORTED_MODULE_6__["Step3Component"] },
            { path: "step4", component: _pages_setup_step4_step4_component__WEBPACK_IMPORTED_MODULE_7__["Step4Component"] },
            { path: "finalize", component: _pages_setup_final_step_final_step_component__WEBPACK_IMPORTED_MODULE_8__["FinalStepComponent"] }
        ]
    },
    {
        path: "exchange/:exchangeId/:curentUserId",
        component: _pages_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_10__["ExchangeComponent"],
        data: {
            title: "Your Gift Exchange",
            metatags: {
                description: desc,
                keywords: tags
            }
        },
        children: [
            { path: "", component: _pages_exchange_exchange_view_exchange_view_component__WEBPACK_IMPORTED_MODULE_15__["ExchangeViewComponent"] },
            { path: "verify", component: _pages_exchange_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_18__["VerifyEmailComponent"] },
            { path: "update-email/:uidToUpdate", component: _pages_exchange_exchange_view_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_17__["UpdateEmailComponent"] },
            {
                path: "wishlist",
                component: _pages_exchange_wishlist_home_wishlist_home_component__WEBPACK_IMPORTED_MODULE_14__["WishlistHomeComponent"],
                children: [
                    { path: "edit", component: _pages_exchange_wishlist_home_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"] },
                    { path: "edit/wishlistSaved", component: _pages_exchange_wishlist_home_wishlist_saved_wishlist_saved_component__WEBPACK_IMPORTED_MODULE_13__["WishlistSavedComponent"] },
                    { path: "drawn", component: _pages_exchange_wishlist_home_draw_draw_component__WEBPACK_IMPORTED_MODULE_12__["DrawComponent"] }
                ]
            }
        ]
    },
    {
        path: "exchange-lookup/:userEmail",
        component: _pages_exchange_lookup_exchange_lookup_component__WEBPACK_IMPORTED_MODULE_19__["ExchangeLookupComponent"],
        data: {
            title: "Your Exchanges",
            metatags: {
                description: desc,
                keywords: tags
            }
        }
    },
    {
        path: "sendLoginEmail",
        component: _pages_send_login_email_send_login_email_component__WEBPACK_IMPORTED_MODULE_16__["SendLoginEmailComponent"],
        data: {
            title: "Send a new login email",
            metatags: {
                description: desc,
                keywords: tags
            }
        }
    },
    {
        path: "list-all",
        component: _pages_list_exchanges_list_exchanges_component__WEBPACK_IMPORTED_MODULE_9__["ListExchangesComponent"],
        data: {
            title: "See all exchanges",
            metatags: {
                description: desc,
                keywords: tags
            }
        }
    },
    { path: "**", component: _pages_bad_link_bad_link_component__WEBPACK_IMPORTED_MODULE_20__["BadLinkComponent"], data: {
            title: "Page not found",
            metatags: {
                description: desc,
                keywords: tags
            }
        } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<main role=\"main\">\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/seo.service */ "./src/app/services/seo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(angulartics2GoogleAnalytics, seoService) {
        this.seoService = seoService;
        this.title = "gift-exchange";
        angulartics2GoogleAnalytics.startTracking();
        this.seoService.addSeoData();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angulartics2_ga__WEBPACK_IMPORTED_MODULE_1__["Angulartics2GoogleAnalytics"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SEOService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/fesm5/ng2-adsense.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _template_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/nav/nav.component */ "./src/app/template/nav/nav.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/footer/footer.component */ "./src/app/template/footer/footer.component.ts");
/* harmony import */ var _pages_setup_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/setup/step2/step2.component */ "./src/app/pages/setup/step2/step2.component.ts");
/* harmony import */ var _pages_setup_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/setup/step3/step3.component */ "./src/app/pages/setup/step3/step3.component.ts");
/* harmony import */ var _pages_setup_step1_step1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/setup/step1/step1.component */ "./src/app/pages/setup/step1/step1.component.ts");
/* harmony import */ var _pages_setup_step4_step4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/setup/step4/step4.component */ "./src/app/pages/setup/step4/step4.component.ts");
/* harmony import */ var _pages_setup_final_step_final_step_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/setup/final-step/final-step.component */ "./src/app/pages/setup/final-step/final-step.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_list_exchanges_list_exchanges_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/list-exchanges/list-exchanges.component */ "./src/app/pages/list-exchanges/list-exchanges.component.ts");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
/* harmony import */ var _services_db_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/setup/setup.component */ "./src/app/pages/setup/setup.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist/wishlist.component */ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.ts");
/* harmony import */ var _pages_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/exchange/exchange.component */ "./src/app/pages/exchange/exchange.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_draw_draw_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/draw/draw.component */ "./src/app/pages/exchange/wishlist-home/draw/draw.component.ts");
/* harmony import */ var _pages_exchange_group_group_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/exchange/group/group.component */ "./src/app/pages/exchange/group/group.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_saved_wishlist_saved_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component */ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.ts");
/* harmony import */ var _pages_exchange_wishlist_home_wishlist_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/exchange/wishlist-home/wishlist-home.component */ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _pages_exchange_exchange_view_exchange_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/exchange/exchange-view/exchange-view.component */ "./src/app/pages/exchange/exchange-view/exchange-view.component.ts");
/* harmony import */ var _pages_send_login_email_send_login_email_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/send-login-email/send-login-email.component */ "./src/app/pages/send-login-email/send-login-email.component.ts");
/* harmony import */ var _pages_exchange_exchange_view_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/exchange/exchange-view/update-email/update-email.component */ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.ts");
/* harmony import */ var _pages_exchange_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/exchange/verify-email/verify-email.component */ "./src/app/pages/exchange/verify-email/verify-email.component.ts");
/* harmony import */ var _pages_exchange_lookup_exchange_lookup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/exchange-lookup/exchange-lookup.component */ "./src/app/pages/exchange-lookup/exchange-lookup.component.ts");
/* harmony import */ var _pages_bad_link_bad_link_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/bad-link/bad-link.component */ "./src/app/pages/bad-link/bad-link.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { AdminComponent } from './pages/admin/admin.component';
// import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';

// import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _template_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _pages_setup_step2_step2_component__WEBPACK_IMPORTED_MODULE_8__["Step2Component"],
                _pages_setup_step3_step3_component__WEBPACK_IMPORTED_MODULE_9__["Step3Component"],
                _pages_setup_step1_step1_component__WEBPACK_IMPORTED_MODULE_10__["Step1Component"],
                _pages_setup_step4_step4_component__WEBPACK_IMPORTED_MODULE_11__["Step4Component"],
                _pages_setup_final_step_final_step_component__WEBPACK_IMPORTED_MODULE_12__["FinalStepComponent"],
                _pages_list_exchanges_list_exchanges_component__WEBPACK_IMPORTED_MODULE_20__["ListExchangesComponent"],
                _pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_24__["SetupComponent"],
                // AdminComponent,
                // ExchangeAdminComponent,
                _pages_exchange_wishlist_home_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__["WishlistComponent"],
                // UpdateEmailComponent,
                _pages_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_26__["ExchangeComponent"],
                _pages_exchange_wishlist_home_draw_draw_component__WEBPACK_IMPORTED_MODULE_27__["DrawComponent"],
                _pages_exchange_group_group_component__WEBPACK_IMPORTED_MODULE_28__["GroupComponent"],
                _pages_exchange_wishlist_home_wishlist_saved_wishlist_saved_component__WEBPACK_IMPORTED_MODULE_29__["WishlistSavedComponent"],
                _pages_exchange_wishlist_home_wishlist_home_component__WEBPACK_IMPORTED_MODULE_30__["WishlistHomeComponent"],
                _pages_exchange_exchange_view_exchange_view_component__WEBPACK_IMPORTED_MODULE_32__["ExchangeViewComponent"],
                _pages_send_login_email_send_login_email_component__WEBPACK_IMPORTED_MODULE_33__["SendLoginEmailComponent"],
                _pages_exchange_exchange_view_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_34__["UpdateEmailComponent"],
                _pages_exchange_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_35__["VerifyEmailComponent"],
                _pages_exchange_lookup_exchange_lookup_component__WEBPACK_IMPORTED_MODULE_36__["ExchangeLookupComponent"],
                _pages_bad_link_bad_link_component__WEBPACK_IMPORTED_MODULE_37__["BadLinkComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                angulartics2__WEBPACK_IMPORTED_MODULE_21__["Angulartics2Module"].forRoot({
                    pageTracking: {
                        clearIds: true,
                    }
                }),
                ng2_adsense__WEBPACK_IMPORTED_MODULE_3__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-8196182321788212',
                }),
            ],
            providers: [
                _services_db_service_service__WEBPACK_IMPORTED_MODULE_22__["DbServiceService"],
                _services_setup_service__WEBPACK_IMPORTED_MODULE_23__["SetupService"],
                _services_firestore_service__WEBPACK_IMPORTED_MODULE_31__["FirestoreService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/bad-link/bad-link.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/bad-link/bad-link.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bad-link works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/bad-link/bad-link.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/bad-link/bad-link.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhZC1saW5rL2JhZC1saW5rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bad-link/bad-link.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/bad-link/bad-link.component.ts ***!
  \******************************************************/
/*! exports provided: BadLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadLinkComponent", function() { return BadLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BadLinkComponent = /** @class */ (function () {
    function BadLinkComponent(router) {
        this.router = router;
    }
    BadLinkComponent.prototype.ngOnInit = function () {
        this.router.navigate(['']);
    };
    BadLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bad-link',
            template: __webpack_require__(/*! ./bad-link.component.html */ "./src/app/pages/bad-link/bad-link.component.html"),
            styles: [__webpack_require__(/*! ./bad-link.component.scss */ "./src/app/pages/bad-link/bad-link.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BadLinkComponent);
    return BadLinkComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange-lookup/exchange-lookup.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/exchange-lookup/exchange-lookup.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>Hi {{(user)?.name}}</h1>\r\n      <p>Email: {{(user)?.email}}</p>\r\n      <p>Here is a list of the exchanges you belong to for this email address.</p>\r\n      <ul>\r\n        <li *ngFor=\"let exchange of (exchanges)\"><a [routerLink]=\"['/exchange', exchange.id, exchange.userId]\">{{exchange.name}}</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange-lookup/exchange-lookup.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/exchange-lookup/exchange-lookup.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlLWxvb2t1cC9leGNoYW5nZS1sb29rdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/exchange-lookup/exchange-lookup.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/exchange-lookup/exchange-lookup.component.ts ***!
  \********************************************************************/
/*! exports provided: ExchangeLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeLookupComponent", function() { return ExchangeLookupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ExchangeLookupComponent = /** @class */ (function () {
    function ExchangeLookupComponent(db, route, router) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.router = router;
        this.exchanges = [];
        this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.userEmail = params["userEmail"];
                return [2 /*return*/];
            });
        }); });
        this.db.getUserOnce(this.userEmail).then(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var _i, _a, ex, exData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        this.userExchanges = this.user.exchanges;
                        _i = 0, _a = this.userExchanges;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        ex = _a[_i];
                        return [4 /*yield*/, this.getExchangeInfo(ex, this.userEmail)];
                    case 2:
                        exData = _b.sent();
                        return [4 /*yield*/, this.exchanges.push({
                                id: ex,
                                name: exData.name,
                                userId: exData.userId
                            })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
    ExchangeLookupComponent.prototype.ngOnInit = function () { };
    ExchangeLookupComponent.prototype.getExchangeInfo = function (exId, userEmail) {
        return __awaiter(this, void 0, void 0, function () {
            var exData;
            var _this = this;
            return __generator(this, function (_a) {
                exData = {};
                return [2 /*return*/, this.db.getExchangeOnce(exId).then(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        var _this = this;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    exData["name"] = exchange.name;
                                    if (!(userEmail = exchange.adminEmail)) return [3 /*break*/, 2];
                                    _a = exData;
                                    _b = "userId";
                                    return [4 /*yield*/, exchange.adminUid];
                                case 1:
                                    _a[_b] = _c.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this.db.getExchangePeopleOnce(exId).then(function (people) { return __awaiter(_this, void 0, void 0, function () {
                                        var person;
                                        return __generator(this, function (_a) {
                                            for (person in people) {
                                                if (people[person].email == userEmail) {
                                                    exData["userId"] = people[person].id;
                                                }
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); })];
                                case 3:
                                    _c.sent();
                                    _c.label = 4;
                                case 4: return [2 /*return*/, exData];
                            }
                        });
                    }); })];
            });
        });
    };
    ExchangeLookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-exchange-lookup",
            template: __webpack_require__(/*! ./exchange-lookup.component.html */ "./src/app/pages/exchange-lookup/exchange-lookup.component.html"),
            styles: [__webpack_require__(/*! ./exchange-lookup.component.scss */ "./src/app/pages/exchange-lookup/exchange-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExchangeLookupComponent);
    return ExchangeLookupComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/exchange-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/exchange-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-5\">\r\n  <div class=\"col text-center\">\r\n    <h3>{{ (exchange | async)?.name }}</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col-sm-8\">\r\n    <h4>Welcome {{ currentUser?.name.capitalize() }} <small *ngIf=\"isAdmin\">  (Admin) </small></h4>\r\n    <ul *ngIf=\"participant\">\r\n      <li *ngIf=\"currentUser && participant\">\r\n        <a [routerLink]=\"['/exchange', exchangeId, (currentUser)?.id, 'wishlist', 'edit']\">\r\n          {{ !currentUser?.wishlistCreated ? \"Create your wishlist\" : \"Update your wish list\" }}\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"updateUsersEmail()\">Change your email address</a>\r\n      </li>\r\n    </ul>\r\n    <h4 class=\"text-success\">You drew {{currentUser?.nameDrawn.capitalize()}}'s name!</h4>\r\n    <ul *ngIf=\"participant\">\r\n      <li *ngIf=\"currentUser && participant\"><a [routerLink]=\"['/exchange', exchangeId, (currentUser)?.id, 'wishlist', 'drawn']\">View\r\n          {{currentUser?.nameDrawn.capitalize()}}'s wishlist</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <h5>Settings</h5>\r\n    <ul>\r\n      <li>Budget: ${{ (exchange | async)?.budget }}</li>\r\n      <li>Date: {{ (exchange | async)?.date.month }}/{{ (exchange | async)?.date.day }}/{{ (exchange |\r\n        async)?.date.year }}</li>\r\n      <li *ngIf=\"isAdmin && includeAdmin\">I'm Included: Yes</li>\r\n      <li>Admin Sees Names: {{ showAdminNames }}</li>\r\n      <!-- <li># of Names Per Person: {{ (exchange | async)?.nameCount }}</li> -->\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h3>People</h3>\r\n    <div class=\"container\">\r\n      <div class=\"mt-2 mb-2 pt-2 pb-2 border-bottom\" *ngFor=\"let ex of (people | async) ; let i of index;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <h4><span (click)=\"loadExchangeAs(ex.id)\">{{ex.name.capitalize()}}</span></h4>\r\n          </div>\r\n          <div class=\"col col-sm-4\">\r\n            <span *ngIf=\"isAdmin && showAdminNames == 'Yes'\">Name drawn: {{ex.nameDrawn.capitalize()}}</span>\r\n          </div>\r\n          <div class=\"col-sm-4\" *ngIf=\"isAdmin\">\r\n            Their Wishlist:&nbsp;\r\n            <span class='text-success' *ngIf=\"ex.wishlistCreated\">Wishlist Set</span>\r\n            <span class='text-danger' *ngIf=\"!ex.wishlistCreated\"><strong>Wishlist Not Set</strong></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">{{ ex.email }} <small *ngIf=\"isAdmin\">(<a (click)=\"updateUsersEmail(ex.id)\">edit</a>)</small></div>\r\n          <div class=\"col-sm-4 offset-md-4\" *ngIf=\"isAdmin\">\r\n            Viewed Their Name's Wishlist:&nbsp;\r\n            <span *ngIf=\"ex.viewedDrawnWishlist\" class='text-success'>Yes</span>\r\n            <span *ngIf=\"!ex.viewedDrawnWishlist\" class='text-danger'><strong>No</strong></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/exchange-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/exchange-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL2V4Y2hhbmdlLXZpZXcvZXhjaGFuZ2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/exchange-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/exchange-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExchangeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeViewComponent", function() { return ExchangeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ExchangeViewComponent = /** @class */ (function () {
    function ExchangeViewComponent(route, router, db, userSrv) {
        this.route = route;
        this.router = router;
        this.db = db;
        this.userSrv = userSrv;
    }
    ExchangeViewComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.parent.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.exchangeId = params["exchangeId"];
                                this.userSrv.setActiveUserId(params["curentUserId"]);
                                this.curentUserId = this.userSrv.getActiveUserId();
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadExchange()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadPeople()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.db
                                .getExchangee(this.exchangeId, this.curentUserId)
                                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    if (user) {
                                        this.currentUser = user;
                                        this.isAdmin = this.currentUser.isAdmin || false;
                                        this.participant = true;
                                        this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                this.showAdminNames = exchange.showAdminNames ? "Yes" : "No";
                                                this.includeAdmin = exchange.includeAdmin;
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    }
                                    else {
                                        this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (!exchange.includeAdmin &&
                                                    this.curentUserId === exchange.adminUid) {
                                                    this.showAdminNames = exchange.showAdminNames ? "Yes" : "No";
                                                    this.includeAdmin = exchange.includeAdmin;
                                                    this.currentUser = {
                                                        name: exchange.adminName,
                                                        uid: exchange.adminUid
                                                    };
                                                    this.isAdmin = true;
                                                    this.participant = false;
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExchangeViewComponent.prototype.updateUsersEmail = function (userId) {
        if (userId === void 0) { userId = "self"; }
        this.userSrv.emailToUpdateId = userId;
        this.router.navigate([
            "/exchange",
            this.exchangeId,
            this.currentUser.id,
            "update-email",
            userId
        ]);
    };
    ExchangeViewComponent.prototype.loadExchange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // load data from firestore for this exhange
                        _a = this;
                        return [4 /*yield*/, this.db.getExchange(this.exchangeId)];
                    case 1:
                        // load data from firestore for this exhange
                        _a.exchange = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExchangeViewComponent.prototype.loadPeople = function () {
        this.people = this.db.getExchangePeople(this.exchangeId);
    };
    ExchangeViewComponent.prototype.loadExchangeAs = function (id) {
        this.router.navigate(["/exchange/" + this.exchangeId + "/" + id]);
    };
    ExchangeViewComponent.prototype.viewed = function (viewed) {
        return viewed
            ? "<span class='text-success'>Yes</span>"
            : "<span class='text-danger'>No</span>";
    };
    ExchangeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-exchange-view",
            template: __webpack_require__(/*! ./exchange-view.component.html */ "./src/app/pages/exchange/exchange-view/exchange-view.component.html"),
            styles: [__webpack_require__(/*! ./exchange-view.component.scss */ "./src/app/pages/exchange/exchange-view/exchange-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ExchangeViewComponent);
    return ExchangeViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/update-email/update-email.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-lg-12 justify-content-md-center\">\r\n    <h1>Update {{ (userToUpdate)?.name }}'s Email Address</h1>\r\n    <p><a [routerLink]=\"['/exchange', exchangeId, curentUserId]\">&laquo; Go back to\r\n        exchange. </a></p>\r\n    <p *ngIf=\"savedMsg\" [class.text-success]=\"savedMsgPass\" [class.text-warning]=\"!savedMsgPass\" class=\"font-weight-bold\">\r\n      {{ savedMsg }}\r\n    </p>\r\n    <h5>Current Email Adddress: {{ (userToUpdate)?.email }}</h5>\r\n    <p>Just enter the new email address below and click save.</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col col-lg-8 justify-content-md-center\">\r\n    <form class=\"col-6\" [formGroup]=\"emailForm\" novalidate (ngSubmit)=\"submitData()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" [class.is-invalid]=\"emailForm.get('email').invalid && emailForm.get('email').touched\" class=\"form-control\"\r\n          placeholder=\"Your Email Address\" formControlName=\"email\">\r\n        <small class=\"text-warning\" *ngIf=\"emailForm.get('email').invalid && emailForm.get('email').touched\">*required\r\n          and must be formatted correctly</small>\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"emailForm.invalid && emailForm.touched\" class=\"btn btn-success\">Save New Email\r\n        Address</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/update-email/update-email.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL2V4Y2hhbmdlLXZpZXcvdXBkYXRlLWVtYWlsL3VwZGF0ZS1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/exchange/exchange-view/update-email/update-email.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailComponent", function() { return UpdateEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app//services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var UpdateEmailComponent = /** @class */ (function () {
    function UpdateEmailComponent(_setupService, router, route, fb, db, userSrv) {
        var _this = this;
        this._setupService = _setupService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.db = db;
        this.userSrv = userSrv;
        this.route.parent.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.exchangeId = params["exchangeId"];
                        this.curentUserId = params["curentUserId"];
                        return [4 /*yield*/, this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.uidToUpdate = params["uidToUpdate"];
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.db.getExchange(this.exchangeId)];
                    case 2:
                        _a.exchange = _b.sent();
                        return [4 /*yield*/, this.db
                                .getExchangee(this.exchangeId, this.curentUserId)
                                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (user) {
                                                this.currentUser = user;
                                                this.isAdmin = this.currentUser.isAdmin || false;
                                                this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        return [2 /*return*/];
                                                    });
                                                }); });
                                            }
                                            else {
                                                this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        if (!exchange.includeAdmin &&
                                                            this.curentUserId === exchange.adminUid) {
                                                            this.currentUser = {
                                                                name: exchange.adminName,
                                                                uid: exchange.adminUid
                                                            };
                                                            this.isAdmin = true;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); });
                                            }
                                            if (!(this.uidToUpdate != "self")) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.db
                                                    .getExchangee(this.exchangeId, this.uidToUpdate)
                                                    .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        this.userToUpdate = user;
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.userToUpdate = this.currentUser;
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    UpdateEmailComponent.prototype.ngOnInit = function () {
        this.emailForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    };
    UpdateEmailComponent.prototype.submitData = function () {
        var _this = this;
        var newEmail = this.emailForm.get("email").value;
        if (this.uidToUpdate == "self") {
            // update your own email address
            this.db
                .updateExchagee(this.exchangeId, this.currentUser.id, {
                email: newEmail
            })
                .then(function (updatedUser) {
                _this.db.addUser(_this.userToUpdate, _this.exchangeId).then(function (data) {
                    // console.log("saved msg");
                    _this.setSavedMsg(_this.userToUpdate.name + "'s Email Address Has Been Updated.", true);
                });
            });
        }
        else if (this.uidToUpdate && this.uidToUpdate != "") {
            // update some one elses email address
            if (this.isAdmin) {
                this.db
                    .updateExchagee(this.exchangeId, this.uidToUpdate, {
                    email: newEmail
                })
                    .then(function (updatedUser) {
                    _this.db.addUser(_this.userToUpdate, _this.exchangeId).then(function (data) {
                        // console.log("saved msg");
                        _this.setSavedMsg(_this.userToUpdate.name + "'s Email Address Has Been Updated.", true);
                    });
                });
            }
            else {
                // console.log("you are not an admin");
            }
            this.setSavedMsg("There was a problem.", false);
        }
    };
    UpdateEmailComponent.prototype.setSavedMsg = function (txt, pass) {
        var _this = this;
        this.savedMsg = txt;
        this.savedMsgPass = pass;
        if (this.savedMsg && this.savedMsg != "") {
            setTimeout(function () {
                _this.savedMsg = null;
                _this.savedMsgPass = null;
            }, 12000);
        }
    };
    UpdateEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update-email",
            template: __webpack_require__(/*! ./update-email.component.html */ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.html"),
            styles: [__webpack_require__(/*! ./update-email.component.scss */ "./src/app/pages/exchange/exchange-view/update-email/update-email.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_5__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UpdateEmailComponent);
    return UpdateEmailComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/exchange.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/exchange/exchange.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/exchange.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/exchange/exchange.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL2V4Y2hhbmdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/exchange/exchange.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/exchange/exchange.component.ts ***!
  \******************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent() {
    }
    ExchangeComponent.prototype.ngOnInit = function () {
    };
    ExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__(/*! ./exchange.component.html */ "./src/app/pages/exchange/exchange.component.html"),
            styles: [__webpack_require__(/*! ./exchange.component.scss */ "./src/app/pages/exchange/exchange.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/group/group.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/exchange/group/group.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  group works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/exchange/group/group.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/exchange/group/group.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/exchange/group/group.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/exchange/group/group.component.ts ***!
  \*********************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupComponent = /** @class */ (function () {
    function GroupComponent() {
    }
    GroupComponent.prototype.ngOnInit = function () {
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/pages/exchange/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/pages/exchange/group/group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/verify-email/verify-email.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/exchange/verify-email/verify-email.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>Thank you for verifying!</h1>\r\n      <h3>Your gift exchange has started and we're letting everyone know right now!</h3>\r\n      <p> <a [routerLink]=\"['/exchange', exchangeId, curentUserId]\">Click here to view your exchange.</a></p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/verify-email/verify-email.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/exchange/verify-email/verify-email.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/exchange/verify-email/verify-email.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/exchange/verify-email/verify-email.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(route, router, db, userSrv) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.db = db;
        this.userSrv = userSrv;
        this.route.parent.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.exchangeId = params["exchangeId"];
                        this.curentUserId = params["curentUserId"];
                        _a = this;
                        return [4 /*yield*/, this.db.getExchange(this.exchangeId)];
                    case 1:
                        _a.exchange = _b.sent();
                        return [4 /*yield*/, this.db
                                .getExchangee(this.exchangeId, this.curentUserId)
                                .subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!user) return [3 /*break*/, 2];
                                            this.currentUser = user;
                                            this.isAdmin = this.currentUser.isAdmin || false;
                                            return [4 /*yield*/, this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        this.exchangeDoc = exchange;
                                                        this.verify();
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.exchange.subscribe(function (exchange) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    this.exchangeDoc = exchange;
                                                    if (this.curentUserId === exchange.adminUid) {
                                                        this.currentUser = {
                                                            name: exchange.adminName,
                                                            uid: exchange.adminUid
                                                        };
                                                        this.isAdmin = true;
                                                    }
                                                    this.verify();
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    VerifyEmailComponent.prototype.verify = function () {
        if (this.isAdmin &&
            !this.exchangeDoc.hasOwnProperty("adminVerifiedEmail")) {
            // verify the exchange
            this.db.updateExchange(this.exchangeId, {
                adminVerifiedEmail: true
            });
        }
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-verify-email",
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/pages/exchange/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/pages/exchange/verify-email/verify-email.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/draw/draw.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/draw/draw.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>{{(currentUser)?.nameDrawn.capitalize()}}'s Wishlist</h2>\r\n        <p>\r\n            <a [routerLink]=\"['/exchange', exchangeId, currentUserUid]\">&laquo; Go back to exchange.</a>\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-7 pl-4 pr-4\">\r\n      <div *ngFor=\"let item of (wishlist|async)\" class=\"row border-bottom pt-1 pb-2 mb-2 mt-1\">\r\n        <div class=\"col-sm-6\">\r\n          {{ item.itemName.capitalize() }}\r\n        </div>\r\n        <div class=\"col-sm-6 text-right\">\r\n          <button class=\"btn btn-primary\" *ngIf=\"item.itemUrl\" (click)=\"openItemUrl(item)\">Open {{(currentUser)?.nameDrawn.capitalize()}}'s Link</button>\r\n          <button class=\"btn btn-primary\" *ngIf=\"!item.itemUrl\" (click)=\"openItemUrl(item)\">Search Amazon</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-lg-5\">\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/draw/draw.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/draw/draw.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL3dpc2hsaXN0LWhvbWUvZHJhdy9kcmF3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/draw/draw.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/draw/draw.component.ts ***!
  \*********************************************************************/
/*! exports provided: DrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawComponent", function() { return DrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawComponent = /** @class */ (function () {
    function DrawComponent(router, route, db, userSrv) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.userSrv = userSrv;
        this.router.parent.parent.params.subscribe(function (params) {
            _this.exchangeId = params['exchangeId'];
            _this.userSrv.setActiveUserId(params['curentUserId']);
        });
        this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(function (user) {
            _this.currentUser = user;
            _this.currentUserUid = _this.currentUser.id;
            _this.wishlist = _this.db.getWishlist(_this.exchangeId, _this.currentUser.drawnUid);
            // var sub = this.wishlist.subscribe(items => { 
            //   console.log(items)
            // });
            if (!_this.currentUser.viewedDrawnWishlist) {
                _this.currentUser.viewedDrawnWishlist = true;
                _this.db.addExchangeesToExchange(_this.exchangeId, _this.currentUser);
            }
        });
    }
    DrawComponent.prototype.ngOnInit = function () {
    };
    DrawComponent.prototype.updateQueryStringParameter = function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    };
    DrawComponent.prototype.openItemUrl = function (item) {
        if (item.itemUrl) {
            if (item.itemUrl.match(/https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+com(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+/g)) {
                item.itemUrl = this.updateQueryStringParameter(item.itemUrl, 'tag', 'jmheist-20');
            }
            window.open(item.itemUrl, '_blank');
        }
        else {
            var url = "https://www.amazon.com/s/?field-keywords=" + item.itemName.split(" ").join("+") + "&tag=jmheist-20";
            window.open(url, '_blank');
        }
    };
    DrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draw',
            template: __webpack_require__(/*! ./draw.component.html */ "./src/app/pages/exchange/wishlist-home/draw/draw.component.html"),
            styles: [__webpack_require__(/*! ./draw.component.scss */ "./src/app/pages/exchange/wishlist-home/draw/draw.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], DrawComponent);
    return DrawComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-home.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL3dpc2hsaXN0LWhvbWUvd2lzaGxpc3QtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: WishlistHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistHomeComponent", function() { return WishlistHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WishlistHomeComponent = /** @class */ (function () {
    function WishlistHomeComponent() {
        // if the user is viewing their wishlist, take them to edit page
        // otherwise, take them to the draw page where they see their name's wishlist
    }
    WishlistHomeComponent.prototype.ngOnInit = function () {
    };
    WishlistHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist-home',
            template: __webpack_require__(/*! ./wishlist-home.component.html */ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-home.component.scss */ "./src/app/pages/exchange/wishlist-home/wishlist-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WishlistHomeComponent);
    return WishlistHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <p>Your wishlist has been saved!</p>\r\n      <button class=\"btn btn-primary\" (click)=\"goBack()\">Go Back</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL3dpc2hsaXN0LWhvbWUvd2lzaGxpc3Qtc2F2ZWQvd2lzaGxpc3Qtc2F2ZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WishlistSavedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistSavedComponent", function() { return WishlistSavedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistSavedComponent = /** @class */ (function () {
    function WishlistSavedComponent(router) {
        this.router = router;
    }
    WishlistSavedComponent.prototype.ngOnInit = function () {
    };
    WishlistSavedComponent.prototype.goBack = function () {
        // console.log(this.prevUrl);
        window.history.back();
    };
    WishlistSavedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist-saved',
            template: __webpack_require__(/*! ./wishlist-saved.component.html */ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-saved.component.scss */ "./src/app/pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistSavedComponent);
    return WishlistSavedComponent;
}());



/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-4\">\r\n    <div class=\"col col-lg-5\">\r\n        <h2>Wishlist for {{ currentUser?.name }}</h2>\r\n        <p>\r\n            <a [class.disabled]=\"isDirty\" [routerLink]=\"['/exchange', exchangeId, currentUserUid]\">&laquo; Go back to exchange.  </a><span *ngIf=\"savedMsg\" class=\"text-success font-weight-bold\">{{ savedMsg }}</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"col col-lg-7 text-right align-self-end\">\r\n        <p><small>Hint: You can add links to items from amazon and other sites!</small></p>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <ul>\r\n            <li *ngFor=\"let item of (wishlist|async)\">{{ item?.name }} --- {{ item?.uid }}</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <ul>\r\n            <li *ngFor=\"let item of wishlistForm.get('items').value\">{{ item.name }} --- {{ item.uid }}</li>\r\n        </ul>\r\n    </div>\r\n</div> -->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n        <form [formGroup]=\"wishlistForm\" novalidate (ngSubmit)=\"submitData()\">\r\n            <div formArrayName=\"items\" *ngFor=\"let item of wishlistForm.get('items').controls; let i = index; last as isLast;\"\r\n                class=\"mb-3 pb-3 border-bottom\">\r\n                <div class=\"\" [formGroupName]=\"i\">\r\n                    <div class=\"row pb-1\">\r\n                        <label for=\"itemName\" class=\"col-sm-2 col-form-label\">Wishlist Item</label>\r\n                        <div class=\"col-sm-10 btn-group\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"itemName\" formControlName=\"itemName\"\r\n                                placeholder=\"Enter your gift ideas here\">\r\n                            <button type=\"button\" [class.d-none]=\"wishlistForm.get('items').controls[i].get('itemName').pristine && wishlistForm.get('items').controls[i].get('itemName').value == '' && isLast\"\r\n                                class=\"close mx-1\" aria-label=\"Close\" (click)=\"remove(i)\">\r\n                                <span class=\"text-primary\" aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <label for=\"itemUrl\" class=\"col-sm-2 col-form-label\">Item Link</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [class.is-invalid]=\"wishlistForm.get('items').controls[i].get('itemUrl').invalid\" class=\"form-control\" type=\"text\" formControlName=\"itemUrl\" name=\"itemUrl\" placeholder=\"Optionally add a link to the item\">\r\n                            <small class=\"text-warning\" *ngIf=\"wishlistForm.get('items').controls[i].get('itemUrl').invalid\">*url is not in correct format. </small> \r\n                            <!-- && wishlistForm.get('items').controls[i].get('itemUrl').value.length > 0 -->\r\n                        </div>\r\n                    </div>\r\n                    <input class=\"form-control\" type=\"hidden\" formControlName=\"itemUid\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"wishlistForm.invalid\">Save Wishlist</button>\r\n                <!-- <button type=\"button\" class=\"btn-secondary btn-sm ml-2\" (click)=\"addItem()\">Add another Gift Idea</button> -->\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <!-- <h3>Hints</h3>\r\n        <ul>\r\n            <li>You can add links to gift ideas from sites like amazon!</li>\r\n        </ul> -->\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <!-- <div class=\"col\">load me\r\n        <script type=\"text/javascript\">\r\n            amzn_assoc_placement = \"adunit0\";\r\n            amzn_assoc_search_bar = \"false\";\r\n            amzn_assoc_tracking_id = \"jmheist-20\";\r\n            amzn_assoc_ad_mode = \"search\";\r\n            amzn_assoc_ad_type = \"smart\";\r\n            amzn_assoc_marketplace = \"amazon\";\r\n            amzn_assoc_region = \"US\";\r\n            amzn_assoc_title = \"Gift Ideas\";\r\n            amzn_assoc_default_search_phrase = \"Gifts\"; //&low-price=&high-price=25\r\n            amzn_assoc_default_low_price = \"0\";\r\n            amzn_assoc_default_high_price = \"25\";\r\n            amzn_assoc_default_category = \"All\";\r\n            amzn_assoc_linkid = \"77b11a3f5b5059a6640e4a65c8cd2351\";\r\n            </script>\r\n            <script src=\"//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US\"></script>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4Y2hhbmdlL3dpc2hsaXN0LWhvbWUvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(router, route, db, userSrv, fb) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.db = db;
        this.userSrv = userSrv;
        this.fb = fb;
        this.isDirty = false;
        this.sub = undefined;
        this.wishlistForm = this.fb.group({
            items: this.fb.array([])
        });
        this.router.parent.parent.params.subscribe(function (params) {
            _this.exchangeId = params['exchangeId'];
            _this.userSrv.setActiveUserId(params['curentUserId']);
        });
        var exSub = this.db.getExchangee(this.exchangeId, this.userSrv.getActiveUserId()).subscribe(function (user) {
            _this.currentUser = user;
            _this.currentUserUid = _this.currentUser.id;
            _this.wishlist = _this.db.getWishlist(_this.exchangeId, _this.currentUser.id);
            var sub = _this.wishlist.subscribe(function (items) {
                items.forEach(function (item) {
                    _this.addItem(item.itemName, item.itemUrl, item.itemUid);
                });
                sub.unsubscribe();
                _this.addItem(); // add a blank
                _this.watchForm();
            });
            exSub.unsubscribe();
        });
    }
    WishlistComponent.prototype.createItemFields = function (itemName, itemUrl, itemUid) {
        if (itemName === void 0) { itemName = ""; }
        if (itemUrl === void 0) { itemUrl = ""; }
        if (itemUid === void 0) { itemUid = ""; }
        var reg = "";
        return this.fb.group({
            itemName: [itemName],
            itemUrl: [itemUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(ftp|http|https):\/\/[^ "]+$/)],
            itemUid: [itemUid]
        });
    };
    Object.defineProperty(WishlistComponent.prototype, "items", {
        get: function () {
            return this.wishlistForm.get('items');
        },
        enumerable: true,
        configurable: true
    });
    WishlistComponent.prototype.addItem = function (itemName, itemUrl, itemUid) {
        if (itemName === void 0) { itemName = ""; }
        if (itemUrl === void 0) { itemUrl = ""; }
        if (itemUid === void 0) { itemUid = ""; }
        this.items.push(this.createItemFields(itemName, itemUrl, itemUid));
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.addEmpyRow();
    };
    WishlistComponent.prototype.submitData = function () {
        this.db.setWishList(this.exchangeId, this.currentUser.id, this.wishlistForm.value.items);
        this.setSavedMsg('Your wishlist has been saved!');
        this.isDirty = false;
        if (!this.currentUser.wishlistCreated) {
            this.currentUser.wishlistCreated = true;
            this.db.addExchangeesToExchange(this.exchangeId, this.currentUser);
        }
        //this.route.navigate(['/exchange/J56O1pNNIMY2QX5tvBtI/p4Ffw5TIgdMo8AbmPad5/wishlist/edit/wishlistSaved']);
    };
    WishlistComponent.prototype.setSavedMsg = function (txt) {
        var _this = this;
        if (txt === void 0) { txt = ""; }
        this.savedMsg = txt;
        if (this.savedMsg && this.savedMsg != '') {
            setTimeout(function () {
                _this.savedMsg = null;
            }, 12000);
        }
    };
    WishlistComponent.prototype.remove = function (i) {
        var itemUid = this.items.controls[i].get('itemUid').value;
        // remove from db
        if (itemUid && itemUid != '') {
            this.db.removeWishlistItem(this.exchangeId, this.currentUser.id, itemUid);
        }
        // remove from form
        this.items.removeAt(i);
    };
    WishlistComponent.prototype.checkForBlank = function () {
        var blanks = false;
        this.items.controls.forEach(function (control) {
            if (control.value === "") {
                blanks = true;
            }
        });
        if (!blanks) {
            this.addItem();
        }
    };
    WishlistComponent.prototype.ngOnInit = function () {
        //console.log(this.items)
    };
    WishlistComponent.prototype.watchForm = function () {
        var _this = this;
        var sub = this.wishlistForm.statusChanges.subscribe(function (val) {
            _this.isDirty = true;
            sub.unsubscribe();
        });
    };
    WishlistComponent.prototype.addEmpyRow = function () {
        var _this = this;
        var total = this.items.controls.length;
        for (var item in this.items.controls) {
            var num = parseInt(item, 10);
            if ((1 + num) == total) {
                var form = this.items.controls[item].get('itemName');
                this.sub = form.valueChanges.subscribe(function (val) {
                    if (form.dirty) {
                        _this.addItem();
                    }
                });
            }
        }
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/pages/exchange/wishlist-home/wishlist/wishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Example row of columns -->\r\n<div id=\"home\" class=\"container\">\r\n  <div class=\"row justify-content-center mt-3\">\r\n    <div class=\"col text-center\">\r\n      <p>\r\n        The Great Gift Exchange based in the USA, and will never give away your\r\n        info!\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center my-5\">\r\n    <div class=\"col-12 col-xl-5 offset-xl-1 col-lg-5 offset-lg-0 col-md-7 mt-3\">\r\n      <h2 class=\"pr-xl-7 mr-xl-7\">Create a gift exchange and draw names!</h2>\r\n      <p>\r\n        The Great Exchange makes it easy to setup your secret santa gift\r\n        exchange.\r\n      </p>\r\n      <ul>\r\n        <li>Names are drawn randomly</li>\r\n        <li>No one gets their own name</li>\r\n        <li>You can exclude people from drawing certian people</li>\r\n        <li>We’ll email everyone for you so everything stays a secret</li>\r\n        <li>It's free!</li>\r\n      </ul>\r\n      <button class=\"btn btn-md btn-primary mt-4\" (click)=\"buttonClick()\">\r\n        Create Your Exchange Now &raquo;\r\n      </button>\r\n    </div>\r\n    <div class=\"col-12 col-xl-5 offset-xl-0 col-lg-6 offset-lg-1 col-md-5 pl-lg-8 px-sm-5 my-5 align-self-center text-lg-right text-center\">\r\n      <img src=\"../assets/images/teal_giftbox.svg\" class=\"img-fluid\" style=\"max-width:350px;\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5 pt-4 justify-content-center\">\r\n    <div class=\"col col-10 text-center mt-3 pt-5 border-top\">\r\n      <h3>Already a part of an exchange?</h3>\r\n      <p>\r\n        Check your email for a link to login to your exchange.<br />\r\n        <a [routerLink]=\"['/sendLoginEmail']\">Or, click here to send a new email!</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, angulartics2) {
        this.router = router;
        this.angulartics2 = angulartics2;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.buttonClick = function () {
        // this.router.navigate(['setup/step1']);
        // console.log('click')
        this.angulartics2.eventTrack.next({
            action: 'click',
            properties: {
                category: 'setup'
            },
        });
        this.router.navigate(['/setup/step1']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angulartics2__WEBPACK_IMPORTED_MODULE_2__["Angulartics2"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/list-exchanges/list-exchanges.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/list-exchanges/list-exchanges.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <h3>Exchanges</h3>\r\n      <ul>\r\n        <li class=\"text\" *ngFor=\"let exchange of exchanges|async\">\r\n          <a [routerLink]=\"[ '/exchange', exchange.id, exchange.adminUid ]\">\r\n            {{exchange.name}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <h3>Users</h3>\r\n      <ul>\r\n        <li class=\"text\" *ngFor=\"let user of users | async\">\r\n          <a (click)=\"getUser(user.email)\">{{user.name}} - {{user.email}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/list-exchanges/list-exchanges.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/list-exchanges/list-exchanges.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtZXhjaGFuZ2VzL2xpc3QtZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/list-exchanges/list-exchanges.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/list-exchanges/list-exchanges.component.ts ***!
  \******************************************************************/
/*! exports provided: ListExchangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExchangesComponent", function() { return ListExchangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/db-service.service */ "./src/app/services/db-service.service.ts");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListExchangesComponent = /** @class */ (function () {
    function ListExchangesComponent(_dbservice, fs, router) {
        this._dbservice = _dbservice;
        this.fs = fs;
        this.router = router;
        this.exchanges = this._dbservice.getExchanges();
        this.users = this._dbservice.users;
    }
    ListExchangesComponent.prototype.ngOnInit = function () {
    };
    ListExchangesComponent.prototype.getUser = function (id) {
        var _this = this;
        this._dbservice.getUser(id).subscribe(function (user) {
            _this.user = user;
            // console.log(this.user.id);
        });
    };
    ListExchangesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list-exchanges",
            template: __webpack_require__(/*! ./list-exchanges.component.html */ "./src/app/pages/list-exchanges/list-exchanges.component.html"),
            styles: [__webpack_require__(/*! ./list-exchanges.component.scss */ "./src/app/pages/list-exchanges/list-exchanges.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"],
            src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListExchangesComponent);
    return ListExchangesComponent;
}());



/***/ }),

/***/ "./src/app/pages/send-login-email/send-login-email.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/send-login-email/send-login-email.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-10 justify-content-md-center\">\r\n      <h1>Retreieve Your Email</h1>\r\n      <p><a [routerLink]=\"['/']\">&laquo; Go back</a></p>\r\n      <p>Enter the email address you used for the exchange and we will send you a new login link.</p>\r\n      <p *ngIf=\"savedMsg\" [class.text-success]=\"savedMsgPass\" [class.text-warning]=\"!savedMsgPass\" class=\"font-weight-bold\">{{\r\n        savedMsg }}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-8 justify-content-md-center\">\r\n      <form class=\"col-6\" [formGroup]=\"emailForm\" novalidate (ngSubmit)=\"submitData()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" [class.is-invalid]=\"emailForm.get('email').invalid && emailForm.get('email').touched\"\r\n            class=\"form-control\" placeholder=\"Your Email Address\" formControlName=\"email\">\r\n          <small class=\"text-warning\" *ngIf=\"emailForm.get('email').invalid && emailForm.get('email').touched\">*required\r\n            and must be formatted correctly</small>\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"emailForm.invalid && emailForm.touched\" class=\"btn btn-success\">Send Email</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/send-login-email/send-login-email.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/send-login-email/send-login-email.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbmQtbG9naW4tZW1haWwvc2VuZC1sb2dpbi1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/send-login-email/send-login-email.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/send-login-email/send-login-email.component.ts ***!
  \**********************************************************************/
/*! exports provided: SendLoginEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendLoginEmailComponent", function() { return SendLoginEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/db-service.service */ "./src/app/services/db-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendLoginEmailComponent = /** @class */ (function () {
    function SendLoginEmailComponent(_setupService, router, fb, db) {
        this._setupService = _setupService;
        this.router = router;
        this.fb = fb;
        this.db = db;
    }
    SendLoginEmailComponent.prototype.ngOnInit = function () {
        this.emailForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    SendLoginEmailComponent.prototype.submitData = function () {
        var _this = this;
        var email = this.emailForm.get('email').value;
        ;
        // console.log(email);
        this.db.getUserOnce(email).then(function (user) {
            if (user) {
                // console.log(user.exchanges);
                _this.db.userRequestedEmail(email);
                _this.setSavedMsg("An email has been sent to " + email + "!", true);
            }
            else {
                _this.setSavedMsg('Email address was not found', false);
            }
        });
    };
    SendLoginEmailComponent.prototype.setSavedMsg = function (txt, pass) {
        var _this = this;
        if (txt === void 0) { txt = ""; }
        this.savedMsg = txt;
        this.savedMsgPass = pass;
        if (this.savedMsg && this.savedMsg != "") {
            setTimeout(function () {
                _this.savedMsg = null;
                _this.savedMsgPass = null;
            }, 12000);
        }
    };
    SendLoginEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-send-login-email",
            template: __webpack_require__(/*! ./send-login-email.component.html */ "./src/app/pages/send-login-email/send-login-email.component.html"),
            styles: [__webpack_require__(/*! ./send-login-email.component.scss */ "./src/app/pages/send-login-email/send-login-email.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]])
    ], SendLoginEmailComponent);
    return SendLoginEmailComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/final-step/final-step.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/final-step/final-step.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-md-center\">\r\n    <div class=\"col-sm-12\">\r\n      <h2>Thank You!</h2>\r\n      <h4 *ngIf=\"savedMsg\" [class.text-success]=\"savedMsgPass\" [class.text-warning]=\"!savedMsgPass\" class=\"font-weight-bold\">\r\n        {{ savedMsg }}\r\n\t\t\t</h4>\r\n      <p>Please verify your email address. An email has been sent to {{ formData.adminEmail }} with a link to verify.\r\n        Please complete this step, once verified we will notify everyone in your exchange.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/final-step/final-step.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/final-step/final-step.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL2ZpbmFsLXN0ZXAvZmluYWwtc3RlcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/setup/final-step/final-step.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/setup/final-step/final-step.component.ts ***!
  \****************************************************************/
/*! exports provided: FinalStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalStepComponent", function() { return FinalStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FinalStepComponent = /** @class */ (function () {
    function FinalStepComponent(_setupService, router, fb) {
        this._setupService = _setupService;
        this.router = router;
        this.fb = fb;
        this.formData = this._setupService.getData();
    }
    FinalStepComponent.prototype.ngOnInit = function () {
        if (!this.sent) {
            this.send();
            this.sent = true;
        }
    };
    FinalStepComponent.prototype.setSavedMsg = function (txt, pass) {
        var _this = this;
        this.savedMsg = txt;
        this.savedMsgPass = pass;
        if (this.savedMsg && this.savedMsg != "") {
            setTimeout(function () {
                _this.savedMsg = null;
                _this.savedMsgPass = null;
                _this.router.navigate(["/"]);
            }, 12000);
        }
    };
    FinalStepComponent.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._setupService.sendSetupToFirestore().then(function (passed) {
                            if (passed) {
                                _this.setSavedMsg("You will be redirected back to the home page in 12 seconds.", true);
                            }
                            else {
                                _this.setSavedMsg("There was a problem creating your exchange. You will be returned to the starting page.", false);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FinalStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-final-step",
            template: __webpack_require__(/*! ./final-step.component.html */ "./src/app/pages/setup/final-step/final-step.component.html"),
            styles: [__webpack_require__(/*! ./final-step.component.scss */ "./src/app/pages/setup/final-step/final-step.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FinalStepComponent);
    return FinalStepComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/setup.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/setup/setup.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/setup/setup.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/setup/setup.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL3NldHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/setup/setup.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/setup/setup.component.ts ***!
  \************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
    }
    SetupComponent.prototype.ngOnInit = function () {
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/pages/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/pages/setup/setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/step1/step1.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step1/step1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <h3>Instructions</h3>\r\n      <ul>\r\n        <li>Give your exchange a name</li>\r\n        <li>Set a date for your exchange</li>\r\n        <li>Set a max dollar amount people should spend</li>\r\n        <li>Throw your own name in the hat?</li>\r\n        <li>Do you want to see who drew who's name?</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <form #setup1form=\"ngForm\" novalidate (ngSubmit)=\"submitData()\">\r\n        <div class=\"form-group\">\r\n          <h4><label for=\"exchangeName\">Name Your Gift Exchange</label></h4>\r\n          <input required minlength=\"4\" [class.is-invalid]=\"name.invalid && name.dirty\" #name='ngModel' type=\"text\" class=\"form-control form-control-lg\" id=\"exchangeName\" name=\"exchangeName\" placeholder=\"Exchange Name\" [(ngModel)]=\"formData.name\">\r\n          <small class=\"text-warning\" *ngIf=\"name.invalid && name.dirty\">*Exchange Must have a name greater than 3 characters</small>\r\n        </div>\r\n        <h4 for=\"datePicker\">Date of Exchange</h4>\r\n        <div class=\"form-inline form-group\">\r\n          <!-- <ngb-datepicker #d></ngb-datepicker> -->\r\n          <input required placeholder=\"year-m-d\" type=\"text\" #date='ngModel' class=\"form-control\" ngbDatepicker #d=\"ngbDatepicker\" name=\"datePicker\" [(ngModel)]=\"formData.date\" /><button class=\"btn btn-secondary btn-sm mx-2\" (click)=\"d.toggle()\" novalidate type=\"button\">Date Picker</button>\r\n          <div class=\"clearfix\"></div>\r\n          \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <h4><label for=\"exchangeBudget\">Max Budget Per Gift?</label></h4>\r\n          <input #budget='ngModel' type=\"text\" pattern=\"^[$]?[0-9,]+(\\.[0-9]{1,2})?$\" [class.is-invalid]=\"budget.invalid && budget.dirty\" class=\"form-control form-control-lg\" id=\"exchangeBudget\" name=\"exchangeBudget\" placeholder=\"Example $20\" [(ngModel)]=\"formData.budget\">\r\n          <small class=\"col-12 mt-2 pl-0 text-warning d-block\" *ngIf=\"budget.invalid && budget.dirty\">*Please use only numbers, $'s, commans and periods</small>\r\n        </div>\r\n        <!-- <h4>Each person draws # names?</h4>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input form-control-lg\" type=\"radio\" name=\"nameCountRadio\" id=\"draw1Name\" value=\"1\" [(ngModel)]=\"formData.nameCount\">\r\n          <label class=\"form-check-label\" for=\"1\">1</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input form-control-lg\" type=\"radio\" name=\"nameCountRadio\" id=\"draw2Name\" value=\"2\" [(ngModel)]=\"formData.nameCount\">\r\n          <label class=\"form-check-label\" for=\"inlineRadio2\">2</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input form-control-lg\" type=\"radio\" name=\"nameCountRadio\" id=\"draw0Name\" value=\"0\" [(ngModel)]=\"formData.nameCount\">\r\n          <label class=\"form-check-label\" for=\"inlineRadio3\">Do not draw names</label>\r\n        </div> -->\r\n        <h4>Options</h4>\r\n        <div class=\"form-group form-check\">\r\n          <input type=\"checkbox\" class=\"form-check-input form-control-lg\" id=\"includeAdmin\" name=\"includeAdmin\" [(ngModel)]=\"formData.includeAdmin\">\r\n          <label class=\"form-check-label\" for=\"includeAdmin\">Include My Name in Drawing</label>\r\n        </div>\r\n        <div class=\"form-group form-check\">\r\n          <input type=\"checkbox\" class=\"form-check-input form-control-lg\" id=\"showAdminNames\" name=\"showAdminNames\" [(ngModel)]=\"formData.showAdminNames\">\r\n          <label class=\"form-check-label\" for=\"showAdminNames\">Show me who drew who</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button [disabled]=\"setup1form.form.invalid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/step1/step1.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step1/step1.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL3N0ZXAxL3N0ZXAxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/setup/step1/step1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/step1/step1.component.ts ***!
  \******************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Step1Component = /** @class */ (function () {
    function Step1Component(_setupService, router, angulartics2) {
        this._setupService = _setupService;
        this.router = router;
        this.angulartics2 = angulartics2;
        this.formData = this._setupService.getData();
    }
    Step1Component.prototype.ngOnInit = function () {
    };
    Step1Component.prototype.submitData = function () {
        this._setupService.addData(this.formData);
        this.angulartics2.eventTrack.next({
            action: 'go to step 2',
            properties: {
                category: 'setup'
            },
        });
        this.router.navigate(['setup/step2']);
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/pages/setup/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.scss */ "./src/app/pages/setup/step1/step1.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angulartics2__WEBPACK_IMPORTED_MODULE_3__["Angulartics2"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/pages/setup/step2/step2.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step2/step2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <h3>Add people to the gift exchange</h3>\r\n      <ul>\r\n        <li>Start with yourself, even if you are not in the exchange</li>\r\n        <li>Add name and email address for everyone else. Use your own email for people who can't get email (you'll receive their link)</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      <form [formGroup]=\"step2Form\" novalidate (ngSubmit)=\"submitData()\">\r\n        <h3>Your Info</h3>\r\n        <div class=\"form-group has-feedback has-clear\">\r\n          <input type=\"text\" [class.is-invalid]=\"step2Form.get('adminName').invalid && step2Form.get('adminName').touched\" class=\"form-control\" placeholder=\"Your Name\" formControlName=\"adminName\">\r\n          <span class=\"form-control-clear glyphicon glyphicon-remove form-control-feedback hidden\"></span>\r\n          <small class=\"text-warning\" *ngIf=\"step2Form.get('adminName').invalid && step2Form.get('adminName').touched\">*required</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" [class.is-invalid]=\"step2Form.get('adminEmail').invalid && step2Form.get('adminEmail').touched\" class=\"form-control\" placeholder=\"Your Email Address\" formControlName=\"adminEmail\">\r\n          <small class=\"text-warning\" *ngIf=\"step2Form.get('adminEmail').invalid && step2Form.get('adminEmail').touched\">*required and must be formatted correctly</small>\r\n        </div>\r\n        <h3>Add Names</h3>\r\n        <div class=\"addNamesSection\">\r\n\r\n          <div formArrayName=\"exchangees\" *ngFor=\"let exchangee of step2Form.get('exchangees').controls; let i = index;\">\r\n          \r\n            <div class=\"form-row align-items-top\" [formGroupName]=\"i\">\r\n              <div class=\"col-6\">\r\n                <input [class.is-invalid]=\"getExchangees().controls[i].get('name').invalid && getExchangees().controls[i].get('name').touched\" name=\"name\" type=\"text\" class=\"form-control mb-2\" placeholder=\"Exchangee's Name\" formControlName=\"name\">\r\n                <small *ngIf=\"getExchangees().controls[i].get('name').invalid && getExchangees().controls[i].get('name').touched\" class=\"text-warning\">*required</small>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <input type=\"email\" [class.is-invalid]=\"getExchangees().controls[i].get('email').invalid && getExchangees().controls[i].get('email').touched\" class=\"form-control mb-2\" placeholder=\"Email\" formControlName=\"email\">\r\n                <small *ngIf=\"getExchangees().controls[i].get('email').invalid && getExchangees().controls[i].get('email').touched\" class=\"text-warning\">*required and must be formatted correctly</small>\r\n              </div>\r\n              {{ (getExchangees().controls[i].get('email').Validators) | json }}\r\n            </div>\r\n          </div>\r\n          \r\n          <button type=\"button\" class=\"btn-secondary btn-sm my-3\" (click)=\"addNames()\">Add Names</button>\r\n          \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"back()\">Back</button>\r\n          <button type=\"submit\" [disabled]=\"step2Form.invalid\" class=\"btn btn-success  ml-2\">Next</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/step2/step2.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step2/step2.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL3N0ZXAyL3N0ZXAyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/setup/step2/step2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/step2/step2.component.ts ***!
  \******************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step2Component = /** @class */ (function () {
    function Step2Component(_setupService, router, fb, angulartics2) {
        this._setupService = _setupService;
        this.router = router;
        this.fb = fb;
        this.angulartics2 = angulartics2;
        this.formData = this._setupService.getData();
    }
    Step2Component.prototype.getExchangees = function () {
        return this.step2Form.get("exchangees");
    };
    Step2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.step2Form = this.fb.group({
            adminName: [
                this.formData.adminName,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            ],
            adminEmail: [
                this.formData.adminEmail,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            ],
            exchangees: this.fb.array([])
        });
        if (this.formData.hasOwnProperty("exchangees") &&
            this.formData.exchangees.length > 0) {
            this.formData.exchangees.forEach(function (ex) {
                if (ex.name != "" && ex.email != "") {
                    _this.addNames(ex.name, ex.email);
                }
            });
        }
        this.addNames();
        this.getExchangees().valueChanges.subscribe(function (controls) {
            for (var i = 0; i < controls.length; i++) {
                var name_1 = _this.getExchangees().controls[i].get("name");
                var email = _this.getExchangees().controls[i].get("email");
                if (name_1.value != "") {
                    email.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
                }
                else {
                    email.clearValidators();
                }
                if (email.value != "") {
                    name_1.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                }
                else {
                    name_1.clearValidators();
                }
                name_1.updateValueAndValidity({ emitEvent: false });
                email.updateValueAndValidity({ emitEvent: false });
            }
        });
    };
    Step2Component.prototype.createNameField = function (exName, exEmail) {
        if (exName === void 0) { exName = ""; }
        if (exEmail === void 0) { exEmail = ""; }
        return this.fb.group({
            name: [exName],
            email: [exEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
        });
    };
    Object.defineProperty(Step2Component.prototype, "exchangees", {
        get: function () {
            return this.step2Form.get("exchangees");
        },
        enumerable: true,
        configurable: true
    });
    Step2Component.prototype.addNames = function (exName, exEmail) {
        if (exName === void 0) { exName = ""; }
        if (exEmail === void 0) { exEmail = ""; }
        this.exchangees.push(this.createNameField(exName, exEmail));
    };
    Step2Component.prototype.back = function () {
        this.router.navigate(["setup/step1"]);
    };
    Object.defineProperty(Step2Component.prototype, "getTempId", {
        get: function () {
            return Math.floor(Math.random() * 100000000 + 1);
        },
        enumerable: true,
        configurable: true
    });
    Step2Component.prototype.hasDuplicates = function (array) {
        var valuesSoFar = Object.create(null);
        for (var i = 0; i < array.length; ++i) {
            var value = array[i];
            if (value in valuesSoFar) {
                console.log(value);
                array[i] = value + " #2";
            }
            valuesSoFar[value] = true;
        }
        return array;
    };
    Step2Component.prototype.submitData = function () {
        // prevent blanks, and long live exlcudes saved previously
        var cleanedExs = [];
        for (var i = 0; i < this.step2Form.value.exchangees.length; i++) {
            var ex = this.step2Form.value.exchangees[i];
            if (ex.name != "" && ex.email != "") {
                if (this.formData.hasOwnProperty("exchangees")) {
                    for (var l = 0; l < this.formData.exchangees.length; l++) {
                        var savedEx = this.formData.exchangees[l];
                        if (savedEx.name === ex.name &&
                            savedEx.hasOwnProperty("excluded")) {
                            ex.excluded = savedEx.excluded;
                        }
                    }
                }
                // ex.tempId = this.getTempId;
                cleanedExs.push(ex);
            }
        }
        // console.log(cleanedExs);
        // add admin to exchangees if aplicable
        if (this.formData.includeAdmin && !this.formData.adminAdded) {
            cleanedExs.push({
                name: this.step2Form.value.adminName,
                email: this.step2Form.value.adminEmail,
                isAdmin: true
                // tempId: this.getTempId
            });
            this.formData.adminAdded = true;
        }
        this.step2Form.value.exchangees = cleanedExs;
        this._setupService.addData(this.step2Form.value);
        this.angulartics2.eventTrack.next({
            action: "go to step 3",
            properties: {
                category: "setup"
            }
        });
        this.router.navigate(["setup/step3"]);
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step2",
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/pages/setup/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.scss */ "./src/app/pages/setup/step2/step2.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/pages/setup/step3/step3.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step3/step3.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <h3>Exclude people from drawing certain names</h3>\r\n      <ul>\r\n        <li><p>\r\n          Example: If Joe and lisa are a couple and shouldnt draw eachothers names, first find joe and select Lisa's name from the drop down menu. Then find Lisa, and select Joe from the menu.\r\n        </p></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <form [formGroup]=\"step3Form\" novalidate (ngSubmit)=\"submitData()\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" formArrayName=\"exchangees\" *ngFor=\"let exchangee of formData.exchangees; let i = index\">\r\n              <p>\r\n              <strong>{{ exchangee.name }}</strong>\r\n              <br>\r\n              <small>{{ exchangee.email }}</small></p>\r\n              <div class=\"form-group\">\r\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"exclude\" [formControlName]='i'>\r\n                  <option value=\"\" default>none</option>\r\n                  <!-- TODO: remove their own name from exclude list via pipe filter -->\r\n                  <option *ngFor=\"let ex of formData.exchangees; let l = index\" [value]=\"ex.name\">{{ ex.name }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"back()\">Back</button>\r\n          <button type=\"submit\" class=\"btn btn-success ml-2\">Next</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/step3/step3.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step3/step3.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL3N0ZXAzL3N0ZXAzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/setup/step3/step3.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/step3/step3.component.ts ***!
  \******************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step3Component = /** @class */ (function () {
    function Step3Component(_setupService, router, fb, angulartics2) {
        this._setupService = _setupService;
        this.router = router;
        this.fb = fb;
        this.angulartics2 = angulartics2;
        this.formData = this._setupService.getData();
        this.step3Form = this.fb.group({
            exchangees: this.fb.array([])
        });
    }
    Step3Component.prototype.ngOnInit = function () {
        var _this = this;
        if (this.formData.hasOwnProperty("exchangees") &&
            this.formData.exchangees.length > 0) {
            this.formData.exchangees.forEach(function (ex) {
                if (ex.name != "" && ex.email != "") {
                    _this.addField(ex.excluded);
                }
            });
        }
    };
    Object.defineProperty(Step3Component.prototype, "exchangees", {
        get: function () {
            return this.step3Form.get("exchangees");
        },
        enumerable: true,
        configurable: true
    });
    Step3Component.prototype.addField = function (selected) {
        if (selected === void 0) { selected = ""; }
        this.exchangees.push(this.fb.control(selected));
    };
    Step3Component.prototype.submitData = function () {
        var exchangees = [];
        for (var i = 0; i < this.formData.exchangees.length; i++) {
            var savedEx = this.formData.exchangees[i];
            var stepEx = this.step3Form.value.exchangees[i];
            savedEx["excluded"] = stepEx || "";
            exchangees.push(savedEx);
        }
        var res = { exchangees: exchangees };
        this._setupService.addData(res);
        this.angulartics2.eventTrack.next({
            action: "go to step 4",
            properties: {
                category: "setup"
            }
        });
        this.router.navigate(["setup/step4"]);
    };
    Step3Component.prototype.back = function () {
        this.router.navigate(["setup/step2"]);
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step3",
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/pages/setup/step3/step3.component.html"),
            styles: [__webpack_require__(/*! ./step3.component.scss */ "./src/app/pages/setup/step3/step3.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2"]])
    ], Step3Component);
    return Step3Component;
}());



/***/ }),

/***/ "./src/app/pages/setup/step4/step4.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step4/step4.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <h3>Complete the setup by writing everyone a message</h3>\r\n      <ul>\r\n        <li>Welcome everyone to the gift exchange!</li>\r\n        <li>Submit it to save your exchange.</li>\r\n        <li>Next we'll email you to verify your email address is correct.</li>\r\n        <li>Once verified, we'll email everyone in your exchange with the names they drew!</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <form [formGroup]=\"step4Form\" novalidate (ngSubmit)=\"submitData()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleFormControlTextarea1\">Email Welcome Message</label>\r\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\" formControlName=\"welcomeMessage\"></textarea>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"back()\">Back</button>\r\n        <button type=\"submit\" class=\"btn btn-success ml-2\">Finish and Verify Your Email Address</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/step4/step4.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/step4/step4.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHVwL3N0ZXA0L3N0ZXA0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/setup/step4/step4.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/step4/step4.component.ts ***!
  \******************************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step4Component = /** @class */ (function () {
    function Step4Component(_setupService, router, fb, angulartics2) {
        this._setupService = _setupService;
        this.router = router;
        this.fb = fb;
        this.angulartics2 = angulartics2;
        this.formData = this._setupService.getData();
        this.step4Form = this.fb.group({
            welcomeMessage: [this.formData.welcomeMessage],
        });
    }
    Step4Component.prototype.ngOnInit = function () {
    };
    Step4Component.prototype.back = function () {
        this.router.navigate(['setup/step3']);
    };
    Step4Component.prototype.submitData = function () {
        this._setupService.addData(this.step4Form.value);
        this.angulartics2.eventTrack.next({
            action: 'go to step 4',
            properties: {
                category: 'setup'
            },
        });
        this.router.navigate(['setup/finalize']);
    };
    Step4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step4',
            template: __webpack_require__(/*! ./step4.component.html */ "./src/app/pages/setup/step4/step4.component.html"),
            styles: [__webpack_require__(/*! ./step4.component.scss */ "./src/app/pages/setup/step4/step4.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2"]])
    ], Step4Component);
    return Step4Component;
}());



/***/ }),

/***/ "./src/app/services/db-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/db-service.service.ts ***!
  \************************************************/
/*! exports provided: DbServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbServiceService", function() { return DbServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DbServiceService = /** @class */ (function () {
    function DbServiceService(afs, db) {
        //this.exchanges = this.afs.collection('exchanges').valueChanges();
        this.afs = afs;
        this.db = db;
        this.exchangesCollection = this.afs.collection("exchanges", function (ref) {
            return ref.orderBy("name", "asc");
        });
        this.exchanges = this.exchangesCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.usersCollection = this.afs.collection("users", function (ref) {
            return ref.orderBy("name", "asc");
        });
        this.users = this.usersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    DbServiceService.prototype.getExchanges = function () {
        return this.db.colWithIds$("exchanges");
    };
    DbServiceService.prototype.getExchange = function (id) {
        return this.db.doc$("exchanges/" + id);
    };
    DbServiceService.prototype.addExchange = function (exchange) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, docRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            name: exchange.name,
                            date: exchange.date,
                            budget: exchange.budget,
                            // nameCount: exchange.nameCount,
                            includeAdmin: exchange.includeAdmin,
                            adminName: exchange.adminName,
                            adminEmail: exchange.adminEmail,
                            // adminUid: exchange.adminUid,
                            welcomeMessage: exchange.welcomeMessage || ""
                        };
                        return [4 /*yield*/, this.afs.createId()];
                    case 1:
                        id = _a.sent();
                        return [4 /*yield*/, this.db.set("exchanges/" + id, data)];
                    case 2:
                        docRef = _a.sent();
                        return [2 /*return*/, id];
                }
            });
        });
    };
    DbServiceService.prototype.deleteExchange = function (exchange) {
        this.exDoc = this.afs.doc("exchanges/" + exchange.id);
        this.exDoc.delete();
    };
    DbServiceService.prototype.updateExchange = function (id, data) {
        var exDoc = this.afs.doc("exchanges/" + id);
        this.db.update(exDoc, data);
    };
    DbServiceService.prototype.createAdminUid = function (exId) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.createId()];
                    case 1:
                        id = _a.sent();
                        this.updateExchange(exId, { 'adminUid': id });
                        return [2 /*return*/];
                }
            });
        });
    };
    DbServiceService.prototype.addExchangeesToExchange = function (exchangeId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.afs
                            .collection("exchanges")
                            .doc(exchangeId)
                            .collection("exchangees");
                        return [4 /*yield*/, this.db.upsertExchangeeUser(ref, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DbServiceService.prototype.updateExchagee = function (exId, id, data) {
        var exchDoc = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees")
            .doc(id);
        return this.db.update(exchDoc, data);
    };
    DbServiceService.prototype.getUsers = function () {
        return this.users;
    };
    DbServiceService.prototype.getUser = function (id) {
        return this.db.docWithIds$("users/" + id);
    };
    DbServiceService.prototype.getUserOnce = function (id) {
        // return this.afs
        //   .collection("users")
        //   .doc(id)
        //   .valueChanges()
        //   .take(1)
        //   .toPromise()
        //   .then((user: User) => user);
        var ref = this.afs.collection("users").doc(id);
        return this.db.docWithIds$(ref).take(1)
            .toPromise().then(function (user) { return user; });
    };
    DbServiceService.prototype.getExchangeOnce = function (id) {
        // return this.afs
        //   .collection("users")
        //   .doc(id)
        //   .valueChanges()
        //   .take(1)
        //   .toPromise()
        //   .then((user: User) => user);
        var ref = this.afs.collection("exchanges").doc(id);
        return this.db.docWithIds$(ref).take(1)
            .toPromise().then(function (exchange) { return exchange; });
    };
    DbServiceService.prototype.getExchangee = function (exId, id) {
        this.exchDoc = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees")
            .doc(id);
        return this.db.docWithIds$(this.exchDoc);
    };
    DbServiceService.prototype.getExchangePeople = function (exId) {
        this.PeopleCollection = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees");
        return this.db.colWithIds$(this.PeopleCollection);
    };
    DbServiceService.prototype.getExchangePeopleOnce = function (exId) {
        this.PeopleCollection = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees");
        return this.db.colWithIds$(this.PeopleCollection).take(1)
            .toPromise().then(function (people) { return people; });
    };
    DbServiceService.prototype.getWishlist = function (exId, id) {
        this.WishlistCollection = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees")
            .doc(id)
            .collection("wishlist", function (ref) { return ref.orderBy("createdAt", "asc"); });
        return this.db.colWithIds$(this.WishlistCollection);
    };
    DbServiceService.prototype.setWishList = function (exId, id, data) {
        var _this = this;
        this.WishlistCollection = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees")
            .doc(id)
            .collection("wishlist");
        data.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
            var cleanItem, itemUid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.itemName != "")) return [3 /*break*/, 2];
                        cleanItem = { itemName: item.itemName };
                        if (item.itemUrl != "") {
                            cleanItem["itemUrl"] = item.itemUrl;
                        }
                        if (item.itemUid != "") {
                            cleanItem["itemUid"] = item.itemUid;
                        }
                        return [4 /*yield*/, this.db.upsertItem(this.WishlistCollection, cleanItem)];
                    case 1:
                        itemUid = _a.sent();
                        item.itemUid = itemUid;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        return;
    };
    DbServiceService.prototype.removeWishlistItem = function (exId, userId, uid) {
        this.WishlistDoc = this.afs
            .collection("exchanges")
            .doc(exId)
            .collection("exchangees")
            .doc(userId)
            .collection("wishlist")
            .doc(uid);
        this.WishlistDoc.delete();
    };
    DbServiceService.prototype.addUser = function (user, exId) {
        if (exId === void 0) { exId = null; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            name: user.name,
                            email: user.email
                        };
                        return [4 /*yield*/, this.db.upsertUser("users/" + data.email, data, true)];
                    case 1:
                        _a.sent();
                        if (!!exId) {
                            this.addExchangeIdToUser(data.email, exId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DbServiceService.prototype.deleteUser = function (user) {
        this.usersDoc = this.afs.doc("users/" + user.id);
        this.usersDoc.delete();
    };
    DbServiceService.prototype.updateUser = function (user) {
        this.usersDoc = this.afs.doc("users/" + user.id);
        this.usersDoc.update(user);
    };
    DbServiceService.prototype.addExchangeIdToUser = function (userId, exchangeId) {
        var ref = this.afs.collection("users").doc(userId);
        ref.update({ exchanges: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion(exchangeId) });
    };
    DbServiceService.prototype.userRequestedEmail = function (userEmail) {
        var ref = this.afs.collection("users").doc(userEmail);
        var stamp = this.db.timestamp;
        // console.log(stamp);
        return ref.update({ requestedEmail: this.db.timestamp });
    };
    DbServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], DbServiceService);
    return DbServiceService;
}());



/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
///// https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/#4-Upsert-Update-or-Create-Method
///// https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/#4-Upsert-Update-or-Create-Method
///// https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/#4-Upsert-Update-or-Create-Method
///// https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/#4-Upsert-Update-or-Create-Method
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirestoreService = /** @class */ (function () {
    function FirestoreService(afs) {
        this.afs = afs;
    }
    /// **************
    /// Get a Reference
    /// **************
    FirestoreService.prototype.col = function (ref, queryFn) {
        return typeof ref === "string" ? this.afs.collection(ref, queryFn) : ref;
    };
    FirestoreService.prototype.doc = function (ref) {
        return typeof ref === "string" ? this.afs.doc(ref) : ref;
    };
    /// **************
    /// Get Data
    /// **************
    FirestoreService.prototype.doc$ = function (ref) {
        return this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            var data = doc.payload.data();
            return data;
        }));
    };
    FirestoreService.prototype.docWithIds$ = function (ref) {
        return this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            if (doc.payload.exists) {
                var data = doc.payload.data();
                data["id"] = doc.payload.id;
                return data;
            }
            else {
                return null;
            }
        }));
    };
    FirestoreService.prototype.col$ = function (ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (docs) {
            return docs.map(function (a) {
                return a.payload.doc.data();
            });
        }));
    };
    /// with Ids
    FirestoreService.prototype.colWithIds$ = function (ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    Object.defineProperty(FirestoreService.prototype, "timestamp", {
        /// **************
        /// Write Data
        /// **************
        // *** Usage
        // db.update('items/ID', data) }) // adds updatedAt field
        // db.set('items/ID', data) })    // adds createdAt field
        // db.add('items', data) })       // adds createdAt field
        /// Firebase Server Timestamp
        get: function () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
        },
        enumerable: true,
        configurable: true
    });
    FirestoreService.prototype.set = function (ref, data) {
        var timestamp = this.timestamp;
        return this.doc(ref).set(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    FirestoreService.prototype.update = function (ref, data) {
        return this.doc(ref).update(__assign({}, data, { updatedAt: this.timestamp }));
    };
    FirestoreService.prototype.delete = function (ref) {
        return this.doc(ref).delete();
    };
    FirestoreService.prototype.add = function (ref, data) {
        var timestamp = this.timestamp;
        return this.col(ref).add(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    FirestoreService.prototype.geopoint = function (lat, lng) {
        return new firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].GeoPoint(lat, lng);
    };
    /// If doc exists update, otherwise set
    FirestoreService.prototype.upsertUser = function (ref, data, update) {
        var _this = this;
        if (update === void 0) { update = true; }
        var doc = this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .toPromise();
        return doc.then(function (snap) {
            return snap.payload.exists
                ? update
                    ? _this.update(ref, data)
                    : null
                : _this.set(ref, data);
        });
    };
    FirestoreService.prototype.upsertExchangeeUser = function (ref, data) {
        var _this = this;
        var uid = data.id ? data.id : this.afs.createId();
        var doc = this.col(ref)
            .doc(uid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .toPromise();
        return doc.then(function (snap) {
            snap.payload.exists
                ? _this.update(_this.col(ref).doc(uid), data)
                : _this.set(_this.col(ref).doc(uid), data);
            return uid;
        });
    };
    FirestoreService.prototype.upsertItem = function (ref, data, update) {
        if (update === void 0) { update = true; }
        if (!data.hasOwnProperty("itemUid")) {
            var itemUid = this.afs.createId();
            data["itemUid"] = itemUid;
            return this.set(this.col(ref).doc(data.itemUid), data);
        }
        else {
            return update ? this.update(this.col(ref).doc(data.itemUid), data) : null;
        }
    };
    /// **************
    /// Inspect Data
    /// **************
    FirestoreService.prototype.inspectDoc = function (ref) {
        var tick = new Date().getTime();
        this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (d) {
            var tock = new Date().getTime() - tick;
            // console.log(`Loaded Document in ${tock}ms`, d);
        }))
            .subscribe();
    };
    FirestoreService.prototype.inspectCol = function (ref) {
        var tick = new Date().getTime();
        this.col(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (c) {
            var tock = new Date().getTime() - tick;
            // console.log(`Loaded Collection in ${tock}ms`, c);
        }))
            .subscribe();
    };
    /// **************
    /// Create and read doc references
    /// **************
    /// create a reference between two documents
    FirestoreService.prototype.connect = function (host, key, doc) {
        var _a;
        return this.doc(host).update((_a = {}, _a[key] = this.doc(doc).ref, _a));
    };
    /// returns a documents references mapped to AngularFirestoreDocument
    FirestoreService.prototype.docWithRefs$ = function (ref) {
        var _this = this;
        return this.doc$(ref).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            for (var _i = 0, _a = Object.keys(doc); _i < _a.length; _i++) {
                var k = _a[_i];
                if (doc[k] instanceof firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].DocumentReference) {
                    doc[k] = _this.doc(doc[k].path);
                }
            }
            return doc;
        }));
    };
    /// **************
    /// Atomic batch example
    /// **************
    /// Just an example, you will need to customize this method.
    FirestoreService.prototype.atomic = function () {
        var batch = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]().batch();
        /// add your operations here
        var itemDoc = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]().doc("items/myCoolItem");
        var userDoc = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]().doc("users/userId");
        var currentTime = this.timestamp;
        batch.update(itemDoc, { timestamp: currentTime });
        batch.update(userDoc, { timestamp: currentTime });
        /// commit operations
        return batch.commit();
    };
    /**
     * Delete a collection, in batches of batchSize. Note that this does
     * not recursively delete subcollections of documents in the collection
     * from: https://github.com/AngularFirebase/80-delete-firestore-collections/blob/master/src/app/firestore.service.ts
     */
    FirestoreService.prototype.deleteCollection = function (path, batchSize) {
        var _this = this;
        var source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["expand"])(function (val) { return _this.deleteBatch(path, batchSize); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (val) { return val > 0; }));
    };
    // Detetes documents as batched transaction
    FirestoreService.prototype.deleteBatch = function (path, batchSize) {
        var _this = this;
        var colRef = this.afs.collection(path, function (ref) {
            return ref.orderBy("__name__").limit(batchSize);
        });
        return colRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (snapshot) {
            // Delete documents in a batch
            var batch = _this.afs.firestore.batch();
            snapshot.forEach(function (doc) {
                batch.delete(doc.payload.doc.ref);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(batch.commit()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return snapshot.length; }));
        }));
    };
    FirestoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SEOService = /** @class */ (function () {
    function SEOService(router, activatedRoute, titleService, metaService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.metaService = metaService;
    }
    SEOService.prototype.addSeoData = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            var root = _this.router.routerState.snapshot.root;
            while (root) {
                if (root.children && root.children.length) {
                    root = root.children[0];
                }
                else if (root.data && root.data["title"]) {
                    _this.titleService.setTitle(root.data["title"] + " | The Great Gift Exchange");
                    var tags = root.data["metatags"];
                    for (var tag in tags) {
                        _this.metaService.addTag({ name: tag, content: tags[tag] });
                    }
                    return;
                }
                else {
                    return;
                }
            }
        });
    };
    SEOService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], SEOService);
    return SEOService;
}());



/***/ }),

/***/ "./src/app/services/setup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/setup.service.ts ***!
  \*******************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db-service.service */ "./src/app/services/db-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SetupService = /** @class */ (function () {
    function SetupService(db) {
        this.db = db;
        this.setupData = {
        // adminame: "Jacob Heisterkamp",
        // adminEmail: "jmheist@gmail.com",
        // exchangees: [
        //   {
        //     name: "stacey",
        //     email: "stacey@email.com",
        //     excluded: "dave",
        //   },
        //   {
        //     name: "dave",
        //     email: "dave@email.com",
        //     excluded: "",
        //   },
        //   {
        //     name: "deb",
        //     email: "deb@email.com",
        //     excluded: "Jacob Heisterkamp",
        //   },
        //   {
        //     name: "grant",
        //     email: "grant@email.com",
        //     excluded: "",
        //   },
        //   {
        //     name: "kristin",
        //     email: "kristin@email.com",
        //     excluded: "",
        //   }
        // ],
        // name: "Best Heisterkamp Family Exchange",
        // date: { year: 2018, month: 11, day: 15 },
        // budget: "20",
        // nameCount: "1",
        // includeAdmin: true,
        // welcomeMessage: "Hello Everyone!",
        // adminName: "Jacob Heisterkamp"
        };
    }
    SetupService.prototype.addData = function (data) {
        if (data) {
            for (var key in data) {
                this.setupData[key] = data[key];
            }
        }
    };
    SetupService.prototype.createExchange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exchangees, adminSet, _a, properties, _loop_1, this_1, _i, properties_1, prop;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        exchangees = {};
                        adminSet = false;
                        // console.log("createExchange(): Starting");
                        _a = this.setupData;
                        return [4 /*yield*/, this.db.addExchange(this.setupData)];
                    case 1:
                        // console.log("createExchange(): Starting");
                        _a.uid = _b.sent();
                        properties = Object.keys(this.setupData.exchangees);
                        _loop_1 = function (prop) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.db
                                            .addExchangeesToExchange(this_1.setupData.uid, this_1.setupData.exchangees[prop])
                                            .then(function (exId) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        if (!this.setupData.exchangees[prop].isAdmin) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, this.db.updateExchange(this.setupData.uid, {
                                                                adminUid: exId
                                                            })];
                                                    case 1:
                                                        _c.sent();
                                                        return [4 /*yield*/, true];
                                                    case 2:
                                                        adminSet = _c.sent();
                                                        _c.label = 3;
                                                    case 3:
                                                        _a = exchangees;
                                                        _b = exId;
                                                        return [4 /*yield*/, this.setupData.exchangees[prop]];
                                                    case 4:
                                                        _a[_b] = _c.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, properties_1 = properties;
                        _b.label = 2;
                    case 2:
                        if (!(_i < properties_1.length)) return [3 /*break*/, 5];
                        prop = properties_1[_i];
                        return [5 /*yield**/, _loop_1(prop)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, this.addDrawnIds(exchangees)];
                    case 6:
                        _b.sent();
                        if (!!adminSet) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.db.createAdminUid(this.setupData.uid)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SetupService.prototype.addDrawnIds = function (exchangees) {
        return __awaiter(this, void 0, void 0, function () {
            var properties, _i, properties_2, id, ex, _a, properties_3, drawnId, exDrawn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("addDrawnIds(): Starting");
                        properties = Object.keys(exchangees);
                        _i = 0, properties_2 = properties;
                        _b.label = 1;
                    case 1:
                        if (!(_i < properties_2.length)) return [3 /*break*/, 4];
                        id = properties_2[_i];
                        ex = exchangees[id];
                        for (_a = 0, properties_3 = properties; _a < properties_3.length; _a++) {
                            drawnId = properties_3[_a];
                            exDrawn = exchangees[drawnId];
                            if (ex.nameDrawn === exDrawn.name) {
                                ex.drawnUid = drawnId;
                            }
                        }
                        if (!!!ex.drawnUid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.db.updateExchagee(this.setupData.uid, id, ex)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log("addDrawnIds(): Finished");
                        return [2 /*return*/];
                }
            });
        });
    };
    SetupService.prototype.addUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin, properties, _i, properties_4, prop, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.setupData.includeAdmin) return [3 /*break*/, 2];
                        admin = {
                            name: this.setupData.adminName,
                            email: this.setupData.adminEmail
                        };
                        // console.log(`adding ${admin.name}`)
                        return [4 /*yield*/, this.db.addUser(admin, this.setupData.uid)];
                    case 1:
                        // console.log(`adding ${admin.name}`)
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        properties = Object.keys(this.setupData.exchangees);
                        _i = 0, properties_4 = properties;
                        _a.label = 3;
                    case 3:
                        if (!(_i < properties_4.length)) return [3 /*break*/, 6];
                        prop = properties_4[_i];
                        user = this.setupData.exchangees[prop];
                        // console.log(`adding ${user.name}`)
                        return [4 /*yield*/, this.db.addUser(user, this.setupData.uid)];
                    case 4:
                        // console.log(`adding ${user.name}`)
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SetupService.prototype.checkData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var goodData, list, _i, list_1, atrib;
            return __generator(this, function (_a) {
                goodData = true;
                list = [
                    "name",
                    "date",
                    "budget",
                    "exchangees",
                    "adminName",
                    "adminEmail"
                ];
                for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                    atrib = list_1[_i];
                    if (!this.setupData.hasOwnProperty(atrib)) {
                        goodData = false;
                    }
                }
                return [2 /*return*/, goodData];
            });
        });
    };
    SetupService.prototype.sendSetupToFirestore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkData()];
                    case 1:
                        passed = _a.sent();
                        if (!passed) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.drawNames()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.createExchange()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.addUsers()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, this.finish()];
                    case 5: 
                    // console.log('the data was bad.')
                    return [2 /*return*/, false];
                }
            });
        });
    };
    SetupService.prototype.finish = function () {
        this.setupData = {};
        // console.log('im done');
        return true;
    };
    SetupService.prototype.printData = function () {
        // console.log(this.setupData ? this.setupData : "no data in this.setupData");
    };
    SetupService.prototype.getData = function () {
        return this.setupData;
    };
    SetupService.prototype.drawNames = function (prod) {
        if (prod === void 0) { prod = true; }
        return __awaiter(this, void 0, void 0, function () {
            function dedupe(people) {
                people.forEach(function (p) {
                    var counter = 1;
                    var count = people.reduce(function (n, person) {
                        return n + (person.name == p.name);
                    }, 0);
                    if (count > 1) {
                        p.name = p.name + " " + counter;
                        counter++;
                    }
                });
            }
            var errors, people, verifyGiftPartners, setNameDrawnToBlank, shuffleArray, assignGiftPartners, allAssigned, loopCount;
            return __generator(this, function (_a) {
                errors = false;
                people = [];
                if (prod) {
                    people = this.setupData.exchangees;
                }
                else {
                    people = Object.assign([], this.setupData.exchangees);
                }
                verifyGiftPartners = function (people) {
                    return people.every(function (person) { return person.nameDrawn; });
                };
                setNameDrawnToBlank = function (people) {
                    return people.forEach(function (person) { return (person.nameDrawn = ""); });
                };
                shuffleArray = function (array) {
                    var _a;
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
                    }
                };
                assignGiftPartners = function (people) {
                    var peopleLeftToAssign = people.map(function (person) { return person.name; });
                    console.log(peopleLeftToAssign);
                    people.forEach(function (person) {
                        var choices = peopleLeftToAssign.filter(function (personToAssign) {
                            return (personToAssign != person.name && personToAssign != person.excluded
                            // person.past.indexOf(personToAssign) === -1
                            );
                        });
                        if (choices.length > 1) {
                            shuffleArray(choices);
                        }
                        if (choices.length === 0) {
                        }
                        else {
                            console.log(choices);
                            person.nameDrawn = choices[0];
                            var index = peopleLeftToAssign.indexOf(choices[0]);
                            peopleLeftToAssign.splice(index, 1);
                        }
                    });
                };
                allAssigned = false;
                loopCount = 0;
                dedupe(people);
                while (!allAssigned) {
                    loopCount++;
                    assignGiftPartners(people);
                    allAssigned = verifyGiftPartners(people);
                    //exit loop if going too long
                    if (loopCount > 50) {
                        console.log("Something went wrong with the assignment");
                        errors = true;
                        break;
                    }
                    if (!allAssigned) {
                        setNameDrawnToBlank(people);
                    }
                }
                //save choices into database
                if (errors) {
                    console.log("there were errors while drawing names");
                }
                else {
                    console.log(people);
                }
                console.log("names drawn");
                return [2 /*return*/];
            });
        });
    };
    SetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_services_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"]])
    ], SetupService);
    return SetupService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db-service.service */ "./src/app/services/db-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.setActiveUserId = function (id) {
        this.activeUserId = id;
    };
    UserService.prototype.getActiveUserId = function () {
        return this.activeUserId;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/template/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-8 pt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <p>&copy;Straylight Designs</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/template/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/template/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/template/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/template/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/template/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/template/nav/nav.component.html":
/*!*************************************************!*\
  !*** ./src/app/template/nav/nav.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"header\" class=\"container-fluid py-4 mt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n    </div>\r\n    <div class=\"col text-center\">\r\n        <a [routerLink]=\"['/']\"><img id=\"logo\" src=\"../assets/images/logo_outlines.svg\" class=\"img-fluid\"></a>\r\n    </div>\r\n    <div class=\"col-sm-2 text-right\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- admin nav bar  -->\r\n<!-- <nav class=\"navbar navbar-expand-md navbar-dark static-top bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/setup/step1\" routerLinkActive=\"active\">Step 1</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/setup/step2\" routerLinkActive=\"active\">Step 2</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/setup/step3\" routerLinkActive=\"active\">Step 3</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/setup/step4\" routerLinkActive=\"active\">Step 4</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/setup/finalize\" routerLinkActive=\"active\">finalize</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/list-all\" routerLinkActive=\"active\">list-all</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->"

/***/ }),

/***/ "./src/app/template/nav/nav.component.scss":
/*!*************************************************!*\
  !*** ./src/app/template/nav/nav.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/template/nav/nav.component.ts":
/*!***********************************************!*\
  !*** ./src/app/template/nav/nav.component.ts ***!
  \***********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.title = 'Gift Exchange';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/template/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/template/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCcA6KyePSLIA3WvXVRjMYke_6PasHpVvk",
        authDomain: "giftexchange-572f3.firebaseapp.com",
        databaseURL: "https://giftexchange-572f3.firebaseio.com",
        projectId: "giftexchange-572f3",
        storageBucket: "giftexchange-572f3.appspot.com",
        messagingSenderId: "184436074227"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jmhei\Documents\sites\ge-playground\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map