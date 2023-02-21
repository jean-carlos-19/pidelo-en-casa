import { Ids } from "./Ids";

class Contenedores {
  private static contenedor: Contenedores = null;
  private contenedores: HTMLElement[] = null;
  private activar: string = "entradas entradas-formulario";
  private desactivar: string =
    "entradas entradas-4 entradas__ocultar entradas-formulario";
  private ids: Ids = new Ids();

  private constructor() {
    this.contenedores = [
      document.getElementById(this.ids.contenedor_1),
      document.getElementById(this.ids.contenedor_2),
      document.getElementById(this.ids.contenedor_3),
      document.getElementById(this.ids.contenedor_4),
    ];
  }

  public static obtener_objeto(): Contenedores {
    if (this.contenedor === null) this.contenedor = new Contenedores();

    return this.contenedor;
  }

  public obtener_contenedor_1(): HTMLElement {
    return this.contenedores[0];
  }

  public obtener_contenedor_2(): HTMLElement {
    return this.contenedores[1];
  }

  public obtener_contenedor_3(): HTMLElement {
    return this.contenedores[2];
  }

  public obtener_contenedor_4(): HTMLElement {
    return this.contenedores[3];
  }

  public activar_contenedor(valor: string) {
    this.contenedores.forEach((contenedor: HTMLElement) => {
      let class_html = contenedor.getAttribute("id");

      if (class_html === valor) contenedor.setAttribute("class", this.activar);
      else contenedor.setAttribute("class", this.desactivar);
    });
  }

  public activar_contenedor_x(posicion: number): void {
    this.contenedores.forEach((contenedor: HTMLElement, i: number) => {
      if (posicion === i) contenedor.setAttribute("class", this.activar);
      else contenedor.setAttribute("class", this.desactivar);
    });
  }
}
export { Contenedores };
