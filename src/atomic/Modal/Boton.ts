import { Ids } from "./Ids";

class Boton {
  private btn_omitir: HTMLElement = null;
  private ids: Ids = new Ids();
  private static boton: Boton = null;

  private constructor() {
    this.btn_omitir = document.getElementById(this.ids.btn_omitir);
  }

  public static obtener_objeto(): Boton {
    if (this.boton === null) this.boton = new Boton();
    return this.boton;
  }

  public obtener_boton(): HTMLElement {
    return this.btn_omitir;
  }
}
export { Boton };
