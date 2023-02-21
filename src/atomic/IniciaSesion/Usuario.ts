class Usuario {
  private usuario: string = "";
  private contrasena: string = "";
  private static usuario: Usuario = null;

  private constructor() {}

  public static obtener_objeto(): Usuario {
    if (this.usuario === null) this.usuario = new Usuario();
    return this.usuario;
  }

  public obtenter_usuario(): string {
    return this.usuario;
  }

  public obtener_contrasena(): string {
    return this.contrasena;
  }

  public establecer_usuario(valor: string): void {
    this.usuario = valor;
  }

  public establecer_contrasena(valor: string): void {
    this.contrasena = valor;
  }
}

export { Usuario };
