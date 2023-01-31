(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-armar-horario-armar-horario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/armar-horario/armar-horario.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/armar-horario/armar-horario.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-menu></app-menu>\n<div>\n  <ion-header slot=\"fixed\">\n    <ion-toolbar>\n      <ion-title class=\"ion-text-wrap\">\n        <div *ngIf=\"data.seccionActual==1\" class=\"ion-text-wrap\">\n          Paso 1: {{textForHeader[data.seccionActual]}}\n        </div>\n        <div *ngIf=\"data.seccionActual==2||data.seccionActual==3\" class=\"ion-text-wrap\">\n          Paso {{data.seccionActual+(data?.seleccionados.length-data.contadorCarrera )}}: {{textForHeader[data.seccionActual]}} - {{this.data.seleccionados[this.data.contadorCarrera-1].code}}\n        </div>\n        <div *ngIf=\"!(data.seccionActual==1 || data.seccionActual==2 || data.seccionActual==3)\" class=\"ion-text-wrap\">\n          Paso {{data.seccionActual+(data?.seleccionados.length-data.contadorCarrera )}}: {{textForHeader[data.seccionActual]}}\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n</div>\n  \n\n<ion-content [ngSwitch]=\"validarSeccion()\">\n  <app-seleccionar-carrera *ngSwitchCase=\"1\" [data]=\"data\" ></app-seleccionar-carrera>\n\n  <!-- <app-seleccionar-materias-aprobadas *ngSwitchCase=\"2\" [data]=\"data\" ></app-seleccionar-materias-aprobadas> -->\n  <!-- <app-seleccionar-materia *ngSwitchCase=\"3\" [data]=\"data\" ></app-seleccionar-materia>  -->\n  <div *ngSwitchCase=\"2\" ><ng-container *ngFor=\"let carrera of data.seleccionados; let i=index;\">\n    <app-por-carrera *ngIf=\"data.contadorCarrera==i+1\" [selectedCareerId]=\"carrera._id\" [esAprobar]=\"true\" (seleccionados)=\"onChangeApro($event,carrera._id)\" [data]=\"data\"></app-por-carrera>\n  </ng-container> </div>\n  <div *ngSwitchCase=\"3\" ><ng-container *ngFor=\"let carrera of data.seleccionados; let i=index;\">\n    <app-por-carrera *ngIf=\"data.contadorCarrera==i+1\" [selectedCareerId]=\"carrera._id\" [esAprobar]=\"false\" (seleccionados)=\"onChangeSel($event,carrera._id)\" [data]=\"data\"></app-por-carrera>\n  </ng-container> </div>\n  <app-seleccionar-secciones *ngSwitchCase=\"4\" [data]=\"data\"></app-seleccionar-secciones>\n  <app-secciones *ngSwitchCase=\"5\" [toCalendar]=\"data.toCalendar\" ></app-secciones>\n  <app-inicio  *ngSwitchCase=\"6\" [semana]=\"data.semana\" [toCalendar]=\"data.toCalendar\" ></app-inicio>\n  <app-calendario *ngSwitchCase=\"7\" [toCalendar]=\"data.toCalendar\"></app-calendario>  \n  <app-calendario *ngSwitchCase=\"8\" [toCalendar]=\"data.toCalendar\"></app-calendario>  \n</ion-content>\n\n<!-- <ion-content *ngIf=\"currentSection <= currentCareer.length+1 && currentSection!=1\">\n  <ng-container *ngFor=\"let career of currentCareer; let i=index;\">\n    <app-seleccionar-materia *ngIf=\"currentSection==i+2\" [selectedCareerId]=\"career._id\"></app-seleccionar-materia>\n  </ng-container>\n</ion-content> -->\n\n<app-file-picker #fp [data]=\"data\"></app-file-picker>\n<app-footer #footer [data]=\"data\"></app-footer>");

/***/ }),

/***/ "./src/app/pages/armar-horario/armar-horario-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/armar-horario/armar-horario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ArmarHorarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmarHorarioPageRoutingModule", function() { return ArmarHorarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _armar_horario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./armar-horario.page */ "./src/app/pages/armar-horario/armar-horario.page.ts");




const routes = [
    {
        path: '',
        component: _armar_horario_page__WEBPACK_IMPORTED_MODULE_3__["ArmarHorarioPage"]
    }
];
let ArmarHorarioPageRoutingModule = class ArmarHorarioPageRoutingModule {
};
ArmarHorarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArmarHorarioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/armar-horario/armar-horario.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/armar-horario/armar-horario.module.ts ***!
  \*************************************************************/
/*! exports provided: ArmarHorarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmarHorarioPageModule", function() { return ArmarHorarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _armar_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./armar-horario-routing.module */ "./src/app/pages/armar-horario/armar-horario-routing.module.ts");
/* harmony import */ var _armar_horario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./armar-horario.page */ "./src/app/pages/armar-horario/armar-horario.page.ts");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");
/* harmony import */ var _componentes_armar_horario_armar_horario_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/armar-horario/armar-horario.module */ "./src/app/componentes/armar-horario/armar-horario.module.ts");









let ArmarHorarioPageModule = class ArmarHorarioPageModule {
};
ArmarHorarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _armar_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArmarHorarioPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
            _componentes_armar_horario_armar_horario_module__WEBPACK_IMPORTED_MODULE_8__["ArmarHorarioModule"],
        ],
        declarations: [_armar_horario_page__WEBPACK_IMPORTED_MODULE_6__["ArmarHorarioPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ArmarHorarioPageModule);



/***/ }),

/***/ "./src/app/pages/armar-horario/armar-horario.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/armar-horario/armar-horario.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: var(--ion-color-light-contrast);\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: var(--ion-color-light);\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n\nion-toast {\n  --border-width:\t100px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvcGFnZXMvYXJtYXItaG9yYXJpby9hcm1hci1ob3JhcmlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXJtYXItaG9yYXJpby9hcm1hci1ob3JhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJtYXItaG9yYXJpby9hcm1hci1ob3JhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDg7XG4gICAgXG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICAtLW9wYWNpdHk6IDE7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XG59XG5cbmlvbi10b2FzdHtcbiAgICAtLWJvcmRlci13aWR0aDpcdDEwMHB4XG59IiwiaW9uLXRpdGxlIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogODtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59XG5cbmlvbi10b2FzdCB7XG4gIC0tYm9yZGVyLXdpZHRoOlx0MTAwcHggO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/armar-horario/armar-horario.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/armar-horario/armar-horario.page.ts ***!
  \***********************************************************/
/*! exports provided: ArmarHorarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmarHorarioPage", function() { return ArmarHorarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/armar-horario/data.service */ "./src/app/servicios/armar-horario/data.service.ts");




let ArmarHorarioPage = class ArmarHorarioPage {
    constructor(dataTrue, navCtrl) {
        this.dataTrue = dataTrue;
        this.navCtrl = navCtrl;
        this.data = new _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"];
        this.textForHeader = [
            '',
            `Selecciona tu/s carrera/s`,
            `Sel. mat. aprobadas`,
            `Sel. mat. a cursar`,
            `Sel. secciones `,
            `Confirma las secciones `,
            `Confirma el Horario `,
            `Confirma el Calendario `,
        ];
    }
    validarSeccion() {
        if (this.data.seccionActual == 1) {
            //this.data = this.dataTrue;
        }
        else if (this.data.seccionActual == 2) {
            if (!this.data.dataFromExcel) {
                this.footer.previous();
                this.filepicker.readFilePopup();
            }
            else if (this.data.dataFromExcel[0].length == 0) {
                this.footer.previous();
                this.filepicker.readFilePopup();
            }
            else {
                this.filepicker.toData();
            }
        }
        else if (this.data.seccionActual == 3) {
        }
        else if (this.data.seccionActual == 8) {
            this.dataTrue.remplazarDatos(this.data);
            window.localStorage.clear();
            window.localStorage.data = JSON.stringify(this.data);
            this.navCtrl.navigateRoot('inicio');
            window.location.replace('inicio');
        }
        return this.data.seccionActual;
    }
    // Para cargar materias
    onChangeApro(selected, id) {
        this.data.materiasAprobadas[id] = selected;
        // console.log(this.data.materiasAprobadas);
    }
    onChangeSel(selected, id) {
        this.data.materiasSeleccionadas[id] = selected;
    }
    onClick() {
    }
    ngOnInit() {
        this.data = new _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]();
        //console.log('data:' ,this.data.seleccionados);
    }
    presentToast(msg = "") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = document.createElement('ion-toast');
            toast.message = msg;
            toast.position = 'middle';
            toast.duration = 2000;
            // toast.style.setProperty('--width', '60%')
            document.body.appendChild(toast);
            return toast.present();
        });
    }
};
ArmarHorarioPage.ctorParameters = () => [
    { type: _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fp')
], ArmarHorarioPage.prototype, "filepicker", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer')
], ArmarHorarioPage.prototype, "footer", void 0);
ArmarHorarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-armar-horario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./armar-horario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/armar-horario/armar-horario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./armar-horario.page.scss */ "./src/app/pages/armar-horario/armar-horario.page.scss")).default]
    })
], ArmarHorarioPage);



/***/ })

}]);
//# sourceMappingURL=pages-armar-horario-armar-horario-module-es2015.js.map