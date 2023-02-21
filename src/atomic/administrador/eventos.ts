import { Boton } from "./Boton";

let boton: Boton = Boton.obtener_objeto();
let decision: boolean = true;

function eventos_administrador() {
  boton.obtener_boton().addEventListener("click", () => {
    if (decision) {
      boton.visualizar();
      decision = false;
    } else {
      boton.ocultar();
      decision = true;
    }
  });
}
export { eventos_administrador };
