class Usuario {
    constructor(id, usuario, contrasena, correo, tipo) {
        this.id = id;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
        this.tipo = tipo;
    }

    cambiarContrasena() {}

    cambiarCorreo() {}

    cambiarStatus() {}

    getId() {
        return this.id;
    }

    getUsuario() {
        return this.usuario;
    }
}