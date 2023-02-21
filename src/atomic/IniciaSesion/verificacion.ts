import { Usuario } from "./Usuario";

class Verificacion {
  private static verificacion: Verificacion = null;
  private usuario: Usuario = Usuario.obtener_objeto();

  private constructor() {}

  public static obtener_objeto(): Verificacion {
    if (this.verificacion === null) this.verificacion = new Verificacion();
    return this.verificacion;
  }

  public validacion_usuario(): boolean {
    let val_usuario: string = this.usuario.obtenter_usuario();
    return val_usuario.length > 0;
  }

  public validacion_contrasena(): boolean {
    let val_contrasena: string = this.usuario.obtener_contrasena();
    return val_contrasena.length > 0;
  }

  public validacion(): boolean {
    let val_usuario: string = this.usuario.obtenter_usuario();
    let val_contrasena: string = this.usuario.obtener_contrasena();
    return val_usuario.length > 0 && val_contrasena.length > 0;
  }
}

export { Verificacion };
