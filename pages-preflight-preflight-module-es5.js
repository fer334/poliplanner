function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preflight-preflight-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preflight/preflight.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preflight/preflight.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPreflightPreflightPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding *ngIf=\"displayPage\">\n  <ion-slides pager=\"true\" scrollbar=\"false\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img src=\"assets/images/intro.png\">\n      <H1>Bienvenido!!!</H1>\n      <P>\n        Dado que está en la versión web, le recomendamos instalar la aplicación.\n        En esta guia te enseñamos como hacerlo ;) .\n        Deslice a la derecha para continuar.\n      </P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isIOS\">\n      <img src=\"assets/images/ios_1.jpeg\">\n      <H1>Select sharing button</H1>\n      <P>Press the sharing icon at the bottom of your web browser's window.</P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isIOS\">\n      <img src=\"assets/images/ios_2.jpeg\">\n      <H1>Add to Home Screen</H1>\n      <P>Scroll the icons until you find the option <strong>Add to Home Screen</strong>.</P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isIOS\">\n      <img src=\"assets/images/ios_3.jpeg\">\n      <H1>Press Add</H1>\n      <P>Press <strong>Add</strong> to save the application to your desktop.</P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isIOS\">\n      <img src=\"assets/images/ios_4.jpeg\">\n      <H1>Run from Home Screen</H1>\n      <P>The application will now be available from your home screen.\n        To run from your web browser, press Continue.\n      </P>\n      <ion-button shape=\"round\" routerDirection='root' routerLink=\"/inicio\">Continuar</ion-button>\n    </ion-slide>\n    <ion-slide *ngIf=\"isAndroid\">\n      <img src=\"assets/images/android_1.jpeg\">\n      <H1>Abrir menú de opciones</H1>\n      <P>Toca el menú de opciones de tu navegador.</P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isAndroid\">\n      <img src=\"assets/images/android_2.jpeg\">\n      <H1>Instalar App</H1>\n      <P>Toca el boton de <strong>Instalar aplicación</strong> para añadir la app a tu cajón de aplicaciones.\n      </P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isAndroid\">\n      <img src=\"assets/images/android_3.jpeg\">\n      <H1>Confirmar la instalación</H1>\n      <P>Simplemente toca en la opción <strong>Instalar</strong>.</P>\n    </ion-slide>\n    <ion-slide *ngIf=\"isAndroid\">\n      <img src=\"assets/images/android_4.jpeg\">\n      <H1>Ejecuta la App desde tu Home Screen</H1>\n      <P>La aplicación ahora esta disponible en tu cajón de aplicaciones.\n        Abrelo desde ahí o presiona en continuar para seguir usando la app desde el navegador.\n      </P>\n      <ion-button shape=\"round\" routerDirection='root' routerLink=\"/inicio\">Continuar</ion-button>\n  </ion-slide>\n</ion-slides></ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/preflight/preflight-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/preflight/preflight-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PreflightPageRoutingModule */

  /***/
  function srcAppPagesPreflightPreflightRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreflightPageRoutingModule", function () {
      return PreflightPageRoutingModule;
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


    var _preflight_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preflight.page */
    "./src/app/pages/preflight/preflight.page.ts");

    var routes = [{
      path: '',
      component: _preflight_page__WEBPACK_IMPORTED_MODULE_3__["PreflightPage"]
    }];

    var PreflightPageRoutingModule = function PreflightPageRoutingModule() {
      _classCallCheck(this, PreflightPageRoutingModule);
    };

    PreflightPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreflightPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/preflight/preflight.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/preflight/preflight.module.ts ***!
    \*****************************************************/

  /*! exports provided: PreflightPageModule */

  /***/
  function srcAppPagesPreflightPreflightModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreflightPageModule", function () {
      return PreflightPageModule;
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


    var _preflight_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preflight-routing.module */
    "./src/app/pages/preflight/preflight-routing.module.ts");
    /* harmony import */


    var _preflight_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preflight.page */
    "./src/app/pages/preflight/preflight.page.ts");

    var PreflightPageModule = function PreflightPageModule() {
      _classCallCheck(this, PreflightPageModule);
    };

    PreflightPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preflight_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreflightPageRoutingModule"]],
      declarations: [_preflight_page__WEBPACK_IMPORTED_MODULE_6__["PreflightPage"]]
    })], PreflightPageModule);
    /***/
  },

  /***/
  "./src/app/pages/preflight/preflight.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/preflight/preflight.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPreflightPreflightPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slide {\n  height: 95vh;\n  flex-direction: column;\n}\n\n.swiper-slide img {\n  max-width: 50vw;\n  max-height: 50vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BvbGlwbGFubmVyLWlvbmljL3BvbGlwbGFubmVyLWlvbmljL3NyYy9hcHAvcGFnZXMvcHJlZmxpZ2h0L3ByZWZsaWdodC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZWZsaWdodC9wcmVmbGlnaHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJlZmxpZ2h0L3ByZWZsaWdodC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIG1heC13aWR0aDogNTB2dztcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiA5NXZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC13aWR0aDogNTB2dztcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/preflight/preflight.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/preflight/preflight.page.ts ***!
    \***************************************************/

  /*! exports provided: PreflightPage */

  /***/
  function srcAppPagesPreflightPreflightPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreflightPage", function () {
      return PreflightPage;
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

    var PreflightPage = /*#__PURE__*/function () {
      function PreflightPage(navController, platform) {
        _classCallCheck(this, PreflightPage);

        this.navController = navController;
        this.platform = platform;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
        this.isIOS = false;
        this.isAndroid = false;
        this.displayPage = true;
        this.isIOS = platform.is('ios');
        this.isAndroid = platform.is('android');

        if (!this.isMobile() || this.isPWA() || this.isTablet()) {
          navController.navigateRoot('/inicio');
        }
      }

      _createClass(PreflightPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isMobile",
        value: function isMobile() {
          return this.platform.is('mobile');
        }
      }, {
        key: "isPWA",
        value: function isPWA() {
          return this.platform.is('pwa');
        }
      }, {
        key: "isTablet",
        value: function isTablet() {
          return this.platform.is('tablet');
        }
      }, {
        key: "isFullScreen",
        value: function isFullScreen() {
          return window.innerHeight === screen.height;
        }
      }]);

      return PreflightPage;
    }();

    PreflightPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    PreflightPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-preflight',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./preflight.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preflight/preflight.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./preflight.page.scss */
      "./src/app/pages/preflight/preflight.page.scss"))["default"]]
    })], PreflightPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-preflight-preflight-module-es5.js.map