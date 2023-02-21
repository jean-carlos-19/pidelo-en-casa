class Materia {
  private nombre: string = "";
  private costo: string = "";
  private descripcion: string = "";
  private imagenes: string = "";
  private static producto: Materia = null;

  private constructor() {}

  public static obtener_objeto(): Materia {
    if (this.producto === null) this.producto = new Materia();
    return this.producto;
  }

  public establecer_nombre(valor: string): void {
    this.nombre = valor;
  }

  public establecer_costo(valor: string): void {
    this.costo = valor;
  }

  public establecer_descripcion(valor: string): void {
    this.descripcion = valor;
  }

  public establecer_imagenes(valor: string): void {
    this.imagenes = valor;
  }

  public obtener_nombre(): string {
    return this.nombre;
  }

  public obtener_costo(): string {
    return this.costo;
  }

  public obtener_descripcion(): string {
    return this.descripcion;
  }

  public obtener_imagenes(): string {
    return this.imagenes;
  }
}
export { Materia };
