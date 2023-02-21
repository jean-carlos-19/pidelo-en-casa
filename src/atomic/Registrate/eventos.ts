import { Persona } from "./Persona";
import { Registrate } from "./Registrate";
import { Verificacion } from "./Verificacion";
import {
  validacion_1,
  validacion_2,
  validacion_3,
  validacion_4,
} from "./validacion";
import { Boton } from "./Boton";
import { Contenedores } from "./Contenedores";

let form_registrate: Registrate = Registrate.obtener_objeto();
let persona: Persona = Persona.obtener_objeto();
let verificacion: Verificacion = Verificacion.obtener_objeto();
let vista: Boton = Boton.obtener_objeto();
let contenedor: Contenedores = Contenedores.obtener_objeto();

function eventos_crear_cuenta() {
  /* Parte 1 */

  form_registrate
    .obtener_empresa()
    .addEventListener("change", (evento: any) => {
      let valor: string = evento.currentTarget.value;
      persona.establecer_empresa(valor);

      let resultado: boolean = verificacion.verificar_empresa();
      if (!resultado) persona.establecer_empresa("");
      validacion_1();
    });

  form_registrate.obtener_ruc().addEventListener("change", (evento: any) => {
    let valor = evento.currentTarget.value;
    persona.establecer_ruc(valor);

    let resultado: boolean = verificacion.verificar_ruc();
    if (!resultado) persona.establecer_ruc("");
    validacion_1();
  });

  /* Parte 2 */
  form_registrate
    .obtener_direccion()
    .addEventListener("change", (evento: any) => {
      let valor = evento.currentTarget.value;
      persona.establecer_direccion(valor);

      let resultado: boolean = verificacion.verificar_direccion();
      if (!resultado) persona.establecer_direccion("");
      validacion_2();
    });

  form_registrate
    .obtener_telefono_local()
    .addEventListener("change", (evento: any) => {
      let valor = evento.currentTarget.value;
      persona.establecer_telefono_local(valor);

      let resultado: boolean = verificacion.verificar_telefono_local();
      if (!resultado) persona.establecer_telefono_local("");
      validacion_2();
    });

  /* Parte 3 */
  form_registrate
    .obtener_telefono()
    .addEventListener("change", (evento: any) => {
      let valor = evento.currentTarget.value;
      persona.establecer_telefono(valor);

      let resultado: boolean = verificacion.verificar_telefono();
      if (!resultado) persona.establecer_telefono("");
      validacion_3();
    });

  form_registrate.obtener_correo().addEventListener("change", (evento: any) => {
    let valor = evento.currentTarget.value;
    persona.establecer_correo(valor);

    let resultado: boolean = verificacion.verificar_correo();
    if (!resultado) persona.establecer_correo("");
    validacion_3();
  });

  /* Parte 4 */

  form_registrate
    .obtener_usuario()
    .addEventListener("change", (evento: any) => {
      let valor = evento.currentTarget.value;
      persona.establecer_usuario(valor);

      let resultado: boolean = verificacion.verificar_usuario();
      if (!resultado) persona.establecer_usuario("");
      validacion_4();
    });

  form_registrate
    .obtener_contrasena()
    .addEventListener("change", (evento: any) => {
      let valor = evento.currentTarget.value;
      persona.establecer_contrasena(valor);

      let resultado: boolean = verificacion.verificar_contrasena();
      if (!resultado) persona.establecer_contrasena("");
      validacion_4();
    });

  form_registrate
    .obtener_mostrar_contransena()
    .addEventListener("click", (evento: any) => {
      evento.preventDefault();

      let tipo: string = form_registrate
        .obtener_contrasena()
        .getAttribute("type");

      if (tipo === "password") {
        form_registrate.obtener_contrasena().setAttribute("type", "text");
        evento.currentTarget.innerHTML = "Ocultar";
      } else {
        form_registrate.obtener_contrasena().setAttribute("type", "password");
        evento.currentTarget.innerHTML = "Mostrar";
      }
    });
}

function evento_vista() {
  vista.obtener_btn_vista_1().addEventListener("click", (evento: Event) => {
    evento.preventDefault();

    let empresa: HTMLElement = form_registrate.obtener_empresa();
    let ruc: HTMLElement = form_registrate.obtener_ruc();

    form_registrate.establecer_texto(empresa, persona.obtener_empresa());
    form_registrate.establecer_texto(ruc, persona.obtener_ruc());
    vista.desactivar_vista(0);
    contenedor.activar_contenedor_x(0);
  });

  vista.obtener_btn_vista_2().addEventListener("click", (evento: Event) => {
    evento.preventDefault();

    let direccion: HTMLElement = form_registrate.obtener_direccion();
    let telefono_local: HTMLElement = form_registrate.obtener_telefono_local();

    form_registrate.establecer_texto(direccion, persona.obtener_direccion());
    form_registrate.establecer_texto(
      telefono_local,
      persona.obtener_telefono_local(),
    );
    vista.desactivar_vista(1);
    contenedor.activar_contenedor_x(1);
  });

  vista.obtener_btn_vista_3().addEventListener("click", (evento: Event) => {
    evento.preventDefault();

    let telefono: HTMLElement = form_registrate.obtener_telefono();
    let correo: HTMLElement = form_registrate.obtener_correo();

    form_registrate.establecer_texto(telefono, persona.obtener_telefono());
    form_registrate.establecer_texto(correo, persona.obtener_correo());
    vista.desactivar_vista(2);
    contenedor.activar_contenedor_x(2);
  });

  vista.obtener_btn_vista_4().addEventListener("click", (evento: Event) => {
    evento.preventDefault();
    let usuario: HTMLElement = form_registrate.obtener_usuario();
    let contrasena: HTMLElement = form_registrate.obtener_contrasena();

    form_registrate.establecer_texto(usuario, persona.obtener_usuario());
    form_registrate.establecer_texto(contrasena, persona.obtener_contrasena());
    vista.desactivar_vista(3);
    contenedor.activar_contenedor_x(3);
  });
}
export { eventos_crear_cuenta, evento_vista };
