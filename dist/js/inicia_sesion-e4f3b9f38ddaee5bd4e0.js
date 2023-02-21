/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9697:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Boton = void 0;
const Ids_1 = __webpack_require__(6456);
class Boton {
    constructor() {
        this.ids = new Ids_1.Ids();
        this.btn_enviar = null;
        this.btn_estilo_activado = "btn-enviar";
        this.btn_estilo_desactivado = "btn-enviar__desabilitado";
        this.btn_enviar = document.getElementById(this.ids.btn_enviar);
    }
    static obtener_objeto() {
        if (this.boton === null)
            this.boton = new Boton();
        return this.boton;
    }
    activar_boton() {
        this.btn_enviar.removeAttribute("class");
        this.btn_enviar.setAttribute("class", this.btn_estilo_activado);
    }
    desactivar_boton() {
        this.btn_enviar.removeAttribute("class");
        this.btn_enviar.setAttribute("class", `${this.btn_estilo_activado} ${this.btn_estilo_desactivado}`);
    }
}
exports.Boton = Boton;
Boton.boton = null;


/***/ }),

/***/ 6456:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ids = void 0;
class Ids {
    constructor() {
        this.btn_mostrar_contrasena = "mostrar-contrasena";
        this.compo_usuario = "usuario";
        this.campo_contrasena = "contrasena";
        this.btn_enviar = "btn-enviar-inicia-sesion";
    }
}
exports.Ids = Ids;


/***/ }),

/***/ 3708:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IniciaSesion = void 0;
const Ids_1 = __webpack_require__(6456);
class IniciaSesion {
    constructor() {
        this.ids = new Ids_1.Ids();
        this.btn_mostrar_contrasena = null;
        this.campo_contrasena = null;
        this.compo_usuario = null;
        this.compo_usuario = document.getElementById(this.ids.compo_usuario);
        this.campo_contrasena = document.getElementById(this.ids.campo_contrasena);
        this.btn_mostrar_contrasena = document.getElementById(this.ids.btn_mostrar_contrasena);
    }
    static obtener_objeto() {
        if (this.form_inicia_sesion === null)
            this.form_inicia_sesion = new IniciaSesion();
        return this.form_inicia_sesion;
    }
    obtener_usuario() {
        return this.compo_usuario;
    }
    obtener_contrasena() {
        return this.campo_contrasena;
    }
    obtener_mostrar_contransena() {
        return this.btn_mostrar_contrasena;
    }
}
exports.IniciaSesion = IniciaSesion;
IniciaSesion.form_inicia_sesion = null;


/***/ }),

/***/ 261:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usuario = void 0;
class Usuario {
    constructor() {
        this.usuario = "";
        this.contrasena = "";
    }
    static obtener_objeto() {
        if (this.usuario === null)
            this.usuario = new Usuario();
        return this.usuario;
    }
    obtenter_usuario() {
        return this.usuario;
    }
    obtener_contrasena() {
        return this.contrasena;
    }
    establecer_usuario(valor) {
        this.usuario = valor;
    }
    establecer_contrasena(valor) {
        this.contrasena = valor;
    }
}
exports.Usuario = Usuario;
Usuario.usuario = null;


/***/ }),

/***/ 8447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventos_iniciar_sesion = void 0;
const IniciaSesion_1 = __webpack_require__(3708);
const Usuario_1 = __webpack_require__(261);
const validacion_1 = __webpack_require__(4358);
const verificacion_1 = __webpack_require__(9735);
let form_inicia_sesion = IniciaSesion_1.IniciaSesion.obtener_objeto();
let usuario = Usuario_1.Usuario.obtener_objeto();
let verificacion = verificacion_1.Verificacion.obtener_objeto();
function eventos_iniciar_sesion() {
    form_inicia_sesion
        .obtener_usuario()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        usuario.establecer_usuario(valor);
        let resultado = verificacion.validacion_usuario();
        if (!resultado)
            usuario.establecer_usuario("");
        (0, validacion_1.validacion)();
    });
    form_inicia_sesion
        .obtener_contrasena()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        usuario.establecer_contrasena(valor);
        let resultado = verificacion.validacion_contrasena();
        if (!resultado)
            usuario.establecer_contrasena("");
        (0, validacion_1.validacion)();
    });
    form_inicia_sesion
        .obtener_mostrar_contransena()
        .addEventListener("click", (evento) => {
        evento.preventDefault();
        let tipo = form_inicia_sesion
            .obtener_contrasena()
            .getAttribute("type");
        if (tipo === "password") {
            form_inicia_sesion.obtener_contrasena().setAttribute("type", "text");
            evento.currentTarget.innerHTML = "Ocultar";
        }
        else {
            form_inicia_sesion
                .obtener_contrasena()
                .setAttribute("type", "password");
            evento.currentTarget.innerHTML = "Mostrar";
        }
    });
}
exports.eventos_iniciar_sesion = eventos_iniciar_sesion;


/***/ }),

/***/ 4358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validacion = void 0;
const Boton_1 = __webpack_require__(9697);
const verificacion_1 = __webpack_require__(9735);
let verificacion = verificacion_1.Verificacion.obtener_objeto();
let boton = Boton_1.Boton.obtener_objeto();
function validacion() {
    let validacion = verificacion.validacion();
    if (!validacion)
        boton.desactivar_boton();
    else
        boton.activar_boton();
}
exports.validacion = validacion;


/***/ }),

/***/ 9735:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Verificacion = void 0;
const Usuario_1 = __webpack_require__(261);
class Verificacion {
    constructor() {
        this.usuario = Usuario_1.Usuario.obtener_objeto();
    }
    static obtener_objeto() {
        if (this.verificacion === null)
            this.verificacion = new Verificacion();
        return this.verificacion;
    }
    validacion_usuario() {
        let val_usuario = this.usuario.obtenter_usuario();
        return val_usuario.length > 0;
    }
    validacion_contrasena() {
        let val_contrasena = this.usuario.obtener_contrasena();
        return val_contrasena.length > 0;
    }
    validacion() {
        let val_usuario = this.usuario.obtenter_usuario();
        let val_contrasena = this.usuario.obtener_contrasena();
        return val_usuario.length > 0 && val_contrasena.length > 0;
    }
}
exports.Verificacion = Verificacion;
Verificacion.verificacion = null;


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
const eventos_1 = __webpack_require__(8447);
window.addEventListener("load", () => {
    (0, eventos_1.eventos_iniciar_sesion)();
});

}();
/******/ })()
;