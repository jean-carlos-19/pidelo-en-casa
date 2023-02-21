import { Boton } from "./Boton";
import { Contenedores } from "./Contenedores";
import { Ids } from "./Ids";

let boton: Boton = Boton.obtener_objeto();
let contenedor: Contenedores = Contenedores.obtener_objeto();
let ids: Ids = new Ids();

function validacion_1() {
  boton.estado_btn_1();

  boton.obtener_btn_1().addEventListener("click", (evento: Event) => {
    evento.preventDefault();

    boton.activar_vista(boton.obtener_btn_vista_2());
    contenedor.activar_contenedor(ids.contenedor_2);
  });
}

function validacion_2() {
  boton.estado_btn_2();

  boton.obtener_btn_2().addEventListener("click", (evento: Event) => {
    evento.preventDefault();
    boton.activar_vista(boton.obtener_btn_vista_3());
    contenedor.activar_contenedor(ids.contenedor_3);
  });
}

function validacion_3() {
  boton.estado_btn_3();

  boton.obtener_btn_3().addEventListener("click", (evento: Event) => {
    evento.preventDefault();
    boton.activar_vista(boton.obtener_btn_vista_4());
    contenedor.activar_contenedor(ids.contenedor_4);
  });
}

function validacion_4() {
  boton.estado_btn_4();

  boton.obtener_btn_4().addEventListener("click", (evento: Event) => {
    evento.preventDefault();
    console.log("DATOS LISTO PARA ENVIAR");
  });
}

export { validacion_1, validacion_2, validacion_3, validacion_4 };
