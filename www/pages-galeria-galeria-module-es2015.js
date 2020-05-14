(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-galeria-galeria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/galeria/galeria.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/galeria/galeria.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>         \n        <img  slot=\"start\" width=\"10%\" left=\"90px\" src=\"assets/iconos_productos/papa_icon.png\"/>\n        <ion-label>Papa</ion-label>\n        <ion-toggle [(ngModel)]=\"papa_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n    <ion-grid *ngIf = \"papa_true\">\n      <ion-row>\n        <ion-col  size=\"6\" *ngFor = \"let fotos_papa of imagenes_papa ; index as i \">\n          <img class=\"galeria\" src=\"{{fotos_papa}}\" (click)=\"verImagen(i)\"/>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <img slot=\"start\" width=\"10%\" src=\"assets/iconos_productos/sandia_icon.png\"/>\n      <ion-label>Sandia</ion-label>\n      <ion-toggle [(ngModel)]=\"sandia_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <img slot=\"start\" width=\"10%\" src=\"assets/iconos_productos/melon_icon.png\"/>\n      <ion-label>Melón</ion-label>\n      <ion-toggle [(ngModel)]=\"melon_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <img slot=\"start\" width=\"10%\" src=\"assets/iconos_productos/naranja_icon.png\"/>\n      <ion-label>Naranja</ion-label>\n      <ion-toggle [(ngModel)]=\"naranja_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <img slot=\"start\" width=\"10%\" src=\"assets/iconos_productos/frijoles_icon.png\"/>\n      <ion-label>Frijol</ion-label>\n      <ion-toggle  [(ngModel)]=\"frijol_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <img slot=\"start\" width=\"10%\" src=\"assets/iconos_productos/elote_icon.png\"/>\n      <ion-label>Maiz</ion-label>\n      <ion-toggle [(ngModel)]=\"maiz_true\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./src/app/pages/galeria/galeria-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/galeria/galeria-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GaleriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaPageRoutingModule", function() { return GaleriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _galeria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galeria.page */ "./src/app/pages/galeria/galeria.page.ts");




const routes = [
    {
        path: '',
        component: _galeria_page__WEBPACK_IMPORTED_MODULE_3__["GaleriaPage"]
    }
];
let GaleriaPageRoutingModule = class GaleriaPageRoutingModule {
};
GaleriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GaleriaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/galeria/galeria.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/galeria/galeria.module.ts ***!
  \*************************************************/
/*! exports provided: GaleriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaPageModule", function() { return GaleriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _galeria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./galeria-routing.module */ "./src/app/pages/galeria/galeria-routing.module.ts");
/* harmony import */ var _galeria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./galeria.page */ "./src/app/pages/galeria/galeria.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let GaleriaPageModule = class GaleriaPageModule {
};
GaleriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _galeria_routing_module__WEBPACK_IMPORTED_MODULE_5__["GaleriaPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_galeria_page__WEBPACK_IMPORTED_MODULE_6__["GaleriaPage"]]
    })
], GaleriaPageModule);



/***/ }),

/***/ "./src/app/pages/galeria/galeria.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/galeria/galeria.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".galeria {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsZXJpYS9DOlxcVXNlcnNcXEdNIEVMRUNUUk9OSUNTIE1UWVxcRGVza3RvcFxcbWlrZTItbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcZ2FsZXJpYVxcZ2FsZXJpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dhbGVyaWEvZ2FsZXJpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGVyaWEvZ2FsZXJpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsZXJpYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iLCIuZ2FsZXJpYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/galeria/galeria.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/galeria/galeria.page.ts ***!
  \***********************************************/
/*! exports provided: GaleriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaPage", function() { return GaleriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imagen_modal_imagen_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imagen-modal/imagen-modal.page */ "./src/app/pages/imagen-modal/imagen-modal.page.ts");




let GaleriaPage = class GaleriaPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.imagenes_papa = [
            'assets/Fotos_Papas/foto1.jpg',
            'assets/Fotos_Papas/foto2.jpg',
            'assets/Fotos_Papas/foto3.jpeg',
            'assets/Fotos_Papas/foto4.jpg',
        ];
        this.imagenes_sandia = [
            'assets/Fotos_Sandias/foto1.png',
            'assets/Fotos_Sandias/foto2.png',
            'assets/Fotos_Sandias/foto3.png',
            'assets/Fotos_Sandias/foto4.png',
        ];
    }
    verImagen(index) {
        this.modalCtrl.create({
            component: _imagen_modal_imagen_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImagenModalPage"],
            componentProps: {
                index: index
            }
        }).then(modal => modal.present());
    }
};
GaleriaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
GaleriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-galeria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./galeria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/galeria/galeria.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./galeria.page.scss */ "./src/app/pages/galeria/galeria.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], GaleriaPage);



/***/ })

}]);
//# sourceMappingURL=pages-galeria-galeria-module-es2015.js.map