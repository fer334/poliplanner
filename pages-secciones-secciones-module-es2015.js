(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secciones-secciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secciones/secciones.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secciones/secciones.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-menu></app-menu>\n\n<ion-content>\n <app-secciones [toCalendar]=\"data.toCalendar\"></app-secciones>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/secciones/secciones-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/secciones/secciones-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SeccionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesPageRoutingModule", function() { return SeccionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _secciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secciones.page */ "./src/app/pages/secciones/secciones.page.ts");




const routes = [
    {
        path: '',
        component: _secciones_page__WEBPACK_IMPORTED_MODULE_3__["SeccionesPage"]
    }
];
let SeccionesPageRoutingModule = class SeccionesPageRoutingModule {
};
SeccionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeccionesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/secciones/secciones.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/secciones/secciones.module.ts ***!
  \*****************************************************/
/*! exports provided: SeccionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesPageModule", function() { return SeccionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _secciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secciones-routing.module */ "./src/app/pages/secciones/secciones-routing.module.ts");
/* harmony import */ var _secciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secciones.page */ "./src/app/pages/secciones/secciones.page.ts");
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");








let SeccionesPageModule = class SeccionesPageModule {
};
SeccionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _secciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeccionesPageRoutingModule"],
            _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]
        ],
        declarations: [_secciones_page__WEBPACK_IMPORTED_MODULE_6__["SeccionesPage"]]
    })
], SeccionesPageModule);



/***/ }),

/***/ "./src/app/pages/secciones/secciones.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/secciones/secciones.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY2Npb25lcy9zZWNjaW9uZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/secciones/secciones.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/secciones/secciones.page.ts ***!
  \***************************************************/
/*! exports provided: SeccionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesPage", function() { return SeccionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/armar-horario/data.service */ "./src/app/servicios/armar-horario/data.service.ts");



let SeccionesPage = class SeccionesPage {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        let datos = window.localStorage.data;
        if (datos) {
            this.data.remplazarDatos(JSON.parse(datos));
            // console.log(this.data.toCalendar);
        }
    }
};
SeccionesPage.ctorParameters = () => [
    { type: src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SeccionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-secciones",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./secciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secciones/secciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./secciones.page.scss */ "./src/app/pages/secciones/secciones.page.scss")).default]
    })
], SeccionesPage);



/***/ })

}]);
//# sourceMappingURL=pages-secciones-secciones-module-es2015.js.map