import { Ids } from "./Ids";

class Boton {
  private btn_usuario: HTMLElement;
  private static boton: Boton = null;
  private ids: Ids = new Ids();
  private contenedor: HTMLElement;
  private usuario_visualizar: string = "cerrar-sesion";
  private usuario_ocultar: string = "cerrar-sesion cerrar-sesion__ocultar";

  private constructor() {
    this.contenedor = document.getElementById(this.ids.cerrar_sesion);
    this.btn_usuario = document.getElementById(this.ids.usuario);
  }

  public static obtener_objeto(): Boton {
    if (this.boton === null) this.boton = new Boton();
    return this.boton;
  }

  public obtener_boton(): HTMLElement {
    return this.btn_usuario;
  }

  public visualizar(): void {
    this.contenedor.removeAttribute("class");
    this.contenedor.setAttribute("class", this.usuario_visualizar);
  }

  public ocultar(): void {
    this.contenedor.removeAttribute("class");
    this.contenedor.setAttribute("class", this.usuario_ocultar);
  }
}
export { Boton };
