/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3754:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Boton = void 0;
const Ids_1 = __webpack_require__(828);
const Verificacion_1 = __webpack_require__(7569);
class Boton {
    constructor() {
        this.btn_enviar_1 = null;
        this.btn_enviar_2 = null;
        this.btn_enviar_3 = null;
        this.btn_enviar_4 = null;
        this.btn_vistas = null;
        this.btn_estilo_activado = "btn-enviar";
        this.btn_estilo_desactivado = "btn-enviar__desabilitado";
        this.btn_vista_activado = "item";
        this.btn_vista_desactivado = "item item__desactivado";
        this.vefificion = Verificacion_1.Verificacion.obtener_objeto();
        this.ids = new Ids_1.Ids();
        this.btn_enviar_1 = document.getElementById(this.ids.btn_1);
        this.btn_enviar_2 = document.getElementById(this.ids.btn_2);
        this.btn_enviar_3 = document.getElementById(this.ids.btn_3);
        this.btn_enviar_4 = document.getElementById(this.ids.btn_4);
        this.btn_vistas = [
            document.getElementById(this.ids.btn_vista_1),
            document.getElementById(this.ids.btn_vista_2),
            document.getElementById(this.ids.btn_vista_3),
            document.getElementById(this.ids.btn_vista_4),
        ];
    }
    static obtener_objeto() {
        if (this.boton === null)
            this.boton = new Boton();
        return this.boton;
    }
    obtener_btn_1() {
        return this.btn_enviar_1;
    }
    obtener_btn_2() {
        return this.btn_enviar_2;
    }
    obtener_btn_3() {
        return this.btn_enviar_3;
    }
    obtener_btn_4() {
        return this.btn_enviar_4;
    }
    obtener_btn_vista_1() {
        return this.btn_vistas[0];
    }
    obtener_btn_vista_2() {
        return this.btn_vistas[1];
    }
    obtener_btn_vista_3() {
        return this.btn_vistas[2];
    }
    obtener_btn_vista_4() {
        return this.btn_vistas[3];
    }
    estado_btn_1() {
        let resultado = this.vefificion.verificacion_1();
        if (resultado)
            this.activar_boton(this.btn_enviar_1);
        else
            this.desactivar_boton(this.btn_enviar_1);
    }
    estado_btn_2() {
        let resultado = this.vefificion.verificacion_2();
        if (resultado)
            this.activar_boton(this.btn_enviar_2);
        else
            this.desactivar_boton(this.btn_enviar_2);
    }
    estado_btn_3() {
        let resultado = this.vefificion.verificacion_3();
        if (resultado)
            this.activar_boton(this.btn_enviar_3);
        else
            this.desactivar_boton(this.btn_enviar_3);
    }
    estado_btn_4() {
        let resultado = this.vefificion.verificacion_4();
        if (resultado)
            this.activar_boton(this.btn_enviar_4);
        else
            this.desactivar_boton(this.btn_enviar_4);
    }
    activar_boton(boton) {
        boton.disabled = false;
        boton.removeAttribute("class");
        boton.setAttribute("class", this.btn_estilo_activado);
    }
    desactivar_boton(boton) {
        boton.disabled = true;
        boton.removeAttribute("class");
        boton.setAttribute("class", `${this.btn_estilo_activado} ${this.btn_estilo_desactivado}`);
    }
    activar_vista(boton) {
        boton.disabled = false;
        boton.removeAttribute("class");
        boton.setAttribute("class", this.btn_vista_activado);
    }
    desactivar_vista(posicion) {
        this.btn_vistas.forEach((vista, i) => {
            if (i > posicion) {
                vista.disabled = true;
                vista.removeAttribute("class");
                vista.setAttribute("class", this.btn_vista_desactivado);
            }
        });
    }
}
exports.Boton = Boton;
Boton.boton = null;


/***/ }),

/***/ 2127:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Contenedores = void 0;
const Ids_1 = __webpack_require__(828);
class Contenedores {
    constructor() {
        this.contenedores = null;
        this.activar = "entradas entradas-formulario";
        this.desactivar = "entradas entradas-4 entradas__ocultar entradas-formulario";
        this.ids = new Ids_1.Ids();
        this.contenedores = [
            document.getElementById(this.ids.contenedor_1),
            document.getElementById(this.ids.contenedor_2),
            document.getElementById(this.ids.contenedor_3),
            document.getElementById(this.ids.contenedor_4),
        ];
    }
    static obtener_objeto() {
        if (this.contenedor === null)
            this.contenedor = new Contenedores();
        return this.contenedor;
    }
    obtener_contenedor_1() {
        return this.contenedores[0];
    }
    obtener_contenedor_2() {
        return this.contenedores[1];
    }
    obtener_contenedor_3() {
        return this.contenedores[2];
    }
    obtener_contenedor_4() {
        return this.contenedores[3];
    }
    activar_contenedor(valor) {
        this.contenedores.forEach((contenedor) => {
            let class_html = contenedor.getAttribute("id");
            if (class_html === valor)
                contenedor.setAttribute("class", this.activar);
            else
                contenedor.setAttribute("class", this.desactivar);
        });
    }
    activar_contenedor_x(posicion) {
        this.contenedores.forEach((contenedor, i) => {
            if (posicion === i)
                contenedor.setAttribute("class", this.activar);
            else
                contenedor.setAttribute("class", this.desactivar);
        });
    }
}
exports.Contenedores = Contenedores;
Contenedores.contenedor = null;


/***/ }),

/***/ 828:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ids = void 0;
class Ids {
    constructor() {
        this.empresa = "empresa";
        this.ruc = "ruc";
        this.direccion = "direccion";
        this.telefono_local = "telefono_local";
        this.telefono = "telefono";
        this.correo = "correo";
        this.usuario = "usuario";
        this.contrasena = "contrasena";
        this.btn_1 = "btn-entrada-1";
        this.btn_2 = "btn-entrada-2";
        this.btn_3 = "btn-entrada-3";
        this.btn_4 = "btn-entrada-4";
        this.btn_vista_1 = "btn-vista-1";
        this.btn_vista_2 = "btn-vista-2";
        this.btn_vista_3 = "btn-vista-3";
        this.btn_vista_4 = "btn-vista-4";
        this.contenedor_1 = "entrada-1";
        this.contenedor_2 = "entrada-2";
        this.contenedor_3 = "entrada-3";
        this.contenedor_4 = "entrada-4";
        this.btn_mostrar_contrasena = "mostrar-contrasena";
    }
}
exports.Ids = Ids;


/***/ }),

/***/ 7859:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Persona = void 0;
class Persona {
    constructor() {
        this.empresa = null;
        this.ruc = null;
        this.direccion = null;
        this.telefono_local = null;
        this.telefono = null;
        this.correo = null;
        this.usuario = null;
        this.contrasena = null;
        this.empresa = "";
        this.ruc = "";
        this.direccion = "";
        this.telefono_local = "";
        this.telefono = "";
        this.correo = "";
        this.usuario = "";
        this.contrasena = "";
    }
    static obtener_objeto() {
        if (this.persona === null)
            this.persona = new Persona();
        return this.persona;
    }
    establecer_empresa(valor) {
        this.empresa = valor;
    }
    establecer_ruc(valor) {
        this.ruc = valor;
    }
    establecer_direccion(valor) {
        this.direccion = valor;
    }
    establecer_telefono_local(valor) {
        this.telefono_local = valor;
    }
    establecer_telefono(valor) {
        this.telefono = valor;
    }
    establecer_correo(valor) {
        this.correo = valor;
    }
    establecer_usuario(valor) {
        this.usuario = valor;
    }
    establecer_contrasena(valor) {
        this.contrasena = valor;
    }
    obtener_empresa() {
        return this.empresa;
    }
    obtener_ruc() {
        return this.ruc;
    }
    obtener_direccion() {
        return this.direccion;
    }
    obtener_telefono_local() {
        return this.telefono_local;
    }
    obtener_telefono() {
        return this.telefono;
    }
    obtener_correo() {
        return this.correo;
    }
    obtener_usuario() {
        return this.usuario;
    }
    obtener_contrasena() {
        return this.contrasena;
    }
}
exports.Persona = Persona;
Persona.persona = null;


/***/ }),

/***/ 678:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registrate = void 0;
const Ids_1 = __webpack_require__(828);
class Registrate {
    constructor() {
        this.empresa = null;
        this.ruc = null;
        this.direccion = null;
        this.telefono_local = null;
        this.telefono = null;
        this.correo = null;
        this.usuario = null;
        this.contrasena = null;
        this.ids = new Ids_1.Ids();
        this.empresa = document.getElementById(this.ids.empresa);
        this.ruc = document.getElementById(this.ids.ruc);
        this.direccion = document.getElementById(this.ids.direccion);
        this.telefono_local = document.getElementById(this.ids.telefono_local);
        this.telefono = document.getElementById(this.ids.telefono);
        this.correo = document.getElementById(this.ids.correo);
        this.usuario = document.getElementById(this.ids.usuario);
        this.contrasena = document.getElementById(this.ids.contrasena);
        this.btn_mostrar_contrasena = document.getElementById(this.ids.btn_mostrar_contrasena);
    }
    static obtener_objeto() {
        if (this.registrate === null)
            this.registrate = new Registrate();
        return this.registrate;
    }
    obtener_empresa() {
        return this.empresa;
    }
    obtener_ruc() {
        return this.ruc;
    }
    obtener_direccion() {
        return this.direccion;
    }
    obtener_telefono_local() {
        return this.telefono_local;
    }
    obtener_telefono() {
        return this.telefono;
    }
    obtener_correo() {
        return this.correo;
    }
    obtener_usuario() {
        return this.usuario;
    }
    obtener_contrasena() {
        return this.contrasena;
    }
    obtener_mostrar_contransena() {
        return this.btn_mostrar_contrasena;
    }
    establecer_texto(entrada, valor) {
        entrada.innerHTML = valor;
    }
}
exports.Registrate = Registrate;
Registrate.registrate = null;


/***/ }),

/***/ 7569:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Verificacion = void 0;
const Persona_1 = __webpack_require__(7859);
class Verificacion {
    constructor() { }
    static obtener_objeto() {
        if (this.verificacion === null)
            this.verificacion = new Verificacion();
        return this.verificacion;
    }
    verificar_empresa() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_empresa();
        return valor.length > 0;
    }
    verificar_ruc() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_ruc();
        return valor.length > 0;
    }
    verificar_direccion() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_direccion();
        return valor.length > 0;
    }
    verificar_telefono_local() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_telefono_local();
        return valor.length > 0;
    }
    verificar_telefono() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_telefono();
        return valor.length > 0;
    }
    verificar_correo() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_correo();
        return valor.length > 0;
    }
    verificar_usuario() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_usuario();
        return valor.length > 0;
    }
    verificar_contrasena() {
        let valor = Persona_1.Persona.obtener_objeto().obtener_contrasena();
        return valor.length > 0;
    }
    verificacion_1() {
        let empresa = Persona_1.Persona.obtener_objeto().obtener_empresa();
        let ruc = Persona_1.Persona.obtener_objeto().obtener_ruc();
        return empresa.length > 0 && ruc.length > 0;
    }
    verificacion_2() {
        let direccion = Persona_1.Persona.obtener_objeto().obtener_direccion();
        let telefono_local = Persona_1.Persona.obtener_objeto().obtener_telefono_local();
        return direccion.length > 0 && telefono_local.length > 0;
    }
    verificacion_3() {
        let telefono = Persona_1.Persona.obtener_objeto().obtener_telefono();
        let correo = Persona_1.Persona.obtener_objeto().obtener_correo();
        return telefono.length > 0 && correo.length > 0;
    }
    verificacion_4() {
        let usuario = Persona_1.Persona.obtener_objeto().obtener_usuario();
        let contrasena = Persona_1.Persona.obtener_objeto().obtener_contrasena();
        return usuario.length > 0 && contrasena.length > 0;
    }
}
exports.Verificacion = Verificacion;
Verificacion.verificacion = null;


/***/ }),

/***/ 3518:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.evento_vista = exports.eventos_crear_cuenta = void 0;
const Persona_1 = __webpack_require__(7859);
const Registrate_1 = __webpack_require__(678);
const Verificacion_1 = __webpack_require__(7569);
const validacion_5 = __webpack_require__(6017);
const Boton_1 = __webpack_require__(3754);
const Contenedores_1 = __webpack_require__(2127);
let form_registrate = Registrate_1.Registrate.obtener_objeto();
let persona = Persona_1.Persona.obtener_objeto();
let verificacion = Verificacion_1.Verificacion.obtener_objeto();
let vista = Boton_1.Boton.obtener_objeto();
let contenedor = Contenedores_1.Contenedores.obtener_objeto();
function eventos_crear_cuenta() {
    /* Parte 1 */
    form_registrate
        .obtener_empresa()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_empresa(valor);
        let resultado = verificacion.verificar_empresa();
        if (!resultado)
            persona.establecer_empresa("");
        (0, validacion_5.validacion_1)();
    });
    form_registrate.obtener_ruc().addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_ruc(valor);
        let resultado = verificacion.verificar_ruc();
        if (!resultado)
            persona.establecer_ruc("");
        (0, validacion_5.validacion_1)();
    });
    /* Parte 2 */
    form_registrate
        .obtener_direccion()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_direccion(valor);
        let resultado = verificacion.verificar_direccion();
        if (!resultado)
            persona.establecer_direccion("");
        (0, validacion_5.validacion_2)();
    });
    form_registrate
        .obtener_telefono_local()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_telefono_local(valor);
        let resultado = verificacion.verificar_telefono_local();
        if (!resultado)
            persona.establecer_telefono_local("");
        (0, validacion_5.validacion_2)();
    });
    /* Parte 3 */
    form_registrate
        .obtener_telefono()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_telefono(valor);
        let resultado = verificacion.verificar_telefono();
        if (!resultado)
            persona.establecer_telefono("");
        (0, validacion_5.validacion_3)();
    });
    form_registrate.obtener_correo().addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_correo(valor);
        let resultado = verificacion.verificar_correo();
        if (!resultado)
            persona.establecer_correo("");
        (0, validacion_5.validacion_3)();
    });
    /* Parte 4 */
    form_registrate
        .obtener_usuario()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_usuario(valor);
        let resultado = verificacion.verificar_usuario();
        if (!resultado)
            persona.establecer_usuario("");
        (0, validacion_5.validacion_4)();
    });
    form_registrate
        .obtener_contrasena()
        .addEventListener("change", (evento) => {
        let valor = evento.currentTarget.value;
        persona.establecer_contrasena(valor);
        let resultado = verificacion.verificar_contrasena();
        if (!resultado)
            persona.establecer_contrasena("");
        (0, validacion_5.validacion_4)();
    });
    form_registrate
        .obtener_mostrar_contransena()
        .addEventListener("click", (evento) => {
        evento.preventDefault();
        let tipo = form_registrate
            .obtener_contrasena()
            .getAttribute("type");
        if (tipo === "password") {
            form_registrate.obtener_contrasena().setAttribute("type", "text");
            evento.currentTarget.innerHTML = "Ocultar";
        }
        else {
            form_registrate.obtener_contrasena().setAttribute("type", "password");
            evento.currentTarget.innerHTML = "Mostrar";
        }
    });
}
exports.eventos_crear_cuenta = eventos_crear_cuenta;
function evento_vista() {
    vista.obtener_btn_vista_1().addEventListener("click", (evento) => {
        evento.preventDefault();
        let empresa = form_registrate.obtener_empresa();
        let ruc = form_registrate.obtener_ruc();
        form_registrate.establecer_texto(empresa, persona.obtener_empresa());
        form_registrate.establecer_texto(ruc, persona.obtener_ruc());
        vista.desactivar_vista(0);
        contenedor.activar_contenedor_x(0);
    });
    vista.obtener_btn_vista_2().addEventListener("click", (evento) => {
        evento.preventDefault();
        let direccion = form_registrate.obtener_direccion();
        let telefono_local = form_registrate.obtener_telefono_local();
        form_registrate.establecer_texto(direccion, persona.obtener_direccion());
        form_registrate.establecer_texto(telefono_local, persona.obtener_telefono_local());
        vista.desactivar_vista(1);
        contenedor.activar_contenedor_x(1);
    });
    vista.obtener_btn_vista_3().addEventListener("click", (evento) => {
        evento.preventDefault();
        let telefono = form_registrate.obtener_telefono();
        let correo = form_registrate.obtener_correo();
        form_registrate.establecer_texto(telefono, persona.obtener_telefono());
        form_registrate.establecer_texto(correo, persona.obtener_correo());
        vista.desactivar_vista(2);
        contenedor.activar_contenedor_x(2);
    });
    vista.obtener_btn_vista_4().addEventListener("click", (evento) => {
        evento.preventDefault();
        let usuario = form_registrate.obtener_usuario();
        let contrasena = form_registrate.obtener_contrasena();
        form_registrate.establecer_texto(usuario, persona.obtener_usuario());
        form_registrate.establecer_texto(contrasena, persona.obtener_contrasena());
        vista.desactivar_vista(3);
        contenedor.activar_contenedor_x(3);
    });
}
exports.evento_vista = evento_vista;


/***/ }),

/***/ 6017:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validacion_4 = exports.validacion_3 = exports.validacion_2 = exports.validacion_1 = void 0;
const Boton_1 = __webpack_require__(3754);
const Contenedores_1 = __webpack_require__(2127);
const Ids_1 = __webpack_require__(828);
let boton = Boton_1.Boton.obtener_objeto();
let contenedor = Contenedores_1.Contenedores.obtener_objeto();
let ids = new Ids_1.Ids();
function validacion_1() {
    boton.estado_btn_1();
    boton.obtener_btn_1().addEventListener("click", (evento) => {
        evento.preventDefault();
        boton.activar_vista(boton.obtener_btn_vista_2());
        contenedor.activar_contenedor(ids.contenedor_2);
    });
}
exports.validacion_1 = validacion_1;
function validacion_2() {
    boton.estado_btn_2();
    boton.obtener_btn_2().addEventListener("click", (evento) => {
        evento.preventDefault();
        boton.activar_vista(boton.obtener_btn_vista_3());
        contenedor.activar_contenedor(ids.contenedor_3);
    });
}
exports.validacion_2 = validacion_2;
function validacion_3() {
    boton.estado_btn_3();
    boton.obtener_btn_3().addEventListener("click", (evento) => {
        evento.preventDefault();
        boton.activar_vista(boton.obtener_btn_vista_4());
        contenedor.activar_contenedor(ids.contenedor_4);
    });
}
exports.validacion_3 = validacion_3;
function validacion_4() {
    boton.estado_btn_4();
    boton.obtener_btn_4().addEventListener("click", (evento) => {
        evento.preventDefault();
        console.log("DATOS LISTO PARA ENVIAR");
    });
}
exports.validacion_4 = validacion_4;


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
const eventos_1 = __webpack_require__(3518);
window.addEventListener("load", () => {
    (0, eventos_1.eventos_crear_cuenta)();
    (0, eventos_1.evento_vista)();
});

}();
/******/ })()
;