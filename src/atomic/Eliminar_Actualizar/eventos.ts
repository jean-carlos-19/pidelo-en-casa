import { Boton } from "../Modal/Boton";
import { Modal } from "../Modal/Modal";
import { Producto } from "./Producto";

let modal: Modal = Modal.obtener_objetos();
let boton: Boton = Boton.obtener_objeto();

function eventos_eliminar_actualizar() {
  let producto: Producto = Producto.obtener_objeto();

  let productos: HTMLElement[] = producto.obtener_productos();

  productos.forEach((producto: HTMLElement) => {
    producto.addEventListener("click", () => {
      modal.visualizar();
    });
  });

  boton.obtener_boton().addEventListener("click", () => {
    modal.ocultar();
  });
}
export { eventos_eliminar_actualizar };
