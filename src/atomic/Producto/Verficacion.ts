import { Materia } from "./Materia";

class Verificacion {
  private materia: Materia = Materia.obtener_objeto();
  private static verificacion: Verificacion = null;

  private constructor() {}

  public static obtener_objeto(): Verificacion {
    if (this.verificacion === null) this.verificacion = new Verificacion();
    return this.verificacion;
  }

  public verificar_nombre(): boolean {
    let valor: string = this.materia.obtener_nombre();
    return valor.length > 0;
  }

  public verificar_costo(): boolean {
    let valor: string = this.materia.obtener_costo();
    return valor.length > 0;
  }

  public verificar_descripcion(): boolean {
    let valor: string = this.materia.obtener_descripcion();
    return valor.length > 0;
  }

  public verificar_imagenes(): boolean {
    let valor: string = this.materia.obtener_imagenes();
    return valor.length > 0;
  }

  public validacion(): boolean {
    return (
      this.verificar_nombre() &&
      this.verificar_costo() &&
      this.verificar_descripcion() &&
      this.verificar_imagenes()
    );
  }
}
export { Verificacion };
