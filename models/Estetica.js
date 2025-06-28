class Estetica {
    constructor(name) {
        this.name = name;
        this.mascotas = [];
        this.duenos = [];
        this.usuarios = [];
    }

    login(usuario, contrasena) {
        if (this.usuarios.length === 0) {
            return { status: "error", msg: "No existen usuario registrados" }
        }

        const existe = this.usuarios.filter((u) => u.usuario === usuario && u.contrasena === contrasena)

        if (existe.length === 1) {
            return { status: "success", login: true }
        } else {
            if (this.usuarios.length === 0) {
                return { status: "error", msg: "No existen usuario registrados" }
            }
            
            return { status: "error", msg: "Existen usuarios duplicados" }
        }
    }

    registrarUsuarios() {}

    registrarMascotas() {}

    registrarDuenos() {}

    obtenerMascotas() {}

    obtenerDuenos() {}

    obtenerUsuario() {}
}