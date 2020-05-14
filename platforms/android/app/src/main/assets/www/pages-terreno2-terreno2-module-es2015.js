(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terreno2-terreno2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno2/terreno2.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno2/terreno2.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row class=\"ion-justify-content-center\" *ngFor='let alimento of alimentos'>\n            <ion-col size-lg=\"6\" size = \"9.5\">\n                <ion-card>\n                    <ion-toolbar color =\"success\">\n                        <ion-card-header slot =\"start\" class=\"ion-text-center\" color =\"success\">\n                            {{alimento.sufix}} {{alimento.nombre}} {{alimento.prefix}}\n                        </ion-card-header>\n                        <ion-buttons slot =\"end\">\n                            <ion-button (click)=\"procesarClick(alimento)\">\n                                <ion-icon icon-only name=\"volume-high-outline\"></ion-icon>\n                            </ion-button>\n                        </ion-buttons>\n                    </ion-toolbar>\n                    <ion-img [src]=\"alimento.imagen\"></ion-img>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n\n\n \n\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/terreno2/terreno2-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/terreno2/terreno2-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: Terreno2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terreno2PageRoutingModule", function() { return Terreno2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terreno2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terreno2.page */ "./src/app/pages/terreno2/terreno2.page.ts");




const routes = [
    {
        path: '',
        component: _terreno2_page__WEBPACK_IMPORTED_MODULE_3__["Terreno2Page"]
    }
];
let Terreno2PageRoutingModule = class Terreno2PageRoutingModule {
};
Terreno2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Terreno2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/terreno2/terreno2.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/terreno2/terreno2.module.ts ***!
  \***************************************************/
/*! exports provided: Terreno2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terreno2PageModule", function() { return Terreno2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _terreno2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terreno2-routing.module */ "./src/app/pages/terreno2/terreno2-routing.module.ts");
/* harmony import */ var _terreno2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terreno2.page */ "./src/app/pages/terreno2/terreno2.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let Terreno2PageModule = class Terreno2PageModule {
};
Terreno2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terreno2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Terreno2PageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_terreno2_page__WEBPACK_IMPORTED_MODULE_6__["Terreno2Page"]]
    })
], Terreno2PageModule);



/***/ }),

/***/ "./src/app/pages/terreno2/terreno2.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/terreno2/terreno2.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlcnJlbm8yL3RlcnJlbm8yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/terreno2/terreno2.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/terreno2/terreno2.page.ts ***!
  \*************************************************/
/*! exports provided: Terreno2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terreno2Page", function() { return Terreno2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Terreno2Page = class Terreno2Page {
    constructor() {
        this.alimentos = [
            {
                sufix: "Buena",
                nombre: "Sandía",
                imagen: './assets/terreno1/sandia.jpg',
                sonido: '/assets/terreno1/maiz.mp3',
                prefix: "",
            },
            {
                sufix: "",
                nombre: "Melón",
                imagen: './assets/terreno1/melon.jpg',
                sonido: '/assets/terreno1/maiz.mp3',
                prefix: "de Alta Calidad",
            },
            {
                sufix: "",
                nombre: "Naranja",
                imagen: './assets/terreno1/naranja.jpg',
                sonido: '/assets/terreno1/maiz.mp3',
                prefix: "no asada",
            }
        ];
    }
    ngOnInit() {
    }
    procesarClick(alimento) {
        let sonido = new Audio();
        sonido.src = alimento.sonido;
        sonido.load();
        sonido.play();
    }
};
Terreno2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terreno2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terreno2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terreno2/terreno2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terreno2.page.scss */ "./src/app/pages/terreno2/terreno2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Terreno2Page);



/***/ })

}]);
//# sourceMappingURL=pages-terreno2-terreno2-module-es2015.js.map