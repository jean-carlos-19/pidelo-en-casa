import { Boton } from "./Boton";
import { Verificacion } from "./Verficacion";

let verificacion: Verificacion = Verificacion.obtener_objeto();
let boton: Boton = Boton.obtener_objeto();

function validacion() {
  let validacion: boolean = verificacion.validacion();

  if (!validacion) boton.desactivar_boton();
  else boton.activar_boton();
}
export { validacion };
