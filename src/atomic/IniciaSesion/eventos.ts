import { IniciaSesion } from "./IniciaSesion";
import { Usuario } from "./Usuario";
import { validacion } from "./validacion";
import { Verificacion } from "./verificacion";

let form_inicia_sesion = IniciaSesion.obtener_objeto();
let usuario: Usuario = Usuario.obtener_objeto();
let verificacion: Verificacion = Verificacion.obtener_objeto();

function eventos_iniciar_sesion() {
  form_inicia_sesion
    .obtener_usuario()
    .addEventListener("change", (evento: any) => {
      let valor: string = evento.currentTarget.value;
      usuario.establecer_usuario(valor);

      let resultado: boolean = verificacion.validacion_usuario();

      if (!resultado) usuario.establecer_usuario("");
      validacion();
    });

  form_inicia_sesion
    .obtener_contrasena()
    .addEventListener("change", (evento: any) => {
      let valor: string = evento.currentTarget.value;
      usuario.establecer_contrasena(valor);

      let resultado: boolean = verificacion.validacion_contrasena();

      if (!resultado) usuario.establecer_contrasena("");
      validacion();
    });

  form_inicia_sesion
    .obtener_mostrar_contransena()
    .addEventListener("click", (evento: any) => {
      evento.preventDefault();

      let tipo: string = form_inicia_sesion
        .obtener_contrasena()
        .getAttribute("type");

      if (tipo === "password") {
        form_inicia_sesion.obtener_contrasena().setAttribute("type", "text");
        evento.currentTarget.innerHTML = "Ocultar";
      } else {
        form_inicia_sesion
          .obtener_contrasena()
          .setAttribute("type", "password");
        evento.currentTarget.innerHTML = "Mostrar";
      }
    });
}

export { eventos_iniciar_sesion };
