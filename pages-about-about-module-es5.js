function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-menu></app-menu>\n\n<ion-content>\n  <div class=\"img ion-padding\">\n    <img src=\"assets/images/intro.png\">\n  </div>\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n\n      <ion-label>\n        El propósito de esta app es extender las funcionalidades del poliplanner original.\n        El cual tiene por objetivo ayudar a los alumnos a elegir sus materias y así matricularse,\n        pero se debe tener en cuenta que es totalmente independiente de la Facultad Politécnica de la Una.\n       Por eso el uso de la app queda bajo la responsabilidad del alumno.\n      </ion-label>\n    </div>\n    <br>\n    <div class=\"ion-text-center\">\n      <ion-label>\n        Si tenes alguna idea de como mejorar la app o encontraste algun fallo no dudes en contactarme\n      </ion-label>\n    </div>\n    <br>\n    <br>\n\n    <p>Desarrollado por:</p>\n    <ion-item lines=\"none\" >\n      <p>Luis Fernando Rios</p>\n    </ion-item>\n    <br>\n    <p>Contactos:</p>\n    <div class=\"contactos\">\n      <ion-icon button class=\"ion-padding\" size=\"large\" name=\"logo-instagram\" (click)=\"btnInstagram()\"></ion-icon>\n      <ion-icon button class=\"ion-padding\" size=\"large\" name=\"logo-whatsapp\" (click)=\"btnWhatsapp()\"></ion-icon>\n      <ion-icon button class=\"ion-padding\" size=\"large\" name=\"mail-outline\" (click)=\"btnEmail()\"></ion-icon>\n      <ion-icon button class=\"ion-padding\" size=\"large\" name=\"phone-portrait-outline\" (click)=\"btnLlamar()\"></ion-icon>\n    </div>\n  \n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");
    /* harmony import */


    var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/componentes/componentes.module */
    "./src/app/componentes/componentes.module.ts");

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\nimg {\n  border-radius: 50%;\n  max-width: 60%;\n}\n\nion-label {\n  text-align: center;\n}\n\n.contactos {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG59XG5cbmlvbi1sYWJlbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0b3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIi5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/about/about.page.ts ***!
    \*******************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutPage = /*#__PURE__*/function () {
      function AboutPage() {
        _classCallCheck(this, AboutPage);
      }

      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "btnInstagram",
        value: function btnInstagram() {
          window.open('https://www.instagram.com/ferrios__/');
        }
      }, {
        key: "btnWhatsapp",
        value: function btnWhatsapp() {
          window.open('https://wa.me/595984516464?text=Hola');
        }
      }, {
        key: "btnEmail",
        value: function btnEmail() {
          window.open('mailto:luis.fer334@fpuna.edu.py');
        }
      }, {
        key: "btnLlamar",
        value: function btnLlamar() {
          window.open("tel:+595981918200");
        }
      }]);

      return AboutPage;
    }();

    AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/pages/about/about.page.scss"))["default"]]
    })], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map