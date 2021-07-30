(self["webpackChunkpassword_manager"] = self["webpackChunkpassword_manager"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);





class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.subsink = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
    }
    ngOnInit() {
        this.subsink.sink = this.authService.userSub.subscribe(user => {
            if (user) {
                this.router.navigate(['/admin']);
            }
        });
    }
    ngOnDestroy() {
        this.subsink.unsubscribe();
    }
    login(provider) {
        this.authService.doLogin(provider);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 1, consts: [[1, "min-vh-100", "h-100vh", "py-5", "d-flex", "align-items-center", "bg-gradient-primary"], [1, "bg-absolute-cover", "vh-100", "overflow-hidden", "d-none", "d-md-block"], [1, "w-100"], ["width", "100%", "height", "100%", "alt", "Background image placeholder", "src", "/assets/img/svg/backgrounds/bg-4.svg", 1, "svg-inject"], [1, "container", "position-relative", "zindex-100"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-lg-4", "px-5", "px-lg-0"], [1, "card", "shadow", "zindex-100", "mb-0"], [1, "card-body", "px-md-5", "py-5", "text-center"], [1, "mb-5"], [1, "h2"], [1, "mb-0"], [1, "clearfix"], [1, "social-login-rows", "text-center"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", "rounded-pill", "social-login-btn", 3, "click"], ["width", "24", "height", "24", "src", "/assets/img/brand/google-24x24.png", "alt", "google-logo"], ["width", "24", "height", "24", "src", "/assets/img/brand/microsoft-24x24.png", "alt", "microsoft-logo"], [1, "col-lg-6", "col-lg-offset-2", "d-none", "d-lg-block"], ["width", "622", "height", "500", "alt", "Background Image Placeholder", "src", "/assets/img/svg/illustrations/design-thinking.svg", 1, "svg-inject", "opacity-8", "img-fluid", 2, "height", "500px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Sign in to your account to continue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.login("google"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " \u00A0 Sign in with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.login("microsoft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u00A0 Sign in with Microsoft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.env.appName);
    } }, styles: ["@media (max-width: 400px) {\n  .social-login-btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media (max-width: 342px) {\n  .social-login-btn[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFDRjtBQUNGO0FBR0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuc29jaWFsLWxvZ2luLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MnB4KSB7XHJcbiAgLnNvY2lhbC1sb2dpbi1idG4ge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map