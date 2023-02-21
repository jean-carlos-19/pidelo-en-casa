import { Ids } from "./Ids";

class Registrate {
  private empresa: HTMLElement = null;
  private ruc: HTMLElement = null;
  private direccion: HTMLElement = null;
  private telefono_local: HTMLElement = null;
  private telefono: HTMLElement = null;
  private correo: HTMLElement = null;
  private usuario: HTMLElement = null;
  private contrasena: HTMLElement = null;
  private static registrate: Registrate = null;
  private ids: Ids = new Ids();
  private btn_mostrar_contrasena: HTMLElement;

  private constructor() {
    this.empresa = document.getElementById(this.ids.empresa);
    this.ruc = document.getElementById(this.ids.ruc);
    this.direccion = document.getElementById(this.ids.direccion);
    this.telefono_local = document.getElementById(this.ids.telefono_local);
    this.telefono = document.getElementById(this.ids.telefono);
    this.correo = document.getElementById(this.ids.correo);
    this.usuario = document.getElementById(this.ids.usuario);
    this.contrasena = document.getElementById(this.ids.contrasena);
    this.btn_mostrar_contrasena = document.getElementById(
      this.ids.btn_mostrar_contrasena,
    );
  }

  public static obtener_objeto(): Registrate {
    if (this.registrate === null) this.registrate = new Registrate();
    return this.registrate;
  }

  public obtener_empresa(): HTMLElement {
    return this.empresa;
  }

  public obtener_ruc(): HTMLElement {
    return this.ruc;
  }

  public obtener_direccion(): HTMLElement {
    return this.direccion;
  }

  public obtener_telefono_local(): HTMLElement {
    return this.telefono_local;
  }

  public obtener_telefono(): HTMLElement {
    return this.telefono;
  }

  public obtener_correo(): HTMLElement {
    return this.correo;
  }

  public obtener_usuario(): HTMLElement {
    return this.usuario;
  }

  public obtener_contrasena(): HTMLElement {
    return this.contrasena;
  }

  public obtener_mostrar_contransena(): HTMLElement {
    return this.btn_mostrar_contrasena;
  }

  public establecer_texto(entrada: HTMLElement, valor: string): void {
    entrada.innerHTML = valor;
  }
}

export { Registrate };
