import { Ids } from "./Ids";

class Producto {
  private ids: Ids = new Ids();
  private productos: HTMLElement[];
  private static producto: Producto = null;

  private constructor() {
    this.productos = [
      document.getElementById(this.ids.productos[0]),
      document.getElementById(this.ids.productos[1]),
      document.getElementById(this.ids.productos[2]),
      document.getElementById(this.ids.productos[3]),
    ];
  }

  public static obtener_objeto(): Producto {
    if (this.producto === null) this.producto = new Producto();

    return this.producto;
  }

  public obtener_productos(): HTMLElement[] {
    return this.productos;
  }
}
export { Producto };
