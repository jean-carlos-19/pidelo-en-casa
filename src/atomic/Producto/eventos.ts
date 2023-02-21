import { Materia } from "./Materia";
import { Producto } from "./Producto";
import { Verificacion } from "./Verficacion";
import { validacion } from "./validacion";
import { Boton } from "./Boton";

let form_producto: Producto = Producto.obtener_objeto();
let materia: Materia = Materia.obtener_objeto();
let verificaicon: Verificacion = Verificacion.obtener_objeto();
let boton: Boton = Boton.obtener_objeto();

function evento_producto() {
  form_producto.obtener_nombre().addEventListener("change", (evento: any) => {
    let valor: string = evento.currentTarget.value;
    materia.establecer_nombre(valor);

    let resultado: boolean = verificaicon.verificar_nombre();
    if (!resultado) materia.establecer_nombre("");
    validacion();
  });

  form_producto.obtener_costo().addEventListener("change", (evento: any) => {
    let valor: string = evento.currentTarget.value;
    materia.establecer_costo(valor);

    let resultado: boolean = verificaicon.verificar_costo();
    if (!resultado) materia.establecer_costo("");
    validacion();
  });

  form_producto
    .obtener_descripcion()
    .addEventListener("change", (evento: any) => {
      let valor: string = evento.currentTarget.value;
      materia.establecer_descripcion(valor);

      let resultado: boolean = verificaicon.verificar_descripcion();
      if (!resultado) materia.establecer_descripcion("");
      validacion();
    });

  form_producto.obtener_imagenes().addEventListener("change", (evento: any) => {
    let data: FileList = evento.currentTarget.files;
    let archivo: File = data.item(0);
    let { name } = archivo;
    form_producto.establecer_informacion_imagen(name);
    materia.establecer_imagenes(name);

    let resultado: boolean = verificaicon.verificar_imagenes();
    if (!resultado) materia.establecer_imagenes("");

    validacion();
  });

  boton.obtener_btn_enviar().addEventListener("click", (evento: Event) => {
    window.alert("Creación del producto con exito");
    evento.stopPropagation();
  });
}

export { evento_producto };
