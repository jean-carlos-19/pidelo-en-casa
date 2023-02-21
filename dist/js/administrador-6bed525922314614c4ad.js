/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8841:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Boton = void 0;
const Ids_1 = __webpack_require__(6347);
class Boton {
    constructor() {
        this.ids = new Ids_1.Ids();
        this.usuario_visualizar = "cerrar-sesion";
        this.usuario_ocultar = "cerrar-sesion cerrar-sesion__ocultar";
        this.contenedor = document.getElementById(this.ids.cerrar_sesion);
        this.btn_usuario = document.getElementById(this.ids.usuario);
    }
    static obtener_objeto() {
        if (this.boton === null)
            this.boton = new Boton();
        return this.boton;
    }
    obtener_boton() {
        return this.btn_usuario;
    }
    visualizar() {
        this.contenedor.removeAttribute("class");
        this.contenedor.setAttribute("class", this.usuario_visualizar);
    }
    ocultar() {
        this.contenedor.removeAttribute("class");
        this.contenedor.setAttribute("class", this.usuario_ocultar);
    }
}
exports.Boton = Boton;
Boton.boton = null;


/***/ }),

/***/ 6347:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ids = void 0;
class Ids {
    constructor() {
        this.usuario = "usuario";
        this.cerrar_sesion = "cerrar-sesion";
    }
}
exports.Ids = Ids;


/***/ }),

/***/ 1108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventos_administrador = void 0;
const Boton_1 = __webpack_require__(8841);
let boton = Boton_1.Boton.obtener_objeto();
let decision = true;
function eventos_administrador() {
    boton.obtener_boton().addEventListener("click", () => {
        if (decision) {
            boton.visualizar();
            decision = false;
        }
        else {
            boton.ocultar();
            decision = true;
        }
    });
}
exports.eventos_administrador = eventos_administrador;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const eventos_1 = __webpack_require__(1108);
window.addEventListener("load", () => {
    (0, eventos_1.eventos_administrador)();
});

}();
/******/ })()
;