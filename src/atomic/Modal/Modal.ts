import { Ids } from "./Ids";

class Modal {
  private ids: Ids = new Ids();
  private modal_cont: HTMLElement = null;
  private static modal: Modal = null;
  private css_modal: string = "formulario formulario-producto formulario-modal";
  private css_modal_ocultar: string =
    "formulario formulario-producto formulario-modal formulario__desactivado";

  private constructor() {
    this.modal_cont = document.getElementById(this.ids.modal);
  }

  public static obtener_objetos(): Modal {
    if (this.modal === null) this.modal = new Modal();
    return this.modal;
  }

  public obtener_modal(): HTMLElement {
    return this.modal_cont;
  }
  public visualizar(): void {
    this.modal_cont.removeAttribute("class");
    this.modal_cont.setAttribute("class", this.css_modal);
  }

  public ocultar(): void {
    this.modal_cont.removeAttribute("class");
    this.modal_cont.setAttribute("class", this.css_modal_ocultar);
  }
}
export { Modal };
