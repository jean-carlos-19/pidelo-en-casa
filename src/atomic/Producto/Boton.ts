import { Ids } from "./Ids";

class Boton {
  private ids: Ids = new Ids();
  private static boton: Boton = null;
  private btn_subir: HTMLElement;
  private btn_enviar: any = null;
  private btn_estilo_activado: string = "btn-enviar";
  private btn_estilo_desactivado: string = "btn-enviar__desabilitado";

  private constructor() {
    this.btn_enviar = document.getElementById(this.ids.btn_enviar);
    this.btn_subir = document.getElementById(this.ids.btn_subir);
  }

  public static obtener_objeto() {
    if (this.boton === null) this.boton = new Boton();

    return this.boton;
  }

  public activar_boton(): void {
    this.btn_enviar.disabled = false;
    this.btn_enviar.removeAttribute("class");
    this.btn_enviar.setAttribute("class", this.btn_estilo_activado);
  }

  public desactivar_boton(): void {
    this.btn_enviar.disabled = true;
    this.btn_enviar.removeAttribute("class");
    this.btn_enviar.setAttribute(
      "class",
      `${this.btn_estilo_activado} ${this.btn_estilo_desactivado}`,
    );
  }

  public obtener_btn_enviar(): HTMLElement {
    return this.btn_enviar;
  }

  public obtener_btn_subir(): HTMLElement {
    return this.btn_subir;
  }
}
export { Boton };
