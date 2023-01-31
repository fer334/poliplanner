function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-menu></app-menu>\n<app-header></app-header>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" class=\"ion-padding\">\n  <ion-fab-button>\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"top\" class=\"ion-padding\">\n    <ion-fab-button color=\"primary\" routerLink=\"/armar-horario\" data-desc=\"Armar horario\">\n      <ion-icon name=\"hammer\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color=\"primary\"  routerLink=\"/cargar-horario\" data-desc=\"Cargar horario\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color=\"primary\"  data-desc=\"Actualizar excel horario\">\n      <ion-icon name=\"sync\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n\n<ion-content>\n  <app-inicio [semana]=\"data.semana\" [toCalendar]=\"data.toCalendar\"></app-inicio>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: InicioPageRoutingModule */

  /***/
  function srcAppPagesInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.module.ts ***!
    \***********************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/pages/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");
    /* harmony import */


    var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/componentes/componentes.module */
    "./src/app/componentes/componentes.module.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/inicio/inicio.page.ts ***!
    \*********************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppPagesInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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


    var src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/servicios/armar-horario/data.service */
    "./src/app/servicios/armar-horario/data.service.ts");

    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(modalController, data, navCtrl, platform) {
        _classCallCheck(this, InicioPage);

        this.modalController = modalController;
        this.data = data;
        this.navCtrl = navCtrl;
        this.platform = platform;
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init(); // this.preflight()
        }
      }, {
        key: "preflight",
        value: function preflight() {
          var _this = this;

          var isMobile = function isMobile() {
            return _this.platform.is('mobile');
          };

          var isPWA = function isPWA() {
            return _this.platform.is('pwa');
          };

          var isTablet = function isTablet() {
            return _this.platform.is('tablet');
          };

          if (!isMobile() || isPWA() || isTablet()) {
            var nroVisitas = window.localStorage.visitas;

            if (nroVisitas == "undefined" || nroVisitas == 10) {
              window.localStorage.visitas = 0;
              this.navCtrl.navigateForward('preflight');
            } else window.localStorage.visitas++;
          }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "init",
        value: function init() {
          var datos = window.localStorage.data;

          if (datos) {
            this.data.remplazarDatos(JSON.parse(datos)); // console.log(this.data.toCalendar);
          } else {
            this.data = new src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"](); // if( this.data.toCalendar.length == 0 )
            //   this.navCtrl.navigateForward('armar-horario')
          } // console.log(this.data)

        }
        /**
         * Html Controllers
         */

      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev, slides) {
          slides.slideTo(ev.detail.value);
        }
      }, {
        key: "ionSlideDidChange",
        value: function ionSlideDidChange(ev, segment, slides) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var index, active;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return slides.getActiveIndex();

                  case 2:
                    index = _context.sent;
                    segment.value = index;
                    active = segment.el.childNodes[index];
                    active.scrollIntoView({
                      behavior: "smooth",
                      inline: "center"
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "onSlideChanged",
        value: function onSlideChanged() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.content.scrollToTop();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_servicios_armar_horario_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      "static": false
    })], InicioPage.prototype, "content", void 0);
    InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-inicio",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/pages/inicio/inicio.page.scss"))["default"]]
    })], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map