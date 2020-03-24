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
/* harmony import */ var _class_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

//lancement nouvelle partie 
//var partie = new Partie();
var name = "Hercule";
var pv = 200;
var pvMax = 250;
var def = 200;
var minAttack = 50;
var maxAttack = 200;
var criticalShot = 400;
// let weapon = new Weapon (minAttack, maxAttack, criticalShot);
// let good = new Good (name);
// let bad = new Bad (name);
// console.log("Heros", good);
// console.log("Monstre", bad);
//lancement nouvelle partie 
//var partie = new Partie();
//console.log("Heros", hero);
// console.log("Monstre", monster);
function partieStart() {
    new _class_game__WEBPACK_IMPORTED_MODULE_0__["Game"]().initGame();
}
partieStart();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _bad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


var readline = __webpack_require__(6);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        //variable d'instance
        this.tabHeros = ["toto", "tata", "Billy"];
        this.tabMechants = ["ogre", "gobelin", 'orque'];
        // Methode lancement de la partie 
        // @return 
        this.initGame = function () {
            rl.question('Nom de votre heros? ', function (answer) {
                var nom = answer;
                var hero = new _good__WEBPACK_IMPORTED_MODULE_1__["Good"](nom);
                var bad = new _bad__WEBPACK_IMPORTED_MODULE_0__["Bad"]("");
                console.log("Heros", hero);
                console.log("Bad", bad);
                _this.launchGame(hero, bad);
                rl.close();
            });
            // lancementPartie.question('Voulez-vous démarrez une partie ? (O/N)', (answer)); 
            // if (answer == 'O' || answer == 'o') { const reponse = console.log("lancement de la partie");
            // } else {
            //     const reponse = console.log("retour a la question")
            // }
            // return reponse;
        };
        this.launchGame = function (good, bad) {
            var alea = Math.random();
            var firstPlayer;
            var secondPlayer;
            if (alea > 0.5) {
                firstPlayer = good;
                secondPlayer = bad;
                console.log("The Good side plays first");
            }
            else {
                firstPlayer = bad;
                secondPlayer = good;
                console.log("The Bad side plays first");
            }
            // firstPlayer.attack(secondPlayer);
            // console.log(secondPlayer);
            do {
                firstPlayer.attack(secondPlayer);
                if (secondPlayer.Pv > 0) {
                    secondPlayer.attack(firstPlayer);
                }
            } while (firstPlayer.Pv > 0 && secondPlayer.Pv > 0);
            if (firstPlayer.Pv > 0) {
                console.log(firstPlayer.Name + " a gagné !");
            }
            else {
                console.log(secondPlayer.Name + " a gagné !");
            }
        };
        // Methode creation du méchant 
        // @return 
        this.createMechant = function () {
            return console.log("test lien index");
        };
    }
    return Game;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bad", function() { return Bad; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

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
    //Methods
    Hero.prototype.attack = function (defender) {
        this._defense;
        // console.log(defender.Defense);
        var damage = Math.floor(Math.random() * (this._weapon.MaxAttack - this._weapon.MinAttack + 1)) + this._weapon.MinAttack;
        var shot = damage - defender.Defense <= 0 ? 0 : damage - defender.Defense;
        defender.Pv = defender.Pv - shot;
        console.log(this.Name + " attaque " + defender.Name + " et fait " + shot + " dégats. Il reste " + defender.Pv + " à " + defender.Name);
    };
    return Hero;
}());



/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Good", function() { return Good; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9iYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL2hlcm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL3dlYXBvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvZ29vZC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBb0M7QUFFcEMsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUU1QixJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7QUFDckIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FB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LDZCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQzFCLENBQUM7YUFFRCxVQUFjLFNBQWlCO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztRQUMvQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQzFCLENBQUM7YUFFRCxVQUFjLFNBQWtCO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztRQUMvQixDQUFDOzs7T0FKQTtJQUtELHNCQUFJLGdDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYTtRQUM3QixDQUFDO2FBQ0QsVUFBaUIsWUFBcUI7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZO1FBQ3JDLENBQUM7OztPQUhBO0lBS0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzZCO0FBQzlCO0lBQTBCLHdCQUFJO0lBQzFCLHVCQUF1QjtJQUV2QixlQUFlO0lBQ2YsY0FBWSxJQUFZO2VBQ3BCLGtCQUFNLElBQUksQ0FBQztJQUNmLENBQUM7SUFHRCxVQUFVO0lBRVYsMEJBQTBCO0lBQzFCLGFBQWE7SUFDTixtQkFBSSxHQUFYLFVBQVksS0FBVztRQUNuQixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0wsV0FBQztBQUFELENBQUMsQ0FwQnlCLDBDQUFJLEdBb0I3Qjs7Ozs7Ozs7QUN0QkQscUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL2NsYXNzL2hlcm9cIjtcclxuaW1wb3J0IHsgR29vZCB9IGZyb20gXCIuL2NsYXNzL2dvb2RcIjtcclxuaW1wb3J0IHsgV2VhcG9uIH0gZnJvbSBcIi4vY2xhc3Mvd2VhcG9uXCI7XHJcbmltcG9ydCB7IEJhZCB9IGZyb20gXCIuL2NsYXNzL2JhZFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vY2xhc3MvZ2FtZVwiO1xyXG5cclxuLy9sYW5jZW1lbnQgbm91dmVsbGUgcGFydGllIFxyXG4vL3ZhciBwYXJ0aWUgPSBuZXcgUGFydGllKCk7XHJcblxyXG5sZXQgbmFtZSA9IFwiSGVyY3VsZVwiO1xyXG5sZXQgcHYgPSAyMDA7XHJcbmxldCBwdk1heCA9IDI1MDtcclxubGV0IGRlZiA9IDIwMDtcclxubGV0IG1pbkF0dGFjayA9IDUwO1xyXG5sZXQgbWF4QXR0YWNrID0gMjAwO1xyXG5sZXQgY3JpdGljYWxTaG90ID0gNDAwO1xyXG4vLyBsZXQgd2VhcG9uID0gbmV3IFdlYXBvbiAobWluQXR0YWNrLCBtYXhBdHRhY2ssIGNyaXRpY2FsU2hvdCk7XHJcbi8vIGxldCBnb29kID0gbmV3IEdvb2QgKG5hbWUpO1xyXG4vLyBsZXQgYmFkID0gbmV3IEJhZCAobmFtZSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIkhlcm9zXCIsIGdvb2QpO1xyXG4vLyBjb25zb2xlLmxvZyhcIk1vbnN0cmVcIiwgYmFkKTtcclxuXHJcblxyXG4vL2xhbmNlbWVudCBub3V2ZWxsZSBwYXJ0aWUgXHJcbi8vdmFyIHBhcnRpZSA9IG5ldyBQYXJ0aWUoKTtcclxuXHJcbi8vY29uc29sZS5sb2coXCJIZXJvc1wiLCBoZXJvKTtcclxuLy8gY29uc29sZS5sb2coXCJNb25zdHJlXCIsIG1vbnN0ZXIpO1xyXG5cclxuZnVuY3Rpb24gcGFydGllU3RhcnQoKXtcclxuICAgIG5ldyBHYW1lKCkuaW5pdEdhbWUoKTtcclxufVxyXG5wYXJ0aWVTdGFydCgpOyIsImltcG9ydCB7IEJhZCB9IGZyb20gXCIuL2JhZFwiO1xyXG5pbXBvcnQgeyBHb29kIH0gZnJvbSBcIi4vZ29vZFwiO1xyXG5pbXBvcnQgeyBXZWFwb24gfSBmcm9tIFwiLi93ZWFwb25cIjtcclxuXHJcbmNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcclxuY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgICAvL3ZhcmlhYmxlIGQnaW5zdGFuY2VcclxuICAgIHByaXZhdGUgdGFiSGVyb3MgOiBzdHJpbmdbXSA9IFtcInRvdG9cIiwgXCJ0YXRhXCIsIFwiQmlsbHlcIl07XHJcbiAgICBwcml2YXRlIHRhYk1lY2hhbnRzIDogc3RyaW5nW10gPSBbXCJvZ3JlXCIsIFwiZ29iZWxpblwiLCAnb3JxdWUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RlIGxhbmNlbWVudCBkZSBsYSBwYXJ0aWUgXHJcbiAgICAvLyBAcmV0dXJuIFxyXG5cclxuICAgIGluaXRHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJsLnF1ZXN0aW9uKCdOb20gZGUgdm90cmUgaGVyb3M/ICcsIChhbnN3ZXIgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vbSA9IGFuc3dlcjtcclxuICAgICAgICAgICAgbGV0IGhlcm8gPSBuZXcgR29vZChub20pO1xyXG4gICAgICAgICAgICBsZXQgYmFkID0gbmV3IEJhZChcIlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIZXJvc1wiLCBoZXJvKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWRcIiwgYmFkKTtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2hHYW1lKGhlcm8sIGJhZCk7XHJcbiAgICAgICAgICAgIHJsLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGxhbmNlbWVudFBhcnRpZS5xdWVzdGlvbignVm91bGV6LXZvdXMgZMOpbWFycmV6IHVuZSBwYXJ0aWUgPyAoTy9OKScsIChhbnN3ZXIpKTsgXHJcbiAgICAgICAgLy8gaWYgKGFuc3dlciA9PSAnTycgfHwgYW5zd2VyID09ICdvJykgeyBjb25zdCByZXBvbnNlID0gY29uc29sZS5sb2coXCJsYW5jZW1lbnQgZGUgbGEgcGFydGllXCIpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlcG9uc2UgPSBjb25zb2xlLmxvZyhcInJldG91ciBhIGxhIHF1ZXN0aW9uXCIpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaEdhbWUgPSAoZ29vZDogR29vZCwgYmFkOiBCYWQpID0+IHtcclxuICAgICAgICBsZXQgYWxlYSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGZpcnN0UGxheWVyO1xyXG4gICAgICAgIGxldCBzZWNvbmRQbGF5ZXI7XHJcbiAgICAgICAgaWYgKGFsZWEgPiAwLjUpIHtcclxuICAgICAgICAgICAgZmlyc3RQbGF5ZXIgPSBnb29kO1xyXG4gICAgICAgICAgICBzZWNvbmRQbGF5ZXIgPSBiYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIEdvb2Qgc2lkZSBwbGF5cyBmaXJzdFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJzdFBsYXllciA9IGJhZDtcclxuICAgICAgICAgICAgc2Vjb25kUGxheWVyID0gZ29vZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgQmFkIHNpZGUgcGxheXMgZmlyc3RcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaXJzdFBsYXllci5hdHRhY2soc2Vjb25kUGxheWVyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWNvbmRQbGF5ZXIpO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGZpcnN0UGxheWVyLmF0dGFjayhzZWNvbmRQbGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAoc2Vjb25kUGxheWVyLlB2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUGxheWVyLmF0dGFjayhmaXJzdFBsYXllcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9d2hpbGUoZmlyc3RQbGF5ZXIuUHYgPiAwICYmIHNlY29uZFBsYXllci5QdiA+IDApXHJcblxyXG4gICAgICAgIGlmKGZpcnN0UGxheWVyLlB2ID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaXJzdFBsYXllci5OYW1lICsgXCIgYSBnYWduw6kgIVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlY29uZFBsYXllci5OYW1lICsgXCIgYSBnYWduw6kgIVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kZSBjcmVhdGlvbiBkdSBtw6ljaGFudCBcclxuICAgIC8vIEByZXR1cm4gXHJcblxyXG4gICAgY3JlYXRlTWVjaGFudCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ0ZXN0IGxpZW4gaW5kZXhcIik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuL3dlYXBvbic7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5leHBvcnQgY2xhc3MgQmFkIGV4dGVuZHMgSGVybyB7IC8vIGV4dGVuZHNcclxuICAgIC8vIHZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcblxyXG4gICAgLy8gY29uc3RydWN0ZXVyXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICB0aGlzLk5hbWUgPSB0aGlzLnJhbmRvbU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21OYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygyMCkucmVwbGFjZSgvW15hLXpdKy9nLCAnJylcclxuICAgICAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSlcclxuICAgIH1cclxuICAgIFxyXG5cclxufSIsImltcG9ydCB7IFdlYXBvbiB9IGZyb20gJy4vd2VhcG9uJztcclxuZXhwb3J0IGNsYXNzIEhlcm8ge1xyXG4gICAgLy8gdmFyaWFibGVzIGQnaW5zdGFuY2VcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3B2OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wdk1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uOiBXZWFwb247XHJcbiAgICBwcml2YXRlIGNyZWF0ZVdlYXBvbiA9IG5ldyBXZWFwb24gKDAsMCwwKTtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RldXJcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykgeyAvLyBjZSBxdSdvbiB2ZXV0IHBvdXIgbGUgSGVybywgb24gbGUgZmFpdCBwYXNzZXIgZW4gcGFyYW1zXHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWUvLyB0aGlzIGVzdCB1biBvYmpldCBkw6lmaW5pIHBhciBsYSBjbGFzcywgbm90cmUgZnV0dXIgb2JqZXRcclxuICAgICAgICB0aGlzLl9wdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgNTApICsgMSAvLyBMaW1pdGUgZGUgMTAwIFBWXHJcbiAgICAgICAgdGhpcy5fcHZNYXggPSB0aGlzLl9wdlxyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICB0aGlzLl93ZWFwb24gPSB0aGlzLmNyZWF0ZVdlYXBvblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFB2KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdlxyXG4gICAgfVxyXG5cclxuICAgIHNldCBQdihwdikge1xyXG4gICAgICAgIHRoaXMuX3B2ID0gcHZcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUHZNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B2TWF4XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFB2TWF4KHB2TWF4KSB7XHJcbiAgICAgICAgdGhpcy5fcHZNYXggPSBwdk1heFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBEZWZlbnNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERlZmVuc2UoZGVmZW5zZSkge1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vTWV0aG9kc1xyXG4gICAgcHVibGljIGF0dGFjayhkZWZlbmRlcjogSGVybykge1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2U7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWZlbmRlci5EZWZlbnNlKTtcclxuICAgICAgICBsZXQgZGFtYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuX3dlYXBvbi5NYXhBdHRhY2sgLSB0aGlzLl93ZWFwb24uTWluQXR0YWNrICsgMSkpICsgdGhpcy5fd2VhcG9uLk1pbkF0dGFjaztcclxuICAgICAgICBsZXQgc2hvdCA9IGRhbWFnZSAtIGRlZmVuZGVyLkRlZmVuc2UgPD0gMCA/IDAgOiBkYW1hZ2UgLSBkZWZlbmRlci5EZWZlbnNlO1xyXG4gICAgICAgIGRlZmVuZGVyLlB2ID0gZGVmZW5kZXIuUHYgLSBzaG90IDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLk5hbWUgKyBcIiBhdHRhcXVlIFwiICsgZGVmZW5kZXIuTmFtZSArIFwiIGV0IGZhaXQgXCIgKyBzaG90ICsgXCIgZMOpZ2F0cy4gSWwgcmVzdGUgXCIgKyBkZWZlbmRlci5QdiArIFwiIMOgIFwiICsgZGVmZW5kZXIuTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIC8vIHZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgICBwcml2YXRlIF9taW5BdHRhY2sgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYXhBdHRhY2sgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jcml0aWNhbFNob3QgOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX21pbkF0dGFjazogbnVtYmVyLCBfbWF4QXR0YWNrOiBudW1iZXIsIF9jcml0aWNhbFNob3Q6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fbWluQXR0YWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcclxuICAgICAgICB0aGlzLl9tYXhBdHRhY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMTtcclxuICAgICAgICB0aGlzLl9jcml0aWNhbFNob3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNaW5BdHRhY2soKSA6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluQXR0YWNrXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IE1pbkF0dGFjayhtaW5BdHRhY2s6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21pbkF0dGFjayA9IG1pbkF0dGFja1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNYXhBdHRhY2soKSA6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4QXR0YWNrXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IE1heEF0dGFjayhtYXhBdHRhY2sgOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXhBdHRhY2sgPSBtYXhBdHRhY2tcclxuICAgIH1cclxuICAgIGdldCBDcml0aWNhbFNob3QoKSA6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3JpdGljYWxTaG90XHJcbiAgICB9XHJcbiAgICBzZXQgQ3JpdGljYWxTaG90KGNyaXRpY2FsU2hvdCA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NyaXRpY2FsU2hvdCA9IGNyaXRpY2FsU2hvdFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuL3dlYXBvbic7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5leHBvcnQgY2xhc3MgR29vZCBleHRlbmRzIEhlcm8geyAvLyBleHRlbmRzXHJcbiAgICAvLyB2YXJpYWJsZXMgZCdpbnN0YW5jZVxyXG5cclxuICAgIC8vIGNvbnN0cnVjdGV1clxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuXHJcbiAgICAvLyBNZXRob2RlIHNvaW4gcGVyc29ubmFnZVxyXG4gICAgLy8gQHJldHVybiBQdlxyXG4gICAgcHVibGljIGhlYWwoY2libGU6IEhlcm8pIHtcclxuICAgICAgICBsZXQgaGVhbGluZyA9ICh0aGlzLlB2ICogMjUpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuUHYgKz0gaGVhbGluZztcclxuICAgICAgICByZXR1cm4gdGhpcy5QdjtcclxuICAgIH1cclxuXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==