(self["webpackChunkpassword_manager"] = self["webpackChunkpassword_manager"] || []).push([["src_app_admin_password-util_password-util_module_ts"],{

/***/ 1685:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/password-util/generate-password/generate-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratePasswordComponent": () => (/* binding */ GeneratePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-clipboard */ 948);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



class GeneratePasswordComponent {
    constructor(clipService) {
        this.clipService = clipService;
        this.password = '';
        this.alps = 'abcdefghijklmnopqrstuvwxyz';
        this.nums = '0123456789';
        this.specs = '~!@#$%^&*';
    }
    ngOnInit() {
        this.generatePassword();
    }
    generatePassword() {
        let passwordLength = 10;
        let newPassword = '';
        while (newPassword.length < passwordLength) {
            newPassword += this.alps[Math.ceil(Math.random() * (this.alps.length - 1))];
            newPassword += this.alps[Math.ceil(Math.random() * (this.alps.length - 1))].toUpperCase();
            newPassword += this.nums[Math.ceil(Math.random() * (this.nums.length - 1))];
            newPassword += this.specs[Math.ceil(Math.random() * (this.specs.length - 1))];
        }
        newPassword = newPassword.slice(0, passwordLength);
        this.password = newPassword;
    }
    copy() {
        this.clipService.copy(this.password);
    }
}
GeneratePasswordComponent.ɵfac = function GeneratePasswordComponent_Factory(t) { return new (t || GeneratePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardService)); };
GeneratePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneratePasswordComponent, selectors: [["app-generate-password"]], decls: 9, vars: 1, consts: [[1, "page-content"], [1, "row"], [1, "col-lg-12", "text-center", "main-container", "d-flex", "align-items-center", "justify-content-center"], [1, "form-inline"], ["type", "text", "name", "generate-password", 1, "form-control", "rounded-pill", "mx-2", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-white", "btn-icon", "rounded-pill", "shadow", "hover-translate-y-n3", "mx-2", 3, "click"]], template: function GeneratePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneratePasswordComponent_Template_input_ngModelChange_4_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratePasswordComponent_Template_button_click_5_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratePasswordComponent_Template_button_click_7_listener() { return ctx.generatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Generate Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".main-container[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8274:
/*!*************************************************************!*\
  !*** ./src/app/admin/password-util/password-util.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordUtilModule": () => (/* binding */ PasswordUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _generate_password_generate_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-password/generate-password.component */ 1685);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    {
        path: '',
        component: _generate_password_generate_password_component__WEBPACK_IMPORTED_MODULE_0__.GeneratePasswordComponent
    },
    {
        path: 'generate-password',
        component: _generate_password_generate_password_component__WEBPACK_IMPORTED_MODULE_0__.GeneratePasswordComponent
    }
];
class PasswordUtilModule {
}
PasswordUtilModule.ɵfac = function PasswordUtilModule_Factory(t) { return new (t || PasswordUtilModule)(); };
PasswordUtilModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PasswordUtilModule });
PasswordUtilModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PasswordUtilModule, { declarations: [_generate_password_generate_password_component__WEBPACK_IMPORTED_MODULE_0__.GeneratePasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_password-util_password-util_module_ts.js.map