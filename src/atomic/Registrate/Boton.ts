import { Ids } from "./Ids";
import { Verificacion } from "./Verificacion";

class Boton {
  private btn_enviar_1: HTMLElement = null;
  private btn_enviar_2: HTMLElement = null;
  private btn_enviar_3: HTMLElement = null;
  private btn_enviar_4: HTMLElement = null;
  private btn_vistas: HTMLElement[] = null;
  private btn_estilo_activado: string = "btn-enviar";
  private btn_estilo_desactivado: string = "btn-enviar__desabilitado";
  private btn_vista_activado: string = "item";
  private btn_vista_desactivado: string = "item item__desactivado";
  private vefificion: Verificacion = Verificacion.obtener_objeto();
  public static boton: Boton = null;
  private ids: Ids = new Ids();

  private constructor() {
    this.btn_enviar_1 = document.getElementById(this.ids.btn_1);
    this.btn_enviar_2 = document.getElementById(this.ids.btn_2);
    this.btn_enviar_3 = document.getElementById(this.ids.btn_3);
    this.btn_enviar_4 = document.getElementById(this.ids.btn_4);

    this.btn_vistas = [
      document.getElementById(this.ids.btn_vista_1),
      document.getElementById(this.ids.btn_vista_2),
      document.getElementById(this.ids.btn_vista_3),
      document.getElementById(this.ids.btn_vista_4),
    ];
  }

  public static obtener_objeto(): Boton {
    if (this.boton === null) this.boton = new Boton();
    return this.boton;
  }

  public obtener_btn_1(): HTMLElement {
    return this.btn_enviar_1;
  }

  public obtener_btn_2(): HTMLElement {
    return this.btn_enviar_2;
  }

  public obtener_btn_3(): HTMLElement {
    return this.btn_enviar_3;
  }

  public obtener_btn_4(): HTMLElement {
    return this.btn_enviar_4;
  }

  public obtener_btn_vista_1(): HTMLElement {
    return this.btn_vistas[0];
  }

  public obtener_btn_vista_2(): HTMLElement {
    return this.btn_vistas[1];
  }

  public obtener_btn_vista_3(): HTMLElement {
    return this.btn_vistas[2];
  }

  public obtener_btn_vista_4(): HTMLElement {
    return this.btn_vistas[3];
  }

  public estado_btn_1(): void {
    let resultado: boolean = this.vefificion.verificacion_1();
    if (resultado) this.activar_boton(this.btn_enviar_1);
    else this.desactivar_boton(this.btn_enviar_1);
  }

  public estado_btn_2(): void {
    let resultado: boolean = this.vefificion.verificacion_2();
    if (resultado) this.activar_boton(this.btn_enviar_2);
    else this.desactivar_boton(this.btn_enviar_2);
  }

  public estado_btn_3(): void {
    let resultado: boolean = this.vefificion.verificacion_3();
    if (resultado) this.activar_boton(this.btn_enviar_3);
    else this.desactivar_boton(this.btn_enviar_3);
  }

  public estado_btn_4(): void {
    let resultado: boolean = this.vefificion.verificacion_4();
    if (resultado) this.activar_boton(this.btn_enviar_4);
    else this.desactivar_boton(this.btn_enviar_4);
  }

  private activar_boton(boton: any): void {
    boton.disabled = false;
    boton.removeAttribute("class");
    boton.setAttribute("class", this.btn_estilo_activado);
  }

  private desactivar_boton(boton: any): void {
    boton.disabled = true;
    boton.removeAttribute("class");
    boton.setAttribute(
      "class",
      `${this.btn_estilo_activado} ${this.btn_estilo_desactivado}`,
    );
  }

  public activar_vista(boton: any) {
    boton.disabled = false;
    boton.removeAttribute("class");
    boton.setAttribute("class", this.btn_vista_activado);
  }
  public desactivar_vista(posicion: number) {
    this.btn_vistas.forEach((vista: any, i: number) => {
      if (i > posicion) {
        vista.disabled = true;
        vista.removeAttribute("class");
        vista.setAttribute("class", this.btn_vista_desactivado);
      }
    });
  }
}

export { Boton };
