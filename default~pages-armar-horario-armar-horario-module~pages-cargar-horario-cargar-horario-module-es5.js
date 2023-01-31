function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-armar-horario-armar-horario-module~pages-cargar-horario-cargar-horario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioFilePickerFilePickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input id=\"file-input\" type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" style=\"display: none;\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel\"/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"transparent\" (click)=\"next()\" *ngIf=\"!validarSeccion(ultimo)\">\n      <ion-icon style=\"color:var(--ion-color-primary)\" name=\"arrow-redo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button  color=\"transparent\" button (click)=\"previous()\" *ngIf=\"this.data.seccionActual!=1\">\n      <ion-icon style=\"color:var(--ion-color-primary)\" name=\"arrow-undo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioSeleccionarCarreraSeleccionarCarreraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <ion-list *ngFor=\"let career of careers;\">\n    <ion-item class=\"no-ripple\">\n      <ion-label class=\"ion-text-wrap\">{{career.name}}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"career.isChecked\" (ionChange)=\"onChange()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioSeleccionarMateriaPorCarreraPorCarreraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ion-list *ngFor=\"let sem of semestersClasses; let i=index\">\n  <ion-item button (click)=\"expandItem($event)\" class=\"collapsible no-ripple\" detail=\"false\">\n    <ion-checkbox class=\"ion-no-padding ion-no-margin\" slot=\"start\" [(ngModel)]=\"sem.checkParent\"\n      [indeterminate]=\"sem.indeterminateState\" (click)=\"checkCheckbox($event, i)\">\n    </ion-checkbox>\n    <span slot=\"start\">&#09;</span>\n    <ion-label class=\"ion-text-wrap no-ripple\"><strong>Semestre {{sem.semestre}}</strong></ion-label>\n    <div *ngIf=\"!estaActivo(i);else otro\">\n      <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n    </div>\n    <ng-template #otro>\n     <div><ion-icon *ngIf=\"estaActivo(i)\" slot=\"end\" name=\"chevron-up-outline\"></ion-icon></div>\n    </ng-template>\n  </ion-item>\n  <div id={{i}} class=\"content\">\n    <ion-item *ngFor=\"let materia of sem.materias\" class=\"no-ripple\" detail=\"false\"> \n      <span slot=\"start\">&#09;</span>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"materia.isItemChecked\" (ionChange)=\"verifyEvent(i)\">\n      </ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">{{materia.nombre}}</ion-label>\n    </ion-item>\n  </div>\n </ion-list>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioSeleccionarMateriaSeleccionarMateriaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let carrera of materias; let i=index;\">\n  <app-por-carrera *ngIf=\"data.seccionActual-2-data.seleccionados.length==i\" [data]=\"data\" [esAprobar]=\"false\" [selectedCareerId]=\"carrera._id\" (seleccionados)=\"onChange($event,carrera._id)\"></app-por-carrera>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioSeleccionarMateriasAprobadasSeleccionarMateriasAprobadasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let carrera of data.seleccionados; let i=index;\">\n    <app-por-carrera *ngIf=\"data.seccionActual-2==i\" [selectedCareerId]=\"carrera._id\" [esAprobar]=\"true\" (seleccionados)=\"onChange($event,carrera._id)\" [data]=\"data\"></app-por-carrera>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesArmarHorarioSeleccionarSeccionesSeleccionarSeccionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list *ngFor=\"let mat of clasesElegidasPorSeccionesForView; let i=index\">\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\"><strong>{{mat.padre}} - {{mat.sigla}}{{(mat.enf=='-- --')?'':'-'+mat.enf}}</strong></ion-label>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n  <ion-item *ngFor=\"let materia of mat.hijos\" class=\"no-ripple\">\n    <span slot=\"start\">&#09;</span>\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"materia.isItemChecked\" (ionChange)=\"onChange()\">\n    </ion-checkbox>\n    <ion-label>\n      <h2 class=\"ion-text-wrap\">\n        {{materia.nombre}}\n      </h2>\n      <h2 class=\"ion-text-wrap\">\n        Seccion {{materia.seccion}} {{materia.def}}\n      </h2>\n      <div *ngFor=\"let profesor of materia.profesor\">\n        <h2 class=\"ion-text-wrap\">\n          {{profesor}}\n        </h2>\n      </div>\n      <h2 class=\"ion-text-wrap\">\n        {{materia.especial}}\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/armar-horario.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/componentes/armar-horario/armar-horario.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ArmarHorarioModule */

  /***/
  function srcAppComponentesArmarHorarioArmarHorarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArmarHorarioModule", function () {
      return ArmarHorarioModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seleccionar-carrera/seleccionar-carrera.component */
    "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/componentes/armar-horario/footer/footer.component.ts");
    /* harmony import */


    var _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./seleccionar-materia/seleccionar-materia.component */
    "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts");
    /* harmony import */


    var _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./seleccionar-materia/por-carrera/por-carrera.component */
    "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts");
    /* harmony import */


    var _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./file-picker/file-picker.component */
    "./src/app/componentes/armar-horario/file-picker/file-picker.component.ts");
    /* harmony import */


    var _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./seleccionar-secciones/seleccionar-secciones.component */
    "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts");
    /* harmony import */


    var _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component */
    "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts");

    var ArmarHorarioModule = function ArmarHorarioModule() {
      _classCallCheck(this, ArmarHorarioModule);
    };

    ArmarHorarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarCarreraComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__["SeleccionarMateriaComponent"], _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__["PorCarreraComponent"], _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__["FilePickerComponent"], _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__["SeleccionarSeccionesComponent"], _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarMateriasAprobadasComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      exports: [_seleccionar_carrera_seleccionar_carrera_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarCarreraComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _seleccionar_materia_seleccionar_materia_component__WEBPACK_IMPORTED_MODULE_7__["SeleccionarMateriaComponent"], _seleccionar_materia_por_carrera_por_carrera_component__WEBPACK_IMPORTED_MODULE_8__["PorCarreraComponent"], _file_picker_file_picker_component__WEBPACK_IMPORTED_MODULE_9__["FilePickerComponent"], _seleccionar_secciones_seleccionar_secciones_component__WEBPACK_IMPORTED_MODULE_10__["SeleccionarSeccionesComponent"], _seleccionar_materias_aprobadas_seleccionar_materias_aprobadas_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarMateriasAprobadasComponent"]]
    })], ArmarHorarioModule);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/file-picker/file-picker.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/file-picker/file-picker.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioFilePickerFilePickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vZmlsZS1waWNrZXIvZmlsZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/file-picker/file-picker.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/file-picker/file-picker.component.ts ***!
    \********************************************************************************/

  /*! exports provided: FilePickerComponent */

  /***/
  function srcAppComponentesArmarHorarioFilePickerFilePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerComponent", function () {
      return FilePickerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

    var FilePickerComponent = /*#__PURE__*/function () {
      function FilePickerComponent(alertController) {
        _classCallCheck(this, FilePickerComponent);

        this.alertController = alertController;
      }

      _createClass(FilePickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "readFilePopup",
        value: function readFilePopup() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Seleccionar Horario",
                      message: "<p>Actualizado de la Facultad!</p>",
                      // backdropDismiss: false,
                      buttons: [{
                        text: "Buscar",
                        handler: function handler() {
                          document.getElementById("file-input").click();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(evt) {
          var _this = this;

          /* wire up file reader */
          var target = evt.target;
          if (target.files.length !== 1) throw new Error("Cannot use multiple files");
          var reader = new FileReader();

          reader.onload = function (e) {
            var bstr = e.target.result;
            /* read workbook */

            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](bstr, {
              type: "binary"
            });

            _this.toData();
          };

          this.FileName = target.files[0].name;
          console.log(this.FileName);
          reader.readAsBinaryString(target.files[0]);
        }
      }, {
        key: "toData",
        value: function toData() {
          var _this2 = this;

          var read = function read() {
            /* grab sheets names */
            var codigosDeCarreras = _this2.data.seleccionados.flatMap(function (x) {
              return x.code;
            });
            /* save data */


            var data = [];

            var _iterator = _createForOfIteratorHelper(codigosDeCarreras),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var codigo = _step.value;
                var ws = _this2.wb.Sheets[codigo];
                data.push(xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, {
                  header: 1,
                  range: 10,
                  raw: false
                }));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (data[0].length == 0) _this2.presentToast('Asegúrese de que sea el archivo correcto');
            return data;
          };

          var limpiarDatos = function limpiarDatos(datos_sin_limpiar) {
            var datosLimpios = [];

            var _loop = function _loop(i) {
              var aux = {};
              var cont = 0;

              var _loop2 = function _loop2(_j) {
                var key = datos_sin_limpiar[0][_j];
                var diasKeys = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                var esUnDia = void 0;
                diasKeys.forEach(function (dia) {
                  if (dia == datos_sin_limpiar[0][_j]) {
                    key = datos_sin_limpiar[0][_j];
                    var clase = {
                      //'Aula': "",
                      'Horario': ""
                    }; //clase['Aula'] = datos_sin_limpiar[i][j-1];

                    clase['Horario'] = datos_sin_limpiar[i][_j];
                    aux[key] = clase;
                    esUnDia = true;
                  }
                });
                if (!esUnDia) if (datos_sin_limpiar[0][_j] == 'Día') {
                  var examen = {
                    Día: "",
                    Hora: ""
                  };
                  examen['Día'] = datos_sin_limpiar[i][_j];
                  examen['Hora'] = datos_sin_limpiar[i][_j + 1]; // examen['Aula']= datos_sin_limpiar[i][j+2]+"";
                  //j=j+2;

                  _j = _j + 1;
                  if (cont == 0) key = '1p';else if (cont == 1) key = '2p';else if (cont == 2) key = '1f';else if (cont == 3) key = '2f';
                  aux[key] = examen;
                  cont++;
                } else if (!esUnDia && datos_sin_limpiar[0][_j] != "AULA") {
                  aux[key] = datos_sin_limpiar[i][_j];
                }
                j = _j;
              };

              for (var j = 0; j < datos_sin_limpiar[i].length; j++) {
                _loop2(j);
              }

              datosLimpios.push(aux);
            };

            for (var i = 0; i < datos_sin_limpiar.length; i++) {
              _loop(i);
            }

            datosLimpios.shift(); // console.log(datosLimpios);

            return datosLimpios;
          };

          var datos_sin_limpiar = read(); //console.log(datos_sin_limpiar);

          var datosLimpios = [];
          datos_sin_limpiar.forEach(function (dato) {
            datosLimpios.push(limpiarDatos(dato));
          });
          this.data.dataFromExcel = datosLimpios; //console.log(JSON.stringify(this.data.dataFromExcel));
          // let r = selectCustomClass(
          //   this.dataFromExcel,
          //   this.seletedClassName,
          //   careerEnf
          // );
          // this.selectedClass = r.all
          // this.selectedClassForView = r.forView
          // console.log('selectedClass', this.selectedClass);
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    toast = document.createElement('ion-toast');
                    toast.message = msg;
                    toast.duration = 2000;
                    toast.position = 'middle';
                    document.body.appendChild(toast);
                    return _context2.abrupt("return", toast.present());

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return FilePickerComponent;
    }();

    FilePickerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FilePickerComponent.prototype, "data", void 0);
    FilePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-file-picker',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./file-picker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/file-picker/file-picker.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./file-picker.component.scss */
      "./src/app/componentes/armar-horario/file-picker/file-picker.component.scss"))["default"]]
    })], FilePickerComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/footer/footer.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/footer/footer.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/footer/footer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/componentes/armar-horario/footer/footer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentesArmarHorarioFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.ultimo = 3;
        this.armar = true; // console.log(this.data);
      }

      _createClass(FooterComponent, [{
        key: "next",
        value: function next() {
          // console.log(this.data.seleccionados.length, this.data.contadorCarrera);
          console.log(this.data);
          if (this.armar) this.nextArmar();else this.nextCargar();
          this.data.seccionActual++;
        }
      }, {
        key: "nextCargar",
        value: function nextCargar() {
          if (this.data.seccionActual == 1) {
            this.data.contadorCarrera = this.data.seleccionados.length;

            if (this.data.seleccionados.length == 0) {
              this.presentToast('Debes seleccionar al menos una Carrera');
              this.data.seccionActual--;
            }
          } else if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera > 1) {
              this.data.seccionActual--;
              this.data.contadorCarrera--;
            } else if (!this.data.materiasSeleccionadas || this.selectedMatOnAllCareer()) {
              this.presentToast('Debes seleccionar al menos una Materia para cada Carrera');
              this.data.seccionActual--;
            }
          } else if (this.data.seccionActual == 3 && this.data.toCalendar.length == 0) {
            this.presentToast('Debes seleccionar al menos una Sección');
            this.data.seccionActual--;
          }
        }
      }, {
        key: "nextArmar",
        value: function nextArmar() {
          if (this.data.seccionActual == 1) {
            this.data.contadorCarrera = this.data.seleccionados.length;

            if (this.data.seleccionados.length == 0) {
              this.presentToast('Debes seleccionar al menos una Carrera');
              this.data.seccionActual--;
            }
          } else if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera > 1) {
              this.data.seccionActual--;
              this.data.contadorCarrera--;
            } else this.data.contadorCarrera = this.data.seleccionados.length;
          } else if (this.data.seccionActual == 3) {
            if (this.data.contadorCarrera > 1) {
              this.data.seccionActual--;
              this.data.contadorCarrera--;
            } else if (!this.data.materiasSeleccionadas || this.selectedMatOnAllCareer()) {
              this.presentToast('Debes seleccionar al menos una Materia para cada Carrera');
              this.data.seccionActual--;
            }
          } else if (this.data.seccionActual == 4 && this.data.toCalendar.length == 0) {
            this.presentToast('Debes seleccionar al menos una Sección');
            this.data.seccionActual--;
          }
        }
      }, {
        key: "selectedMatOnAllCareer",
        value: function selectedMatOnAllCareer() {
          // console.log(this.data.materiasSeleccionadas);
          var _iterator2 = _createForOfIteratorHelper(this.data.seleccionados),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var iterator = _step2.value;
              if (!this.data.materiasSeleccionadas[iterator._id] || this.data.materiasSeleccionadas[iterator._id].length == 0) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "previous",
        value: function previous() {
          if (this.armar) this.previousArmar();else this.previousCargar();
          this.data.seccionActual--;
        }
      }, {
        key: "previousCargar",
        value: function previousCargar() {
          if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
              this.data.seccionActual++;
              this.data.contadorCarrera++;
            } else {
              this.data.contadorCarrera = 1;
            }
          }
        }
      }, {
        key: "previousArmar",
        value: function previousArmar() {
          if (this.data.seccionActual == 2) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
              this.data.seccionActual++;
              this.data.contadorCarrera++;
            } else {
              this.data.contadorCarrera = 1;
            }
          } else if (this.data.seccionActual == 3) {
            if (this.data.contadorCarrera < this.data.seleccionados.length) {
              this.data.seccionActual++;
              this.data.contadorCarrera++;
            } else {
              this.data.contadorCarrera = 1;
            }
          }
        }
      }, {
        key: "validarSeccion",
        value: function validarSeccion(x) {
          return this.data.seccionActual === x + 5;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentToast",
        value: function presentToast() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    toast = document.createElement('ion-toast');
                    toast.message = msg;
                    toast.position = 'middle';
                    toast.duration = 2000;
                    document.body.appendChild(toast);
                    return _context3.abrupt("return", toast.present());

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }]);

      return FooterComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "ultimo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "armar", void 0);
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/componentes/armar-horario/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarCarreraSeleccionarCarreraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: --ion-color-medium;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1jYXJyZXJhL3NlbGVjY2lvbmFyLWNhcnJlcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItY2FycmVyYS9zZWxlY2Npb25hci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItY2FycmVyYS9zZWxlY2Npb25hci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IC0taW9uLWNvbG9yLW1lZGl1bTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAtLWlvbi1jb2xvci1tZWRpdW07XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: SeleccionarCarreraComponent */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarCarreraSeleccionarCarreraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarCarreraComponent", function () {
      return SeleccionarCarreraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fpuna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../fpuna.service */
    "./src/app/fpuna.service.ts");

    var SeleccionarCarreraComponent = /*#__PURE__*/function () {
      function SeleccionarCarreraComponent(fpuna) {
        _classCallCheck(this, SeleccionarCarreraComponent);

        this.fpuna = fpuna;
        this.initData();
      }

      _createClass(SeleccionarCarreraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.data);
          this.seleccionados = this.data.seleccionados;
        }
      }, {
        key: "initData",
        value: function initData() {
          var _this3 = this;

          this.fpuna.getCarrerasAll().subscribe(function (r) {
            _this3.careers = r.map(function (x) {
              return Object.assign(Object.assign({}, x), {
                'isChecked': false
              });
            }); // console.log(JSON.stringify(this.careers))

            if (_this3.data.seleccionados.length != 0) {
              _this3.data.seleccionados.forEach(function (carrera) {
                _this3.careers.find(function (c) {
                  return c._id == carrera._id;
                }).isChecked = carrera.isChecked;
              });
            } // console.log(this.careers);

          });
        }
      }, {
        key: "onChange",
        value: function onChange() {
          this.data.seleccionados = this.careers.filter(function (x) {
            return x.isChecked;
          }); // console.log(this.data.seleccionados);
        }
      }]);

      return SeleccionarCarreraComponent;
    }();

    SeleccionarCarreraComponent.ctorParameters = function () {
      return [{
        type: _fpuna_service__WEBPACK_IMPORTED_MODULE_2__["FpunaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeleccionarCarreraComponent.prototype, "data", void 0);
    SeleccionarCarreraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seleccionar-carrera',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seleccionar-carrera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seleccionar-carrera.component.scss */
      "./src/app/componentes/armar-horario/seleccionar-carrera/seleccionar-carrera.component.scss"))["default"]]
    })], SeleccionarCarreraComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriaPorCarreraPorCarreraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".collapsible {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n}\n\n.active.dark, .collapsible:hover.dark {\n  background-color: #555;\n}\n\n.content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n.collapsible.active .icon-active:after {\n  max-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3Bvci1jYXJyZXJhL3Bvci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLW1hdGVyaWEvcG9yLWNhcnJlcmEvcG9yLWNhcnJlcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3Bvci1jYXJyZXJhL3Bvci1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sbGFwc2libGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hY3RpdmUuZGFyaywgLmNvbGxhcHNpYmxlOmhvdmVyLmRhcmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5jb2xsYXBzaWJsZS5hY3RpdmUgLmljb24tYWN0aXZlOmFmdGVye1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbn0iLCIuY29sbGFwc2libGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hY3RpdmUuZGFyaywgLmNvbGxhcHNpYmxlOmhvdmVyLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuXG4uY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmNvbGxhcHNpYmxlLmFjdGl2ZSAuaWNvbi1hY3RpdmU6YWZ0ZXIge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: PorCarreraComponent */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriaPorCarreraPorCarreraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PorCarreraComponent", function () {
      return PorCarreraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_fpuna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/fpuna.service */
    "./src/app/fpuna.service.ts");

    var PorCarreraComponent = /*#__PURE__*/function () {
      function PorCarreraComponent(fpuna) {
        _classCallCheck(this, PorCarreraComponent);

        this.fpuna = fpuna;
        this.esAprobar = false;
        this.seleccionados = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxHeight = [];
      }

      _createClass(PorCarreraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data.materiasAprobadas); // console.log(this.data);

          if (this.esAprobar) {
            // console.log('esto aprov');
            this.getData();
          } else this.descartarDatosPrerrequisito();
        }
      }, {
        key: "descartarDatosPrerrequisito",
        value: function descartarDatosPrerrequisito() {
          var _this4 = this;

          this.fpuna.getPrerrequisitosAll().subscribe(function (prerrequisitos) {
            var idCarrera = _this4.selectedCareerId;
            var aprobadas = _this4.data.materiasAprobadas[_this4.selectedCareerId];
            if (!_this4.data.materiasAprobadas[_this4.selectedCareerId]) aprobadas = []; // console.log('todas', todas);

            if (_this4.esCargarHorario) {
              _this4.data.clasesTodas = undefined;

              _this4.getData();
            }

            var todas = _this4.data.clasesTodas.filter(function (x) {
              return x.career_id == idCarrera;
            });

            var ids_aprobadas = todas.filter(function (x) {
              return aprobadas.includes(x.name);
            }).map(function (x) {
              return x._id;
            });
            aprobadas = todas.filter(function (x) {
              return ids_aprobadas.includes(x._id);
            });
            console.log('aprobadas', aprobadas);
            var candidatos = todas; // console.log('antes de creditos', candidatos);
            //Filtrar por creditos

            var totalCreditosApro = 0;
            aprobadas.map(function (x) {
              return totalCreditosApro += x.credits;
            });
            var totalCreditosCarrera = 1;
            todas.map(function (x) {
              return totalCreditosCarrera += x.credits;
            });
            if (totalCreditosCarrera == 0) totalCreditosCarrera = 1;
            var porcentajeCreditos = totalCreditosApro / totalCreditosCarrera; // console.log('total', totalCreditosCarrera);

            candidatos = candidatos.filter(function (x) {
              return x.credits_percentage_required <= porcentajeCreditos;
            }); // console.log('despues de creditos', candidatos);
            //Filtra prerrequisitos

            candidatos = candidatos.filter(function (materia) {
              var prePorMateria = prerrequisitos.filter(function (x) {
                return x.class2_id == materia._id;
              }).map(function (x) {
                return x.class1_id;
              });
              var poseePres = prePorMateria.every(function (x) {
                return ids_aprobadas.includes(x);
              });
              return poseePres;
            }); // Excluir aprobados

            candidatos = candidatos.filter(function (x) {
              return !ids_aprobadas.includes(x._id);
            }); //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]

            var c = [];
            candidatos.forEach(function (x) {
              var index = c.findIndex(function (y) {
                return y.semestre == x.semester;
              });

              if (index == -1) {
                c.push({
                  semestre: x.semester,
                  materias: [{
                    nombre: x.name
                  }]
                });
              } else {
                c[index].materias.push({
                  nombre: x.name
                });
              }
            }); // Ordenar

            _this4.semestersClasses = c.sort(function (x, y) {
              return x.semestre - y.semestre;
            });

            _this4.semestersClasses.map(function (x) {
              return x.materias.sort(function (x, y) {
                return x.sem > y.sem ? 1 : -1;
              });
            });

            console.log('this.semestersClasses', _this4.semestersClasses);
            var marcados = _this4.data.materiasSeleccionadas[_this4.selectedCareerId];
            if (marcados) marcados.forEach(function (toCheck) {
              _this4.semestersClasses.forEach(function (sem) {
                return sem.materias.forEach(function (materia) {
                  if (toCheck == materia.nombre) materia.isItemChecked = true;
                });
              });
            });
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this5 = this;

          this.fpuna.getClasesAll().subscribe(function (r) {
            _this5.data.clasesTodas = r; //filtrar materias para esta carrera

            r = r.filter(function (x) {
              return x.career_id == _this5.selectedCareerId;
            }); //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]

            var c = [];
            r.forEach(function (x) {
              var index = c.findIndex(function (y) {
                return y.semestre == x.semester;
              });

              if (index == -1) {
                c.push({
                  semestre: x.semester,
                  materias: [{
                    nombre: x.name
                  }]
                });
              } else {
                c[index].materias.push({
                  nombre: x.name
                });
              }
            }); //ordenar

            _this5.semestersClasses = c.sort(function (x, y) {
              return x.semestre - y.semestre;
            });

            _this5.semestersClasses.map(function (x) {
              return x.materias.sort(function (x, y) {
                return x.sem > y.sem;
              });
            }); // console.log(JSON.stringify(this.semestersClasses));
            // console.log(this.semestersClasses);
            // console.log('hola');
            // Marcar los ya marcados anteriormente


            var marcados = _this5.data.materiasAprobadas[_this5.selectedCareerId];
            if (marcados) marcados.forEach(function (toCheck) {
              _this5.semestersClasses.forEach(function (sem) {
                return sem.materias.forEach(function (materia) {
                  if (toCheck == materia.nombre) materia.isItemChecked = true;
                });
              });
            });
          });
        }
      }, {
        key: "checkCheckbox",
        value: function checkCheckbox(ev, index) {
          var _this6 = this;

          // console.log('antes',document.getElementById('0').style.maxHeight);
          var aux = document.getElementById(index.toString()).style.maxHeight; // Marcar los demas(?

          setTimeout(function () {
            _this6.semestersClasses[index].materias.forEach(function (materia) {
              materia["isItemChecked"] = _this6.semestersClasses[index].checkParent;
            });
          }); // console.log('despues',document.getElementById('0').style.maxHeight);
          // console.log(aux);

          this.toggleCollapse(document.getElementById(index.toString())); // console.log('checkbox(?');
        }
      }, {
        key: "verifyEvent",
        value: function verifyEvent(index) {
          var allItems = this.semestersClasses[index].materias.length;
          var selected = 0;
          this.semestersClasses[index].materias.map(function (item) {
            if (item.isItemChecked) selected++;
          });

          if (selected > 0 && selected < allItems) {
            // One item is selected among all checkbox elements
            this.semestersClasses[index].indeterminateState = true;
            this.semestersClasses[index].checkParent = false;
          } else if (selected == allItems) {
            // All item selected
            this.semestersClasses[index].checkParent = true;
            this.semestersClasses[index].indeterminateState = false;
          } else {
            // No item is selected
            this.semestersClasses[index].indeterminateState = false;
            this.semestersClasses[index].checkParent = false;
          } // Obtener materias seleccionadas


          var materiasSeleccionadas = [];
          this.semestersClasses.filter(function (x) {
            return x.materias;
          });

          var _iterator3 = _createForOfIteratorHelper(this.semestersClasses),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var semestres = _step3.value;

              var _iterator4 = _createForOfIteratorHelper(semestres.materias),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var materia = _step4.value;
                  if (materia.isItemChecked) materiasSeleccionadas.push(materia.nombre);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.seleccionados.emit(materiasSeleccionadas);
        }
      }, {
        key: "expandItem",
        value: function expandItem(e) {
          var colapsible = e.target;

          while (!colapsible.classList.contains('collapsible')) {
            colapsible = colapsible.parentElement;
          }

          colapsible.classList.toggle("active");
          var content = colapsible.nextElementSibling;
          this.toggleCollapse(content);
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse(content) {
          if (content.style.maxHeight) {
            content.style.setProperty('max-height', null);
          } else {
            content.style.setProperty('max-height', content.scrollHeight + 'px');
          }
        }
      }, {
        key: "estaActivo",
        value: function estaActivo(i) {
          var aux = document.getElementById(i.toString());
          if (aux) return document.getElementById(i.toString()).previousElementSibling.classList.contains('active');else return false;
        }
      }]);

      return PorCarreraComponent;
    }();

    PorCarreraComponent.ctorParameters = function () {
      return [{
        type: src_app_fpuna_service__WEBPACK_IMPORTED_MODULE_2__["FpunaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PorCarreraComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PorCarreraComponent.prototype, "selectedCareerId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PorCarreraComponent.prototype, "esAprobar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PorCarreraComponent.prototype, "esCargarHorario", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PorCarreraComponent.prototype, "seleccionados", void 0);
    PorCarreraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-por-carrera',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./por-carrera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./por-carrera.component.scss */
      "./src/app/componentes/armar-horario/seleccionar-materia/por-carrera/por-carrera.component.scss"))["default"]]
    })], PorCarreraComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriaSeleccionarMateriaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhL3NlbGVjY2lvbmFyLW1hdGVyaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItbWF0ZXJpYS9zZWxlY2Npb25hci1tYXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FybWFyLWhvcmFyaW8vc2VsZWNjaW9uYXItbWF0ZXJpYS9zZWxlY2Npb25hci1tYXRlcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: SeleccionarMateriaComponent */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriaSeleccionarMateriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarMateriaComponent", function () {
      return SeleccionarMateriaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SeleccionarMateriaComponent = /*#__PURE__*/function () {
      function SeleccionarMateriaComponent() {// console.log(this.data);

        _classCallCheck(this, SeleccionarMateriaComponent);
      }

      _createClass(SeleccionarMateriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.data);
          this.materias = this.data.seleccionados;
          this.seccionInicial = this.data.seccionActual;
        }
      }, {
        key: "onChange",
        value: function onChange(selected, id) {
          this.data.materiasSeleccionadas[id] = selected;
        }
      }]);

      return SeleccionarMateriaComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeleccionarMateriaComponent.prototype, "data", void 0);
    SeleccionarMateriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seleccionar-materia',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seleccionar-materia.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seleccionar-materia.component.scss */
      "./src/app/componentes/armar-horario/seleccionar-materia/seleccionar-materia.component.scss"))["default"]]
    })], SeleccionarMateriaComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriasAprobadasSeleccionarMateriasAprobadasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMvc2VsZWNjaW9uYXItbWF0ZXJpYXMtYXByb2JhZGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLW1hdGVyaWFzLWFwcm9iYWRhcy9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1tYXRlcmlhcy1hcHJvYmFkYXMvc2VsZWNjaW9uYXItbWF0ZXJpYXMtYXByb2JhZGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: SeleccionarMateriasAprobadasComponent */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarMateriasAprobadasSeleccionarMateriasAprobadasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarMateriasAprobadasComponent", function () {
      return SeleccionarMateriasAprobadasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SeleccionarMateriasAprobadasComponent = /*#__PURE__*/function () {
      function SeleccionarMateriasAprobadasComponent() {
        _classCallCheck(this, SeleccionarMateriasAprobadasComponent);
      }

      _createClass(SeleccionarMateriasAprobadasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data.esAprobar = true; // console.log(this.data.esAprobar);
        }
      }, {
        key: "onChange",
        value: function onChange(selected, id) {
          this.data.materiasAprobadas[id] = selected;
        }
      }]);

      return SeleccionarMateriasAprobadasComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeleccionarMateriasAprobadasComponent.prototype, "data", void 0);
    SeleccionarMateriasAprobadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seleccionar-materias-aprobadas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seleccionar-materias-aprobadas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seleccionar-materias-aprobadas.component.scss */
      "./src/app/componentes/armar-horario/seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component.scss"))["default"]]
    })], SeleccionarMateriasAprobadasComponent);
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarSeccionesSeleccionarSeccionesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  --color: trasparent;\n  font-size: 15px;\n  font-weight: 8;\n}\n\nion-toolbar {\n  --background: lightgray;\n  --opacity: 1;\n  --padding-bottom: 4px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1zZWNjaW9uZXMvc2VsZWNjaW9uYXItc2VjY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hcm1hci1ob3JhcmlvL3NlbGVjY2lvbmFyLXNlY2Npb25lcy9zZWxlY2Npb25hci1zZWNjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYXJtYXItaG9yYXJpby9zZWxlY2Npb25hci1zZWNjaW9uZXMvc2VsZWNjaW9uYXItc2VjY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB0cmFzcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODtcbiAgICBcbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTsgXG4gICAgLS1vcGFjaXR5OiAxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xufSIsImlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHRyYXNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: SeleccionarSeccionesComponent */

  /***/
  function srcAppComponentesArmarHorarioSeleccionarSeccionesSeleccionarSeccionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarSeccionesComponent", function () {
      return SeleccionarSeccionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SeleccionarSeccionesComponent = /*#__PURE__*/function () {
      // clasesElegidasPorSecciones: any[];
      // clasesElegidasPorSeccionesForView: any;
      function SeleccionarSeccionesComponent() {
        _classCallCheck(this, SeleccionarSeccionesComponent);

        this.clasesElegidasPorSecciones = [];
        this.clasesElegidasPorSeccionesForView = [];
      }

      _createClass(SeleccionarSeccionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          var _this7 = this;

          // console.log('hola');
          this.clasesElegidasPorSeccionesForView = this.data.seccionesElegidasForView;
          var materiasSeleccionadas = this.data.materiasSeleccionadas.filter(function (x) {
            return x;
          });
          var carrerasSeleccionadas = this.data.seleccionados;
          var datos = this.data.dataFromExcel;

          var condicionDeFiltro = function condicionDeFiltro(clase, nombre, enf) {
            //let principioCoinc = clase['Asignatura'].match(RegExp('' + nombre));
            var principioCoinc = clase['Asignatura'].includes(nombre);
            var esLaPalabra = clase['Asignatura'] === nombre;
            var nombreCompleto = clase['Asignatura'][nombre.length] == " ";
            var enfasisCorrecto = //tieneEnfasisGnral  ...puede estar vacio :/
            typeof clase["Enfasis"] === "undefined" || clase["Enfasis"] === "-- --" || //tieneEnfasisEspecifico
            clase["Enfasis"].includes(enf);
            var finCoincide = esLaPalabra || nombreCompleto;
            return principioCoinc && finCoincide && enfasisCorrecto;
          }; // filtro materias desde del excel de acuerdo mat previamentes seleccionadas 


          var fitroMateriasPorSeccion = function fitroMateriasPorSeccion(data, materiasSeleccionadas, enfasis) {
            var todoLosDatos = [];
            var agrupador = materiasSeleccionadas.map(function (x) {
              return {
                padre: x,
                sigla: '',
                enf: enfasis,
                hijos: []
              };
            }); // console.log('agrupador', agrupador);

            data.forEach(function (clase) {
              // console.log(clase);
              materiasSeleccionadas.forEach(function (materia) {
                try {
                  if (condicionDeFiltro(clase, materia, enfasis)) {
                    var index = agrupador.findIndex(function (x) {
                      return x.padre === materia;
                    });
                    agrupador[index].sigla = clase["Sigla carrera"]; // Valindando si la materia tiene 2 o + profes

                    var prof = [];
                    var tit = clase['Tít'].split('\n');

                    for (var i = 0; i < tit.length; i++) {
                      prof.push("".concat(clase["Tít"].split('\n')[i], " ").concat(clase["Nombre"].split('\n')[i], " ").concat(clase["Apellido"].split('\n')[i]));
                    }

                    agrupador[index].hijos.push({
                      id: clase['Item'],
                      materia: clase["Asignatura"].split('(*)')[0].split('-')[0],
                      especial: clase["Asignatura"].split('(*)')[0].split('-')[1],
                      def: clase["Asignatura"].includes('(*)') ? '(*)' : '',
                      seccion: clase["Sección"],
                      profesor: prof
                    });
                    todoLosDatos.push(clase);
                  }
                } catch (error) {}
              });
            }); // console.log(agrupador);

            return {
              'all': todoLosDatos,
              'forView': agrupador
            };
          }; // console.log('datos', datos);
          // console.log('materiasSeleccionadas', materiasSeleccionadas);
          // console.log('carrerasSeleccionadas', carrerasSeleccionadas);


          this.clasesElegidasPorSecciones = [];
          this.clasesElegidasPorSeccionesForView = [];

          if (!this.clasesElegidasPorSeccionesForView[0]) {
            for (var i = 0; i < carrerasSeleccionadas.length; i++) {
              var datosDe1Carrera = datos[i];
              var carrera = carrerasSeleccionadas[i];
              var materias = materiasSeleccionadas[i];
              var r = fitroMateriasPorSeccion(datosDe1Carrera, materias, carrera.enf);
              this.clasesElegidasPorSecciones.push(r.all);
              this.clasesElegidasPorSeccionesForView.push(r.forView);
            }

            this.clasesElegidasPorSeccionesForView = this.clasesElegidasPorSeccionesForView.flat().sort(function (x, y) {
              return x.padre < y.padre;
            });
            this.data.seccionesElegidasForView = this.clasesElegidasPorSeccionesForView;
            this.data.seccionesElegidas = this.clasesElegidasPorSecciones.flat();
          }

          console.log('Clases ele por secciones', this.clasesElegidasPorSecciones);
          console.log('Clases ele por secciones for view', this.clasesElegidasPorSeccionesForView);
          this.clasesElegidasPorSeccionesForView.sort(function (x, y) {
            return x.padre > y.padre ? 1 : -1;
          });
          this.data.toCalendar.forEach(function (mat) {
            mat.Item;

            _this7.clasesElegidasPorSeccionesForView.forEach(function (padre) {
              padre.hijos.forEach(function (seccion) {
                if (mat.Item == seccion.id) {
                  seccion.isItemChecked = true;
                }
              });
            });
          });
        }
      }, {
        key: "onChange",
        value: function onChange() {
          var _this8 = this;

          // console.log(this.clasesElegidasPorSeccionesForView);
          // console.log('chau');
          this.data.toCalendar = [];
          this.data.seccionesElegidasForView.forEach(function (element) {
            element.hijos.forEach(function (clase) {
              if (clase.isItemChecked) {
                var itemselected = _this8.data.seccionesElegidas.find(function (x) {
                  return clase.id === x['Item'];
                });

                _this8.data.toCalendar.push(itemselected);
              }
            });
          }); // console.log(this.data.toCalendar);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return SeleccionarSeccionesComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeleccionarSeccionesComponent.prototype, "data", void 0);
    SeleccionarSeccionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seleccionar-secciones',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seleccionar-secciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seleccionar-secciones.component.scss */
      "./src/app/componentes/armar-horario/seleccionar-secciones/seleccionar-secciones.component.scss"))["default"]]
    })], SeleccionarSeccionesComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-armar-horario-armar-horario-module~pages-cargar-horario-cargar-horario-module-es5.js.map