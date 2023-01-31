(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prueba-prueba-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button (click)=\"page = 3\" expand=\"block\" fill=\"clear\" shape=\"round\">\n {{page}}\n</ion-button>\n<ng-container *ngIf=\"mostrar else otro\">\n  <ion-label>mostrar == true</ion-label>\n\n</ng-container>\n\n<ng-template #otro>\n  <ng-container *ngTemplateOutlet=\"customTemplate ? customTemplate: defaultTemplate \">\n  </ng-container>\n</ng-template>\n\n<ng-template #defaultTemplate>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-menu></app-menu>\n\n<ion-content>\n    <ion-label>Aun no implementado :c</ion-label>\n    \n</ion-content> ");

/***/ }),

/***/ "./src/app/pages/prueba/prueba-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/prueba/prueba-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PruebaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPageRoutingModule", function() { return PruebaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prueba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prueba.page */ "./src/app/pages/prueba/prueba.page.ts");




const routes = [
    {
        path: '',
        component: _prueba_page__WEBPACK_IMPORTED_MODULE_3__["PruebaPage"]
    }
];
let PruebaPageRoutingModule = class PruebaPageRoutingModule {
};
PruebaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PruebaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prueba/prueba.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/prueba/prueba.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BydWViYS9wcnVlYmEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/prueba/prueba.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/prueba/prueba.component.ts ***!
  \**************************************************/
/*! exports provided: PruebaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaComponent", function() { return PruebaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PruebaComponent = class PruebaComponent {
    constructor() {
        this.mostrar = false;
        this.a = "hola que tal";
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PruebaComponent.prototype, "customTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PruebaComponent.prototype, "page", void 0);
PruebaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prueba',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prueba.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prueba.component.scss */ "./src/app/pages/prueba/prueba.component.scss")).default]
    })
], PruebaComponent);



/***/ }),

/***/ "./src/app/pages/prueba/prueba.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/prueba/prueba.module.ts ***!
  \***********************************************/
/*! exports provided: PruebaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPageModule", function() { return PruebaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prueba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prueba-routing.module */ "./src/app/pages/prueba/prueba-routing.module.ts");
/* harmony import */ var _prueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prueba.page */ "./src/app/pages/prueba/prueba.page.ts");
/* harmony import */ var _prueba_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prueba.component */ "./src/app/pages/prueba/prueba.component.ts");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");









let PruebaPageModule = class PruebaPageModule {
};
PruebaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prueba_routing_module__WEBPACK_IMPORTED_MODULE_5__["PruebaPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"]
        ],
        declarations: [
            _prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"],
            _prueba_component__WEBPACK_IMPORTED_MODULE_7__["PruebaComponent"]
        ],
        exports: [_prueba_component__WEBPACK_IMPORTED_MODULE_7__["PruebaComponent"]]
    })
], PruebaPageModule);



/***/ }),

/***/ "./src/app/pages/prueba/prueba.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/prueba/prueba.page.ts ***!
  \*********************************************/
/*! exports provided: PruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPage", function() { return PruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/armar-horario/data.service */ "./src/app/servicios/armar-horario/data.service.ts");





let PruebaPage = class PruebaPage {
    constructor(file, data) {
        this.file = file;
        this.data = data;
        this.page = 5;
        this.x = "hola";
    }
    ngOnInit() {
        let datos = window.localStorage.data;
        if (datos) {
            this.data.remplazarDatos(JSON.parse(datos));
            this.data.seccionActual = 3;
        }
        else {
        }
        // console.log(this.data)
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
    read(bstr) {
        /* read workbook */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: "binary" });
        /* grab first sheet */
        const wsname = 'IIN';
        const ws = wb.Sheets[wsname];
        /* save data */
        this.data = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1, range: 11 });
        // console.log(this.data);
    }
    /* File Input element for browser */
    onFileChange(evt) {
        /* wire up file reader */
        const target = evt.target;
        // console.log('target',target);
        if (target.files.length !== 1)
            throw new Error("Cannot use multiple files");
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            this.read(bstr);
        };
        reader.readAsBinaryString(target.files[0]);
    }
};
PruebaPage.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
PruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "prueba.page.scss",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prueba.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html")).default,
    })
], PruebaPage);



/***/ })

}]);
//# sourceMappingURL=pages-prueba-prueba-module-es2015.js.map