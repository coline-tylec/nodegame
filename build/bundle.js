/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _class_weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _class_bad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



//lancement nouvelle partie 
//var partie = new Partie();
var name = "Hercule";
var pv = 200;
var pvMax = 250;
var def = 200;
var minAttack = 50;
var maxAttack = 200;
var criticalShot = 400;
var weapon = new _class_weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"](minAttack, maxAttack, criticalShot);
var good = new _class_good__WEBPACK_IMPORTED_MODULE_0__["Good"](name);
var bad = new _class_bad__WEBPACK_IMPORTED_MODULE_2__["Bad"](name);
console.log("Heros", good);
console.log("Monstre", bad);
//lancement nouvelle partie 
//var partie = new Partie();
//console.log("Heros", hero);
console.log("Monstre", monster);
function partieStart() {
    var readline = __webpack_require__(5);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Nom de votre heros? ', function (answer) {
        var nom = answer;
        var hero = new Gentil(nom);
        console.log("Heros", hero);
        rl.close();
    });
}
partieStart();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Good", function() { return Good; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Good = /** @class */ (function (_super) {
    __extends(Good, _super);
    // variables d'instance
    // constructeur
    function Good(name) {
        return _super.call(this, name) || this;
    }
    // Methods
    // Methode soin personnage
    // @return Pv
    Good.prototype.heal = function (cible) {
        var healing = (this.Pv * 25) / 100;
        this.Pv += healing;
        return this.Pv;
    };
    return Good;
}(_hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Hero = /** @class */ (function () {
    // constructeur
    function Hero(name) {
        this.createWeapon = new _weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"](0, 0, 0);
        this._name = name; // this est un objet défini par la class, notre futur objet
        this._pv = Math.floor(Math.random() * 50 + 50) + 1; // Limite de 100 PV
        this._pvMax = this._pv;
        this._defense = Math.floor(Math.random() * 10);
        this._weapon = this.createWeapon;
    }
    Object.defineProperty(Hero.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "Pv", {
        get: function () {
            return this._pv;
        },
        set: function (pv) {
            this._pv = pv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "PvMax", {
        get: function () {
            return this._pvMax;
        },
        set: function (pvMax) {
            this._pvMax = pvMax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "Defense", {
        get: function () {
            return this._defense;
        },
        set: function (defense) {
            this._defense = defense;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    function Weapon(_minAttack, _maxAttack, _criticalShot) {
        this._minAttack = Math.floor(Math.random() * 10) + 1;
        this._maxAttack = Math.floor(Math.random() * 10) + 11;
        this._criticalShot = Math.floor(Math.random() * 20) + 1;
    }
    Object.defineProperty(Weapon.prototype, "MinAttack", {
        get: function () {
            return this._minAttack;
        },
        set: function (minAttack) {
            this._minAttack = minAttack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "MaxAttack", {
        get: function () {
            return this._maxAttack;
        },
        set: function (maxAttack) {
            this._maxAttack = maxAttack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "CriticalShot", {
        get: function () {
            return this._criticalShot;
        },
        set: function (criticalShot) {
            this._criticalShot = criticalShot;
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bad", function() { return Bad; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Bad = /** @class */ (function (_super) {
    __extends(Bad, _super);
    // variables d'instance
    // constructeur
    function Bad(name) {
        var _this = _super.call(this, name) || this;
        _this.randomName = function () {
            var name = Math.random().toString(20).replace(/[^a-z]+/g, '');
            return name[0].toUpperCase() + name.substring(1);
        };
        _this.Name = _this.randomName();
        return _this;
    }
    return Bad;
}(_hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]));



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9nb29kLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL2JhZC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0k7QUFDTjtBQUdsQyw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBRTVCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUNyQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDYixJQUFJLEtBQUss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QUFjLFNBQVM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTO1FBQy9CLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVU7UUFDMUIsQ0FBQzthQUVELFVBQWMsU0FBa0I7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTO1FBQy9CLENBQUM7OztPQUpBO0lBS0Qsc0JBQUksZ0NBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhO1FBQzdCLENBQUM7YUFDRCxVQUFpQixZQUFxQjtZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVk7UUFDckMsQ0FBQzs7O09BSEE7SUFLTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNkI7QUFDOUI7SUFBeUIsdUJBQUk7SUFDekIsdUJBQXVCO0lBRXZCLGVBQWU7SUFDZixhQUFZLElBQVk7UUFBeEIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQUVELGdCQUFVLEdBQUc7WUFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFORyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDbEMsQ0FBQztJQVFMLFVBQUM7QUFBRCxDQUFDLENBZndCLDBDQUFJLEdBZTVCOzs7Ozs7OztBQ2pCRCxxQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vY2xhc3MvaGVyb1wiO1xyXG5pbXBvcnQgeyBHb29kIH0gZnJvbSBcIi4vY2xhc3MvZ29vZFwiO1xyXG5pbXBvcnQgeyBXZWFwb24gfSBmcm9tIFwiLi9jbGFzcy93ZWFwb25cIjtcclxuaW1wb3J0IHsgQmFkIH0gZnJvbSBcIi4vY2xhc3MvYmFkXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiXCJcclxuXHJcbi8vbGFuY2VtZW50IG5vdXZlbGxlIHBhcnRpZSBcclxuLy92YXIgcGFydGllID0gbmV3IFBhcnRpZSgpO1xyXG5cclxubGV0IG5hbWUgPSBcIkhlcmN1bGVcIjtcclxubGV0IHB2ID0gMjAwO1xyXG5sZXQgcHZNYXggPSAyNTA7XHJcbmxldCBkZWYgPSAyMDA7XHJcbmxldCBtaW5BdHRhY2sgPSA1MDtcclxubGV0IG1heEF0dGFjayA9IDIwMDtcclxubGV0IGNyaXRpY2FsU2hvdCA9IDQwMDtcclxubGV0IHdlYXBvbiA9IG5ldyBXZWFwb24gKG1pbkF0dGFjaywgbWF4QXR0YWNrLCBjcml0aWNhbFNob3QpO1xyXG5sZXQgZ29vZCA9IG5ldyBHb29kIChuYW1lKTtcclxubGV0IGJhZCA9IG5ldyBCYWQgKG5hbWUpO1xyXG5cclxuY29uc29sZS5sb2coXCJIZXJvc1wiLCBnb29kKTtcclxuY29uc29sZS5sb2coXCJNb25zdHJlXCIsIGJhZCk7XHJcblxyXG5cclxuLy9sYW5jZW1lbnQgbm91dmVsbGUgcGFydGllIFxyXG4vL3ZhciBwYXJ0aWUgPSBuZXcgUGFydGllKCk7XHJcblxyXG4vL2NvbnNvbGUubG9nKFwiSGVyb3NcIiwgaGVybyk7XHJcbmNvbnNvbGUubG9nKFwiTW9uc3RyZVwiLCBtb25zdGVyKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnRpZVN0YXJ0KCl7XHJcbiAgICBjb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XHJcblxyXG5jb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG59KTtcclxuXHJcbnJsLnF1ZXN0aW9uKCdOb20gZGUgdm90cmUgaGVyb3M/ICcsIChhbnN3ZXIgOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBub20gPSBhbnN3ZXI7XHJcbiAgICBsZXQgaGVybyA9IG5ldyBHZW50aWwobm9tKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSGVyb3NcIiwgaGVybyk7XHJcbiAgICBybC5jbG9zZSgpO1xyXG59KTtcclxuXHJcbn1cclxucGFydGllU3RhcnQoKTsiLCJpbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuL3dlYXBvbic7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5leHBvcnQgY2xhc3MgR29vZCBleHRlbmRzIEhlcm8geyAvLyBleHRlbmRzXHJcbiAgICAvLyB2YXJpYWJsZXMgZCdpbnN0YW5jZVxyXG5cclxuICAgIC8vIGNvbnN0cnVjdGV1clxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuXHJcbiAgICAvLyBNZXRob2RlIHNvaW4gcGVyc29ubmFnZVxyXG4gICAgLy8gQHJldHVybiBQdlxyXG4gICAgcHVibGljIGhlYWwoY2libGU6IEhlcm8pIHtcclxuICAgICAgICBsZXQgaGVhbGluZyA9ICh0aGlzLlB2ICogMjUpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuUHYgKz0gaGVhbGluZztcclxuICAgICAgICByZXR1cm4gdGhpcy5QdjtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgV2VhcG9uIH0gZnJvbSAnLi93ZWFwb24nO1xyXG5leHBvcnQgY2xhc3MgSGVybyB7XHJcbiAgICAvLyB2YXJpYWJsZXMgZCdpbnN0YW5jZVxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcHY6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3B2TWF4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF93ZWFwb246IFdlYXBvbjtcclxuICAgIHByaXZhdGUgY3JlYXRlV2VhcG9uID0gbmV3IFdlYXBvbiAoMCwwLDApO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdGV1clxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7IC8vIGNlIHF1J29uIHZldXQgcG91ciBsZSBIZXJvLCBvbiBsZSBmYWl0IHBhc3NlciBlbiBwYXJhbXNcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZS8vIHRoaXMgZXN0IHVuIG9iamV0IGTDqWZpbmkgcGFyIGxhIGNsYXNzLCBub3RyZSBmdXR1ciBvYmpldFxyXG4gICAgICAgIHRoaXMuX3B2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyA1MCkgKyAxIC8vIExpbWl0ZSBkZSAxMDAgUFZcclxuICAgICAgICB0aGlzLl9wdk1heCA9IHRoaXMuX3B2XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbiA9IHRoaXMuY3JlYXRlV2VhcG9uXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUHYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B2XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFB2KHB2KSB7XHJcbiAgICAgICAgdGhpcy5fcHYgPSBwdlxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQdk1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHZNYXhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgUHZNYXgocHZNYXgpIHtcclxuICAgICAgICB0aGlzLl9wdk1heCA9IHB2TWF4XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERlZmVuc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGVmZW5zZShkZWZlbnNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9NZXRob2RzXHJcbiAgICAvLyBwdWJsaWMgYXR0YWNrKGhlcm86IEhlcm8pIHtcclxuICAgIC8vICAgICBsZXQgcHVuY2g6IG51bWJlciA9IGF0dGFxdWUgZHUgSGVybyAtIGRlZmVuc2UgZHUgaGVyb1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICAvLyB2YXJpYWJsZXMgZCdpbnN0YW5jZVxyXG4gICAgcHJpdmF0ZSBfbWluQXR0YWNrIDogTnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWF4QXR0YWNrIDogTnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3JpdGljYWxTaG90IDogTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9taW5BdHRhY2s6IE51bWJlciwgX21heEF0dGFjazogTnVtYmVyLCBfY3JpdGljYWxTaG90OiBOdW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX21pbkF0dGFjayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XHJcbiAgICAgICAgdGhpcy5fbWF4QXR0YWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTE7XHJcbiAgICAgICAgdGhpcy5fY3JpdGljYWxTaG90ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTWluQXR0YWNrKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkF0dGFja1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBNaW5BdHRhY2sobWluQXR0YWNrKSB7XHJcbiAgICAgICAgdGhpcy5fbWluQXR0YWNrID0gbWluQXR0YWNrXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE1heEF0dGFjaygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhBdHRhY2tcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTWF4QXR0YWNrKG1heEF0dGFjayA6IE51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21heEF0dGFjayA9IG1heEF0dGFja1xyXG4gICAgfVxyXG4gICAgZ2V0IENyaXRpY2FsU2hvdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jcml0aWNhbFNob3RcclxuICAgIH1cclxuICAgIHNldCBDcml0aWNhbFNob3QoY3JpdGljYWxTaG90IDogTnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3JpdGljYWxTaG90ID0gY3JpdGljYWxTaG90XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdlYXBvbiB9IGZyb20gJy4vd2VhcG9uJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmV4cG9ydCBjbGFzcyBCYWQgZXh0ZW5kcyBIZXJvIHsgLy8gZXh0ZW5kc1xyXG4gICAgLy8gdmFyaWFibGVzIGQnaW5zdGFuY2VcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RldXJcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IHRoaXMucmFuZG9tTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbU5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDIwKS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxyXG4gICAgICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==