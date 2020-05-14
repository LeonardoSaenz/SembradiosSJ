function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terreno1-terreno1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno1/terreno1.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno1/terreno1.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTerreno1Terreno1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row class=\"ion-justify-content-center\" *ngFor='let alimento of alimentos'>\n            <ion-col size-lg=\"6\" size = \"9.5\">\n                <ion-card>\n                    <ion-toolbar color =\"success\">\n                        <ion-card-header slot =\"start\" class=\"ion-text-center\" color =\"success\">\n                             {{alimento.sufix}} {{alimento.nombre}} {{alimento.prefix}}\n                        </ion-card-header>\n                        <ion-buttons slot =\"end\">\n                            <ion-button (click)=\"procesarClick(alimento)\">\n                                <ion-icon icon-only name=\"volume-high-outline\"></ion-icon>\n                            </ion-button>\n                        </ion-buttons>\n                    </ion-toolbar>\n                    <ion-img [src]=\"alimento.imagen\"></ion-img>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n\n\n \n\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/terreno1/terreno1-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/terreno1/terreno1-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: Terreno1PageRoutingModule */

  /***/
  function srcAppPagesTerreno1Terreno1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Terreno1PageRoutingModule", function () {
      return Terreno1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _terreno1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terreno1.page */
    "./src/app/pages/terreno1/terreno1.page.ts");

    var routes = [{
      path: '',
      component: _terreno1_page__WEBPACK_IMPORTED_MODULE_3__["Terreno1Page"]
    }];

    var Terreno1PageRoutingModule = function Terreno1PageRoutingModule() {
      _classCallCheck(this, Terreno1PageRoutingModule);
    };

    Terreno1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Terreno1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/terreno1/terreno1.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/terreno1/terreno1.module.ts ***!
    \***************************************************/

  /*! exports provided: Terreno1PageModule */

  /***/
  function srcAppPagesTerreno1Terreno1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Terreno1PageModule", function () {
      return Terreno1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _terreno1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terreno1-routing.module */
    "./src/app/pages/terreno1/terreno1-routing.module.ts");
    /* harmony import */


    var _terreno1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terreno1.page */
    "./src/app/pages/terreno1/terreno1.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var Terreno1PageModule = function Terreno1PageModule() {
      _classCallCheck(this, Terreno1PageModule);
    };

    Terreno1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terreno1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Terreno1PageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_terreno1_page__WEBPACK_IMPORTED_MODULE_6__["Terreno1Page"]]
    })], Terreno1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/terreno1/terreno1.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/terreno1/terreno1.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTerreno1Terreno1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon.color {\n  color: #ff8800;\n}\n\nion-text.letra {\n  font-family: \"Spectral SC\";\n  color: #79be37;\n  font-size: 1.5rem;\n}\n\n.colorl {\n  color: #ff8800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVycmVubzEvQzpcXFVzZXJzXFxHTSBFTEVDVFJPTklDUyBNVFlcXERlc2t0b3BcXG1pa2UyLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXHRlcnJlbm8xXFx0ZXJyZW5vMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlcnJlbm8xL3RlcnJlbm8xLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7QUNBSjs7QURFQTtFQUVJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFFSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXJyZW5vMS90ZXJyZW5vMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbi5jb2xvclxue1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxMzYsIDApO1xufVxuaW9uLXRleHQubGV0cmFcbntcbiAgICBmb250LWZhbWlseTogJ1NwZWN0cmFsIFNDJztcbiAgICBjb2xvcjpyZ2IoMTIxLCAxOTAsIDU1KTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5jb2xvcmxcbntcbiAgICBjb2xvcjpyZ2IoMjU1LDEzNiwwKTtcbn0iLCJpb24taWNvbi5jb2xvciB7XG4gIGNvbG9yOiAjZmY4ODAwO1xufVxuXG5pb24tdGV4dC5sZXRyYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwZWN0cmFsIFNDXCI7XG4gIGNvbG9yOiAjNzliZTM3O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbG9ybCB7XG4gIGNvbG9yOiAjZmY4ODAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/terreno1/terreno1.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/terreno1/terreno1.page.ts ***!
    \*************************************************/

  /*! exports provided: Terreno1Page */

  /***/
  function srcAppPagesTerreno1Terreno1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Terreno1Page", function () {
      return Terreno1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Terreno1Page = /*#__PURE__*/function () {
      function Terreno1Page() {
        _classCallCheck(this, Terreno1Page);

        this.alimentos = [{
          sufix: "Buen",
          nombre: "Maiz",
          imagen: './assets/terreno1/maiz.jpg',
          sonido: '/assets/terreno1/maiz.mp3',
          prefix: ""
        }, {
          sufix: "",
          nombre: "Frijol",
          imagen: './assets/terreno1/frijol.jpg',
          sonido: '/assets/terreno1/maiz.mp3',
          prefix: "de Alta Calidad"
        }, {
          sufix: "",
          nombre: "Papa",
          imagen: './assets/terreno1/papa.jpg',
          sonido: '/assets/terreno1/maiz.mp3',
          prefix: "no asada"
        }];
      }

      _createClass(Terreno1Page, [{
        key: "procesarClick",
        value: function procesarClick(alimento) {
          var sonido = new Audio();
          sonido.src = alimento.sonido;
          sonido.load();
          sonido.play();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Terreno1Page;
    }();

    Terreno1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terreno1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terreno1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno1/terreno1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terreno1.page.scss */
      "./src/app/pages/terreno1/terreno1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Terreno1Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-terreno1-terreno1-module-es5.js.map