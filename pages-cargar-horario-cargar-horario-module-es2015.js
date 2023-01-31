(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cargar-horario-cargar-horario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cargar-horario/cargar-horario.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cargar-horario/cargar-horario.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-menu></app-menu>\n<div>\n  <ion-header slot=\"fixed\">\n    <ion-toolbar>\n      <ion-title class=\"ion-text-wrap\">\n        <div *ngIf=\"data.seccionActual==1\" class=\"ion-text-wrap\">\n          Paso 1: {{textForHeader[data.seccionActual]}}\n        </div>\n        <div *ngIf=\"data.seccionActual==2\" class=\"ion-text-wrap\">\n          Paso {{data.seccionActual+(data?.seleccionados.length-data.contadorCarrera )}}: {{textForHeader[data.seccionActual]}} - {{this.data.seleccionados[this.data.contadorCarrera-1].code}}\n        </div>\n        <div *ngIf=\"!(data.seccionActual==1 || data.seccionActual==2)\" class=\"ion-text-wrap\">\n          Paso {{data.seccionActual+(data?.seleccionados.length-data.contadorCarrera )}}: {{textForHeader[data.seccionActual]}}\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n</div>\n  \n\n<ion-content [ngSwitch]=\"validarSeccion()\">\n  <app-seleccionar-carrera *ngSwitchCase=\"1\" [data]=\"data\" ></app-seleccionar-carrera>\n\n  <!-- <app-seleccionar-materias-aprobadas *ngSwitchCase=\"2\" [data]=\"data\" ></app-seleccionar-materias-aprobadas> -->\n  <!-- <app-seleccionar-materia *ngSwitchCase=\"3\" [data]=\"data\" ></app-seleccionar-materia>  -->\n  <div *ngSwitchCase=\"2\" ><ng-container *ngFor=\"let carrera of data.seleccionados; let i=index;\">\n    <app-por-carrera *ngIf=\"data.contadorCarrera==i+1\" [selectedCareerId]=\"carrera._id\" [esAprobar]=\"false\" [esCargarHorario]=\"true\" (seleccionados)=\"onChangeSel($event,carrera._id)\" [data]=\"data\"></app-por-carrera>\n  </ng-container></div>\n  <app-seleccionar-secciones *ngSwitchCase=\"3\" [data]=\"data\"></app-seleccionar-secciones>\n  \n</ion-content>\n\n<!-- <ion-content *ngIf=\"currentSection <= currentCareer.length+1 && currentSection!=1\">\n  <ng-container *ngFor=\"let career of currentCareer; let i=index;\">\n    <app-seleccionar-materia *ngIf=\"currentSection==i+2\" [selectedCareerId]=\"career._id\"></app-seleccionar-materia>\n  </ng-container>\n</ion-content> -->\n\n<app-file-picker #fp [data]=\"data\"></app-file-picker>\n<app-footer #footer [data]=\"data\" [armar]=false></app-footer>");

/***/ }),

/***/ "./src/app/pages/cargar-horario/cargar-horario-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cargar-horario/cargar-horario-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CargarHorarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarHorarioPageRoutingModule", function() { return CargarHorarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cargar_horario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargar-horario.page */ "./src/app/pages/cargar-horario/cargar-horario.page.ts");




const routes = [
    {
        path: '',
        component: _cargar_horario_page__WEBPACK_IMPORTED_MODULE_3__["CargarHorarioPage"]
    }
];
let CargarHorarioPageRoutingModule = class CargarHorarioPageRoutingModule {
};
CargarHorarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CargarHorarioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cargar-horario/cargar-horario.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cargar-horario/cargar-horario.module.ts ***!
  \***************************************************************/
/*! exports provided: CargarHorarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarHorarioPageModule", function() { return CargarHorarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cargar_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargar-horario-routing.module */ "./src/app/pages/cargar-horario/cargar-horario-routing.module.ts");
/* harmony import */ var _cargar_horario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargar-horario.page */ "./src/app/pages/cargar-horario/cargar-horario.page.ts");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");
/* harmony import */ var src_app_componentes_armar_horario_armar_horario_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/componentes/armar-horario/armar-horario.module */ "./src/app/componentes/armar-horario/armar-horario.module.ts");









let CargarHorarioPageModule = class CargarHorarioPageModule {
};
CargarHorarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cargar_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargarHorarioPageRoutingModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
            src_app_componentes_armar_horario_armar_horario_module__WEBPACK_IMPORTED_MODULE_8__["ArmarHorarioModule"],
        ],
        declarations: [_cargar_horario_page__WEBPACK_IMPORTED_MODULE_6__["CargarHorarioPage"]]
    })
], CargarHorarioPageModule);



/***/ }),

/***/ "./src/app/pages/cargar-horario/cargar-horario.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/cargar-horario/cargar-horario.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: var(--ion-color-light-contrast);\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: var(--ion-color-light);\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n\nion-toast {\n  --border-width:\t100px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvcGFnZXMvY2FyZ2FyLWhvcmFyaW8vY2FyZ2FyLWhvcmFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJnYXItaG9yYXJpby9jYXJnYXItaG9yYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhcmdhci1ob3JhcmlvL2Nhcmdhci1ob3JhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDg7XG4gICAgXG59XG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICAtLW9wYWNpdHk6IDE7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XG59XG5cbmlvbi10b2FzdHtcbiAgICAtLWJvcmRlci13aWR0aDpcdDEwMHB4XG59IiwiaW9uLXRpdGxlIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogODtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59XG5cbmlvbi10b2FzdCB7XG4gIC0tYm9yZGVyLXdpZHRoOlx0MTAwcHggO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cargar-horario/cargar-horario.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cargar-horario/cargar-horario.page.ts ***!
  \*************************************************************/
/*! exports provided: CargarHorarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarHorarioPage", function() { return CargarHorarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/armar-horario/data.service */ "./src/app/servicios/armar-horario/data.service.ts");




let CargarHorarioPage = class CargarHorarioPage {
    constructor(dataTrue, navCtrl) {
        this.dataTrue = dataTrue;
        this.navCtrl = navCtrl;
        this.data = new _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"];
        this.textForHeader = [
            '',
            `Selecciona tu/s carrera/s`,
            `Sel. mat. a cursar`,
            `Sel. secciones `,
            `Sel. secciones `,
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
        else if (this.data.seccionActual == 4) {
            if (confirm('Desea guardar el horario')) {
                this.dataTrue.remplazarDatos(this.data);
                window.localStorage.clear();
                window.localStorage.data = JSON.stringify(this.data);
                this.navCtrl.navigateRoot('inicio');
                window.location.replace('inicio');
            }
            else
                this.footer.previous();
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
CargarHorarioPage.ctorParameters = () => [
    { type: _servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fp')
], CargarHorarioPage.prototype, "filepicker", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer')
], CargarHorarioPage.prototype, "footer", void 0);
CargarHorarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cargar-horario",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cargar-horario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cargar-horario/cargar-horario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cargar-horario.page.scss */ "./src/app/pages/cargar-horario/cargar-horario.page.scss")).default]
    })
], CargarHorarioPage);



/***/ })

}]);
//# sourceMappingURL=pages-cargar-horario-cargar-horario-module-es2015.js.map