import { Ids } from "./Ids";

class Producto {
  private campo_nombre: HTMLElement;
  private campo_costo: HTMLElement;
  private campo_descripcion: HTMLElement;
  private campo_imagenes: HTMLElement;
  private label_imagen: HTMLElement;
  private static producto: Producto = null;
  private ids: Ids = new Ids();

  private constructor() {
    this.campo_nombre = document.getElementById(this.ids.nombre);
    this.campo_costo = document.getElementById(this.ids.costo);
    this.campo_descripcion = document.getElementById(this.ids.descripcion);
    this.campo_imagenes = document.getElementById(this.ids.imagenes);
    this.label_imagen = document.getElementById(this.ids.label_imagen);
  }

  public static obtener_objeto(): Producto {
    if (this.producto === null) this.producto = new Producto();
    return this.producto;
  }

  public obtener_nombre(): HTMLElement {
    return this.campo_nombre;
  }

  public obtener_costo(): HTMLElement {
    return this.campo_costo;
  }

  public obtener_descripcion(): HTMLElement {
    return this.campo_descripcion;
  }

  public obtener_imagenes(): HTMLElement {
    return this.campo_imagenes;
  }

  public obtener_label_imagen(): HTMLElement {
    return this.label_imagen;
  }

  public establecer_informacion_imagen(valor: string): void {
    this.label_imagen.innerHTML = valor;
  }
}

export { Producto };
