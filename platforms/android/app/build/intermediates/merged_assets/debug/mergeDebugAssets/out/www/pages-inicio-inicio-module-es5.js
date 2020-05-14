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


    __webpack_exports__["default"] = "\n<ion-header class =\"ion-no-border\">\n  <ion-toolbar >\n    <ion-title class=\"ion-text-center\">\n      <ion-text class=\"letra\">Sembradios SJ ❦</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid >\n   <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-lg=\"6\" size=\"9.5\">\n        <ion-card>\n         <ion-card-header class=\"ion-text-center\" color=\"success\">\n           <ion-card-title class=\"letra\">\n             ¡Bienvenido a Sembradíos SJ!\n           </ion-card-title>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-img  class=\"img\"  src=\"/assets/svg/farmer.svg\"></ion-img>\n         </ion-card-content>\n       </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-lg=\"6\" size=\"9 \">\n       <ion-card>\n         <ion-card-header class=\"ion-text-center\" color=\"success\">\n           <ion-card-title class=\"letra\">\n              Contamos con las mejores cosechas\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n           <ion-img  class=\"img\"  style =\"margin-bottom: 7px;\" src=\"/assets/svg/vegetables.svg\"></ion-img>\n           <app-productos></app-productos>\n         </ion-card-content>\n       </ion-card> \n     </ion-col>\n   </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-lg=\"6\" size=\"9.5\">\n        <ion-card>\n         <ion-card-header class=\"ion-text-center\" color=\"success\">\n           <ion-card-title class=\"letra\">\n              Las mejores tierras del país\n           </ion-card-title>\n         </ion-card-header>\n         <ion-card-content>\n           <ion-img  style=\"    margin: auto;\n             width: 70%;  \n             margin-top: 15px;\"  src=\"/assets/svg/treeplant.svg\"></ion-img>\n         </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-lg=\"6\" size=\"9\">\n        <ion-card>\n          <ion-card-header class=\"ion-text-center\" color=\"success\">\n           <ion-card-title class=\"letra\">\n             Equipo de Alta Calidad\n           </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-img  class=\"img\"  src=\"/assets/svg/tractor.svg\"></ion-img>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <app-footer></app-footer>\n</ion-footer>\n\n\n\n";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/pages/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
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


    __webpack_exports__["default"] = "ion-text.letra {\n  font-family: \"Spectral SC\";\n  color: #79be37;\n  font-size: 1.5rem;\n}\n\n.img {\n  margin: auto;\n  width: 30%;\n  margin-top: 10px;\n}\n\n.letra {\n  font-size: 15px;\n}\n\n.color {\n  color: #79be37;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcR00gRUxFQ1RST05JQ1MgTVRZXFxEZXNrdG9wXFxtaWtlMi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdGV4dC5sZXRyYVxue1xuICAgIGZvbnQtZmFtaWx5OiAnU3BlY3RyYWwgU0MnO1xuICAgIGNvbG9yOnJnYigxMjEsIDE5MCwgNTUpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmltZ3tcbiAgICBcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDMwJTsgIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxuICB9XG5cbi5sZXRyYXtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jb2xvcntcbiAgICBjb2xvcjpyZ2IoMTIxLCAxOTAsIDU1KTs7XG59XG4iLCJpb24tdGV4dC5sZXRyYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwZWN0cmFsIFNDXCI7XG4gIGNvbG9yOiAjNzliZTM3O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxldHJhIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogIzc5YmUzNztcbn0iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioPage = /*#__PURE__*/function () {
      function InicioPage() {
        _classCallCheck(this, InicioPage);
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioPage;
    }();

    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/pages/inicio/inicio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map