import { Persona } from "./Persona";

class Verificacion {
  private static verificacion: Verificacion = null;

  private constructor() {}

  public static obtener_objeto(): Verificacion {
    if (this.verificacion === null) this.verificacion = new Verificacion();
    return this.verificacion;
  }

  public verificar_empresa(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_empresa();
    return valor.length > 0;
  }

  public verificar_ruc(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_ruc();
    return valor.length > 0;
  }

  public verificar_direccion(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_direccion();
    return valor.length > 0;
  }

  public verificar_telefono_local(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_telefono_local();
    return valor.length > 0;
  }

  public verificar_telefono(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_telefono();
    return valor.length > 0;
  }

  public verificar_correo(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_correo();
    return valor.length > 0;
  }

  public verificar_usuario(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_usuario();
    return valor.length > 0;
  }

  public verificar_contrasena(): boolean {
    let valor: string = Persona.obtener_objeto().obtener_contrasena();
    return valor.length > 0;
  }

  public verificacion_1(): boolean {
    let empresa: string = Persona.obtener_objeto().obtener_empresa();
    let ruc: string = Persona.obtener_objeto().obtener_ruc();
    return empresa.length > 0 && ruc.length > 0;
  }

  public verificacion_2(): boolean {
    let direccion: string = Persona.obtener_objeto().obtener_direccion();
    let telefono_local: string =
      Persona.obtener_objeto().obtener_telefono_local();
    return direccion.length > 0 && telefono_local.length > 0;
  }

  public verificacion_3(): boolean {
    let telefono: string = Persona.obtener_objeto().obtener_telefono();
    let correo: string = Persona.obtener_objeto().obtener_correo();
    return telefono.length > 0 && correo.length > 0;
  }

  public verificacion_4(): boolean {
    let usuario: string = Persona.obtener_objeto().obtener_usuario();
    let contrasena: string = Persona.obtener_objeto().obtener_contrasena();
    return usuario.length > 0 && contrasena.length > 0;
  }
}

export { Verificacion };
