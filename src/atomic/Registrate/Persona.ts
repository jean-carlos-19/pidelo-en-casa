class Persona {
  private empresa: string = null;
  private ruc: string = null;
  private direccion: string = null;
  private telefono_local: string = null;
  private telefono: string = null;
  private correo: string = null;
  private usuario: string = null;
  private contrasena: string = null;
  private static persona: Persona = null;

  private constructor() {
    this.empresa = "";
    this.ruc = "";
    this.direccion = "";
    this.telefono_local = "";
    this.telefono = "";
    this.correo = "";
    this.usuario = "";
    this.contrasena = "";
  }

  public static obtener_objeto(): Persona {
    if (this.persona === null) this.persona = new Persona();
    return this.persona;
  }

  public establecer_empresa(valor: string): void {
    this.empresa = valor;
  }

  public establecer_ruc(valor: string): void {
    this.ruc = valor;
  }

  public establecer_direccion(valor: string): void {
    this.direccion = valor;
  }

  public establecer_telefono_local(valor: string): void {
    this.telefono_local = valor;
  }

  public establecer_telefono(valor: string): void {
    this.telefono = valor;
  }

  public establecer_correo(valor: string): void {
    this.correo = valor;
  }

  public establecer_usuario(valor: string): void {
    this.usuario = valor;
  }

  public establecer_contrasena(valor: string): void {
    this.contrasena = valor;
  }
  public obtener_empresa(): string {
    return this.empresa;
  }

  public obtener_ruc(): string {
    return this.ruc;
  }

  public obtener_direccion(): string {
    return this.direccion;
  }

  public obtener_telefono_local(): string {
    return this.telefono_local;
  }

  public obtener_telefono(): string {
    return this.telefono;
  }

  public obtener_correo(): string {
    return this.correo;
  }

  public obtener_usuario(): string {
    return this.usuario;
  }

  public obtener_contrasena(): string {
    return this.contrasena;
  }
}

export { Persona };
