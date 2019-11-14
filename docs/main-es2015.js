(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header></app-header>\n\n\n<app-beasts-panel *ngIf=\"paging.currentPanel == 'farm animals'\"></app-beasts-panel>\n<app-birds-panel *ngIf=\"paging.currentPanel == 'birds'\"></app-birds-panel>\n<app-wilds-panel *ngIf=\"paging.currentPanel == 'wild animals'\"></app-wilds-panel>\n\n\n<app-paginator (moveItem)=\"getUp($event)\"></app-paginator>\n<app-footer></app-footer>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \n    \n    <div>\n        <h1>*{{ beastSvc.currentBeast.name }}*</h1>\n        <div><h4>size: {{ beastSvc.currentBeast.size }}</h4></div>\n        <div><h4>lifeSpan: {{ beastSvc.currentBeast.lifeSpan }}</h4></div>\n        <div><h4>habitat: {{ beastSvc.currentBeast.habitat }}</h4></div>\n        <img [src]=\"beastSvc.currentBeast.src\"/>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div>\n    <h1>*{{ birdSvc.currentBird.name }}*</h1>\n    <div><h4>size: {{ birdSvc.currentBird.size }}</h4></div>\n    <div><h4>lifeSpan: {{ birdSvc.currentBird.lifeSpan }}</h4></div>\n    <div><h4>habitat: {{ birdSvc.currentBird.habitat }}</h4></div>\n    <img [src]=\"birdSvc.currentBird.src\"/>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<div>\n        <h1>*{{ wildSvc.currentWild.name }}*</h1>\n        <div><h4>size: {{ wildSvc.currentWild.size }}</h4></div>\n        <div><h4>lifeSpan: {{ wildSvc.currentWild.lifeSpan }}</h4></div>\n        <div><h4>habitat: {{ wildSvc.currentWild.habitat }}</h4></div>\n        <img [src]=\"wildSvc.currentWild.src\"/>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<hr>\n\n\n<h1>Thank you for visiting <span>ZooTech</span> !!!</h1>\n<div>\n    <img src= \"https://media1.giphy.com/media/l9mASFqtemeKk/source.gif\"/>\n    <img src= \"https://localtvwqad.files.wordpress.com/2018/04/giphy.gif\"/>\n    <img src= \"https://laughingsquid.com/wp-content/uploads/2018/08/Sheep-Goes-for-Ride-on-Tire-Swing.gif\"/>\n    <img src= \"https://media.giphy.com/media/L63OXnIUDzN9S/giphy-downsized-large.gif\"/>\n    <img src= \"https://i.pinimg.com/originals/5d/62/e9/5d62e9133846b036980fdc82e6f6b55b.gif\"/>\n    <img src= \"http://eliotkitty.e.l.pic.centerblog.net/fa521637.gif\"/>\n    <img src= \"https://media.giphy.com/media/TcVuf0SIzbhIY/giphy.gif\"/>\n    <img src= \"https://i.gifer.com/56iv.gif\"/>\n    <img src= \"https://media3.giphy.com/media/aTWLVsvacZMVq/source.gif\"/>\n    <img src= \"https://laughingsquid.com/wp-content/uploads/2017/03/roster-flamingo.gif\"/>\n    <img src= \"http://cafe.themarker.com/media/t/276/291/4/file_0.gif\"/>\n    <img src= \"https://img.mako.co.il/2013/12/26/AnimalsPlayingSports14.gif\"/>\n    <img src= \"https://forum.lametayel.co.il/forum_getfile_large/id-85488/\"/>\n    <img src= \"https://media0.giphy.com/media/R9z50rPINd5ew/source.gif\"/>\n    <img src= \"https://media1.tenor.com/images/c815396f481f2e27a36f48149cfe27c4/tenor.gif?itemid=10889686\"/>\n    <img src= \"https://i.imgur.com/BjsF57h.gif\"/>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-header\">\n    <div class=\"logo\">\n        <img src=\"https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/df/d0/f9/dfd0f992-7c6b-b79f-6fe4-43a991f154c5/source/256x256bb.jpg\"/>\n    </div>\n\n    <app-nevigation></app-nevigation>\n\n    <div class=\"zoo-name\">\n       <h4>Welcome to</h4> \n       <h1>ZooTech</h1> \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nevigation/nevigation.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nevigation/nevigation.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ul class=\"nav-ul\">\n    <li (click)=\"navTo('birds')\">\n        Birds\n        <img src=\"https://thebukitbrownexperience.files.wordpress.com/2012/06/birds-of-paradise.jpg\"/>\n    </li>\n    <li (click)=\"navTo('farm animals')\">\n        Farm animals\n        <img src=\"http://www.okd2.com/wp-content/uploads/2018/02/farm-animals.jpg\"/>\n    </li>\n    <li (click)=\"navTo('wild animals')\">\n        Wild animals\n        <img src=\"https://cdn-www.konbini.com/en/files/2019/06/animaux-namibie.jpg\"/>\n    </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"flex\">\n    <div (click)=\"moveNextItem(-1)\">\n        <img src=\"https://i.gifer.com/YxAd.gif\" class=\"imgreverse\"/>\n    </div>\n    <div (click)=\"moveNextItem(1)\">\n        <img src=\"https://i.gifer.com/YxAd.gif\"/>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Welcome to the Barn</h1>\n\n<div class=\"flex\">\n        <div class=\"list\">\n            <h2>Our Farm Animule list</h2>\n            <ul>\n                <li *ngFor=\"let b of beastSvc.beasts\"><h2>{{ b.name }}</h2></li>\n            </ul> \n        </div>\n    \n        <div class=\"cards\">\n            <app-beast-card></app-beast-card>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<h1>Welcome to the BIRD observatory</h1>\n\n<div class=\"flex\">\n    \n    <div class=\"list\">\n        <h2>Our bird list</h2>\n        <ul>\n            <li *ngFor=\"let b of birdSvc.birds\"><h2>{{ b.name }}</h2></li>\n        </ul> \n    </div>\n\n    <div class=\"cards\">\n        <app-bird-card></app-bird-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<h1>Welcome to the JUNGLE</h1>\n\n<div class=\"flex\">\n    <div class=\"list\">\n        <h2>Our Wild Animals list</h2>\n        <ul>\n            <li *ngFor=\"let b of wildSvc.wilds\"><h2>{{ b.name }}</h2></li>\n        </ul> \n    </div>\n\n    <div class=\"cards\">\n        <app-wild-card></app-wild-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/bird.service */ "./src/app/service/bird.service.ts");
/* harmony import */ var src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/beasts.service */ "./src/app/service/beasts.service.ts");
/* harmony import */ var src_app_service_paging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/paging.service */ "./src/app/service/paging.service.ts");
/* harmony import */ var _service_wild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/wild.service */ "./src/app/service/wild.service.ts");






let AppComponent = class AppComponent {
    constructor(paging, birds, beasts, wilds) {
        this.paging = paging;
        this.birds = birds;
        this.beasts = beasts;
        this.wilds = wilds;
        this.title = 'avra-zoo';
    }
    getUp(ev) {
        console.log('AppComponent  getUp', ev);
        switch (this.paging.currentPanel) {
            case 'birds':
                let newBirdIndex = this.getNewCuurentIndex(this.birds.currentBirdIndex, ev, this.birds.birds);
                this.birds.currentBirdIndex = newBirdIndex;
                this.birds.currentBird = this.birds.birds[newBirdIndex];
                break;
            case 'farm animals':
                let newBeastIndex = this.getNewCuurentIndex(this.beasts.currentBeastIndex, ev, this.beasts.beasts);
                this.beasts.currentBeastIndex = newBeastIndex;
                this.beasts.currentBeast = this.beasts.beasts[newBeastIndex];
                break;
            case 'wild animals':
                let newWildIndex = this.getNewCuurentIndex(this.wilds.currentWildIndex, ev, this.wilds.wilds);
                this.wilds.currentWildIndex = newWildIndex;
                this.wilds.currentWild = this.wilds.wilds[newWildIndex];
                break;
            default:
                break;
        }
    }
    getNewCuurentIndex(current, delta, array) {
        let max = array.length - 1;
        let newIndex = current + delta;
        if (newIndex > max) {
            newIndex = 0;
        }
        if (newIndex < 0) {
            newIndex = max;
        }
        return newIndex;
    }
};
AppComponent.ctorParameters = () => [
    { type: src_app_service_paging_service__WEBPACK_IMPORTED_MODULE_4__["PagingService"] },
    { type: src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] },
    { type: src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_3__["BeastsService"] },
    { type: _service_wild_service__WEBPACK_IMPORTED_MODULE_5__["WildService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/general/header/header.component */ "./src/app/comps/general/header/header.component.ts");
/* harmony import */ var _comps_general_nevigation_nevigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/general/nevigation/nevigation.component */ "./src/app/comps/general/nevigation/nevigation.component.ts");
/* harmony import */ var _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/panels/beasts-panel/beasts-panel.component */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts");
/* harmony import */ var _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/cards/beast-card/beast-card.component */ "./src/app/comps/cards/beast-card/beast-card.component.ts");
/* harmony import */ var _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/panels/birds-panel/birds-panel.component */ "./src/app/comps/panels/birds-panel/birds-panel.component.ts");
/* harmony import */ var _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/cards/bird-card/bird-card.component */ "./src/app/comps/cards/bird-card/bird-card.component.ts");
/* harmony import */ var _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/panels/wilds-panel/wilds-panel.component */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts");
/* harmony import */ var _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/cards/wild-card/wild-card.component */ "./src/app/comps/cards/wild-card/wild-card.component.ts");
/* harmony import */ var _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/general/paginator/paginator.component */ "./src/app/comps/general/paginator/paginator.component.ts");
/* harmony import */ var _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/general/footer/footer.component */ "./src/app/comps/general/footer/footer.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _comps_general_nevigation_nevigation_component__WEBPACK_IMPORTED_MODULE_6__["NevigationComponent"],
            _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_7__["BeastsPanelComponent"],
            _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_8__["BeastCardComponent"],
            _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_9__["BirdsPanelComponent"],
            _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_10__["BirdCardComponent"],
            _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_11__["WildsPanelComponent"],
            _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_12__["WildCardComponent"],
            _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_13__["PaginatorComponent"],
            _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 350px;\r\n    height: 250px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmVhc3QtY2FyZC9iZWFzdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL2JlYXN0LWNhcmQvYmVhc3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiB9Il19 */");

/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.ts ***!
  \****************************************************************/
/*! exports provided: BeastCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastCardComponent", function() { return BeastCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/beasts.service */ "./src/app/service/beasts.service.ts");



let BeastCardComponent = class BeastCardComponent {
    constructor(beastSvc) {
        this.beastSvc = beastSvc;
    }
    ngOnInit() {
    }
};
BeastCardComponent.ctorParameters = () => [
    { type: src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beast-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beast-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beast-card.component.css */ "./src/app/comps/cards/beast-card/beast-card.component.css")).default]
    })
], BeastCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/bird-card/bird-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comps/cards/bird-card/bird-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n   width: 350px;\r\n   height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmlyZC1jYXJkL2JpcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtHQUNaLGFBQWE7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy9iaXJkLWNhcmQvYmlyZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICB3aWR0aDogMzUwcHg7XHJcbiAgIGhlaWdodDogMjUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/cards/bird-card/bird-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/cards/bird-card/bird-card.component.ts ***!
  \**************************************************************/
/*! exports provided: BirdCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdCardComponent", function() { return BirdCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/bird.service */ "./src/app/service/bird.service.ts");



let BirdCardComponent = class BirdCardComponent {
    constructor(birdSvc) {
        this.birdSvc = birdSvc;
        console.log('BirdCardComponent ctor');
    }
    ngOnInit() {
        console.log('BirdCardComponent ngOnInit');
    }
};
BirdCardComponent.ctorParameters = () => [
    { type: src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] }
];
BirdCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bird-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bird-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bird-card.component.css */ "./src/app/comps/cards/bird-card/bird-card.component.css")).default]
    })
], BirdCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 350px;\r\n    height: 250px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy93aWxkLWNhcmQvd2lsZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.ts ***!
  \**************************************************************/
/*! exports provided: WildCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function() { return WildCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/wild.service */ "./src/app/service/wild.service.ts");



let WildCardComponent = class WildCardComponent {
    constructor(wildSvc) {
        this.wildSvc = wildSvc;
    }
    ngOnInit() {
    }
};
WildCardComponent.ctorParameters = () => [
    { type: src_app_service_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
];
WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wild-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.css */ "./src/app/comps/cards/wild-card/wild-card.component.css")).default]
    })
], WildCardComponent);



/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nhr{\r\n    color: darkorange;\r\n   \r\n}\r\nh1{\r\n    text-align: center;\r\n    color: crimson;\r\n}\r\nimg{\r\n    width: 120px;\r\n    height: 100px;\r\n}\r\ndiv{\r\n    display: flex\r\n    \r\n}\r\nspan{\r\n    color: darkgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSTs7QUFFSjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaHJ7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgXHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIFxyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogZGFya2dyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/comps/general/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/comps/general/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* header{\r\n    height: 10%;\r\n} */\r\n.bg-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n    background-color: mediumorchid;\r\n    align-items: center;\r\n    \r\n}\r\n.logo{\r\n    width: 25%;  \r\n}\r\n.logo > img{\r\n    width: 150px;\r\n}\r\nh4{\r\n    color: goldenrod;\r\n    padding-left: 15px;\r\n    margin: 0;\r\n}\r\nh1{\r\n    color: darkgreen;\r\n    margin: 0;\r\n}\r\n.zoo-name{\r\n    padding: 0 20px;\r\n}\r\napp-nevigation{\r\n    display: block;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufSAqL1xyXG4uYmctaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtb3JjaGlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDI1JTsgIFxyXG59XHJcbi5sb2dvID4gaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbmg0e1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnpvby1uYW1le1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbmFwcC1uZXZpZ2F0aW9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/general/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/comps/general/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/comps/general/nevigation/nevigation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/comps/general/nevigation/nevigation.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.nav-ul{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    /* flex-wrap: wrap; */\r\n    width: 50%;\r\n}\r\nli{\r\n    margin: 10px;\r\n    color: maroon\r\n}\r\nli:hover{\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\nli > img{\r\n    display: block;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uZXZpZ2F0aW9uL25ldmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uZXZpZ2F0aW9uL25ldmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2LXVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxubGl7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogbWFyb29uXHJcbn1cclxubGk6aG92ZXJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmxpID4gaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/comps/general/nevigation/nevigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/general/nevigation/nevigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NevigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NevigationComponent", function() { return NevigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/paging.service */ "./src/app/service/paging.service.ts");



let NevigationComponent = class NevigationComponent {
    constructor(paging) {
        this.paging = paging;
    }
    ngOnInit() {
    }
    navTo(pagename) {
        console.log(`navTo( ${pagename} )`);
        this.paging.currentPanel = pagename;
    }
};
NevigationComponent.ctorParameters = () => [
    { type: _service_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] }
];
NevigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nevigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nevigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nevigation/nevigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nevigation.component.css */ "./src/app/comps/general/nevigation/nevigation.component.css")).default]
    })
], NevigationComponent);



/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgreverse{\r\n    transform: scaleX(-1);\r\n    width: 10vw;\r\n    height: 100px;\r\n}\r\nimg{\r\n    width: 10vw;\r\n    height: 100px;\r\n}\r\n.flex{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 30vw;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ncmV2ZXJzZXtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.moveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    moveNextItem(delta) {
        console.log('PaginatorCompnent moveNextItem ' + delta);
        this.moveItem.emit(delta);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginatorComponent.prototype, "moveItem", void 0);
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/comps/general/paginator/paginator.component.css")).default]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.list{\r\n    display: inline-block;\r\n    width: 49%;\r\n}\r\n.cards{\r\n    \r\n    display: inline-block;\r\n    width: 350px;\r\n    height: 450px;\r\n    background-color: yellow;\r\n    text-align: center;\r\n}\r\nh1{\r\n    color: brown;\r\n    text-align: center;\r\n}\r\ndiv{\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL2JlYXN0cy1wYW5lbC9iZWFzdHMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGFuZWxzL2JlYXN0cy1wYW5lbC9iZWFzdHMtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5saXN0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufVxyXG4uY2FyZHN7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2e1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: BeastsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsPanelComponent", function() { return BeastsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/beasts.service */ "./src/app/service/beasts.service.ts");



let BeastsPanelComponent = class BeastsPanelComponent {
    constructor(beastSvc) {
        this.beastSvc = beastSvc;
    }
    ngOnInit() {
    }
};
BeastsPanelComponent.ctorParameters = () => [
    { type: src_app_service_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beasts-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beasts-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beasts-panel.component.css */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css")).default]
    })
], BeastsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.list{\r\n    display: inline-block;\r\n    width: 49%;\r\n}\r\n.cards{\r\n    display: inline-block;\r\n    width: 350px;\r\n    height: 450px;\r\n    background-color: darkorange;\r\n    text-align: center;\r\n}\r\nh1{\r\n    color: deeppink;\r\n    text-align: center;\r\n}\r\ndiv{\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL2JpcmRzLXBhbmVsL2JpcmRzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9wYW5lbHMvYmlyZHMtcGFuZWwvYmlyZHMtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5saXN0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufVxyXG4uY2FyZHN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXZ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: BirdsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsPanelComponent", function() { return BirdsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/bird.service */ "./src/app/service/bird.service.ts");



let BirdsPanelComponent = class BirdsPanelComponent {
    constructor(birdSvc) {
        this.birdSvc = birdSvc;
    }
    ngOnInit() {
    }
};
BirdsPanelComponent.ctorParameters = () => [
    { type: src_app_service_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] }
];
BirdsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-panel.component.css */ "./src/app/comps/panels/birds-panel/birds-panel.component.css")).default]
    })
], BirdsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.list{\r\n    display: inline-block;\r\n    width: 49%;\r\n}\r\n.cards{\r\n    \r\n    display: inline-block;\r\n    width: 350px;\r\n    height: 450px;\r\n    background-color: darkslategray;\r\n    text-align: center;\r\n}\r\nh1{\r\n    color: rgb(29, 104, 29);\r\n    text-align: center;\r\n}\r\ndiv{\r\n    color: rgb(136, 127, 45);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL3dpbGRzLXBhbmVsL3dpbGRzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGFuZWxzL3dpbGRzLXBhbmVsL3dpbGRzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubGlzdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuLmNhcmRze1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiByZ2IoMjksIDEwNCwgMjkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmRpdntcclxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMjcsIDQ1KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: WildsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildsPanelComponent", function() { return WildsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/wild.service */ "./src/app/service/wild.service.ts");



let WildsPanelComponent = class WildsPanelComponent {
    constructor(wildSvc) {
        this.wildSvc = wildSvc;
    }
    ngOnInit() {
    }
};
WildsPanelComponent.ctorParameters = () => [
    { type: src_app_service_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
];
WildsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wilds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wilds-panel.component.css */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css")).default]
    })
], WildsPanelComponent);



/***/ }),

/***/ "./src/app/service/beasts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/beasts.service.ts ***!
  \*******************************************/
/*! exports provided: BeastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsService", function() { return BeastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BeastsService = class BeastsService {
    constructor(http) {
        this.http = http;
        this.beasts = [];
        // beasts=[
        //   {name:'Horse', size:'180cm', lifeSpan:'30y',habitat:'England' ,img:'https://media1.giphy.com/media/l9mASFqtemeKk/source.gif'},
        //   {name:'Cow', size:'150cm', lifeSpan:'10y',habitat:'North Africa' ,img:'https://localtvwqad.files.wordpress.com/2018/04/giphy.gif'},
        //   {name:'Sheep', size:'90cm', lifeSpan:'15y',habitat:'Sardinia' ,img:'https://laughingsquid.com/wp-content/uploads/2018/08/Sheep-Goes-for-Ride-on-Tire-Swing.gif'},
        //   {name:'Dog', size:'60cm', lifeSpan:'8y',habitat:'Eurasia' ,img:'https://media.giphy.com/media/L63OXnIUDzN9S/giphy-downsized-large.gif'},
        //   {name:'Goat', size:'100cm', lifeSpan:'12y',habitat:'Israel' ,img:'https://i.pinimg.com/originals/5d/62/e9/5d62e9133846b036980fdc82e6f6b55b.gif'},
        //  ]
        this.currentBeastIndex = 0;
        http.get('https://raw.githubusercontent.com/betzalel10/zoo/master/docs/src/assets/beast.json')
            .subscribe(data => {
            this.beasts = data;
            this.currentBeast = this.beasts[0];
        });
    }
};
BeastsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BeastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BeastsService);



/***/ }),

/***/ "./src/app/service/bird.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/bird.service.ts ***!
  \*****************************************/
/*! exports provided: BirdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdService", function() { return BirdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BirdService = class BirdService {
    constructor(http) {
        this.http = http;
        this.birds = [];
        //  birds=[
        //   {name:'Owl', size:'40cm', lifeSpan:'27y',habitat:'israel' ,img:'http://eliotkitty.e.l.pic.centerblog.net/fa521637.gif'},
        //   {name:'Peacock', size:'70cm', lifeSpan:'15y',habitat:'India' ,img:'https://media.giphy.com/media/TcVuf0SIzbhIY/giphy.gif'},
        //   {name:'Eagle', size:'110cm', lifeSpan:'45y',habitat:'africa' ,img:'https://i.gifer.com/56iv.gif'},
        //   {name:'Parrot', size:'45cm', lifeSpan:'20y',habitat:'south America' ,img:'https://media3.giphy.com/media/aTWLVsvacZMVq/source.gif'},
        //   {name:'Flamingo', size:'150cm', lifeSpan:'50y',habitat:'Chile' ,img:'https://laughingsquid.com/wp-content/uploads/2017/03/roster-flamingo.gif'},
        //  ]
        this.currentBirdIndex = 0;
        http.get('https://raw.githubusercontent.com/betzalel10/zoo/master/docs/src/assets/bird.json')
            .subscribe(data => {
            this.birds = data;
            this.currentBird = this.birds[0];
        });
    }
};
BirdService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BirdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BirdService);



/***/ }),

/***/ "./src/app/service/paging.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/paging.service.ts ***!
  \*******************************************/
/*! exports provided: PagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingService", function() { return PagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagingService = class PagingService {
    constructor() {
        this.currentPanel = 'birds';
        console.log('PagingService ctor, currentPanel = ' + this.currentPanel);
    }
};
PagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagingService);



/***/ }),

/***/ "./src/app/service/wild.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/wild.service.ts ***!
  \*****************************************/
/*! exports provided: WildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildService", function() { return WildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WildService = class WildService {
    constructor(http) {
        this.http = http;
        this.wilds = [];
        // wilds=[
        //   {name:'Lion', size:'120cm', lifeSpan:'20y',habitat:'Africa' ,img:'http://cafe.themarker.com/media/t/276/291/4/file_0.gif'},
        //   {name:'Elephant', size:'310cm', lifeSpan:'70y',habitat:'Thailand' ,img:'https://img.mako.co.il/2013/12/26/AnimalsPlayingSports14.gif'},
        //   {name:'Giraffe', size:'600cm', lifeSpan:'30y',habitat:'South Africa' ,img:'https://forum.lametayel.co.il/forum_getfile_large/id-85488/'},
        //   {name:'Tiger', size:'80cm', lifeSpan:'18y',habitat:'Southeast Asia' ,img:'https://media0.giphy.com/media/R9z50rPINd5ew/source.gif'},
        //   {name:'Gorilla', size:'170cm', lifeSpan:'34y',habitat:'Uganda' ,img:'https://media1.tenor.com/images/c815396f481f2e27a36f48149cfe27c4/tenor.gif?itemid=10889686'},
        //   {name:'Panda', size:'180cm', lifeSpan:'20y',habitat:'China' ,img:'https://i.imgur.com/BjsF57h.gif'},
        //  ]
        this.currentWildIndex = 0;
        http.get('https://raw.githubusercontent.com/betzalel10/zoo/master/docs/src/assets/wild.json')
            .subscribe(data => {
            this.wilds = data;
            this.currentWild = this.wilds[0];
        });
    }
};
WildService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WildService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WildService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu.RAVTECH\Desktop\ariel\zooo\avrazoo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map