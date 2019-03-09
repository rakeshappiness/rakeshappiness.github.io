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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-cards-details/nav-cards-details.component */ "./src/app/nav-cards-details/nav-cards-details.component.ts");
/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-all/view-all.component */ "./src/app/view-all/view-all.component.ts");
/* harmony import */ var _view_all_blog_inner_blog_inner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all/blog-inner/blog-inner.component */ "./src/app/view-all/blog-inner/blog-inner.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'forms', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'search_and_seizures', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'case_laws', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'training', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'books_and_manual', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'faqs', component: _nav_cards_details_nav_cards_details_component__WEBPACK_IMPORTED_MODULE_4__["NavCardsDetailsComponent"] },
    { path: 'blogs', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllComponent"] },
    { path: 'blogs/:id', component: _view_all_blog_inner_blog_inner_component__WEBPACK_IMPORTED_MODULE_6__["BlogInnerComponent"] },
    { path: 'employee_forum', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllComponent"] },
    { path: 'notice_board', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(httpservice) {
        this.httpservice = httpservice;
        this.title = 'income-tax';
        this.data = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getjson();
    };
    AppComponent.prototype.getjson = function () {
        var _this = this;
        this.httpservice.getNavCard().subscribe(function (data) {
            _this.data = data;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generic_generic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generic/generic.module */ "./src/app/generic/generic.module.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_employee_notice_employee_notice_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/employee-notice/employee-notice.module */ "./src/app/home/employee-notice/employee-notice.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _nav_cards_details_nav_cards_details_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-cards-details/nav-cards-details.module */ "./src/app/nav-cards-details/nav-cards-details.module.ts");
/* harmony import */ var _view_all_view_all_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-all/view-all.module */ "./src/app/view-all/view-all.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _generic_generic_module__WEBPACK_IMPORTED_MODULE_5__["GenericModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _home_employee_notice_employee_notice_module__WEBPACK_IMPORTED_MODULE_8__["EmployeeNoticeModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _nav_cards_details_nav_cards_details_module__WEBPACK_IMPORTED_MODULE_10__["NavCardsDetailsModule"],
                _view_all_view_all_module__WEBPACK_IMPORTED_MODULE_11__["ViewAllModule"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generic/breadcrumb/breadcrumb.component.html":
/*!**************************************************************!*\
  !*** ./src/app/generic/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-wrap\">\n    <div class=\"container mb-3\">\n        <div class=\"row\">\n            <div class=\"breadcrumbb\">\n                <ul class=\"pt-4 mb-1\">\n                    <li>Home</li>\n                    <li class=\"active\">{{bannertext}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/generic/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/generic/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb-wrap .breadcrumbb ul {\n  display: flex;\n  padding: 0;\n  list-style-type: none; }\n  .breadcrumb-wrap .breadcrumbb ul li {\n    color: #043266;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 19px;\n    text-align: left;\n    cursor: pointer; }\n  .breadcrumb-wrap .breadcrumbb ul li.active {\n      font-weight: 600;\n      margin-left: 10px;\n      text-transform: capitalize; }\n  .breadcrumb-wrap .breadcrumbb ul li.active:before {\n        display: inline-block;\n        padding-right: .5rem;\n        color: #6c757d;\n        content: \" > \"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2dlbmVyaWMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksYUFBYTtFQUNiLFVBQVU7RUFDVixxQkFBcUIsRUFBQTtFQUxqQztJQU9nQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQVovQjtNQWNvQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLDBCQUEwQixFQUFBO0VBaEI5QztRQWtCd0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJpYy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi13cmFwIHtcbiAgICAuYnJlYWRjcnVtYmIge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzA0MzI2NjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiID4gXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/generic/breadcrumb/breadcrumb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generic/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router) {
        this.router = router;
        this.bannertext = '';
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.bannertext = this.router.url.substr(1).split('_').join(' ');
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/generic/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/generic/breadcrumb/breadcrumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/generic/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/generic/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bgcolor\">\n    <div class=\"container pt-5 pb-4 px-0\">\n        <div class=\"row\">\n            <div class=\"col-md-3 \">\n                <h3 class=\" heading\">Services and Information</h3>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Forms</a></div>\n                <div class=\"col-12 p-0\"> <a class=\"list \" href=''>Search and Seziures</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list \" href=''>Case Laws</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list \" href=''>FAQs</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list \" href=''>Training</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list \" href=''>Books and Manuals</a></div>\n            </div>\n            <div class=\"col-md-3 margintop \">\n\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Employee Forum</a></div>\n                <div class=\"col-12 p-0\"> <a class=\"list\" href=''>Notice Boards</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Employee Contact</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Holiday Calendar</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Training</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Make Requests</a></div>\n\n            </div>\n            <div class=\"col-md-3\">\n                <h3 class=\"heading\">Department and Policies</h3>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Home</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Contact Us</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Blogs</a></div>\n                <div class=\"col-12 p-0\"><a class=\"list\" href=''>Departments</a></div>\n                <div class=\"col-12 p-0\"> <a class=\"list\" href=''>Employee Login</a></div>\n\n            </div>\n            <div class=\"col-md-3\">\n                <img class=\"bitmap\" src=\"assets/images/Bitmap(1).png\">\n            </div>\n            <div class=\"col-12 horizontalLine\">\n                <hr>\n            </div>\n            <div class=\"footer-style\">\n                <a class=\"privacy-policy\" href=''>Privacy Policy</a>\n                <span class=\"dotStyle\">&#183;</span>\n                <a class=\"terms-and-condition\" href=''>Terms and Condition</a>\n            </div>\n            <div class=\"col-12 footer-style\">\n                <div class=\"lastFooter\">© This is an internal website of Investigation Wing, Bangalore. Information for internal consumption only.</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/generic/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/generic/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unorderedlist {\n  list-style-type: none; }\n\n.footer-bgcolor {\n  background-color: #F2F3F5; }\n\n.list {\n  color: #7D7D7D;\n  font-family: OpenSans;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 30px;\n  text-align: left;\n  padding-left: 10px; }\n\n.heading {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  text-align: left;\n  padding-left: 10px; }\n\n.bitmap {\n  width: 114px;\n  height: 81px;\n  margin-left: 100px; }\n\n.margintop {\n  margin-top: 29px; }\n\n.horizontalline {\n  border: 0.5px solid #979797; }\n\n.privacy-policy {\n  color: #7D7D7D;\n  font-family: OpenSans;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: left;\n  margin-right: 10px; }\n\n.footer-style {\n  margin: 0 auto; }\n\n.footer-style a {\n    font-size: 13px; }\n\n.terms-and-condition {\n  color: #7D7D7D;\n  font-family: OpenSans;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 18px;\n  text-align: left;\n  margin-left: 10px; }\n\n.dotStyle {\n  font-size: 18px; }\n\n.lastFooter {\n  color: #7D7D7D;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2dlbmVyaWMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmljL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5vcmRlcmVkbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZm9vdGVyLWJnY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG59XG5cbi5saXN0IHtcbiAgICBjb2xvcjogIzdEN0Q3RDtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5iaXRtYXAge1xuICAgIHdpZHRoOiAxMTRweDtcbiAgICBoZWlnaHQ6IDgxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4XG59XG5cbi5tYXJnaW50b3Age1xuICAgIG1hcmdpbi10b3A6IDI5cHg7XG59XG5cbi5ob3Jpem9udGFsbGluZSB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjOTc5Nzk3O1xufVxuXG4ucHJpdmFjeS1wb2xpY3kge1xuICAgIGNvbG9yOiAjN0Q3RDdEO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvb3Rlci1zdHlsZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59XG5cbi50ZXJtcy1hbmQtY29uZGl0aW9uIHtcbiAgICBjb2xvcjogIzdEN0Q3RDtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRvdFN0eWxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sYXN0Rm9vdGVyIHtcbiAgICBjb2xvcjogIzdEN0Q3RDtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLXNpemUge30iXX0= */"

/***/ }),

/***/ "./src/app/generic/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generic/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/generic/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/generic/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/generic/generic.module.ts":
/*!*******************************************!*\
  !*** ./src/app/generic/generic.module.ts ***!
  \*******************************************/
/*! exports provided: GenericModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericModule", function() { return GenericModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/generic/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/generic/footer/footer.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/generic/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var GenericModule = /** @class */ (function () {
    function GenericModule() {
    }
    GenericModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"]]
        })
    ], GenericModule);
    return GenericModule;
}());



/***/ }),

/***/ "./src/app/generic/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/generic/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"float-left row mb-2 mt-2 logo-wrap\" [routerLink]=\"['home']\">\n                <div class=\"\">\n                    <img src=\"./assets/images/Bitmap.png\" class=\"logo-img\">\n                </div>\n                <div class=\"mt-2\">\n                    <img src=\"./assets/images/logo.png\" class=\"header-logo-img\">\n                </div>\n            </div>\n            <div class=\"float-right header-login\">\n                <div class=\"float-left employee-forum p-2\">Employee Forum</div>\n                <button type=\"button\" class=\"btn float-right ml-3 employee-login p-2\" data-toggle=\"modal\" data-target=\"#loginModal\">\n          <span><img src=\"./assets/images/login.png\" class=\"login-image\"></span>Employee Login</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content \">\n            <form id=\"login-form\">\n                <h4 class=\"text-center mb-4\" id=\"\">Employee Login</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" id=\"loginModalEmal\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"loginModalPassword\" placeholder=\"Password\">\n                </div>\n                <p>Forgot Password ?</p>\n                <div class=\"text-center mt-4 mb-4\">\n                    <button type=\"submit\" class=\"btn p-2 pl-5 pr-5\">Login</button>\n                </div>\n            </form>\n            <p class=\"text-center\">To obtain user ID nd password, please contact <br>\n                <b>enquiry@incometax.com</b>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/generic/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/generic/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-forum,\n.employee-login {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px;\n  text-align: left; }\n\n.employee-login {\n  border: 1px solid #C80000;\n  background: #fff;\n  border-radius: 0; }\n\n.employee-login:hover {\n    box-shadow: 0px 0px 10px 0px #1d26688f; }\n\n.header-login {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.header-text {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 19px;\n  text-align: left; }\n\n.logo-img {\n  width: 100px;\n  height: 70px; }\n\n.header-logo-img {\n  width: 158px;\n  height: 40px;\n  position: relative;\n  top: 40%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.login-image {\n  height: 18px;\n  width: 18px;\n  margin-right: 10px;\n  margin-bottom: 2px; }\n\n.logo-wrap {\n  outline: none; }\n\n.logo-wrap:hover {\n    cursor: pointer; }\n\n.modal .modal-dialog {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.modal .modal-dialog .modal-content {\n    padding: 40px 60px;\n    position: relative; }\n\n.modal .modal-dialog .modal-content #login-form .close {\n      position: absolute;\n      z-index: 999;\n      background: red;\n      background: grey;\n      padding: 1px 5px;\n      color: white;\n      top: 10px;\n      right: 10px;\n      border-radius: 50%;\n      font-weight: normal;\n      outline: none; }\n\n.modal .modal-dialog .modal-content #login-form h4 {\n      font-weight: 700; }\n\n.modal .modal-dialog .modal-content #login-form input {\n      height: 50px;\n      border: 1px solid #043266;\n      font-size: 18px;\n      padding: 16px; }\n\n.modal .modal-dialog .modal-content #login-form button {\n      background: #043266;\n      font-size: 20px;\n      color: white; }\n\n.modal .modal-dialog .modal-content #login-form p {\n      color: #d60a0a;\n      font-size: 15px; }\n\n.modal .modal-dialog .modal-content p {\n      color: dimgrey;\n      font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2dlbmVyaWMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSHBCO0lBT1Esc0NBQXNDLEVBQUE7O0FBSTlDO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQURqQjtJQUdRLGVBQWUsRUFBQTs7QUFJdkI7RUFFUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBTHhDO0lBT1ksa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBOztBQVI5QjtNQVdvQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixTQUFTO01BQ1QsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsYUFBYSxFQUFBOztBQXJCakM7TUF3Qm9CLGdCQUFnQixFQUFBOztBQXhCcEM7TUEyQm9CLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGFBQWEsRUFBQTs7QUE5QmpDO01BaUNvQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUFuQ2hDO01Bc0NvQixjQUFjO01BQ2QsZUFBZSxFQUFBOztBQXZDbkM7TUEyQ2dCLGNBQWM7TUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmljL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtZm9ydW0sXG4uZW1wbG95ZWUtbG9naW4ge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZW1wbG95ZWUtbG9naW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDODAwMDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjMWQyODY4O1xuICAgICAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzFkMjY2ODhmO1xuICAgIH1cbn1cblxuLmhlYWRlci1sb2dpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaGVhZGVyLWxvZ28taW1nIHtcbiAgICB3aWR0aDogMTU4cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxvZ2luLWltYWdlIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmxvZ28td3JhcCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLm1vZGFsIHtcbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweCA2MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgI2xvZ2luLWZvcm0ge1xuICAgICAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDQzMjY2O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNDMyNjY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkNjBhMGE7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGltZ3JleTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/generic/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generic/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/generic/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/generic/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/banner/banner.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-bgcolor\">\n<div class=\"container pl-0\">\n  <div class=\"row\">\n    <div class=\"col-md-8 pl-0\">\n      <div class=\"banner-text\">\n        <h2>Welcome to the Investigation Wing</h2>\n      </div>\n      <div class=\"banner-sub-text\">Find department resources and information faster.</div>\n      <div class=\"mt-3 row\">\n        <input type=\"text\" class=\"form-control input-field\" placeholder=\"Search PDIT repository\">\n        <button class=\"btn btn-main-primary\">Search</button>\n      </div>\n      <div class=\"mt-3 work-tool-style \">\n        <div class=\"row\">Work Tools:\n          <a class=\"ml-2 sub-link font-weight-400\" href=\"#\">PFMS</a>\n          <a class=\"ml-2 sub-link font-weight-400\" href=\"#\">ITBA</a>\n          <a class=\"ml-2 font-weight-400\" href=\"#\">EIS</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 quick-link-section p-3 row\">\n      <h2 class=\"header-quick-link\">Quick Links</h2>\n      <div class=\"col-12 px-0 py-2 sub-quick-links\">\n        <a href=\"#\" class=\"float-left\">Get started as a New Employee</a>\n        <img src=\"./assets/images/back.png\" class=\"float-right back-arrow\">\n      </div>\n      <div class=\"col-12 seperator\"></div>\n      <div class=\"col-12 px-0 py-2  sub-quick-links\">\n        <a href=\"#\" class=\"float-left\">Make Requests (For hardware etc)</a>\n        <img src=\"./assets/images/back.png\" class=\"float-right back-arrow\">\n      </div>\n      <div class=\"col-12 seperator\"></div>\n      <div class=\"col-12 px-0 py-2 sub-quick-links\">\n        <a href=\"#\" class=\"float-left\">Holiday Calendar</a>\n        <img src=\"./assets/images/back.png\" class=\"float-right back-arrow\">\n      </div>\n      <div class=\"col-12 seperator\"></div>\n      <div class=\"col-12 px-0 py-2 sub-quick-links\">\n        <a href=\"#\" class=\"float-left\">Employee Contact</a>\n        <img src=\"./assets/images/back.png\" class=\"float-right back-arrow\">\n      </div>\n    </div>\n  </div>\n</div></div>"

/***/ }),

/***/ "./src/app/home/banner/banner.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0 0; }\n\n.banner-bgcolor {\n  background-color: #1D2668;\n  padding-top: 3em;\n  padding-bottom: 3em; }\n\n.work-tool-style {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 19px;\n  text-align: left; }\n\n.work-tool-style a {\n    color: #FFFFFF; }\n\n.banner-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: left; }\n\n.banner-text h2 {\n    font-weight: 700; }\n\n.banner-sub-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.input-field {\n  width: 51%;\n  border-radius: 0;\n  border-radius: 2px 0px 0px 2px !important; }\n\n.btn-main-primary {\n  border-radius: 0px 2px 2px 0px !important;\n  background-color: #C0D6DF;\n  border-radius: 0;\n  width: 130px;\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  line-height: 19px; }\n\ninput::-webkit-input-placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\ninput::-ms-input-placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\ninput::placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.sub-link {\n  border-right: 0.3px solid #FFFFFF;\n  padding-right: 10px; }\n\n.font-weight-400 {\n  font-weight: 400; }\n\n.quick-link-section {\n  background-color: #F2F3F5;\n  border-radius: 4px;\n  box-shadow: 0 1px 17px 0 rgba(0, 0, 0, 0.5); }\n\n.header-quick-link {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  text-align: left; }\n\n.sub-quick-links a {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.sub-quick-links:hover .back-arrow {\n  -webkit-animation: arrow-jump 0.5s infinite;\n  animation: arrow-jump 0.5s infinite; }\n\n.seperator {\n  border-bottom: 1px solid #d2d2d2; }\n\n.back-arrow {\n  width: 7px;\n  height: 12px;\n  margin-top: 5px; }\n\n@-webkit-keyframes arrow-jump {\n  0% {\n    position: relative;\n    right: 5px; }\n  100% {\n    position: relative;\n    right: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBS3ZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFRUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUxwQjtJQU9RLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0kseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBUHBCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBUHBCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkNBQTJDLEVBQUE7O0FBRy9DO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFSeEI7RUFZWSwyQ0FBMkM7RUFHM0MsbUNBQW1DLEVBQUE7O0FBSy9DO0VBQ0ksZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBRWQ7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46IDAgMDtcbn1cblxuLmJhbm5lci1iZ2NvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyNjY4O1xuICAgIHBhZGRpbmctdG9wOiAzZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDRlbTtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiA1ZW07XG59XG5cbi53b3JrLXRvb2wtc3R5bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGEge1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59XG5cbi5iYW5uZXItc3ViLXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogNTElO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDBweCAwcHggMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbWFpbi1wcmltYXJ5IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMnB4IDJweCAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBENkRGO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3ViLWxpbmsge1xuICAgIGJvcmRlci1yaWdodDogMC4zcHggc29saWQgI0ZGRkZGRjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9udC13ZWlnaHQtNDAwIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucXVpY2stbGluay1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaGVhZGVyLXF1aWNrLWxpbmsge1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3ViLXF1aWNrLWxpbmtzIHtcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmJhY2stYXJyb3cge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAtby1hbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYXJyb3ctanVtcCAwLjVzIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VwZXJhdG9yIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuLmJhY2stYXJyb3cge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFycm93LWp1bXAge1xuICAgIDAlIHtcbiAgICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLy8gb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/banner/banner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/banner/banner.component.ts ***!
  \*************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/home/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/home/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/home/blogs/blogs.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/blogs/blogs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text-center p-4\">\n        <h3>Blogs</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-4 \" (click)=\"onBlogCard(element)\" *ngFor=\"let element of data\">\n            <div class=\"blog-wrap\">\n                <img class=\"card-img-top\" src='assets/images/{{element.img}}' alt=\"Card image cap\">\n                <div class=\"card-body px-0\">\n                    <span class=\"blog-card-date\">{{element.date}}</span><span class=\"blog-card-tag \">{{element.tag}}</span>\n                    <h6 class=\"card-title\">{{element.title}}</h6>\n                    <p class=\"card-text\">By {{element.author}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p class=\"text-center view-all-blogs  view-all-arrow-animate mb-5 mt-3\" [routerLink]=\"['/blogs']\"><a>View all topics<span class=\"ml-2\"><img src=\"../../assets/images/arrow-black.png\"></span></a></p>\n</div>"

/***/ }),

/***/ "./src/app/home/blogs/blogs.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/blogs/blogs.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-weight: 600; }\n\n.blog-wrap {\n  transition: 0.2s ease;\n  padding: 10px; }\n\n.blog-wrap:hover {\n    box-shadow: 0px 0px 20px lightgrey;\n    border-radius: 4px;\n    padding: 10px;\n    transition: 0.2s ease;\n    cursor: pointer; }\n\n.blog-wrap .blog-card-date {\n    color: #4A4A4A9c;\n    font-size: 14px; }\n\n.blog-wrap .blog-card-tag {\n    color: #efe8e8;\n    font-size: 12px;\n    padding: 3px 15px;\n    float: right;\n    border-radius: 50px;\n    background-color: #043266; }\n\n.blog-wrap .card-title {\n    padding-top: 15px;\n    font-weight: 600;\n    margin-bottom: 5px;\n    height: 54px;\n    overflow: hidden; }\n\n.blog-wrap .card-text {\n    color: #4A4A4A9c;\n    font-size: 15px; }\n\na {\n  cursor: pointer; }\n\n.view-all-blogs {\n  font-weight: bold; }\n\n.view-all-blogs a:hover span {\n    -webkit-animation: arrow-jump 0.5s infinite;\n    animation: arrow-jump 0.5s infinite; }\n\n@-webkit-keyframes arrow-jump {\n  0% {\n    position: relative;\n    right: 5px; }\n  100% {\n    position: relative;\n    right: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUZqQjtJQUlRLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7O0FBUnZCO0lBV1EsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFadkI7SUFlUSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBOztBQXBCakM7SUF1QlEsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQTNCeEI7SUE4QlEsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBS2dCLDJDQUEyQztJQUczQyxtQ0FBbUMsRUFBQTs7QUFNbkQ7RUFDSTtJQUVJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFFZDtJQUVJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsb2ctd3JhcCB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBsaWdodGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5ibG9nLWNhcmQtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBOWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmJsb2ctY2FyZC10YWcge1xuICAgICAgICBjb2xvcjogI2VmZThlODtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTVweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzMjY2O1xuICAgIH1cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBOWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG59XG5cbmEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZXctYWxsLWJsb2dzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYXJyb3ctanVtcCAwLjVzIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgICAwJSB7XG4gICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC8vIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/blogs/blogs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/blogs/blogs.component.ts ***!
  \***********************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(httpservice, router) {
        this.httpservice = httpservice;
        this.router = router;
        this.data = [];
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.getJson();
    };
    BlogsComponent.prototype.getJson = function () {
        var _this = this;
        this.httpservice.getHomeBlog().subscribe(function (data) {
            _this.data = data;
        });
    };
    BlogsComponent.prototype.onBlogCard = function (element) {
        var url = element.title.replace(/[^A-Z0-9]/ig, "_");
        console.log(element, url, "jjjj");
        this.router.navigate(['/blogs/', url]);
    };
    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/home/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/app/home/blogs/blogs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/home/download-book/download-book.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/download-book/download-book.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"download-book\">\n    <div class=\" container rectangle\">\n        <div class=\"row book-wrap-padding\">\n            <div class=\"col-md-2\">\n                <div class=\"book\">\n                    <img src=\"assets/images/41xj9c9oluL.png\">\n                </div>\n            </div>\n            <div class=\"col-md-7 rectangle-text\">\n                <p>Our annual magazine for <strong>Department </strong></p>\n                <p><strong>Achievements 2018-19</strong> is out now! </p>\n                <p>Get your own copy by downloading now!</p>\n            </div>\n            <div class=\"col-md-3 download-btn\">\n                <button class=\"btn btn-download\">\n         <span> <img class=\"download-sign\" src=\"assets/images/download.png\"></span>\n         <span>\n         <b> Download PDF</b>\n        </span>\n        </button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/download-book/download-book.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/download-book/download-book.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download-book {\n  background-color: #043266; }\n\n.book img {\n  width: 100%; }\n\n.rectangle-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  padding-right: 40px;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 38px;\n  width: 574px;\n  text-align: left;\n  -webkit-transform: translate(2%, 15%);\n          transform: translate(2%, 15%); }\n\n.book-wrap-padding {\n  padding: 30px 100px; }\n\n.download-btn {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  border: 0; }\n\n.btn-download {\n  background-color: #F2F3F5;\n  border-radius: 3px;\n  box-shadow: 0 7px 14px 0 rgba(39, 39, 39, 0.5);\n  padding: 15px 20px;\n  transition: 0.2s ease; }\n\n.btn-download:hover {\n    -webkit-transform: scale(1.06);\n            transform: scale(1.06);\n    transition: 0.2s ease; }\n\n.download-sign {\n  width: 40px;\n  height: 20px;\n  padding-right: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvZG93bmxvYWQtYm9vay9kb3dubG9hZC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBTTdCO0VBS1EsV0FBVyxFQUFBOztBQUluQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUNBQTZCO1VBQTdCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTs7QUFHYjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFMekI7SUFPUSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQixFQUFBOztBQUk3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Rvd25sb2FkLWJvb2svZG93bmxvYWQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZC1ib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzMjY2O1xuICAgIC8vICAgYm94LXNoYWRvdzogMCA3cHggMTRweCAwIHJnYmEoMTksIDE5LCAxOSwgMC41KTtcbiAgICAvLyAgIHdpZHRoOiAxNDQwcHg7XG4gICAgLy8gICBoZWlnaHQ6IDIzN3B4O1xufVxuXG4uYm9vayB7XG4gICAgLy8gbWFyZ2luLXRvcDogMzNweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxODdweFxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnJlY3RhbmdsZS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICB3aWR0aDogNTc0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyJSwgMTUlKTtcbn1cblxuLmJvb2std3JhcC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAzMHB4IDEwMHB4O1xufVxuXG4uZG93bmxvYWQtYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5idG4tZG93bmxvYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggMCByZ2JhKDM5LCAzOSwgMzksIDAuNSk7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIH1cbn1cblxuLmRvd25sb2FkLXNpZ24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/download-book/download-book.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/download-book/download-book.component.ts ***!
  \***************************************************************/
/*! exports provided: DownloadBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadBookComponent", function() { return DownloadBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadBookComponent = /** @class */ (function () {
    function DownloadBookComponent() {
    }
    DownloadBookComponent.prototype.ngOnInit = function () {
    };
    DownloadBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download-book',
            template: __webpack_require__(/*! ./download-book.component.html */ "./src/app/home/download-book/download-book.component.html"),
            styles: [__webpack_require__(/*! ./download-book.component.scss */ "./src/app/home/download-book/download-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadBookComponent);
    return DownloadBookComponent;
}());



/***/ }),

/***/ "./src/app/home/employee-notice/employee-forum/employee-forum.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-forum/employee-forum.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 employee-forum-section py-3 px-4\">\n    <div class=\"col-12 row employee-forum-header px-4\">\n        <div><img src=\"../../../assets/images/conversation.png\"></div>\n        <div class=\"employee-forum-text ml-2\">\n            Employee Forum\n        </div>\n    </div>\n    <div class=\"col-md-12 row employee-forum-content seperator\" *ngFor=\"let element of data\">\n        <div class=\"col-md-9 p-0\">\n            <div class=\"col-md-12 sub-title\">\n                {{ element.title }}\n                <!-- <span class=\"status-new px-2 \">{{element.tag}}</span> -->\n                <span class=\"status-new px-2 \">new</span>\n\n            </div>\n            <div class=\"col-md-12 sub-description \">\n                {{ element.desc }}\n            </div>\n        </div>\n        <div class=\"col-md-3 p-0 mt-1\">\n            <div class=\"col-md-12 date-section\">\n                {{ element.date }}\n            </div>\n            <div class=\"col-md-12 name-section\">\n                {{ element.name }}\n            </div>\n            <div class=\"col-md-12 reply-section mt-3\">\n                <span class=\"mr-2\"><img src=\"../../../assets/images/noun.png\"></span>{{ element.reply }}<span class=\"ml-2\">replies</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3 mb-2 view-all\">\n        <p [routerLink]=\"['/employee_forum']\" class=\"view-employee-forum\">View Employee Forum\n            <span class=\"ml-2 arrow-style\"><img src=\"../../../assets/images/arrow-black.png\"></span>\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/employee-notice/employee-forum/employee-forum.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-forum/employee-forum.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-forum-section {\n  background-color: #F2F3F5;\n  box-shadow: 0 7px 14px 0 rgba(39, 39, 39, 0.5);\n  height: 600px; }\n  @media (max-width: 1024px) {\n    .employee-forum-section {\n      height: 700px; } }\n  .employee-forum-text {\n  color: #000000;\n  font-family: Raleway;\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 15px;\n  text-align: left; }\n  .sub-title {\n  color: #043266;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 15px; }\n  .sub-description {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400; }\n  .date-section {\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400; }\n  .name-section {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 600; }\n  .reply-section {\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400; }\n  .reply-section img {\n    height: 11px;\n    width: 14px; }\n  .seperator {\n  border-bottom: 1px solid #d2d2d2;\n  padding: 15px 0;\n  margin: 0; }\n  .seperator:first-child {\n    border: none !important; }\n  .seperator:hover {\n    background: #05306a0f;\n    cursor: pointer; }\n  .status-new {\n  background-color: #D12929;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px; }\n  .view-employee-forum {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 700; }\n  .arrow-style img {\n  height: 10px;\n  width: 7px; }\n  .view-all {\n  position: absolute;\n  bottom: -10px; }\n  .view-all:hover {\n    cursor: pointer; }\n  .view-all:hover .arrow-style {\n      -webkit-animation: arrow-jump 0.5s infinite;\n      animation: arrow-jump 0.5s infinite; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    position: relative;\n    right: 5px; }\n  100% {\n    position: relative;\n    right: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvZW1wbG95ZWUtbm90aWNlL2VtcGxveWVlLWZvcnVtL2VtcGxveWVlLWZvcnVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLDhDQUE4QztFQUM5QyxhQUFhLEVBQUE7RUFDYjtJQUpKO01BS1EsYUFBYSxFQUFBLEVBRXBCO0VBRUQ7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFKcEI7SUFNUSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBSW5CO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixTQUFTLEVBQUE7RUFIYjtJQUtRLHVCQUF1QixFQUFBO0VBTC9CO0lBUVEscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7RUFFUSxZQUFZO0VBQ1osVUFBVSxFQUFBO0VBSWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUZqQjtJQUlRLGVBQWUsRUFBQTtFQUp2QjtNQU1ZLDJDQUEyQztNQUczQyxtQ0FBbUMsRUFBQTtFQUsvQztFQUNJO0lBRUksa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQUVkO0lBRUksa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9lbXBsb3llZS1ub3RpY2UvZW1wbG95ZWUtZm9ydW0vZW1wbG95ZWUtZm9ydW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtZm9ydW0tc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNTtcbiAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IDAgcmdiYSgzOSwgMzksIDM5LCAwLjUpO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgfVxufVxuXG4uZW1wbG95ZWUtZm9ydW0tdGV4dCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBjb2xvcjogIzA0MzI2NjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN1Yi1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGF0ZS1zZWN0aW9uIHtcbiAgICBjb2xvcjogIzQ3NDc0NztcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uYW1lLXNlY3Rpb24ge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlcGx5LXNlY3Rpb24ge1xuICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgIH1cbn1cblxuLnNlcGVyYXRvciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDUzMDZhMGY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5zdGF0dXMtbmV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDEyOTI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLnZpZXctZW1wbG95ZWUtZm9ydW0ge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LXN0eWxlIHtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA3cHg7XG4gICAgfVxufVxuXG4udmlldy1hbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5hcnJvdy1zdHlsZSB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYXJyb3ctanVtcCAwLjVzIGluZmluaXRlO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogYXJyb3ctanVtcCAwLjVzIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgICAwJSB7XG4gICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC8vIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/employee-notice/employee-forum/employee-forum.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-forum/employee-forum.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeForumComponent", function() { return EmployeeForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



var EmployeeForumComponent = /** @class */ (function () {
    function EmployeeForumComponent(httpservice) {
        this.httpservice = httpservice;
        this.data = [];
    }
    EmployeeForumComponent.prototype.ngOnInit = function () {
        this.getEmployeeForumDetail();
    };
    EmployeeForumComponent.prototype.getEmployeeForumDetail = function () {
        var _this = this;
        this.httpservice.getEmployeeForum().subscribe(function (data) {
            _this.data = data;
        });
    };
    EmployeeForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-forum',
            template: __webpack_require__(/*! ./employee-forum.component.html */ "./src/app/home/employee-notice/employee-forum/employee-forum.component.html"),
            styles: [__webpack_require__(/*! ./employee-forum.component.scss */ "./src/app/home/employee-notice/employee-forum/employee-forum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EmployeeForumComponent);
    return EmployeeForumComponent;
}());



/***/ }),

/***/ "./src/app/home/employee-notice/employee-notice.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-notice.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-image p-5\">\n  <div class=\" container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 pl-0\">\n        <app-employee-forum></app-employee-forum>\n      </div>\n      <div class=\"col-md-4 pr-0\">\n        <app-notice-board></app-notice-board>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/employee-notice/employee-notice.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-notice.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-image {\n  background-image: url('Group11.png');\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvZW1wbG95ZWUtbm90aWNlL2VtcGxveWVlLW5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUEwRDtFQUMxRCxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1wbG95ZWUtbm90aWNlL2VtcGxveWVlLW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXAxMS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/employee-notice/employee-notice.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-notice.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeNoticeComponent", function() { return EmployeeNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeNoticeComponent = /** @class */ (function () {
    function EmployeeNoticeComponent() {
    }
    EmployeeNoticeComponent.prototype.ngOnInit = function () {
    };
    EmployeeNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-notice',
            template: __webpack_require__(/*! ./employee-notice.component.html */ "./src/app/home/employee-notice/employee-notice.component.html"),
            styles: [__webpack_require__(/*! ./employee-notice.component.scss */ "./src/app/home/employee-notice/employee-notice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeNoticeComponent);
    return EmployeeNoticeComponent;
}());



/***/ }),

/***/ "./src/app/home/employee-notice/employee-notice.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/employee-notice/employee-notice.module.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeNoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeNoticeModule", function() { return EmployeeNoticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_forum_employee_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-forum/employee-forum.component */ "./src/app/home/employee-notice/employee-forum/employee-forum.component.ts");
/* harmony import */ var _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-board/notice-board.component */ "./src/app/home/employee-notice/notice-board/notice-board.component.ts");
/* harmony import */ var _employee_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-notice.component */ "./src/app/home/employee-notice/employee-notice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EmployeeNoticeModule = /** @class */ (function () {
    function EmployeeNoticeModule() {
    }
    EmployeeNoticeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_employee_forum_employee_forum_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeForumComponent"], _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__["NoticeBoardComponent"], _employee_notice_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeNoticeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [_employee_forum_employee_forum_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeForumComponent"], _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__["NoticeBoardComponent"], _employee_notice_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeNoticeComponent"]]
        })
    ], EmployeeNoticeModule);
    return EmployeeNoticeModule;
}());



/***/ }),

/***/ "./src/app/home/employee-notice/notice-board/notice-board.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/employee-notice/notice-board/notice-board.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 notice-board-section py-4 px-4\">\n    <div class=\"row notice-board-header px-4\">\n        <div><img src=\"../../../assets/images/megaphone.png\"></div>\n        <div class=\"notice-board-text ml-3\">\n            NOTICE BOARD\n        </div>\n    </div>\n    <div class=\"col-md-12 mt-4 mb-2 p-0 select-dropdown\">\n        <select>\n          <option value=\"\">All Notification 1</option>\n          <option value=\"\">All Notification 2</option>\n          <option value=\"\">All Notification 3</option>\n          <option value=\"\">All Notification 4</option>\n        </select>\n    </div>\n    <div class=\"row notice-board-content\">\n        <div class=\"col-md-12  py-3  seperator\" *ngFor=\"let element of data\">\n            <div class=\"col-md-12 p-0\">\n                <div class=\"col-md-12 sub-title\">\n                    {{ element.title }}\n                </div>\n                <div class=\"col-md-12 sub-description mt-2\">\n                    {{ element.desc }}\n                </div>\n                <div class=\"col-md-12 post-date mt-3\">\n                    {{ element.date }}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3 notice-view-all\">\n        <p [routerLink]=\"['/notice_board']\" class=\"view-all\">View All<span class=\"ml-2 arrow-style\"><img src=\"../../../assets/images/arrow-white.png\"></span></p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/employee-notice/notice-board/notice-board.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/employee-notice/notice-board/notice-board.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notice-board-section {\n  background-color: #043266;\n  box-shadow: 0 7px 14px 0 rgba(19, 19, 19, 0.5);\n  height: 600px; }\n  @media (max-width: 1024px) {\n    .notice-board-section {\n      height: 700px; } }\n  .notice-board-text {\n  color: #ffffff;\n  font-family: Raleway;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: left;\n  margin-top: 2px; }\n  .sub-title {\n  color: #fff;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700; }\n  .sub-description {\n  color: #fff;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400; }\n  .post-date {\n  font-size: 12px;\n  color: #f2f3f5; }\n  .date-section {\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400; }\n  .seperator {\n  border-bottom: 1px solid #FFFFFF;\n  padding: 0 0 10px 0; }\n  .seperator:hover {\n    background: #4b7cbd4d;\n    border-radius: 4px;\n    cursor: pointer; }\n  .notice-board-content:last-child {\n  background-color: red !important; }\n  .view-all {\n  color: #fff;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 700; }\n  .notice-view-all {\n  position: absolute;\n  bottom: 10px; }\n  .notice-view-all:hover {\n    cursor: pointer; }\n  .notice-view-all:hover .arrow-style {\n      -webkit-animation: arrow-jump 0.5s infinite;\n      animation: arrow-jump 0.5s infinite; }\n  .notice-view-all .view-all {\n    margin: 0; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    position: relative;\n    right: 5px; }\n  100% {\n    position: relative;\n    right: 0px; } }\n  .arrow-style img {\n  height: 10px;\n  width: 7px; }\n  .select-dropdown select {\n  background: white;\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  padding: 8px;\n  -webkit-appearance: none;\n  background-position: 96%;\n  background-size: 10px 7px;\n  background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvZW1wbG95ZWUtbm90aWNlL25vdGljZS1ib2FyZC9ub3RpY2UtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsOENBQThDO0VBQzlDLGFBQWEsRUFBQTtFQUNiO0lBSko7TUFLUSxhQUFhLEVBQUEsRUFFcEI7RUFFRDtFQUNJLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGdDQUFnQztFQUNoQyxtQkFBbUIsRUFBQTtFQUZ2QjtJQUlRLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksZ0NBQStCLEVBQUE7RUFHbkM7RUFDSSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFGaEI7SUFJUSxlQUFlLEVBQUE7RUFKdkI7TUFNWSwyQ0FBMkM7TUFHM0MsbUNBQW1DLEVBQUE7RUFUL0M7SUFhUSxTQUFTLEVBQUE7RUFJakI7RUFDSTtJQUVJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFFZDtJQUVJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUEsRUFBQTtFQUlsQjtFQUVRLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFJbEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUV4Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9lbXBsb3llZS1ub3RpY2Uvbm90aWNlLWJvYXJkL25vdGljZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpY2UtYm9hcmQtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzI2NjtcbiAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IDAgcmdiYSgxOSwgMTksIDE5LCAwLjUpO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgfVxufVxuXG4ubm90aWNlLWJvYXJkLXRleHQge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWItZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBvc3QtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZjJmM2Y1O1xufVxuXG4uZGF0ZS1zZWN0aW9uIHtcbiAgICBjb2xvcjogIzQ3NDc0NztcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zZXBlcmF0b3Ige1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0YjdjYmQ0ZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubm90aWNlLWJvYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIWltcG9ydGFudDtcbn1cblxuLnZpZXctYWxsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ub3RpY2Utdmlldy1hbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLmFycm93LXN0eWxlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogYXJyb3ctanVtcCAwLjVzIGluZmluaXRlO1xuICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmlldy1hbGwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXJyb3ctanVtcCB7XG4gICAgMCUge1xuICAgICAgICAvLyBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAvLyBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgfVxufVxuXG4uYXJyb3ctc3R5bGUge1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDdweDtcbiAgICB9XG59XG5cbi5zZWxlY3QtZHJvcGRvd24gc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9QYXRoXFwoMlxcKS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCA3cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/employee-notice/notice-board/notice-board.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/employee-notice/notice-board/notice-board.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NoticeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



var NoticeBoardComponent = /** @class */ (function () {
    function NoticeBoardComponent(httpservice) {
        this.httpservice = httpservice;
        this.data = [];
    }
    NoticeBoardComponent.prototype.ngOnInit = function () {
        this.getNoticeBoardDetail();
    };
    NoticeBoardComponent.prototype.getNoticeBoardDetail = function () {
        var _this = this;
        this.httpservice.getNoticeBoard().subscribe(function (data) {
            _this.data = data;
        });
    };
    NoticeBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice-board',
            template: __webpack_require__(/*! ./notice-board.component.html */ "./src/app/home/employee-notice/notice-board/notice-board.component.html"),
            styles: [__webpack_require__(/*! ./notice-board.component.scss */ "./src/app/home/employee-notice/notice-board/notice-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NoticeBoardComponent);
    return NoticeBoardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-breadcrumb *ngIf=\"hideBreadCrumb\"></app-breadcrumb>\n<app-nav-cards></app-nav-cards>\n<app-employee-notice></app-employee-notice>\n<app-blogs></app-blogs>\n<app-download-book></app-download-book>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pageUrl = this.route.snapshot.url;
        if (this.pageUrl === 'home') {
            this.hideBreadCrumb = true;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/home/banner/banner.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/home/blogs/blogs.component.ts");
/* harmony import */ var _download_book_download_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-book/download-book.component */ "./src/app/home/download-book/download-book.component.ts");
/* harmony import */ var _employee_notice_employee_notice_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-notice/employee-notice.module */ "./src/app/home/employee-notice/employee-notice.module.ts");
/* harmony import */ var _nav_cards_nav_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-cards/nav-cards.component */ "./src/app/home/nav-cards/nav-cards.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generic/generic.module */ "./src/app/generic/generic.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_4__["BlogsComponent"], _download_book_download_book_component__WEBPACK_IMPORTED_MODULE_5__["DownloadBookComponent"], _nav_cards_nav_cards_component__WEBPACK_IMPORTED_MODULE_7__["NavCardsComponent"], _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _employee_notice_employee_notice_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeNoticeModule"],
                _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__["GenericModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_4__["BlogsComponent"], _download_book_download_book_component__WEBPACK_IMPORTED_MODULE_5__["DownloadBookComponent"], _employee_notice_employee_notice_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeNoticeModule"], _nav_cards_nav_cards_component__WEBPACK_IMPORTED_MODULE_7__["NavCardsComponent"], _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/nav-cards/nav-cards.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/nav-cards/nav-cards.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 pr-0 pl-0\">\n    <div class=\" row p-0 employee-card-wrap\">\n        <!-- <div class=\"col-4 employee-section-style p-3 mb-4 mr-3\" *ngFor=\"let element of data\"> -->\n        <div class=\"col-4 \" *ngFor=\"let element of data;let i =index\">\n            <div (click)=routeUrl(element) class=\" employee-section-style\" id=\"{{i}}\">\n                <a>{{element.title}}</a>\n                <div class=\"descriptive-text py-2\">\n                    {{element.desc}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/nav-cards/nav-cards.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/nav-cards/nav-cards.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0 0; }\n\n.employee-section-style {\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  box-shadow: 0 7px 14px 0 rgba(208, 208, 208, 0.5);\n  flex: 0 0 31.333333% !important;\n  padding: 10px 20px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  transition: ease-in-out 0.3s; }\n\n.employee-section-style:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    transition: ease-in-out 0.3s; }\n\n.employee-section-style h2,\n  .employee-section-style a {\n    color: #043266;\n    font-family: OpenSans;\n    font-size: 20px;\n    font-weight: 700;\n    text-decoration: underline; }\n\n.descriptive-text {\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px; }\n\n.employee-card-wrap {\n  padding: 50px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL2hvbWUvbmF2LWNhcmRzL25hdi1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFSaEM7SUFVUSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDRCQUE0QixFQUFBOztBQVhwQzs7SUFlUSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCLEVBQUE7O0FBSWxDO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uYXYtY2FyZHMvbmF2LWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgbWFyZ2luOiAwIDA7XG59XG5cbi5lbXBsb3llZS1zZWN0aW9uLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IDAgcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjUpO1xuICAgIGZsZXg6IDAgMCAzMS4zMzMzMzMlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcbiAgICB9XG4gICAgaDIsXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDQzMjY2O1xuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4uZGVzY3JpcHRpdmUtdGV4dCB7XG4gICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uZW1wbG95ZWUtY2FyZC13cmFwIHtcbiAgICBwYWRkaW5nOiA1MHB4IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/nav-cards/nav-cards.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/nav-cards/nav-cards.component.ts ***!
  \*******************************************************/
/*! exports provided: NavCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCardsComponent", function() { return NavCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavCardsComponent = /** @class */ (function () {
    function NavCardsComponent(httpservice, route) {
        this.httpservice = httpservice;
        this.route = route;
        this.data = [];
    }
    NavCardsComponent.prototype.ngOnInit = function () {
        this.getJson();
    };
    NavCardsComponent.prototype.getJson = function () {
        var _this = this;
        this.httpservice.getNavCard().subscribe(function (data) {
            _this.data = data;
        });
    };
    NavCardsComponent.prototype.routeUrl = function (card) {
        this.route.navigate([card.url]);
    };
    NavCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-cards',
            template: __webpack_require__(/*! ./nav-cards.component.html */ "./src/app/home/nav-cards/nav-cards.component.html"),
            styles: [__webpack_require__(/*! ./nav-cards.component.scss */ "./src/app/home/nav-cards/nav-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavCardsComponent);
    return NavCardsComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/banner-section/banner-section.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/nav-cards-details/banner-section/banner-section.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-card-info-banner\">\n    <div class=\"banner-bgcolor\">\n        <div class=\"container pl-0\">\n            <div class=\"row\">\n                <div class=\"col-md-8 pl-0\">\n                    <div class=\"banner-text\">\n                        <h2>{{bannertext}}</h2>\n                    </div>\n                    <div class=\"mt-3 row\">\n                        <input type=\"text\" class=\"form-control input-field\" placeholder=\"Search Forms\">\n                        <button class=\"btn btn-main-primary\">Search</button>\n                    </div>\n                    <div class=\"download-top-forms\" *ngIf=\"bannertext == 'forms'\">\n                        <ul>\n                            <li>Allowance <span><img src=\"../../../assets/images/download.png\" alt=\"\"> </span></li>\n                            <li>LTA<span><img src=\"../../../assets/images/download.png\" alt=\"\"> </span></li>\n                            <li>Medical<span><img src=\"../../../assets/images/download.png\" alt=\"\"> </span></li>\n                            <li>GPF<span><img src=\"../../../assets/images/download.png\" alt=\"\"> </span></li>\n                            <li>Reimbursements<span><img src=\"../../../assets/images/download.png\" alt=\"\"> </span></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/banner-section/banner-section.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/nav-cards-details/banner-section/banner-section.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-card-info-banner .row {\n  margin: 0 0; }\n\n.nav-card-info-banner .banner-bgcolor {\n  background-color: #043266;\n  padding-top: 3em;\n  padding-bottom: 3em; }\n\n.nav-card-info-banner .banner-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: left;\n  text-transform: capitalize; }\n\n.nav-card-info-banner .banner-text h2 {\n    font-weight: 700; }\n\n.nav-card-info-banner .banner-sub-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.nav-card-info-banner .input-field {\n  width: 70%;\n  height: 50px;\n  border-radius: 0;\n  border-radius: 2px 0px 0px 2px !important; }\n\n.nav-card-info-banner .input-field::-webkit-input-placeholder {\n    color: #9B9B9B; }\n\n.nav-card-info-banner .input-field::-ms-input-placeholder {\n    color: #9B9B9B; }\n\n.nav-card-info-banner .input-field::placeholder {\n    color: #9B9B9B; }\n\n.nav-card-info-banner .btn-main-primary {\n  border-radius: 0px 2px 2px 0px !important;\n  background-color: #C0D6DF;\n  border-radius: 0;\n  width: 130px;\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  line-height: 19px; }\n\n.nav-card-info-banner .download-top-forms ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  margin: 20px 0 0 0; }\n\n.nav-card-info-banner .download-top-forms ul li {\n    background: #C0D6DF;\n    border-radius: 3px;\n    box-shadow: 0 7px 14px 0 rgba(38, 38, 38, 0.5);\n    padding: 10px 15px;\n    margin-right: 20px;\n    color: #4A4A4A;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: 0.4px;\n    line-height: 19px;\n    display: flex;\n    cursor: pointer; }\n\n.nav-card-info-banner .download-top-forms ul li:hover {\n      background: #a6c9d8;\n      box-shadow: 0 7px 14px 0 rgba(38, 38, 38, 0.97); }\n\n.nav-card-info-banner .download-top-forms ul li span img {\n      height: 15px;\n      width: 15px;\n      margin-left: 20px; }\n\n.nav-card-info-banner input::-webkit-input-placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.nav-card-info-banner input::-ms-input-placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.nav-card-info-banner input::placeholder {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2Jhbm5lci1zZWN0aW9uL2Jhbm5lci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVyxFQUFBOztBQUZuQjtFQUtRLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBUDNCO0VBVVEsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQkFBMEIsRUFBQTs7QUFmbEM7SUFpQlksZ0JBQWdCLEVBQUE7O0FBakI1QjtFQXFCUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUEzQnhCO0VBOEJRLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlDQUF5QyxFQUFBOztBQWpDakQ7SUFtQ1ksY0FBYyxFQUFBOztBQW5DMUI7SUFtQ1ksY0FBYyxFQUFBOztBQW5DMUI7SUFtQ1ksY0FBYyxFQUFBOztBQW5DMUI7RUF1Q1EseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBaER6QjtFQW9EWSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUF2RDlCO0lBeURnQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWUsRUFBQTs7QUFwRS9CO01Bc0VvQixtQkFBbUI7TUFDbkIsK0NBQStDLEVBQUE7O0FBdkVuRTtNQTJFd0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTs7QUE3RXpDO0VBb0ZRLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQTFGeEI7RUFvRlEsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBMUZ4QjtFQW9GUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2Jhbm5lci1zZWN0aW9uL2Jhbm5lci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jYXJkLWluZm8tYmFubmVyIHtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwIDA7XG4gICAgfVxuICAgIC5iYW5uZXItYmdjb2xvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDMyNjY7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzZW07XG4gICAgfVxuICAgIC5iYW5uZXItdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iYW5uZXItc3ViLXRleHQge1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDBweCAwcHggMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG4tbWFpbi1wcmltYXJ5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMEQ2REY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIH1cbiAgICAuZG93bmxvYWQtdG9wLWZvcm1zIHtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0MwRDZERjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCAwIHJnYmEoMzgsIDM4LCAzOCwgMC41KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2E2YzlkODtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCAwIHJnYmEoMzgsIDM4LCAzOCwgMC45Nyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-cards-details/banner-section/banner-section.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/nav-cards-details/banner-section/banner-section.component.ts ***!
  \******************************************************************************/
/*! exports provided: BannerSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSectionComponent", function() { return BannerSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BannerSectionComponent = /** @class */ (function () {
    function BannerSectionComponent(router) {
        this.router = router;
        this.bannertext = '';
    }
    BannerSectionComponent.prototype.ngOnInit = function () {
        this.bannertext = this.router.url.substr(1).split('_').join(' ');
    };
    BannerSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-section',
            template: __webpack_require__(/*! ./banner-section.component.html */ "./src/app/nav-cards-details/banner-section/banner-section.component.html"),
            styles: [__webpack_require__(/*! ./banner-section.component.scss */ "./src/app/nav-cards-details/banner-section/banner-section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BannerSectionComponent);
    return BannerSectionComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/cards/cards.component.html":
/*!**************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/cards.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\n    <div class=\"row \">\n        <div class=\"col-md-4 pl-0\">\n            <app-notice-board-slide></app-notice-board-slide>\n        </div>\n        <div class=\"col-md-4\">\n            <app-employee-forum-slide></app-employee-forum-slide>\n        </div>\n        <div class=\"col-md-4 pr-0\">\n            <app-related-topics></app-related-topics>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/cards.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/cards.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/cards.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/cards.component.ts ***!
  \************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/nav-cards-details/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/nav-cards-details/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/cards/cards.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nav-cards-details/cards/cards.module.ts ***!
  \*********************************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notice_board_slide_notice_board_slide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-board-slide/notice-board-slide.component */ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.ts");
/* harmony import */ var _employee_forum_slide_employee_forum_slide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-forum-slide/employee-forum-slide.component */ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.ts");
/* harmony import */ var _related_topics_related_topics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related-topics/related-topics.component */ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.ts");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards.component */ "./src/app/nav-cards-details/cards/cards.component.ts");







var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notice_board_slide_notice_board_slide_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardSlideComponent"], _employee_forum_slide_employee_forum_slide_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeForumSlideComponent"], _related_topics_related_topics_component__WEBPACK_IMPORTED_MODULE_5__["RelatedTopicsComponent"], _cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_notice_board_slide_notice_board_slide_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardSlideComponent"], _employee_forum_slide_employee_forum_slide_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeForumSlideComponent"], _related_topics_related_topics_component__WEBPACK_IMPORTED_MODULE_5__["RelatedTopicsComponent"], _cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"]]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-inner card-bgcolor\">\n        <div class=\"col-12  notice-board-header px-1\">\n            <div><img src=\"./assets/images/megaphone.png\"></div>\n            <div class=\"header-link ml-3\">\n                Employee Forum\n            </div>\n        </div>\n        <div class=\"sub-header\">\n\n            <div id=\"carouselExampleIndicators1\" class=\"carousel slide\" data-ride=\"carousel\">\n\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active sub-link\">\n                        <div class=\"row col-md-12 tales\">\n                            <div class=\"sub-head \">Work from home</div>\n\n                            <div class=\"status-new px-2 \">New</div>\n                        </div>\n                        <span class=\"mr-2\"><img src=\"./assets/images/noun.png\"></span>\n                        <span class=\"ml-1\"> 76 replies</span>\n\n                        <p class=\"txt-ovrflow\">Work from home - Work from home should be allowed atleast twice every month? </p>\n\n                    </div>\n                    <div class=\"carousel-item sub-link\">\n                        <h2 class=\"sub-head  \">Tution fees of Higher Education from Tax rebate</h2>\n                        <span class=\"mr-2\"><img src=\"./assets/images/noun.png\"></span>\n                        <span class=\"ml-1\"> 22 replies</span>\n                        <p class=\"txt-ovrflow\">Work from home - Work from home should be allowed atleast twice every month? </p>\n                    </div>\n                    <div class=\"carousel-item sub-link\">\n                        <h2 class=\"sub-head \">Gst late fees w.r.t. income tax </h2>\n                        <span class=\"mr-2\"><img src=\"./assets/images/noun.png\"></span>\n                        <span class=\"ml-1\"> 31 replies</span>\n                        <p class=\"txt-ovrflow\">Work from home - Work from home should be allowed atleast twice every month? </p>\n\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators1\" role=\"button\" data-slide=\"prev\">\n\n                    <img src=\"./assets/images/white-arrow-left.png\" class=\" back-arrow\">\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators1\" role=\"button\" data-slide=\"next\">\n\n                    <img src=\"./assets/images/white-arrow-right.png\" class=\" back-arrow\">\n                </a>\n            </div>\n\n            <div class=\"view-all\"><a class=\"bottom-text\" href=\"#\">View Employee Forum</a>\n                <img src=\"./assets/images/white-arrow-right.png\" class=\" float-right back-arrow\">\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bgcolor {\n  background-color: #043266; }\n\n.header-link {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: left;\n  margin-top: 2px; }\n\n.sub-link {\n  color: #FFFFFF; }\n\n.sub-link h2 {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    text-align: left; }\n\n.sub-link p {\n    font-size: 14px;\n    font-weight: normal; }\n\n.sub-link div {\n    font-size: 12px; }\n\n.sub-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px;\n  width: 288px;\n  text-align: left; }\n\n.sub-head {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 19px;\n  text-align: left;\n  height: 20px;\n  overflow: hidden; }\n\n.back-arrow {\n  color: #FFFFFF;\n  width: 7px;\n  height: 12px;\n  margin-top: 5px;\n  margin-left: 15px; }\n\n.bottom-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 19px;\n  text-align: left; }\n\n.carousel-item,\n.view-all {\n  padding: 0 50px; }\n\n.notice-board-header {\n  display: flex;\n  height: 30px; }\n\n.card-inner {\n  padding: 20px 15px;\n  height: 260px;\n  border-radius: 4px; }\n\n.carousel {\n  padding: 20px 0;\n  height: 200px; }\n\n.status-new {\n  background-color: #D12929;\n  border-radius: 4px;\n  color: #FFFFFF;\n  height: 20px;\n  width: 40px;\n  font-size: 11px !important;\n  margin-left: 14px; }\n\n.txt-ovrflow {\n  text-overflow: ellipsis;\n  font-size: 14px;\n  margin-top: 20px; }\n\n.tales {\n  width: 100%; }\n\n.carousel-inner {\n  width: 100%;\n  max-height: 200px !important; }\n\nspan.mr-2 img {\n  height: 20px;\n  width: 20px;\n  -webkit-filter: brightness(3);\n          filter: brightness(3); }\n\n.ml-1 {\n  font-size: 12px;\n  font-weight: normal; }\n\n.view-all {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 20px; }\n\n.view-all a {\n    font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL2VtcGxveWVlLWZvcnVtLXNsaWRlL2VtcGxveWVlLWZvcnVtLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBTnhCO0lBU1EsZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQVYzQjtJQWFRLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7O0VBRUksZUFDSixFQUFBOztBQUVBO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBTWpCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFKaEI7SUFNUSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL2VtcGxveWVlLWZvcnVtLXNsaWRlL2VtcGxveWVlLWZvcnVtLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmdjb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzI2Njtcbn1cblxuLmhlYWRlci1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnN1Yi1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5cbi5zdWItdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAyODhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3ViLWhlYWQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ib3R0b20tdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJvdXNlbC1pdGVtLFxuLnZpZXctYWxsIHtcbiAgICBwYWRkaW5nOiAwIDUwcHhcbn1cblxuLm5vdGljZS1ib2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2FyZC1pbm5lciB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4vLyAuc3ViLWhlYWRlciB7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1NHB4XG4vLyB9XG4uc3RhdHVzLW5ldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMjkyOTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4udHh0LW92cmZsb3cge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGFsZXMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ubXItMiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5tbC0xIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnZpZXctYWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBhIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EmployeeForumSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeForumSlideComponent", function() { return EmployeeForumSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeForumSlideComponent = /** @class */ (function () {
    function EmployeeForumSlideComponent() {
    }
    EmployeeForumSlideComponent.prototype.ngOnInit = function () {
    };
    EmployeeForumSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-forum-slide',
            template: __webpack_require__(/*! ./employee-forum-slide.component.html */ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.html"),
            styles: [__webpack_require__(/*! ./employee-forum-slide.component.scss */ "./src/app/nav-cards-details/cards/employee-forum-slide/employee-forum-slide.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeForumSlideComponent);
    return EmployeeForumSlideComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-inner card-bgcolor\">\n        <div class=\"col-12  notice-board-header px-1\">\n            <div><img src=\"./assets/images/megaphone.png\"></div>\n            <div class=\"header-link ml-3\">\n                Notice Board\n            </div>\n        </div>\n        <div class=\"sub-header\">\n\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active sub-link\">\n                        <h2 class=\"sub-link\">Meeting Order</h2>\n                        <p>1All personnels from the Search and Survey department are requested to</p>\n                        <div>January 24th, 2019</div>\n                    </div>\n                    <div class=\"carousel-item sub-link\">\n                        <h2 class=\"sub-link\">Meeting Order</h2>\n                        <p>2All personnels from the Search and Survey department are requested to</p>\n                        <div>January 24th, 2019</div>\n                    </div>\n                    <div class=\"carousel-item sub-link\">\n                        <h2 class=\"sub-link\">Meeting Order</h2>\n                        <p>3All personnels from the Search and Survey department are requested to</p>\n                        <div>January 24th, 2019</div>\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\n                    <img src=\"./assets/images/white-arrow-left.png\" class=\" back-arrow\">\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\n                    <img src=\"./assets/images/white-arrow-right.png\" class=\" back-arrow\">\n                </a>\n            </div>\n\n            <div class=\"view-all\"><a class=\"bottom-text\" href=\"#\">View Notice Board</a>\n                <img src=\"./assets/images/white-arrow-right.png\" class=\" float-right back-arrow\">\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bgcolor {\n  background-color: #043266; }\n\n.header-link {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: left;\n  margin-top: 2px; }\n\n.sub-link {\n  color: #FFFFFF; }\n\n.sub-link h2 {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    text-align: left; }\n\n.sub-link p {\n    font-size: 14px;\n    font-weight: normal; }\n\n.sub-link div {\n    font-size: 12px; }\n\n.sub-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px;\n  width: 288px;\n  text-align: left; }\n\n.back-arrow {\n  color: #FFFFFF;\n  width: 7px;\n  height: 12px;\n  margin-left: 20px; }\n\n.bottom-text {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 19px;\n  text-align: left; }\n\n.carousel-item,\n.view-all {\n  padding: 0 50px; }\n\n.notice-board-header {\n  display: flex;\n  height: 30px; }\n\n.card-inner {\n  padding: 20px 15px;\n  height: 260px;\n  border-radius: 4px; }\n\n.carousel {\n  padding: 20px 0;\n  height: 200px; }\n\n.view-all {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 20px; }\n\n.view-all a {\n    font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL25vdGljZS1ib2FyZC1zbGlkZS9ub3RpY2UtYm9hcmQtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFOeEI7SUFTUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBVjNCO0lBYVEsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUVaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCOztFQUVJLGVBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFKaEI7SUFNUSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL25vdGljZS1ib2FyZC1zbGlkZS9ub3RpY2UtYm9hcmQtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iZ2NvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzMjY2O1xufVxuXG4uaGVhZGVyLWxpbmsge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc3ViLWxpbmsge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuLnN1Yi10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgd2lkdGg6IDI4OHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ib3R0b20tdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJvdXNlbC1pdGVtLFxuLnZpZXctYWxsIHtcbiAgICBwYWRkaW5nOiAwIDUwcHhcbn1cblxuLm5vdGljZS1ib2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2FyZC1pbm5lciB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4udmlldy1hbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NoticeBoardSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardSlideComponent", function() { return NoticeBoardSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



var NoticeBoardSlideComponent = /** @class */ (function () {
    function NoticeBoardSlideComponent(httpservice) {
        this.httpservice = httpservice;
        this.data = [];
    }
    NoticeBoardSlideComponent.prototype.ngOnInit = function () {
        this.getNoticeBoardSlideDetail();
    };
    NoticeBoardSlideComponent.prototype.getNoticeBoardSlideDetail = function () {
        var _this = this;
        this.httpservice.getNoticeBoardSlide().subscribe(function (data) {
            _this.data = data;
        });
    };
    NoticeBoardSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice-board-slide',
            template: __webpack_require__(/*! ./notice-board-slide.component.html */ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.html"),
            styles: [__webpack_require__(/*! ./notice-board-slide.component.scss */ "./src/app/nav-cards-details/cards/notice-board-slide/notice-board-slide.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NoticeBoardSlideComponent);
    return NoticeBoardSlideComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/related-topics/related-topics.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-bgcolor\">\n    <div class=\"  row py-4 px-5 \">\n        <h2 class=\"header-link\">Related Topics</h2>\n        <div class=\"col-md-12  seperator \">\n            <a href=\"\" class=\"float-left anchor-link\">Forms</a>\n            <img src=\"./assets/images/white-arrow-right.png\" class=\" float-right back-arrow\">\n        </div>\n        <div class=\"col-md-12  seperator\">\n            <a href=\"#\" class=\"float-left anchor-link\">Case Laws</a>\n            <img src=\"./assets/images/white-arrow-right.png\" class=\"float-right back-arrow\">\n        </div>\n        <div class=\"col-md-12  seperator\">\n            <a href=\"#\" class=\"float-left anchor-link\">Training</a>\n            <img src=\"./assets/images/white-arrow-right.png\" class=\"float-right back-arrow\">\n        </div>\n        <div class=\"col-md-12  seperator \">\n            <a href=\"#\" class=\"float-left anchor-link\">Books and Mannuals</a>\n            <img src=\"./assets/images/white-arrow-right.png\" class=\"float-right back-arrow\">\n        </div>\n        <div class=\"col-md-12  seperator \">\n            <a href=\"#\" class=\"float-left anchor-link\">FAQs</a>\n            <img src=\"./assets/images/white-arrow-right.png\" class=\"float-right back-arrow\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/related-topics/related-topics.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bgcolor {\n  background-color: #043266; }\n\n.header-link {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  text-align: left; }\n\n.anchor-link {\n  color: #FFFFFF;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 19px;\n  text-align: left; }\n\n.back-arrow {\n  color: #FFFFFF;\n  width: 7px;\n  height: 12px;\n  margin-top: 5px; }\n\n.seperator {\n  border-bottom: 0.1px solid #9398bf;\n  padding-bottom: 5px;\n  padding-top: 10px;\n  padding-left: 1px;\n  padding-right: 5px; }\n\n.seperator:last-child {\n    border-bottom: none; }\n\n.card {\n  height: 260px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL3JlbGF0ZWQtdG9waWNzL3JlbGF0ZWQtdG9waWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUx0QjtJQU9RLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL2NhcmRzL3JlbGF0ZWQtdG9waWNzL3JlbGF0ZWQtdG9waWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmdjb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzI2Njtcbn1cblxuLmhlYWRlci1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFuY2hvci1saW5rIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zZXBlcmF0b3Ige1xuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICM5Mzk4YmY7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG59XG5cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDI2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/nav-cards-details/cards/related-topics/related-topics.component.ts ***!
  \************************************************************************************/
/*! exports provided: RelatedTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedTopicsComponent", function() { return RelatedTopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RelatedTopicsComponent = /** @class */ (function () {
    function RelatedTopicsComponent() {
    }
    RelatedTopicsComponent.prototype.ngOnInit = function () {
    };
    RelatedTopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-related-topics',
            template: __webpack_require__(/*! ./related-topics.component.html */ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.html"),
            styles: [__webpack_require__(/*! ./related-topics.component.scss */ "./src/app/nav-cards-details/cards/related-topics/related-topics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RelatedTopicsComponent);
    return RelatedTopicsComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/main-content/main-content.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/nav-cards-details/main-content/main-content.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 main-content-component p-4\">\n    <div class=\"col-md-12 row header-style mb-3\">\n        <h5>Allowance form</h5>\n        <span class=\"ml-2 form-style\">&#40;{{count}} forms &#41;</span>\n    </div>\n    <div class=\"main-content-accordion\" *ngIf=\"showAccordion\">\n        <mat-accordion>\n            <mat-expansion-panel *ngFor=\"let data of data; let i = index\" class=\"p-0\">\n                <mat-expansion-panel-header class=\"accordion-header pl-0\">\n                    <mat-panel-title>\n                        {{data.title}}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <mat-panel-description class=\"mb-4\">\n                    <div class=\"accordion-desc p-0\">{{data.desc}}</div>\n                </mat-panel-description>\n                <div class=\"col-md-12 accordion-content mt-1 py-2 px-3\" *ngFor=\"let elements of data.details\">\n                    <div class=\"accordion-tag\">\n                        <span class=\"mr-2\"><img src=\"../../../assets/images/noun-pdf.png\"></span> {{elements.tag}}\n                    </div>\n                    <div class=\"accordion-guidelines\"><a href=\"http://www.africau.edu/images/default/sample.pdf\" target=\"_blank\">View guidelines notes</a></div>\n                </div>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n\n    <div class=\"main-content-description\" *ngIf=\"!showAccordion\">\n        <div class=\"row col-md-12 my-3 px-0 pb-3 seperator\" *ngFor=\"let item of item;let i= index\">\n            <h4 class=\"description-header\">{{item.title}}</h4>\n            <div class=\"col-md-12 p-0 data-desc\">\n                <p>{{item.desc}}</p>\n            </div>\n            <div class=\"links\">\n                <span *ngFor=\"let dwnld of item.links\">{{dwnld.link}}</span>\n            </div>\n            <div class=\"col-md-12 p-0\">\n                <a href=\"http://www.africau.edu/images/default/sample.pdf\" target=\"_blank\"> <button class=\"btn download-btn-primary float-left\"><img src=\"/assets/images/download.png\" alt=\"\">Download PDF</button></a>\n                <div class=\"float-right\">\n                    <div class=\"col-md-12 date-style\">{{item.date}}</div>\n                    <div class=\"col-md-12 download-style\">{{item.download}} downloads</div>\n                    <div class=\"col-md-12 uploaded-by-style\">Uploaded By: {{item.name}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"navigator col-md-12 mt-4 p-0\" *ngIf=\"pageNav\">\n    <div class=\"left-nav\">\n        <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n    </div>\n    <div class=\"right-nav\">\n        <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/main-content/main-content.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/nav-cards-details/main-content/main-content.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content-component {\n  background-color: #F2F3F5; }\n\n.header-style h5 {\n  color: #000000;\n  font-family: Raleway;\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: underline;\n  margin-bottom: 0; }\n\n.form-style {\n  color: #474747;\n  font-family: OpenSans;\n  font-size: 14px;\n  margin-top: 2px; }\n\n.main-content-accordion .accordion-header {\n  border-bottom: 1px solid #d2d2d2;\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none; }\n\n.main-content-accordion img {\n  height: 12px;\n  width: 6px; }\n\n.main-content-accordion .accordion-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #FFFFFF;\n  border-radius: 4px; }\n\n.main-content-accordion .accordion-desc {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 15px; }\n\n.main-content-accordion .margin-top-19 {\n  margin-top: 19px; }\n\n.main-content-accordion .accordion-tag {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 15px; }\n\n.main-content-accordion .accordion-tag img {\n    height: 25px;\n    width: 20px; }\n\n.main-content-accordion .accordion-guidelines a {\n  color: #D12929;\n  font-family: OpenSans;\n  font-size: 13px;\n  text-decoration: underline;\n  cursor: pointer; }\n\n.main-content-description .row {\n  margin: 0 0; }\n\n.main-content-description .description-header {\n  color: #000000;\n  font-family: OpenSans;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none; }\n\n.main-content-description .data-desc,\n.main-content-description .date-style,\n.main-content-description .uploaded-by-style {\n  color: #4A4A4A;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5px; }\n\n.main-content-description .download-style {\n  color: #D12929;\n  font-family: OpenSans;\n  font-size: 13px;\n  text-decoration: underline;\n  cursor: pointer; }\n\n.main-content-description .download-btn-primary {\n  background: #C0D6DF;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin-right: 20px;\n  color: #000000;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  line-height: 19px; }\n\n.main-content-description .download-btn-primary:hover {\n    box-shadow: 0px 2px 5px #05306a66; }\n\n.main-content-description .download-btn-primary img {\n    width: 16px;\n    margin-right: 10px; }\n\n.main-content-description .seperator {\n  border-bottom: 1px solid #d2d2d2; }\n\n.mat-expansion-panel-header-title {\n  font-weight: 600; }\n\n.accordion-header:hover {\n  cursor: pointer; }\n\n.mat-expansion-panel-spacing {\n  margin: 0; }\n\n.navigator {\n  display: flex;\n  justify-content: flex-end; }\n\n.navigator .left-nav,\n  .navigator .right-nav {\n    background: #043266;\n    padding: 8px 10px;\n    display: flex;\n    margin: 0 10px;\n    align-items: center; }\n\n.navigator .left-nav {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFFUSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFFUSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBOztBQVA3QjtFQVVRLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBWGxCO0VBY1EsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQWxCMUI7RUFxQlEsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQXpCeEI7RUE0QlEsZ0JBQWdCLEVBQUE7O0FBNUJ4QjtFQStCUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFqQ3ZCO0lBbUNZLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBcEN2QjtFQXlDWSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUszQjtFQUVRLFdBQVcsRUFBQTs7QUFGbkI7RUFLUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBVDdCOzs7RUFjUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQWxCdkI7RUFxQlEsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUF6QnZCO0VBNEJRLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBcEN6QjtJQXNDWSxpQ0FBaUMsRUFBQTs7QUF0QzdDO0lBeUNZLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUExQzlCO0VBOENRLGdDQUFnQyxFQUFBOztBQUl4QztFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUVRLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRjdCOztJQUtRLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTs7QUFUM0I7SUFZUSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYtY2FyZHMtZGV0YWlscy9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudC1jb21wb25lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG59XG5cbi5oZWFkZXItc3R5bGUge1xuICAgIGg1IHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbn1cblxuLmZvcm0tc3R5bGUge1xuICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubWFpbi1jb250ZW50LWFjY29yZGlvbiB7XG4gICAgLmFjY29yZGlvbi1oZWFkZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICB9XG4gICAgLmFjY29yZGlvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIC5hY2NvcmRpb24tZGVzYyB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICAgLm1hcmdpbi10b3AtMTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICAgIH1cbiAgICAuYWNjb3JkaW9uLXRhZyB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hY2NvcmRpb24tZ3VpZGVsaW5lcyB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICNEMTI5Mjk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1haW4tY29udGVudC1kZXNjcmlwdGlvbiB7XG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogMCAwO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24taGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5kYXRhLWRlc2MsXG4gICAgLmRhdGUtc3R5bGUsXG4gICAgLnVwbG9hZGVkLWJ5LXN0eWxlIHtcbiAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICAgIC5kb3dubG9hZC1zdHlsZSB7XG4gICAgICAgIGNvbG9yOiAjRDEyOTI5O1xuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmRvd25sb2FkLWJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0MwRDZERjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjMDUzMDZhNjY7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZXBlcmF0b3Ige1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICB9XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5uYXZpZ2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAubGVmdC1uYXYsXG4gICAgLnJpZ2h0LW5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNDMyNjY7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxlZnQtbmF2IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-cards-details/main-content/main-content.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/nav-cards-details/main-content/main-content.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.data = [];
        this.item = [];
        this.count = 0;
        this.showAccordion = false;
        this.pageNav = false;
    }
    MainContentComponent.prototype.ngOnInit = function () {
        this.getAllowanceFormDetail();
        this.getMainContentDetail();
        this.checkPath();
    };
    MainContentComponent.prototype.checkPath = function () {
        var pageUrl = this.route.snapshot.url[0].path;
        if (pageUrl === "forms" || pageUrl === "search_and_seizures") {
            this.showAccordion = true;
        }
        else if (pageUrl === "case_laws" || pageUrl === "training" || pageUrl === "books_and_manual") {
            this.showAccordion = false;
        }
        this.pageNavCheck(pageUrl);
    };
    MainContentComponent.prototype.pageNavCheck = function (pageUrl) {
        console.log(pageUrl, "ok");
        if (pageUrl === "case_laws" || pageUrl === "books_and_manual") {
            this.pageNav = true;
        }
        else if (pageUrl === "forms" || pageUrl === "search_and_seizures" || pageUrl === "training") {
            this.pageNav = false;
        }
    };
    MainContentComponent.prototype.getAllowanceFormDetail = function () {
        var _this = this;
        this.httpService.getAllowanceForm().subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                var obj = data[i];
                _this.count += obj["details"].length;
            }
        });
    };
    MainContentComponent.prototype.getMainContentDetail = function () {
        var _this = this;
        this.httpService.getMainContent().subscribe(function (item) {
            _this.item = item;
        });
    };
    ;
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/nav-cards-details/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/nav-cards-details/main-content/main-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/nav-cards-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/nav-cards-details/nav-cards-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-section></app-banner-section>\n<app-breadcrumb></app-breadcrumb>\n<div class=\"container mb-5\">\n    <div class=\"row \">\n        <div class=\"col-md-3 p-0\">\n            <app-side-nav></app-side-nav>\n        </div>\n        <div class=\"col-md-9 p-0\" [class.width100]=\"width100\">\n            <app-main-content></app-main-content>\n        </div>\n    </div>\n</div>\n<app-cards></app-cards>"

/***/ }),

/***/ "./src/app/nav-cards-details/nav-cards-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/nav-cards-details/nav-cards-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width100 {\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL25hdi1jYXJkcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2LWNhcmRzLWRldGFpbHMvbmF2LWNhcmRzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgxMDAge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-cards-details/nav-cards-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/nav-cards-details/nav-cards-details.component.ts ***!
  \******************************************************************/
/*! exports provided: NavCardsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCardsDetailsComponent", function() { return NavCardsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavCardsDetailsComponent = /** @class */ (function () {
    function NavCardsDetailsComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.data = [];
        this.width100 = false;
    }
    NavCardsDetailsComponent.prototype.ngOnInit = function () {
        this.routePage();
    };
    NavCardsDetailsComponent.prototype.routePage = function () {
        var pageUrl = this.route.snapshot.url[0].path;
        if (pageUrl == "case_laws") {
            this.width100 = true;
        }
        else {
            this.width100 = false;
        }
        this.httpService.routePage(pageUrl).subscribe(function (data) {
        });
    };
    NavCardsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-cards-details',
            template: __webpack_require__(/*! ./nav-cards-details.component.html */ "./src/app/nav-cards-details/nav-cards-details.component.html"),
            styles: [__webpack_require__(/*! ./nav-cards-details.component.scss */ "./src/app/nav-cards-details/nav-cards-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NavCardsDetailsComponent);
    return NavCardsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/nav-cards-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/nav-cards-details/nav-cards-details.module.ts ***!
  \***************************************************************/
/*! exports provided: NavCardsDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCardsDetailsModule", function() { return NavCardsDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banner_section_banner_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner-section/banner-section.component */ "./src/app/nav-cards-details/banner-section/banner-section.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/nav-cards-details/side-nav/side-nav.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/nav-cards-details/main-content/main-content.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_cards_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-cards-details.component */ "./src/app/nav-cards-details/nav-cards-details.component.ts");
/* harmony import */ var _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generic/generic.module */ "./src/app/generic/generic.module.ts");
/* harmony import */ var _cards_cards_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards/cards.module */ "./src/app/nav-cards-details/cards/cards.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






// tslint:disable-next-line: max-line-length






var NavCardsDetailsModule = /** @class */ (function () {
    function NavCardsDetailsModule() {
    }
    NavCardsDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_banner_section_banner_section_component__WEBPACK_IMPORTED_MODULE_3__["BannerSectionComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_5__["MainContentComponent"], _nav_cards_details_component__WEBPACK_IMPORTED_MODULE_8__["NavCardsDetailsComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__["GenericModule"],
                _cards_cards_module__WEBPACK_IMPORTED_MODULE_10__["CardsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            exports: [_banner_section_banner_section_component__WEBPACK_IMPORTED_MODULE_3__["BannerSectionComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_5__["MainContentComponent"], _nav_cards_details_component__WEBPACK_IMPORTED_MODULE_8__["NavCardsDetailsComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]]
        })
    ], NavCardsDetailsModule);
    return NavCardsDetailsModule;
}());



/***/ }),

/***/ "./src/app/nav-cards-details/side-nav/side-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/nav-cards-details/side-nav/side-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav-wrap\">\n    <div class=\"side-nav\">\n        <ul>\n            <li *ngFor=\"let data of finalData[0]?.list, let i = index;\" [ngClass]=\"{'active': selectedItem == data }\" (click)=\"listClick($event, data)\">\n                {{data.title}}<span>\n                    <img  *ngIf=\"!imgSrc\" src=\"/assets/images/arrow-black.png\" alt=\"\">\n                    <img *ngIf=\"imgSrc\" src=\"/assets/images/arrow-white.png\" alt=\"\">\n                </span>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-cards-details/side-nav/side-nav.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/nav-cards-details/side-nav/side-nav.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-wrap {\n  margin-right: 40px; }\n  .side-nav-wrap .side-nav ul {\n    list-style-type: none;\n    padding: 0; }\n  .side-nav-wrap .side-nav ul li {\n      padding: 15px;\n      color: #474747;\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 19px;\n      text-align: left;\n      cursor: pointer;\n      border-bottom: 1px solid #7A7A7A; }\n  .side-nav-wrap .side-nav ul li.active, .side-nav-wrap .side-nav ul li.activefirst {\n        background: #043266;\n        border-left: 10px solid #C0D6DF;\n        color: white; }\n  .side-nav-wrap .side-nav ul li.active:hover, .side-nav-wrap .side-nav ul li.activefirst:hover {\n          background: #043266; }\n  .side-nav-wrap .side-nav ul li:hover {\n        background: #05306a0a; }\n  .side-nav-wrap .side-nav ul li span {\n        float: right; }\n  .side-nav-wrap .side-nav ul li span img {\n          height: 10px;\n          width: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFJWSxxQkFBcUI7SUFDckIsVUFBVSxFQUFBO0VBTHRCO01BT2dCLGFBQWE7TUFDYixjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixnQ0FBZ0MsRUFBQTtFQWRoRDtRQWlCb0IsbUJBQW1CO1FBQ25CLCtCQUErQjtRQUMvQixZQUFZLEVBQUE7RUFuQmhDO1VBcUJ3QixtQkFBbUIsRUFBQTtFQXJCM0M7UUF5Qm9CLHFCQUFxQixFQUFBO0VBekJ6QztRQTRCb0IsWUFBWSxFQUFBO0VBNUJoQztVQThCd0IsWUFBWTtVQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi1jYXJkcy1kZXRhaWxzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbmF2LXdyYXAge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAuc2lkZS1uYXYge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3QTdBN0E7XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJi5hY3RpdmVmaXJzdCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNDMyNjY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNDMEQ2REY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDQzMjY2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDUzMDZhMGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-cards-details/side-nav/side-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/nav-cards-details/side-nav/side-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.data = [];
        this.finalData = [];
        this.pageUrl = '';
        this.imgSrc = false;
        this.isClicked = [];
        this.activefirst = true;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.pageUrl = this.route.snapshot.url[0].path;
        console.log(this.pageUrl);
        this.SideNavCurrentPage();
    };
    //to call json for side nav
    SideNavComponent.prototype.SideNavCurrentPage = function () {
        var _this = this;
        this.httpService.getSideNavCurrentPage().subscribe(function (data) {
            _this.data = data;
            console.log(_this.data, "side nav content");
            _this.finalData = _this.data.filter(function (item) { return item.page === _this.pageUrl; });
            console.log(_this.finalData);
            _this.selectedItem = _this.finalData[0].list[0];
        });
    };
    SideNavComponent.prototype.listClick = function (event, newValue) {
        if (event.target.classList.contains('active')) {
            alert("Asd");
            this.imgSrc = true;
        }
        this.selectedItem = newValue;
        console.log(event.target.classList.contains('active'), "new value");
        this.activefirst = false;
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/nav-cards-details/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/nav-cards-details/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';


// import { throwError } from 'rxjs';

var HttpService = /** @class */ (function () {
    function HttpService(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.text = '';
        this.getNavCard = function () {
            return _this.http.get('assets/json/employee-card.json');
        };
        this.getHomeBlog = function () {
            return _this.http.get('assets/json/home-blog.json');
        };
        this.getEmployeeForum = function () {
            return _this.http.get('assets/json/employee-forum.json');
        };
        this.getLocal = function (api) {
            return _this.http.get(api);
        };
        this.getAllowanceForm = function () {
            return _this.http.get('assets/json/allowance-form.json');
        };
        this.getMainContent = function () {
            return _this.http.get('assets/json/main-content.json');
        };
    }
    HttpService.prototype.getNoticeBoard = function () {
        return this.http.get('assets/json/notice-board.json');
    };
    HttpService.prototype.getNoticeBoardSlide = function () {
        return this.http.get('assets/json/notice-board-slide.json');
    };
    HttpService.prototype.getNoticeBoardView = function () {
        return this.http.get('assets/json/notice-board-view.json');
    };
    HttpService.prototype.getSideNavCurrentPage = function () {
        return this.http.get("assets/json/navcard-side-nav.json");
    };
    HttpService.prototype.routePage = function (pageUrl) {
        switch (pageUrl) {
            case 'forms':
                return this.http.get('assets/json/notice-board.json');
                break;
            case 'books_and_manual':
                return this.http.get('assets/json/notice-board.json');
                break;
            case 'search_and_seizures':
                return this.http.get('assets/json/notice-board.json');
                break;
            case 'training':
                return this.http.get('assets/json/notice-board.json');
                break;
            case 'faqs':
                return this.http.get('assets/json/notice-board.json');
                break;
            case 'case_laws':
                return this.http.get('assets/json/notice-board.json');
                break;
            default: return;
        }
        // if (this.pageUrl == "Forum") {
        //   getNavCardFormDetails() {
        //     return this.http.get("assets/json/notice-board.json");
        //   }
        //   // this.text = "Forum";
        //   // return this.text;
        // }
        // else if (this.pageUrl == "Books_And_Manual") {
        //   this.text = "Books_And_Manual";
        //   return this.text;
        // }
        // else if (this.pageUrl == "Search") {
        //   this.text = "Search";
        //   return this.text;
        // }
        // else if (this.pageUrl == "Case_Laws") {
        //   this.text = "Case_Laws";
        //   return this.text;
        // }
        // else if (this.pageUrl == "Training") {
        //   this.text = "Training";
        //   return this.text;
        // }
        // else if (this.pageUrl == "Faq") {
        //   this.text = "Faq";
        //   return this.text;
        // }
    };
    HttpService.prototype.handleResponseError = function (err) {
        alert(err);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/view-all/banner-view/banner-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/view-all/banner-view/banner-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-view\">\n    <div class=\"background-overlay\"></div>\n    <div class=\"container p-0\">\n        <div class=\"col-md-12 p-0 mb-4\">\n            <h5>{{bannerText}}</h5>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"search-bar\">\n                    <span><img src=\"../../../assets/images/arrow-black.png\" alt=\"\"></span>\n                    <input type=\"text\" class=\"form-control input-field\" placeholder=\"Search\">\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"date-picker-wrap\">\n                    <!-- <mat-form-field>\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker> \n                    </mat-form-field> -->\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"select-box\">\n                    <select class=\"form-control form-control-md\">\n                        <option>Categories</option>\n                      </select>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/view-all/banner-view/banner-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view-all/banner-view/banner-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-view {\n  background-image: url(https://www.pnbmetlife.com/images/Income%20Tax%20Slab%20Rate%20%20Deductions%20-%20FY%202016%20-17%20%20AY%202017-2018_960x362_tcm47-60826.jpg);\n  height: 220px;\n  display: flex;\n  align-items: center;\n  background-size: cover;\n  background-position-y: center;\n  display: flex;\n  align-items: center;\n  position: relative; }\n  .banner-view h5 {\n    color: #FFFFFF;\n    font-size: 36px;\n    text-transform: capitalize;\n    font-weight: 600; }\n  .banner-view .background-overlay {\n    height: 100%;\n    width: 100%;\n    background: #043266ad;\n    position: absolute; }\n  .banner-view .search-bar {\n    display: flex;\n    align-items: center; }\n  .banner-view .search-bar span {\n      width: 30px;\n      background: #F2F3F5;\n      height: 50px;\n      padding: 11px 20px; }\n  .banner-view .search-bar input {\n      height: 50px;\n      border-radius: 0px;\n      border: none;\n      background: #F2F3F5; }\n  .banner-view .date-picker-wrap {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background: #F2F3F5;\n    height: 50px;\n    padding: 0 20px; }\n  .banner-view .date-picker-wrap mat-datepicker-toggle button {\n      background: transparent; }\n  .banner-view .select-box {\n    height: 50px;\n    background: #F2F3F5;\n    display: flex;\n    align-items: center; }\n  .banner-view .select-box select {\n      background: transparent;\n      border: none; }\n  .banner-view .select-box select:focus {\n        border: none;\n        box-shadow: none; }\n  .banner-view .select-box select option {\n        background: white;\n        height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL3ZpZXctYWxsL2Jhbm5lci12aWV3L2Jhbm5lci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUtBQXFLO0VBQ3JLLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQVZ0QjtJQVlRLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQixFQUFBO0VBZnhCO0lBa0JRLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBckIxQjtJQXdCUSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUF6QjNCO01BMkJZLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQixFQUFBO0VBOUI5QjtNQWlDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixtQkFBbUIsRUFBQTtFQXBDL0I7SUF3Q1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlLEVBQUE7RUE3Q3ZCO01BK0NZLHVCQUF1QixFQUFBO0VBL0NuQztJQW1EUSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQXREM0I7TUF3RFksdUJBQXVCO01BQ3ZCLFlBQVksRUFBQTtFQXpEeEI7UUEyRGdCLFlBQVk7UUFDWixnQkFBZ0IsRUFBQTtFQTVEaEM7UUErRGdCLGlCQUFpQjtRQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsbC9iYW5uZXItdmlldy9iYW5uZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItdmlldyB7XG4gICAgLy8gYmFja2dyb3VuZDogIzA0MzI2NjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cucG5ibWV0bGlmZS5jb20vaW1hZ2VzL0luY29tZSUyMFRheCUyMFNsYWIlMjBSYXRlJTIwJTIwRGVkdWN0aW9ucyUyMC0lMjBGWSUyMDIwMTYlMjAtMTclMjAlMjBBWSUyMDIwMTctMjAxOF85NjB4MzYyX3RjbTQ3LTYwODI2LmpwZyk7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGg1IHtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5iYWNrZ3JvdW5kLW92ZXJsYXkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDQzMjY2YWQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnNlYXJjaC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YyRjNGNTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjJGM0Y1O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRlLXBpY2tlci13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGMkYzRjU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBtYXQtZGF0ZXBpY2tlci10b2dnbGUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3QtYm94IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjJGM0Y1O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-all/banner-view/banner-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-all/banner-view/banner-view.component.ts ***!
  \***************************************************************/
/*! exports provided: BannerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerViewComponent", function() { return BannerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BannerViewComponent = /** @class */ (function () {
    function BannerViewComponent(route) {
        this.route = route;
        this.bannerText = '';
    }
    BannerViewComponent.prototype.ngOnInit = function () {
        this.bannerText = this.route.url.substr(1).split('_').join(' ');
    };
    BannerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-view',
            template: __webpack_require__(/*! ./banner-view.component.html */ "./src/app/view-all/banner-view/banner-view.component.html"),
            styles: [__webpack_require__(/*! ./banner-view.component.scss */ "./src/app/view-all/banner-view/banner-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BannerViewComponent);
    return BannerViewComponent;
}());



/***/ }),

/***/ "./src/app/view-all/blog-inner/blog-inner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view-all/blog-inner/blog-inner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-inner-section mb-4\">\n    <div class=\"blog-breadcrum-bgcolor\">\n        <div class=\"breadcrumb-wrap\">\n            <div class=\"container\">\n                <div class=\"row col-md-12\">\n                    <div class=\"breadcrumbb\">\n                        <ul class=\"py-3 mt-2 mb-2\">\n                            <li>Home</li>\n                            <li>Blog</li>\n                            <li class=\"active\">{{ result }}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container blog-detail-section mt-5 \">\n        <div class=\"row\">\n            <div class=\"col-md-8 pr-5\">\n                <div class=\"row\">\n                    <div class=\"col-md-9 row\">\n                        <h3 class=\"col-md-11 pr-0\">{{result}}</h3>\n                        <span class=\"col-md-1 share-image pl-0\"><img src=\"../../../assets/images/share.png\"></span>\n                    </div>\n                    <div class=\"col-md-3 p-0 header-tag\">\n                        <span class=\"blog-card-tag\">Stories</span>\n                    </div>\n                </div>\n                <div class=\"col-md-12 p-0\">\n                    <span class=\"blog-uploader-name\">By Jason Holding</span>\n                    <span class=\"blog-card-date\">December 14th, 2019</span>\n                </div>\n                <div class=\"col-md-12 blog-bg-image my-4 p-0\">\n                    <img src=\"../../../assets/images/blog-bg.png\">\n                </div>\n                <div class=\"col-md-12 blog-detail-text p-0\">\n                    <p>\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                    </p>\n                    <p>\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing\n                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five\n                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n                        software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting\n                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also\n                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n                        Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                    </p>\n                    <p>\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has\n                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                    </p>\n                </div>\n\n                <div class=\"navigator col-md-12 mt-4 p-0\">\n                    <div class=\"left-nav\">\n                        <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n                    </div>\n                    <div class=\"right-nav\">\n                        <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 pr-0 blog-card-section\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 mb-3\">\n                        <h3>Top Blogs</h3>\n                    </div>\n                    <div class=\"col-md-12\" *ngFor=\"let element of data\">\n                        <div class=\"blog-wrap\">\n                            <img class=\"card-img-top\" src='assets/images/{{element.img}}' alt=\"Card image cap\">\n                            <div class=\"card-body row\">\n                                <div class=\"col-md-12 p-0\">\n                                    <span class=\"blog-card-date\">{{element.date}}</span>\n                                    <span class=\"blog-card-tag \">{{element.tag}}</span>\n                                </div>\n                                <h6 class=\"card-title\">{{element.title}}</h6>\n                                <p class=\"card-text\">By {{element.author}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/view-all/blog-inner/blog-inner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/view-all/blog-inner/blog-inner.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-inner-section .blog-breadcrum-bgcolor {\n  background-color: #043266; }\n  .blog-inner-section .blog-breadcrum-bgcolor .breadcrumb-wrap .breadcrumbb ul {\n    display: flex;\n    padding: 0;\n    list-style-type: none; }\n  .blog-inner-section .blog-breadcrum-bgcolor .breadcrumb-wrap .breadcrumbb ul li {\n      color: #fff;\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 19px;\n      text-align: left;\n      text-transform: capitalize;\n      cursor: pointer; }\n  .blog-inner-section .blog-breadcrum-bgcolor .breadcrumb-wrap .breadcrumbb ul li:after {\n        display: inline-block;\n        padding-right: 5px;\n        padding-left: 5px;\n        color: #fff;\n        margin: 0 5px;\n        content: \" > \"; }\n  .blog-inner-section .blog-breadcrum-bgcolor .breadcrumb-wrap .breadcrumbb ul li:last-child:after {\n        content: \"  \"; }\n  .blog-inner-section .blog-breadcrum-bgcolor .breadcrumb-wrap .breadcrumbb ul li.active {\n        font-weight: 600; }\n  .blog-inner-section .blog-detail-section .share-image img {\n  height: 22px;\n  width: 20px; }\n  .blog-inner-section .blog-detail-section .header-tag {\n  top: 20px;\n  left: 15px; }\n  .blog-inner-section .blog-detail-section h3 {\n  color: #043266;\n  font-size: 20px;\n  font-weight: 700; }\n  .blog-inner-section .blog-detail-section .blog-card-tag {\n  color: #efe8e8;\n  font-size: 12px;\n  padding: 3px 15px;\n  float: right;\n  border-radius: 50px;\n  background-color: #043266; }\n  .blog-inner-section .blog-detail-section .blog-uploader-name {\n  color: #4A4A4A9c;\n  font-size: 14px; }\n  .blog-inner-section .blog-detail-section .blog-card-date {\n  color: #4A4A4A9c;\n  font-size: 14px;\n  float: right; }\n  .blog-inner-section .blog-detail-section .blog-bg-image img {\n  width: 100%;\n  height: 300px; }\n  .blog-inner-section .blog-detail-section .blog-detail-text {\n  color: #474747;\n  font-size: 14px;\n  font-weight: 400; }\n  .blog-inner-section .blog-detail-section .navigator {\n  display: flex;\n  justify-content: flex-end; }\n  .blog-inner-section .blog-detail-section .navigator .left-nav,\n  .blog-inner-section .blog-detail-section .navigator .right-nav {\n    background: #043266;\n    padding: 8px 10px;\n    display: flex;\n    margin: 0 10px;\n    align-items: center; }\n  .blog-inner-section .blog-detail-section .navigator .left-nav {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n  .blog-inner-section .blog-card-section h3 {\n  color: #000; }\n  .blog-inner-section .blog-card-section .blog-wrap {\n  margin-bottom: 20px; }\n  .blog-inner-section .blog-card-section .blog-wrap:hover {\n    cursor: pointer; }\n  .blog-inner-section .blog-card-section .blog-wrap .blog-card-date {\n    color: #4A4A4A9c;\n    font-size: 14px;\n    float: left; }\n  .blog-inner-section .blog-card-section .blog-wrap .blog-card-tag {\n    color: #efe8e8;\n    font-size: 12px;\n    padding: 3px 15px;\n    float: right;\n    border-radius: 50px;\n    background-color: #043266; }\n  .blog-inner-section .blog-card-section .blog-wrap .card-title {\n    padding-top: 15px;\n    font-weight: 600;\n    margin-bottom: 5px;\n    height: 54px;\n    overflow: hidden; }\n  .blog-inner-section .blog-card-section .blog-wrap .card-text {\n    color: #4A4A4A9c;\n    font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL3ZpZXctYWxsL2Jsb2ctaW5uZXIvYmxvZy1pbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUVRLHlCQUF5QixFQUFBO0VBRmpDO0lBTW9CLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCLEVBQUE7RUFSekM7TUFVd0IsV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIsZUFBZSxFQUFBO0VBaEJ2QztRQWtCNEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjLEVBQUE7RUF2QjFDO1FBMkJnQyxhQUFhLEVBQUE7RUEzQjdDO1FBK0I0QixnQkFBZ0IsRUFBQTtFQS9CNUM7RUF5Q2dCLFlBQVk7RUFDWixXQUFXLEVBQUE7RUExQzNCO0VBOENZLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUEvQ3RCO0VBa0RZLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFwRDVCO0VBdURZLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7RUE1RHJDO0VBK0RZLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFoRTNCO0VBbUVZLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBckV4QjtFQXlFZ0IsV0FBVztFQUNYLGFBQWEsRUFBQTtFQTFFN0I7RUE4RVksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQWhGNUI7RUFtRlksYUFBYTtFQUNiLHlCQUF5QixFQUFBO0VBcEZyQzs7SUF1RmdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQTNGbkM7SUE4RmdCLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQTlGMUM7RUFvR1ksV0FBVyxFQUFBO0VBcEd2QjtFQXVHWSxtQkFBbUIsRUFBQTtFQXZHL0I7SUF5R2dCLGVBQWUsRUFBQTtFQXpHL0I7SUE0R2dCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBOUczQjtJQWlIZ0IsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTtFQXRIekM7SUF5SGdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQTdIaEM7SUFnSWdCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsbC9ibG9nLWlubmVyL2Jsb2ctaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmJsb2ctaW5uZXItc2VjdGlvbiB7XG4gICAgICAgIC5ibG9nLWJyZWFkY3J1bS1iZ2NvbG9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDMyNjY7XG4gICAgICAgICAgICAuYnJlYWRjcnVtYi13cmFwIHtcbiAgICAgICAgICAgICAgICAuYnJlYWRjcnVtYmIge1xuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIgPiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmxvZy1kZXRhaWwtc2VjdGlvbiB7XG4gICAgICAgICAgICAuc2hhcmUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci10YWcge1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQzMjY2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2ctY2FyZC10YWcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlOGU4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTVweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzMjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2ctdXBsb2FkZXItbmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE5YztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZy1jYXJkLWRhdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEE0QTRBOWM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nLWJnLWltYWdlIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZy1kZXRhaWwtdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2aWdhdG9yIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLmxlZnQtbmF2LFxuICAgICAgICAgICAgICAgIC5yaWdodC1uYXYge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDQzMjY2O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sZWZ0LW5hdiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmxvZy1jYXJkLXNlY3Rpb24ge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2ctd3JhcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZy1jYXJkLWRhdGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRBNEE0QTljO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZy1jYXJkLXRhZyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlOGU4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDMyNjY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE5YztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/view-all/blog-inner/blog-inner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-all/blog-inner/blog-inner.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogInnerComponent", function() { return BlogInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");




var BlogInnerComponent = /** @class */ (function () {
    function BlogInnerComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.bannerText = "";
        this.data = [];
        this.result = "";
    }
    BlogInnerComponent.prototype.ngOnInit = function () {
        this.bannerText = this.router.url;
        this.result = this.router.url.substring(this.bannerText.lastIndexOf("/")).replace('/', " ").split("_").join(" ");
        console.log(this.result);
        this.getJson();
    };
    BlogInnerComponent.prototype.getJson = function () {
        var _this = this;
        this.httpService.getHomeBlog().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    BlogInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-inner',
            template: __webpack_require__(/*! ./blog-inner.component.html */ "./src/app/view-all/blog-inner/blog-inner.component.html"),
            styles: [__webpack_require__(/*! ./blog-inner.component.scss */ "./src/app/view-all/blog-inner/blog-inner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogInnerComponent);
    return BlogInnerComponent;
}());



/***/ }),

/***/ "./src/app/view-all/blogs-view/blogs-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view-all/blogs-view/blogs-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-0 mb-5\">\n    <div class=\"add-blog-wrap\">\n        <div class=\"add-blog\">\n            <p>Add Blog </p><span><img src=\"../../../assets/images/arrow-white.png\" alt=\"\"></span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-4 \" (click)=\"onBlogCard(element)\" *ngFor=\"let element of data\">\n            <div class=\"blog-wrap\">\n                <img class=\"card-img-top\" src='assets/images/{{element.img}}' alt=\"Card image cap\">\n                <div class=\"card-body px-0\">\n                    <span class=\"blog-card-date\">{{element.date}}</span><span class=\"blog-card-tag \">{{element.tag}}</span>\n                    <h6 class=\"card-title\">{{element.title}}</h6>\n                    <p class=\"card-text\">By {{element.author}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\" col-4 \" *ngFor=\"let element of data\">\n            <div class=\"blog-wrap\">\n                <img class=\"card-img-top\" src='assets/images/{{element.img}}' alt=\"Card image cap\">\n                <div class=\"card-body px-0\">\n                    <span class=\"blog-card-date\">{{element.date}}</span><span class=\"blog-card-tag \">{{element.tag}}</span>\n                    <h6 class=\"card-title\">{{element.title}}</h6>\n                    <p class=\"card-text\">By {{element.author}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\" col-4 \" *ngFor=\"let element of data\">\n            <div class=\"blog-wrap\">\n                <img class=\"card-img-top\" src='assets/images/{{element.img}}' alt=\"Card image cap\">\n                <div class=\"card-body px-0\">\n                    <span class=\"blog-card-date\">{{element.date}}</span><span class=\"blog-card-tag \">{{element.tag}}</span>\n                    <h6 class=\"card-title\">{{element.title}}</h6>\n                    <p class=\"card-text\">By {{element.author}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"navigator\">\n        <div class=\"left-nav\">\n            <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n        </div>\n        <div class=\"right-nav\">\n            <img src=\"../../../assets/images/arrow-white.png\" alt=\"\">\n        </div>\n    </div>\n</div>\n<app-blog-inner *ngIf=\"currentPage == 'blog_sample_1'\"></app-blog-inner>"

/***/ }),

/***/ "./src/app/view-all/blogs-view/blogs-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/view-all/blogs-view/blogs-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-blog-wrap {\n  display: flex;\n  justify-content: flex-end; }\n  .add-blog-wrap .add-blog {\n    height: 50px;\n    width: 200px;\n    background: #043266;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    margin-bottom: 20px; }\n  .add-blog-wrap .add-blog p {\n      color: #FFFFFF;\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: 0.4px;\n      line-height: 19px;\n      text-align: left;\n      margin: 0; }\n  .navigator {\n  display: flex;\n  justify-content: flex-end; }\n  .navigator .left-nav,\n  .navigator .right-nav {\n    background: #043266;\n    padding: 8px 10px;\n    display: flex;\n    margin: 0 10px;\n    align-items: center; }\n  .navigator .left-nav {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n  .blog-wrap {\n  transition: 0.2s ease;\n  padding: 10px;\n  margin-bottom: 20px; }\n  .blog-wrap:hover {\n    box-shadow: 0px 0px 20px lightgrey;\n    border-radius: 4px;\n    padding: 10px;\n    transition: 0.2s ease;\n    cursor: pointer; }\n  .blog-wrap .blog-card-date {\n    color: #4A4A4A9c;\n    font-size: 14px; }\n  .blog-wrap .blog-card-tag {\n    color: #efe8e8;\n    font-size: 12px;\n    padding: 3px 15px;\n    float: right;\n    border-radius: 50px;\n    background-color: #043266; }\n  .blog-wrap .card-title {\n    padding-top: 15px;\n    font-weight: 600;\n    margin-bottom: 5px;\n    height: 54px;\n    overflow: hidden; }\n  .blog-wrap .card-text {\n    color: #4A4A4A9c;\n    font-size: 15px; }\n  a {\n  cursor: pointer; }\n  .view-all-blogs {\n  font-weight: bold; }\n  .view-all-blogs a:hover span {\n    -webkit-animation: arrow-jump 0.5s infinite;\n    animation: arrow-jump 0.5s infinite; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    position: relative;\n    right: 5px; }\n  100% {\n    position: relative;\n    right: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL3ZpZXctYWxsL2Jsb2dzLXZpZXcvYmxvZ3Mtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtFQUY3QjtJQUlRLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQVgzQjtNQWFZLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFNBQVMsRUFBQTtFQUtyQjtFQUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtFQUY3Qjs7SUFLUSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFUM0I7SUFZUSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFJbEM7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBSHZCO0lBS1Esa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQTtFQVR2QjtJQVlRLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFidkI7SUFnQlEsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTtFQXJCakM7SUF3QlEsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBNUJ4QjtJQStCUSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksZUFBZSxFQUFBO0VBR25CO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFLZ0IsMkNBQTJDO0lBRzNDLG1DQUFtQyxFQUFBO0VBTW5EO0VBQ0k7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBRWQ7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsbC9ibG9ncy12aWV3L2Jsb2dzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJsb2ctd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hZGQtYmxvZyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDQzMjY2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmF2aWdhdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLmxlZnQtbmF2LFxuICAgIC5yaWdodC1uYXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDQzMjY2O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sZWZ0LW5hdiB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgIH1cbn1cblxuLmJsb2ctd3JhcCB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGxpZ2h0Z3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmJsb2ctY2FyZC1kYXRlIHtcbiAgICAgICAgY29sb3I6ICM0QTRBNEE5YztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuYmxvZy1jYXJkLXRhZyB7XG4gICAgICAgIGNvbG9yOiAjZWZlOGU4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDMyNjY7XG4gICAgfVxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICM0QTRBNEE5YztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlldy1hbGwtYmxvZ3Mge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGEge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDAuNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGFycm93LWp1bXAgMC41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFycm93LWp1bXAge1xuICAgIDAlIHtcbiAgICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLy8gb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-all/blogs-view/blogs-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-all/blogs-view/blogs-view.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsViewComponent", function() { return BlogsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BlogsViewComponent = /** @class */ (function () {
    function BlogsViewComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.data = [];
    }
    BlogsViewComponent.prototype.ngOnInit = function () {
        this.getJson();
    };
    BlogsViewComponent.prototype.getJson = function () {
        var _this = this;
        this.httpService.getHomeBlog().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    BlogsViewComponent.prototype.onBlogCard = function (element) {
        var url = element.title.replace(/[^A-Z0-9]/ig, "_");
        console.log(element, url, "jjjj");
        this.router.navigate(['/blogs', url]);
    };
    BlogsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs-view',
            template: __webpack_require__(/*! ./blogs-view.component.html */ "./src/app/view-all/blogs-view/blogs-view.component.html"),
            styles: [__webpack_require__(/*! ./blogs-view.component.scss */ "./src/app/view-all/blogs-view/blogs-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BlogsViewComponent);
    return BlogsViewComponent;
}());



/***/ }),

/***/ "./src/app/view-all/employee-forum-view/employee-forum-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/view-all/employee-forum-view/employee-forum-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employee-forum-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/view-all/employee-forum-view/employee-forum-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/view-all/employee-forum-view/employee-forum-view.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsL2VtcGxveWVlLWZvcnVtLXZpZXcvZW1wbG95ZWUtZm9ydW0tdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view-all/employee-forum-view/employee-forum-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/view-all/employee-forum-view/employee-forum-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeForumViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeForumViewComponent", function() { return EmployeeForumViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeForumViewComponent = /** @class */ (function () {
    function EmployeeForumViewComponent() {
    }
    EmployeeForumViewComponent.prototype.ngOnInit = function () {
    };
    EmployeeForumViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-forum-view',
            template: __webpack_require__(/*! ./employee-forum-view.component.html */ "./src/app/view-all/employee-forum-view/employee-forum-view.component.html"),
            styles: [__webpack_require__(/*! ./employee-forum-view.component.scss */ "./src/app/view-all/employee-forum-view/employee-forum-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeForumViewComponent);
    return EmployeeForumViewComponent;
}());



/***/ }),

/***/ "./src/app/view-all/notice-board-view/notice-board-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/view-all/notice-board-view/notice-board-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notice-board-view-wrap\">\n    <div class=\"container bg-overlay mb-5\">\n        <div class=\"row \">\n            <div class=\"notify-title\">All Notifications </div>\n            <div class=\" notify-count pl-1\">&#40;{{ count }} notifications &#41;</div>\n        </div>\n        <div class=\"card \" *ngFor=\"let element of data\">\n            <div class=\"notify-sub-title\">{{element.title}}</div>\n            <div class=\"notify-desc col-md-12 \">\n                {{element.desc}}\n            </div>\n            <div class=\" row col-md-12\">\n                <div class=\"date-desc pr-0\">\n                    {{element.date}} in\n                </div>\n                <div class=\"bottom-desc pl-1\">\n                    {{element.btmDesc}}\n                </div>\n            </div>\n        </div>\n        <div class=\"row notify-footer\">\n            <a href=\"#\" class=\"load-more\">Load more</a>\n            <span> <img  class=\"arrow-img\" src=\"./assets/images/arrow-black.png\"></span>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/view-all/notice-board-view/notice-board-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/view-all/notice-board-view/notice-board-view.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notice-board-view-wrap .bg-overlay {\n  background-color: #F2F3F5;\n  box-shadow: 0 7px 14px 0 rgba(208, 208, 208, 0.5);\n  margin: auto;\n  padding-bottom: 40px;\n  padding-left: 30px;\n  padding-right: 30px; }\n\n.notice-board-view-wrap .row .notify-title {\n  color: #000000;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 29px;\n  text-align: left;\n  text-decoration: underline;\n  padding: 20px; }\n\n.notice-board-view-wrap .row .notify-count {\n  color: #474747;\n  font-size: 14px;\n  margin-top: 2px;\n  padding-top: 23px; }\n\n.notice-board-view-wrap .card {\n  margin-bottom: 20px; }\n\n.notice-board-view-wrap .card .notify-sub-title,\n  .notice-board-view-wrap .card .bottom-desc,\n  .notice-board-view-wrap .card .date-desc {\n    color: #043266;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    line-height: 19px;\n    text-align: left;\n    padding: 10px 15px; }\n\n.notice-board-view-wrap .card .date-desc {\n    font-weight: 400; }\n\n.notice-board-view-wrap .notify-footer .load-more {\n  color: #474747;\n  font-size: 14px;\n  margin-top: 2px;\n  text-align: center;\n  font-weight: 600;\n  padding-left: 490px; }\n\n.notice-board-view-wrap .notify-footer .arrow-img {\n  height: 10px;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBpbmVzcy9EZXNrdG9wL2luY29tZXRheC9zcmMvYXBwL3ZpZXctYWxsL25vdGljZS1ib2FyZC12aWV3L25vdGljZS1ib2FyZC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLGlEQUFpRDtFQUNqRCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFQM0I7RUF5QlksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsYUFBYSxFQUFBOztBQS9CekI7RUFrQ1ksY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBRWYsaUJBQWlCLEVBQUE7O0FBdEM3QjtFQTBDUSxtQkFBbUIsRUFBQTs7QUExQzNCOzs7SUE4Q1ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBcEQ5QjtJQXVEWSxnQkFBZ0IsRUFBQTs7QUF2RDVCO0VBNERZLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBakUvQjtFQW9FWSxZQUFZO0VBRVosaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsbC9ub3RpY2UtYm9hcmQtdmlldy9ub3RpY2UtYm9hcmQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpY2UtYm9hcmQtdmlldy13cmFwIHtcbiAgICAuYmctb3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggMCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuNSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgLy8gLnJvdyB7XG4gICAgICAgIC8vICAgICAubG9hZC1tb3JlIHtcbiAgICAgICAgLy8gICAgICAgICBjb2xvcjogIzQ3NDc0NztcbiAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAvLyAgICAgICAgIHBhZGRpbmctdG9wOiAyM3B4O1xuICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgLmFycm93LWltZyB7XG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAucm93IHtcbiAgICAgICAgLm5vdGlmeS10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdGlmeS1jb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogIzQ3NDc0NztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIzcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAubm90aWZ5LXN1Yi10aXRsZSxcbiAgICAgICAgLmJvdHRvbS1kZXNjLFxuICAgICAgICAuZGF0ZS1kZXNjIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDQzMjY2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZS1kZXNjIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5vdGlmeS1mb290ZXIge1xuICAgICAgICAubG9hZC1tb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDkwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93LWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-all/notice-board-view/notice-board-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view-all/notice-board-view/notice-board-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: NoticeBoardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardViewComponent", function() { return NoticeBoardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



var NoticeBoardViewComponent = /** @class */ (function () {
    function NoticeBoardViewComponent(httpservice) {
        this.httpservice = httpservice;
        this.data = [];
        this.count = 0;
    }
    NoticeBoardViewComponent.prototype.ngOnInit = function () {
        this.getNoticeBoardViewDetail();
    };
    NoticeBoardViewComponent.prototype.getNoticeBoardViewDetail = function () {
        var _this = this;
        this.httpservice.getNoticeBoardView().subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.count = _this.data.length;
            }
        });
    };
    NoticeBoardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice-board-view',
            template: __webpack_require__(/*! ./notice-board-view.component.html */ "./src/app/view-all/notice-board-view/notice-board-view.component.html"),
            styles: [__webpack_require__(/*! ./notice-board-view.component.scss */ "./src/app/view-all/notice-board-view/notice-board-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NoticeBoardViewComponent);
    return NoticeBoardViewComponent;
}());



/***/ }),

/***/ "./src/app/view-all/view-all.component.html":
/*!**************************************************!*\
  !*** ./src/app/view-all/view-all.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-view></app-banner-view>\n<app-breadcrumb></app-breadcrumb>\n<app-blogs-view *ngIf=\"currentPage == 'blogs'\"></app-blogs-view>\n<app-employee-forum-view *ngIf=\"currentPage == 'employee_forum'\"></app-employee-forum-view>\n<app-notice-board-view *ngIf=\"currentPage == 'notice_board'\"></app-notice-board-view>"

/***/ }),

/***/ "./src/app/view-all/view-all.component.scss":
/*!**************************************************!*\
  !*** ./src/app/view-all/view-all.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsL3ZpZXctYWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view-all/view-all.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-all/view-all.component.ts ***!
  \************************************************/
/*! exports provided: ViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return ViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ViewAllComponent = /** @class */ (function () {
    function ViewAllComponent(route) {
        this.route = route;
        this.currentPage = '';
    }
    ViewAllComponent.prototype.ngOnInit = function () {
        var pageUrl = this.route.snapshot.url;
        this.routePage(pageUrl[0].path);
    };
    ViewAllComponent.prototype.routePage = function (pageUrl) {
        switch (pageUrl) {
            case 'blogs':
                this.currentPage = 'blogs';
                break;
            case 'employee_forum':
                return this.currentPage = 'employee_forum';
                break;
            case 'notice_board':
                this.currentPage = 'notice_board';
                break;
            default: return;
        }
    };
    ViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-all',
            template: __webpack_require__(/*! ./view-all.component.html */ "./src/app/view-all/view-all.component.html"),
            styles: [__webpack_require__(/*! ./view-all.component.scss */ "./src/app/view-all/view-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewAllComponent);
    return ViewAllComponent;
}());



/***/ }),

/***/ "./src/app/view-all/view-all.module.ts":
/*!*********************************************!*\
  !*** ./src/app/view-all/view-all.module.ts ***!
  \*********************************************/
/*! exports provided: ViewAllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllModule", function() { return ViewAllModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notice_board_view_notice_board_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-board-view/notice-board-view.component */ "./src/app/view-all/notice-board-view/notice-board-view.component.ts");
/* harmony import */ var _blogs_view_blogs_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs-view/blogs-view.component */ "./src/app/view-all/blogs-view/blogs-view.component.ts");
/* harmony import */ var _employee_forum_view_employee_forum_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-forum-view/employee-forum-view.component */ "./src/app/view-all/employee-forum-view/employee-forum-view.component.ts");
/* harmony import */ var _view_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all.component */ "./src/app/view-all/view-all.component.ts");
/* harmony import */ var _banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner-view/banner-view.component */ "./src/app/view-all/banner-view/banner-view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generic/generic.module */ "./src/app/generic/generic.module.ts");
/* harmony import */ var _blog_inner_blog_inner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog-inner/blog-inner.component */ "./src/app/view-all/blog-inner/blog-inner.component.ts");








// tslint:disable-next-line: max-line-length



var ViewAllModule = /** @class */ (function () {
    function ViewAllModule() {
    }
    ViewAllModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notice_board_view_notice_board_view_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardViewComponent"], _blogs_view_blogs_view_component__WEBPACK_IMPORTED_MODULE_4__["BlogsViewComponent"], _employee_forum_view_employee_forum_view_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeForumViewComponent"], _view_all_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllComponent"], _banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_7__["BannerViewComponent"], _blog_inner_blog_inner_component__WEBPACK_IMPORTED_MODULE_10__["BlogInnerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__["GenericModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]
            ],
            exports: [_notice_board_view_notice_board_view_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardViewComponent"], _blogs_view_blogs_view_component__WEBPACK_IMPORTED_MODULE_4__["BlogsViewComponent"], _employee_forum_view_employee_forum_view_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeForumViewComponent"], _view_all_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllComponent"], _banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_7__["BannerViewComponent"], _blog_inner_blog_inner_component__WEBPACK_IMPORTED_MODULE_10__["BlogInnerComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _generic_generic_module__WEBPACK_IMPORTED_MODULE_9__["GenericModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]]
        })
    ], ViewAllModule);
    return ViewAllModule;
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/appiness/Desktop/incometax/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map