(self["webpackChunkpassword_manager"] = self["webpackChunkpassword_manager"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _gaurds_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaurds/is-logged-in.guard */ 4098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(mod => mod.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(mod => mod.AdminModule),
        canActivate: [_gaurds_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoggedInGuard]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_app_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app-update.service */ 9291);






class AppComponent {
    constructor(auth, router, appUpdate) {
        this.auth = auth;
        this.router = router;
        this.appUpdate = appUpdate;
        this.subsink = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.subsink.sink = this.auth.user.subscribe(user => {
                if (!user) {
                    this.router.navigate(['/auth']);
                }
                else {
                    this.router.navigate(['/admin']);
                }
            });
            this.appUpdate.checkForUpdates();
        });
    }
    ngOnDestroy() {
        this.subsink.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_app_update_service__WEBPACK_IMPORTED_MODULE_1__.AppUpdateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestoreModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire__WEBPACK_IMPORTED_MODULE_6__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestoreModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 4098:
/*!**********************************************!*\
  !*** ./src/app/gaurds/is-logged-in.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoggedInGuard": () => (/* binding */ IsLoggedInGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);


class IsLoggedInGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.getUser() ? true : false;
    }
}
IsLoggedInGuard.ɵfac = function IsLoggedInGuard_Factory(t) { return new (t || IsLoggedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
IsLoggedInGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsLoggedInGuard, factory: IsLoggedInGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9291:
/*!************************************************!*\
  !*** ./src/app/services/app-update.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppUpdateService": () => (/* binding */ AppUpdateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ 2249);




class AppUpdateService {
    constructor(updates) {
        this.updates = updates;
    }
    checkForUpdates() {
        this.updates.available.subscribe((event) => {
            this.showAppUpdateAlert();
        });
    }
    showAppUpdateAlert() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
            customClass: {
                confirmButton: 'btn btn-primary rounded-pill',
                cancelButton: 'btn btn-default rounded-pill',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
            title: 'Hi',
            text: 'An app upgrade is available',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, Update!',
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.doAppUpdate();
            }
        });
    }
    doAppUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.updates.activateUpdate();
            window.location.reload();
        });
    }
}
AppUpdateService.ɵfac = function AppUpdateService_Factory(t) { return new (t || AppUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__.SwUpdate)); };
AppUpdateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppUpdateService, factory: AppUpdateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







class AuthService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.localKey = 'pmAU';
        this.subsink = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
        this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        const user = this.getUserFromLocalStorage();
        if (user) {
            this.updateCurrentUser(user, false);
        }
        this.subsink.sink = this.auth.user.subscribe(user => {
            this.updateCurrentUser(user);
            if (!user && this.user) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Info', 'You have been logged out. Please login again to continue', 'info');
                this.router.navigate(['/']);
            }
        });
    }
    getUser() {
        return this.user;
    }
    doLogin(provider) {
        if (provider === 'google') {
            this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider());
        }
        else if (provider === 'microsoft') {
            this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.OAuthProvider('microsoft.com'));
        }
    }
    doLogout() {
        this.auth.signOut();
        this.clearUserFromLocalStorage();
    }
    updateCurrentUser(user, updateLocalStorage = true) {
        this.user = user;
        this.userSub.next(user);
        if (updateLocalStorage) {
            this.saveUserToLocalStorage(user);
        }
    }
    clearUserFromLocalStorage() {
        localStorage.removeItem(this.localKey);
    }
    saveUserToLocalStorage(user) {
        if (user) {
            localStorage.setItem(this.localKey, JSON.stringify(user));
        }
    }
    getUserFromLocalStorage() {
        const userString = localStorage.getItem(this.localKey);
        if (!userString) {
            return null;
        }
        const user = JSON.parse(userString);
        return user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.config */ 3250);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    appName: 'PassKeep',
    firebaseConfig: _firebase_config__WEBPACK_IMPORTED_MODULE_0__.firebaseConfig
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3250:
/*!*********************************************!*\
  !*** ./src/environments/firebase.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig)
/* harmony export */ });
const firebaseConfig = {
    apiKey: "AIzaSyDsYqEelZYwbkmCR7oXeOfnsvwDYcydTBM",
    authDomain: "password-manager-34d97.firebaseapp.com",
    projectId: "password-manager-34d97",
    storageBucket: "password-manager-34d97.appspot.com",
    messagingSenderId: "316910393536",
    appId: "1:316910393536:web:98308f6c76aa1276fb7525"
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map