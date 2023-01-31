(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-armar-horario-armar-horario-module~pages-cargar-horario-cargar-horario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input id=\"file-input\" type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" style=\"display: none;\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel\"/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"transparent\" (click)=\"next()\" *ngIf=\"!validarSeccion(ultimo)\">\n      <ion-icon style=\"color:var(--ion-color-primary)\" name=\"arrow-redo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button  color=\"transparent\" button (click)=\"previous()\" *ngIf=\"this.data.seccionActual!=1\">\n      <ion-icon style=\"color:var(--ion-color-primary)\" name=\"arrow-undo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-list *ngFor=\"let career of careers;\">\n    <ion-item class=\"no-ripple\">\n      <ion-label class=\"ion-text-wrap\">{{career.name}}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"career.isChecked\" (ionChange)=\"onChange()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-list *ngFor=\"let sem of semestersClasses; let i=index\">\n  <ion-item button (click)=\"expandItem($event)\" class=\"collapsible no-ripple\" detail=\"false\">\n    <ion-checkbox class=\"ion-no-padding ion-no-margin\" slot=\"start\" [(ngModel)]=\"sem.checkParent\"\n      [indeterminate]=\"sem.indeterminateState\" (click)=\"checkCheckbox($event, i)\">\n    </ion-checkbox>\n    <span slot=\"start\">&#09;</span>\n    <ion-label class=\"ion-text-wrap no-ripple\"><strong>Semestre {{sem.semestre}}</strong></ion-label>\n    <div *ngIf=\"!estaActivo(i);else otro\">\n      <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n    </div>\n    <ng-template #otro>\n     <div><ion-icon *ngIf=\"estaActivo(i)\" slot=\"end\" name=\"chevron-up-outline\"></ion-icon></div>\n    </ng-template>\n  </ion-item>\n  <div id={{i}} class=\"content\">\n    <ion-item *ngFor=\"let materia of sem.materias\" class=\"no-ripple\" detail=\"false\"> \n      <span slot=\"start\">&#09;</span>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"materia.isItemChecked\" (ionChange)=\"verifyEvent(i)\">\n      </ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">{{materia.nombre}}</ion-label>\n    </ion-item>\n  </div>\n </ion-list>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let carrera of materias; let i=index;\">\n  <app-por-carrera *ngIf=\"data.seccionActual-2-data.seleccionados.length==i\" [data]=\"data\" [esAprobar]=\"false\" [selectedCareerId]=\"carrera._id\" (seleccionados)=\"onChange($event,carrera._id)\"></app-por-carrera>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let carrera of data.seleccionados; let i=index;\">\n    <app-por-carrera *ngIf=\"data.seccionActual-2==i\" [selectedCareerId]=\"carrera._id\" [esAprobar]=\"true\" (seleccionados)=\"onChange($event,carrera._id)\" [data]=\"data\"></app-por-carrera>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list *ngFor=\"let mat of clasesElegidasPorSeccionesForView; let i=index\">\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\"><strong>{{mat.padre}} - {{mat.sigla}}{{(mat.enf=='-- --')?'':'-'+mat.enf}}</strong></ion-label>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n  <ion-item *ngFor=\"let materia of mat.hijos\" class=\"no-ripple\">\n    <span slot=\"start\">&#09;</span>\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"materia.isItemChecked\" (ionChange)=\"onChange()\">\n    </ion-checkbox>\n    <ion-label>\n      <h2 class=\"ion-text-wrap\">\n        {{materia.nombre}}\n      </h2>\n      <h2 class=\"ion-text-wrap\">\n        Seccion {{materia.seccion}} {{materia.def}}\n      </h2>\n      <div *ngFor=\"let profesor of materia.profesor\">\n        <h2 class=\"ion-text-wrap\">\n          {{profesor}}\n        </h2>\n      </div>\n      <h2 class=\"ion-text-wrap\">\n        {{materia.especial}}\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./src/app/componentes/armar-horario/armar-horario.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/armar-horario/armar-horario.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArmarHorarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmarHorarioModule", function() { return ArmarHorarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seleccionar-carrera/seleccionar-carrera.component */ "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/componentes/armar-horario/footer/footer.component.ts");
/* harmony import */ var _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seleccionar-materia/seleccionar-materia.component */ "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts");
/* harmony import */ var _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seleccionar-materia/por-carrera/por-carrera.component */ "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts");
/* harmony import */ var _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-picker/file-picker.component */ "./src/app/componentes/armar-horario/file-picker/file-picker.component.ts");
/* harmony import */ var _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seleccionar-secciones/seleccionar-secciones.component */ "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts");
/* harmony import */ var _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component */ "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts");












let ArmarHorarioModule = class ArmarHorarioModule {
};
ArmarHorarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarCarreraComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__["SeleccionarMateriaComponent"],
            _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__["PorCarreraComponent"],
            _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__["FilePickerComponent"],
            _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__["SeleccionarSeccionesComponent"],
            _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarMateriasAprobadasComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ],
        exports: [
            _seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarCarreraComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__["SeleccionarMateriaComponent"],
            _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__["PorCarreraComponent"],
            _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__["FilePickerComponent"],
            _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__["SeleccionarSeccionesComponent"],
            _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarMateriasAprobadasComponent"],
        ]
    })
], ArmarHorarioModule);



/***/ }),

/***/ "./src/app/componentes/armar-horario/file-picker/file-picker.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/file-picker/file-picker.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vZmlsZS1waWNrZXIvZmlsZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/file-picker/file-picker.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/file-picker/file-picker.component.ts ***!
  \********************************************************************************/
/*! exports provided: FilePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePickerComponent", function() { return FilePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




let FilePickerComponent = class FilePickerComponent {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() { }
    readFilePopup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Seleccionar Horario",
                message: "<p>Actualizado de la Facultad!</p>",
                // backdropDismiss: false,
                buttons: [
                    {
                        text: "Buscar",
                        handler: () => {
                            document.getElementById("file-input").click();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    onFileChange(evt) {
        /* wire up file reader */
        const target = evt.target;
        if (target.files.length !== 1)
            throw new Error("Cannot use multiple files");
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            /* read workbook */
            this.wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](bstr, { type: "binary" });
            this.toData();
        };
        this.FileName = target.files[0].name;
        console.log(this.FileName);
        reader.readAsBinaryString(target.files[0]);
    }
    toData() {
        const read = () => {
            /* grab sheets names */
            const codigosDeCarreras = this.data.seleccionados.flatMap(x => x.code);
            /* save data */
            let data = [];
            for (const codigo of codigosDeCarreras) {
                const ws = this.wb.Sheets[codigo];
                data.push(xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, { header: 1, range: 10, raw: false }));
            }
            if (data[0].length == 0)
                this.presentToast('Asegúrese de que sea el archivo correcto');
            return data;
        };
        const limpiarDatos = (datos_sin_limpiar) => {
            let datosLimpios = [];
            for (let i = 0; i < datos_sin_limpiar.length; i++) {
                let aux = {};
                let cont = 0;
                for (let j = 0; j < datos_sin_limpiar[i].length; j++) {
                    let key = datos_sin_limpiar[0][j];
                    let diasKeys = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                    let esUnDia;
                    diasKeys.forEach(dia => {
                        if (dia == datos_sin_limpiar[0][j]) {
                            key = datos_sin_limpiar[0][j];
                            let clase = {
                                //'Aula': "",
                                'Horario': "",
                            };
                            //clase['Aula'] = datos_sin_limpiar[i][j-1];
                            clase['Horario'] = datos_sin_limpiar[i][j];
                            aux[key] = clase;
                            esUnDia = true;
                        }
                    });
                    if (!esUnDia)
                        if (datos_sin_limpiar[0][j] == 'Día') {
                            let examen = {
                                Día: "",
                                Hora: "",
                            };
                            examen['Día'] = datos_sin_limpiar[i][j];
                            examen['Hora'] = datos_sin_limpiar[i][j + 1];
                            // examen['Aula']= datos_sin_limpiar[i][j+2]+"";
                            //j=j+2;
                            j = j + 1;
                            if (cont == 0)
                                key = '1p';
                            else if (cont == 1)
                                key = '2p';
                            else if (cont == 2)
                                key = '1f';
                            else if (cont == 3)
                                key = '2f';
                            aux[key] = examen;
                            cont++;
                        }
                        else if (!esUnDia && datos_sin_limpiar[0][j] != "AULA") {
                            aux[key] = datos_sin_limpiar[i][j];
                        }
                }
                datosLimpios.push(aux);
            }
            datosLimpios.shift();
            // console.log(datosLimpios);
            return datosLimpios;
        };
        let datos_sin_limpiar = read();
        //console.log(datos_sin_limpiar);
        let datosLimpios = [];
        datos_sin_limpiar.forEach(dato => {
            datosLimpios.push(limpiarDatos(dato));
        });
        this.data.dataFromExcel = datosLimpios;
        //console.log(JSON.stringify(this.data.dataFromExcel));
        // let r = selectCustomClass(
        //   this.dataFromExcel,
        //   this.seletedClassName,
        //   careerEnf
        // );
        // this.selectedClass = r.all
        // this.selectedClassForView = r.forView
        // console.log('selectedClass', this.selectedClass);
    }
    presentToast(msg = "") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = document.createElement('ion-toast');
            toast.message = msg;
            toast.duration = 2000;
            toast.position = 'middle';
            document.body.appendChild(toast);
            return toast.present();
        });
    }
};
FilePickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilePickerComponent.prototype, "data", void 0);
FilePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./file-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./file-picker.component.scss */ "./src/app/componentes/armar-horario/file-picker/file-picker.component.scss")).default]
    })
], FilePickerComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/footer/footer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/footer/footer.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/armar-horario/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.ultimo = 3;
        this.armar = true;
        // console.log(this.data);
    }
    next() {
        // console.log(this.data.seleccionados.length, this.data.contadorCarrera);
        console.log(this.data);
        if (this.armar)
            this.nextArmar();
        else
            this.nextCargar();
        this.data.seccionActual++;
    }
    nextCargar() {
        if (this.data.seccionActual == 1) {
            this.data.contadorCarrera = this.data.seleccionados.length;
            if (this.data.seleccionados.length == 0) {
                this.presentToast('Debes seleccionar al menos una Carrera');
                this.data.seccionActual--;
            }
        }
        else if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera > 1) {
                this.data.seccionActual--;
                this.data.contadorCarrera--;
            }
            else if ((!this.data.materiasSeleccionadas || this.selectedMatOnAllCareer())) {
                this.presentToast('Debes seleccionar al menos una Materia para cada Carrera');
                this.data.seccionActual--;
            }
        }
        else if (this.data.seccionActual == 3 && this.data.toCalendar.length == 0) {
            this.presentToast('Debes seleccionar al menos una Sección');
            this.data.seccionActual--;
        }
    }
    nextArmar() {
        if (this.data.seccionActual == 1) {
            this.data.contadorCarrera = this.data.seleccionados.length;
            if (this.data.seleccionados.length == 0) {
                this.presentToast('Debes seleccionar al menos una Carrera');
                this.data.seccionActual--;
            }
        }
        else if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera > 1) {
                this.data.seccionActual--;
                this.data.contadorCarrera--;
            }
            else
                this.data.contadorCarrera = this.data.seleccionados.length;
        }
        else if (this.data.seccionActual == 3) {
            if (this.data.contadorCarrera > 1) {
                this.data.seccionActual--;
                this.data.contadorCarrera--;
            }
            else if ((!this.data.materiasSeleccionadas || this.selectedMatOnAllCareer())) {
                this.presentToast('Debes seleccionar al menos una Materia para cada Carrera');
                this.data.seccionActual--;
            }
        }
        else if (this.data.seccionActual == 4 && this.data.toCalendar.length == 0) {
            this.presentToast('Debes seleccionar al menos una Sección');
            this.data.seccionActual--;
        }
    }
    selectedMatOnAllCareer() {
        // console.log(this.data.materiasSeleccionadas);
        for (const iterator of this.data.seleccionados) {
            if (!this.data.materiasSeleccionadas[iterator._id] || this.data.materiasSeleccionadas[iterator._id].length == 0)
                return true;
        }
        return false;
    }
    previous() {
        if (this.armar)
            this.previousArmar();
        else
            this.previousCargar();
        this.data.seccionActual--;
    }
    previousCargar() {
        if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
                this.data.seccionActual++;
                this.data.contadorCarrera++;
            }
            else {
                this.data.contadorCarrera = 1;
            }
        }
    }
    previousArmar() {
        if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
                this.data.seccionActual++;
                this.data.contadorCarrera++;
            }
            else {
                this.data.contadorCarrera = 1;
            }
        }
        else if (this.data.seccionActual == 3) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
                this.data.seccionActual++;
                this.data.contadorCarrera++;
            }
            else {
                this.data.contadorCarrera = 1;
            }
        }
    }
    validarSeccion(x) {
        return this.data.seccionActual === x + 5;
    }
    ngOnInit() { }
    presentToast(msg = "") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = document.createElement('ion-toast');
            toast.message = msg;
            toast.position = 'middle';
            toast.duration = 2000;
            document.body.appendChild(toast);
            return toast.present();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FooterComponent.prototype, "ultimo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FooterComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FooterComponent.prototype, "armar", void 0);
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/componentes/armar-horario/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: --ion-color-medium;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1jYXJyZXJhL3NlbGVjY2lvbmFyLWNhcnJlcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItY2FycmVyYS9zZWxlY2Npb25hci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItY2FycmVyYS9zZWxlY2Npb25hci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IC0taW9uLWNvbG9yLW1lZGl1bTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAtLWlvbi1jb2xvci1tZWRpdW07XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SeleccionarCarreraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarCarreraComponent", function() { return SeleccionarCarreraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fpuna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fpuna.service */ "./src/app/fpuna.service.ts");



let SeleccionarCarreraComponent = class SeleccionarCarreraComponent {
    constructor(fpuna) {
        this.fpuna = fpuna;
        this.initData();
    }
    ngOnInit() {
        // console.log(this.data);
        this.seleccionados = this.data.seleccionados;
    }
    initData() {
        this.fpuna.getCarrerasAll().subscribe((r) => {
            this.careers = r.map(x => (Object.assign(Object.assign({}, x), { 'isChecked': false })));
            // console.log(JSON.stringify(this.careers))
            if (this.data.seleccionados.length != 0) {
                this.data.seleccionados.forEach(carrera => {
                    this.careers.find(c => c._id == carrera._id).isChecked = carrera.isChecked;
                });
            }
            // console.log(this.careers);
        });
    }
    onChange() {
        this.data.seleccionados = this.careers.filter(x => x.isChecked);
        // console.log(this.data.seleccionados);
    }
};
SeleccionarCarreraComponent.ctorParameters = () => [
    { type: _fpuna_service__WEBPACK_IMPORTED_MODULE_2__["FpunaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeleccionarCarreraComponent.prototype, "data", void 0);
SeleccionarCarreraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccionar-carrera',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seleccionar-carrera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seleccionar-carrera.component.scss */ "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss")).default]
    })
], SeleccionarCarreraComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".collapsible {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n}\n\n.active.dark, .collapsible:hover.dark {\n  background-color: #555;\n}\n\n.content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n.collapsible.active .icon-active:after {\n  max-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3Bvci1jYXJyZXJhL3Bvci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLW1hdGVyaWEvcG9yLWNhcnJlcmEvcG9yLWNhcnJlcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3Bvci1jYXJyZXJhL3Bvci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sbGFwc2libGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hY3RpdmUuZGFyaywgLmNvbGxhcHNpYmxlOmhvdmVyLmRhcmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5jb2xsYXBzaWJsZS5hY3RpdmUgLmljb24tYWN0aXZlOmFmdGVye1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbn0iLCIuY29sbGFwc2libGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hY3RpdmUuZGFyaywgLmNvbGxhcHNpYmxlOmhvdmVyLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuXG4uY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmNvbGxhcHNpYmxlLmFjdGl2ZSAuaWNvbi1hY3RpdmU6YWZ0ZXIge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PorCarreraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorCarreraComponent", function() { return PorCarreraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_fpuna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fpuna.service */ "./src/app/fpuna.service.ts");



let PorCarreraComponent = class PorCarreraComponent {
    constructor(fpuna) {
        this.fpuna = fpuna;
        this.esAprobar = false;
        this.seleccionados = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxHeight = [];
    }
    ngOnInit() {
        console.log(this.data.materiasAprobadas);
        // console.log(this.data);
        if (this.esAprobar) {
            // console.log('esto aprov');
            this.getData();
        }
        else
            this.descartarDatosPrerrequisito();
    }
    descartarDatosPrerrequisito() {
        this.fpuna.getPrerrequisitosAll().subscribe(prerrequisitos => {
            const idCarrera = this.selectedCareerId;
            let aprobadas = this.data.materiasAprobadas[this.selectedCareerId];
            if (!this.data.materiasAprobadas[this.selectedCareerId])
                aprobadas = [];
            // console.log('todas', todas);
            if (this.esCargarHorario) {
                this.data.clasesTodas = undefined;
                this.getData();
            }
            const todas = this.data.clasesTodas.filter(x => x.career_id == idCarrera);
            let ids_aprobadas = todas.filter(x => aprobadas.includes(x.name)).map(x => x._id);
            aprobadas = todas.filter(x => ids_aprobadas.includes(x._id));
            console.log('aprobadas', aprobadas);
            let candidatos = todas;
            // console.log('antes de creditos', candidatos);
            //Filtrar por creditos
            let totalCreditosApro = 0;
            aprobadas.map(x => totalCreditosApro += x.credits);
            let totalCreditosCarrera = 1;
            todas.map(x => totalCreditosCarrera += x.credits);
            if (totalCreditosCarrera == 0)
                totalCreditosCarrera = 1;
            const porcentajeCreditos = totalCreditosApro / totalCreditosCarrera;
            // console.log('total', totalCreditosCarrera);
            candidatos = candidatos.filter(x => x.credits_percentage_required <= porcentajeCreditos);
            // console.log('despues de creditos', candidatos);
            //Filtra prerrequisitos
            candidatos = candidatos.filter(materia => {
                let prePorMateria = prerrequisitos.filter(x => x.class2_id == materia._id).map(x => x.class1_id);
                let poseePres = prePorMateria.every(x => ids_aprobadas.includes(x));
                return poseePres;
            });
            // Excluir aprobados
            candidatos = candidatos.filter(x => !ids_aprobadas.includes(x._id));
            //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]
            let c = [];
            candidatos.forEach(x => {
                let index = c.findIndex(y => y.semestre == x.semester);
                if (index == -1) {
                    c.push({
                        semestre: x.semester,
                        materias: [{ nombre: x.name }]
                    });
                }
                else {
                    c[index].materias.push({ nombre: x.name });
                }
            });
            // Ordenar
            this.semestersClasses = c.sort((x, y) => x.semestre - y.semestre);
            this.semestersClasses.map(x => x.materias.sort((x, y) => x.sem > y.sem ? 1 : -1));
            console.log('this.semestersClasses', this.semestersClasses);
            const marcados = this.data.materiasSeleccionadas[this.selectedCareerId];
            if (marcados)
                marcados.forEach(toCheck => {
                    this.semestersClasses.forEach(sem => sem.materias.forEach(materia => {
                        if (toCheck == materia.nombre)
                            materia.isItemChecked = true;
                    }));
                });
        });
    }
    getData() {
        this.fpuna.getClasesAll().subscribe((r) => {
            this.data.clasesTodas = r;
            //filtrar materias para esta carrera
            r = r.filter(x => x.career_id == this.selectedCareerId);
            //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]
            let c = [];
            r.forEach(x => {
                let index = c.findIndex(y => y.semestre == x.semester);
                if (index == -1) {
                    c.push({
                        semestre: x.semester,
                        materias: [{ nombre: x.name }]
                    });
                }
                else {
                    c[index].materias.push({ nombre: x.name });
                }
            });
            //ordenar
            this.semestersClasses = c.sort((x, y) => x.semestre - y.semestre);
            this.semestersClasses.map(x => x.materias.sort((x, y) => x.sem > y.sem));
            // console.log(JSON.stringify(this.semestersClasses));
            // console.log(this.semestersClasses);
            // console.log('hola');
            // Marcar los ya marcados anteriormente
            const marcados = this.data.materiasAprobadas[this.selectedCareerId];
            if (marcados)
                marcados.forEach(toCheck => {
                    this.semestersClasses.forEach(sem => sem.materias.forEach(materia => {
                        if (toCheck == materia.nombre)
                            materia.isItemChecked = true;
                    }));
                });
        });
    }
    checkCheckbox(ev, index) {
        // console.log('antes',document.getElementById('0').style.maxHeight);
        let aux = document.getElementById(index.toString()).style.maxHeight;
        // Marcar los demas(?
        setTimeout(() => {
            this.semestersClasses[index].materias.forEach((materia) => {
                materia["isItemChecked"] = this.semestersClasses[index].checkParent;
            });
        });
        // console.log('despues',document.getElementById('0').style.maxHeight);
        // console.log(aux);
        this.toggleCollapse(document.getElementById(index.toString()));
        // console.log('checkbox(?');
    }
    verifyEvent(index) {
        const allItems = this.semestersClasses[index].materias.length;
        let selected = 0;
        this.semestersClasses[index].materias.map((item) => {
            if (item.isItemChecked)
                selected++;
        });
        if (selected > 0 && selected < allItems) {
            // One item is selected among all checkbox elements
            this.semestersClasses[index].indeterminateState = true;
            this.semestersClasses[index].checkParent = false;
        }
        else if (selected == allItems) {
            // All item selected
            this.semestersClasses[index].checkParent = true;
            this.semestersClasses[index].indeterminateState = false;
        }
        else {
            // No item is selected
            this.semestersClasses[index].indeterminateState = false;
            this.semestersClasses[index].checkParent = false;
        }
        // Obtener materias seleccionadas
        let materiasSeleccionadas = [];
        this.semestersClasses.filter(x => x.materias);
        for (const semestres of this.semestersClasses) {
            for (const materia of semestres.materias) {
                if (materia.isItemChecked)
                    materiasSeleccionadas.push(materia.nombre);
            }
        }
        this.seleccionados.emit(materiasSeleccionadas);
    }
    expandItem(e) {
        let colapsible = e.target;
        while (!colapsible.classList.contains('collapsible'))
            colapsible = colapsible.parentElement;
        colapsible.classList.toggle("active");
        let content = colapsible.nextElementSibling;
        this.toggleCollapse(content);
    }
    toggleCollapse(content) {
        if (content.style.maxHeight) {
            content.style.setProperty('max-height', null);
        }
        else {
            content.style.setProperty('max-height', content.scrollHeight + 'px');
        }
    }
    estaActivo(i) {
        const aux = document.getElementById(i.toString());
        if (aux)
            return document.getElementById(i.toString()).previousElementSibling.classList.contains('active');
        else
            return false;
    }
};
PorCarreraComponent.ctorParameters = () => [
    { type: src_app_fpuna_service__WEBPACK_IMPORTED_MODULE_2__["FpunaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCarreraComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCarreraComponent.prototype, "selectedCareerId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCarreraComponent.prototype, "esAprobar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCarreraComponent.prototype, "esCargarHorario", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PorCarreraComponent.prototype, "seleccionados", void 0);
PorCarreraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-por-carrera',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./por-carrera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./por-carrera.component.scss */ "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss")).default]
    })
], PorCarreraComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3NlbGVjY2lvbmFyLW1hdGVyaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItbWF0ZXJpYS9zZWxlY2Npb25hci1tYXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItbWF0ZXJpYS9zZWxlY2Npb25hci1tYXRlcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SeleccionarMateriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarMateriaComponent", function() { return SeleccionarMateriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SeleccionarMateriaComponent = class SeleccionarMateriaComponent {
    constructor() {
        // console.log(this.data);
    }
    ngOnInit() {
        // console.log(this.data);
        this.materias = this.data.seleccionados;
        this.seccionInicial = this.data.seccionActual;
    }
    onChange(selected, id) {
        this.data.materiasSeleccionadas[id] = selected;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeleccionarMateriaComponent.prototype, "data", void 0);
SeleccionarMateriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccionar-materia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seleccionar-materia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seleccionar-materia.component.scss */ "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss")).default]
    })
], SeleccionarMateriaComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMvc2VsZWNjaW9uYXItbWF0ZXJpYXMtYXByb2JhZGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLW1hdGVyaWFzLWFwcm9iYWRhcy9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMvc2VsZWNjaW9uYXItbWF0ZXJpYXMtYXByb2JhZGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SeleccionarMateriasAprobadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarMateriasAprobadasComponent", function() { return SeleccionarMateriasAprobadasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SeleccionarMateriasAprobadasComponent = class SeleccionarMateriasAprobadasComponent {
    constructor() { }
    ngOnInit() {
        this.data.esAprobar = true;
        // console.log(this.data.esAprobar);
    }
    onChange(selected, id) {
        this.data.materiasAprobadas[id] = selected;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeleccionarMateriasAprobadasComponent.prototype, "data", void 0);
SeleccionarMateriasAprobadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccionar-materias-aprobadas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seleccionar-materias-aprobadas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seleccionar-materias-aprobadas.component.scss */ "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss")).default]
    })
], SeleccionarMateriasAprobadasComponent);



/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1zZWNjaW9uZXMvc2VsZWNjaW9uYXItc2VjY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLXNlY2Npb25lcy9zZWxlY2Npb25hci1zZWNjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1zZWNjaW9uZXMvc2VsZWNjaW9uYXItc2VjY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SeleccionarSeccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarSeccionesComponent", function() { return SeleccionarSeccionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SeleccionarSeccionesComponent = class SeleccionarSeccionesComponent {
    // clasesElegidasPorSecciones: any[];
    // clasesElegidasPorSeccionesForView: any;
    constructor() {
        this.clasesElegidasPorSecciones = [];
        this.clasesElegidasPorSeccionesForView = [];
    }
    ngOnInit() {
        this.init();
    }
    init() {
        // console.log('hola');
        this.clasesElegidasPorSeccionesForView = this.data.seccionesElegidasForView;
        const materiasSeleccionadas = this.data.materiasSeleccionadas.filter(x => x);
        const carrerasSeleccionadas = this.data.seleccionados;
        const datos = this.data.dataFromExcel;
        const condicionDeFiltro = (clase, nombre, enf) => {
            //let principioCoinc = clase['Asignatura'].match(RegExp('' + nombre));
            let principioCoinc = clase['Asignatura'].includes(nombre);
            let esLaPalabra = clase['Asignatura'] === nombre;
            let nombreCompleto = clase['Asignatura'][nombre.length] == " ";
            let enfasisCorrecto = 
            //tieneEnfasisGnral  ...puede estar vacio :/
            typeof clase["Enfasis"] === "undefined" ||
                clase["Enfasis"] === "-- --" ||
                //tieneEnfasisEspecifico
                clase["Enfasis"].includes(enf);
            let finCoincide = esLaPalabra || nombreCompleto;
            return principioCoinc && finCoincide && enfasisCorrecto;
        };
        // filtro materias desde del excel de acuerdo mat previamentes seleccionadas 
        const fitroMateriasPorSeccion = (data, materiasSeleccionadas, enfasis) => {
            let todoLosDatos = [];
            let agrupador = materiasSeleccionadas.map(x => {
                return {
                    padre: x,
                    sigla: '',
                    enf: enfasis,
                    hijos: [],
                };
            });
            // console.log('agrupador', agrupador);
            data.forEach(clase => {
                // console.log(clase);
                materiasSeleccionadas.forEach(materia => {
                    try {
                        if (condicionDeFiltro(clase, materia, enfasis)) {
                            let index = agrupador.findIndex(x => x.padre === materia);
                            agrupador[index].sigla = clase["Sigla carrera"];
                            // Valindando si la materia tiene 2 o + profes
                            let prof = [];
                            let tit = clase['Tít'].split('\n');
                            for (let i = 0; i < tit.length; i++) {
                                prof.push(`${clase["Tít"].split('\n')[i]} ${clase["Nombre"].split('\n')[i]} ${clase["Apellido"].split('\n')[i]}`);
                            }
                            agrupador[index].hijos.push({
                                id: clase['Item'],
                                materia: clase["Asignatura"].split('(*)')[0].split('-')[0],
                                especial: clase["Asignatura"].split('(*)')[0].split('-')[1],
                                def: clase["Asignatura"].includes('(*)') ? '(*)' : '',
                                seccion: clase["Sección"],
                                profesor: prof,
                            });
                            todoLosDatos.push(clase);
                        }
                    }
                    catch (error) {
                    }
                });
            });
            // console.log(agrupador);
            return { 'all': todoLosDatos, 'forView': agrupador };
        };
        // console.log('datos', datos);
        // console.log('materiasSeleccionadas', materiasSeleccionadas);
        // console.log('carrerasSeleccionadas', carrerasSeleccionadas);
        this.clasesElegidasPorSecciones = [];
        this.clasesElegidasPorSeccionesForView = [];
        if (!this.clasesElegidasPorSeccionesForView[0]) {
            for (let i = 0; i < carrerasSeleccionadas.length; i++) {
                const datosDe1Carrera = datos[i];
                const carrera = carrerasSeleccionadas[i];
                const materias = materiasSeleccionadas[i];
                let r = fitroMateriasPorSeccion(datosDe1Carrera, materias, carrera.enf);
                this.clasesElegidasPorSecciones.push(r.all);
                this.clasesElegidasPorSeccionesForView.push(r.forView);
            }
            this.clasesElegidasPorSeccionesForView = this.clasesElegidasPorSeccionesForView.flat().sort((x, y) => x.padre < y.padre);
            this.data.seccionesElegidasForView = this.clasesElegidasPorSeccionesForView;
            this.data.seccionesElegidas = this.clasesElegidasPorSecciones.flat();
        }
        console.log('Clases ele por secciones', this.clasesElegidasPorSecciones);
        console.log('Clases ele por secciones for view', this.clasesElegidasPorSeccionesForView);
        this.clasesElegidasPorSeccionesForView.sort((x, y) => x.padre > y.padre ? 1 : -1);
        this.data.toCalendar.forEach(mat => {
            mat.Item;
            this.clasesElegidasPorSeccionesForView.forEach(padre => {
                padre.hijos.forEach(seccion => {
                    if (mat.Item == seccion.id) {
                        seccion.isItemChecked = true;
                    }
                });
            });
        });
    }
    onChange() {
        // console.log(this.clasesElegidasPorSeccionesForView);
        // console.log('chau');
        this.data.toCalendar = [];
        this.data.seccionesElegidasForView.forEach(element => {
            element.hijos.forEach(clase => {
                if (clase.isItemChecked) {
                    let itemselected = this.data.seccionesElegidas.find(x => {
                        return clase.id === x['Item'];
                    });
                    this.data.toCalendar.push(itemselected);
                }
            });
        });
        // console.log(this.data.toCalendar);
    }
    ngOnDestroy() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeleccionarSeccionesComponent.prototype, "data", void 0);
SeleccionarSeccionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccionar-secciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seleccionar-secciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seleccionar-secciones.component.scss */ "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss")).default]
    })
], SeleccionarSeccionesComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-armar-horario-armar-horario-module~pages-cargar-horario-cargar-horario-module-es2015.js.map