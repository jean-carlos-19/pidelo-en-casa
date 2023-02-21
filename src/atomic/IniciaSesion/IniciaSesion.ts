import { Ids } from "./Ids";

class IniciaSesion {
  private ids: Ids = new Ids();
  private btn_mostrar_contrasena: HTMLElement = null;
  private campo_contrasena: HTMLElement = null;
  private compo_usuario: HTMLElement = null;
  private static form_inicia_sesion: IniciaSesion = null;

  private constructor() {
    this.compo_usuario = document.getElementById(this.ids.compo_usuario);
    this.campo_contrasena = document.getElementById(this.ids.campo_contrasena);
    this.btn_mostrar_contrasena = document.getElementById(
      this.ids.btn_mostrar_contrasena,
    );
  }

  public static obtener_objeto(): IniciaSesion {
    if (this.form_inicia_sesion === null)
      this.form_inicia_sesion = new IniciaSesion();

    return this.form_inicia_sesion;
  }

  public obtener_usuario(): HTMLElement {
    return this.compo_usuario;
  }

  public obtener_contrasena(): HTMLElement {
    return this.campo_contrasena;
  }

  public obtener_mostrar_contransena(): HTMLElement {
    return this.btn_mostrar_contrasena;
  }
}

export { IniciaSesion };
