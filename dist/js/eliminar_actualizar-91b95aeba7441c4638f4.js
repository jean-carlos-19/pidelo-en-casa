/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1977:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ids = void 0;
class Ids {
    constructor() {
        this.productos = ["0001", "0002", "0003", "0004"];
    }
}
exports.Ids = Ids;


/***/ }),

/***/ 5250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Producto = void 0;
const Ids_1 = __webpack_require__(1977);
class Producto {
    constructor() {
        this.ids = new Ids_1.Ids();
        this.productos = [
            document.getElementById(this.ids.productos[0]),
            document.getElementById(this.ids.productos[1]),
            document.getElementById(this.ids.productos[2]),
            document.getElementById(this.ids.productos[3]),
        ];
    }
    static obtener_objeto() {
        if (this.producto === null)
            this.producto = new Producto();
        return this.producto;
    }
    obtener_productos() {
        return this.productos;
    }
}
exports.Producto = Producto;
Producto.producto = null;


/***/ }),

/***/ 570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventos_eliminar_actualizar = void 0;
const Boton_1 = __webpack_require__(7329);
const Modal_1 = __webpack_require__(5597);
const Producto_1 = __webpack_require__(5250);
let modal = Modal_1.Modal.obtener_objetos();
let boton = Boton_1.Boton.obtener_objeto();
function eventos_eliminar_actualizar() {
    let producto = Producto_1.Producto.obtener_objeto();
    let productos = producto.obtener_productos();
    productos.forEach((producto) => {
        producto.addEventListener("click", () => {
            modal.visualizar();
        });
    });
    boton.obtener_boton().addEventListener("click", () => {
        modal.ocultar();
    });
}
exports.eventos_eliminar_actualizar = eventos_eliminar_actualizar;


/***/ }),

/***/ 7329:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Boton = void 0;
const Ids_1 = __webpack_require__(2512);
class Boton {
    constructor() {
        this.btn_omitir = null;
        this.ids = new Ids_1.Ids();
        this.btn_omitir = document.getElementById(this.ids.btn_omitir);
    }
    static obtener_objeto() {
        if (this.boton === null)
            this.boton = new Boton();
        return this.boton;
    }
    obtener_boton() {
        return this.btn_omitir;
    }
}
exports.Boton = Boton;
Boton.boton = null;


/***/ }),

/***/ 2512:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ids = void 0;
class Ids {
    constructor() {
        this.modal = "modal";
        this.btn_omitir = "btn-omitir";
    }
}
exports.Ids = Ids;


/***/ }),

/***/ 5597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const Ids_1 = __webpack_require__(2512);
class Modal {
    constructor() {
        this.ids = new Ids_1.Ids();
        this.modal_cont = null;
        this.css_modal = "formulario formulario-producto formulario-modal";
        this.css_modal_ocultar = "formulario formulario-producto formulario-modal formulario__desactivado";
        this.modal_cont = document.getElementById(this.ids.modal);
    }
    static obtener_objetos() {
        if (this.modal === null)
            this.modal = new Modal();
        return this.modal;
    }
    obtener_modal() {
        return this.modal_cont;
    }
    visualizar() {
        this.modal_cont.removeAttribute("class");
        this.modal_cont.setAttribute("class", this.css_modal);
    }
    ocultar() {
        this.modal_cont.removeAttribute("class");
        this.modal_cont.setAttribute("class", this.css_modal_ocultar);
    }
}
exports.Modal = Modal;
Modal.modal = null;


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
const eventos_1 = __webpack_require__(570);
window.addEventListener("load", () => {
    (0, eventos_1.eventos_eliminar_actualizar)();
});

}();
/******/ })()
;