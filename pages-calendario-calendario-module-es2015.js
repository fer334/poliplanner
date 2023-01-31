(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendario-calendario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendario/calendario.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendario/calendario.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-menu></app-menu>\n\n<ion-content>\n <app-calendario [toCalendar]=\"data.toCalendar\"></app-calendario>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/calendario/calendario-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/calendario/calendario-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CalendarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageRoutingModule", function() { return CalendarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario.page */ "./src/app/pages/calendario/calendario.page.ts");




const routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_3__["CalendarioPage"]
    }
];
let CalendarioPageRoutingModule = class CalendarioPageRoutingModule {
};
CalendarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calendario/calendario.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/calendario/calendario.module.ts ***!
  \*******************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendario-routing.module */ "./src/app/pages/calendario/calendario-routing.module.ts");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "./src/app/pages/calendario/calendario.page.ts");
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");
/* harmony import */ var _componentes_calendario_ion2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/calendario/ion2-calendar */ "./src/app/componentes/calendario/ion2-calendar/index.ts");









let CalendarioPageModule = class CalendarioPageModule {
};
CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarioPageRoutingModule"],
            _componentes_calendario_ion2_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
            _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]],
    })
], CalendarioPageModule);

;


/***/ }),

/***/ "./src/app/pages/calendario/calendario.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/calendario/calendario.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/calendario/calendario.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calendario/calendario.page.ts ***!
  \*****************************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/armar-horario/data.service */ "./src/app/servicios/armar-horario/data.service.ts");



let CalendarioPage = class CalendarioPage {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        // console.log(this.data);
    }
};
CalendarioPage.ctorParameters = () => [
    { type: src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
CalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-page",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendario/calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendario.page.scss */ "./src/app/pages/calendario/calendario.page.scss")).default]
    })
], CalendarioPage);



/***/ })

}]);
//# sourceMappingURL=pages-calendario-calendario-module-es2015.js.map