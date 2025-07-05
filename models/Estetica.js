class Estetica {
    constructor(name) {
        this.name = name;
        this.mascotas = [];
        this.usuarios = [];
    }

    getConfig() {
        return { name: this.name, mascotas: this.mascotas, usuarios: this.usuarios }
    }

    rebuild(data) {
        const { name, mascotas, usuarios } = JSON.parse(data); // string -> json (object)
        this.name= name;
        this.mascotas = mascotas;
        this.usuarios = usuarios.map((u) => u.tipo === "1" ? new Empleado(u.id, u.name, u.usuario, u.contrasena, u.correo, u.tipo) : new Dueno((u.id, u.name, u.usuario, u.contrasena, u.correo, u.tipo) ));
    }

    login(usuario, contrasena) {
        if (this.usuarios.length === 0) {
            return { status: "error", msg: "No existen usuario registrados" }
        }

        const existe = this.usuarios.filter((u) => u.usuario === usuario && u.contrasena === contrasena)

        if (existe.length === 1) {
            return { status: "success", login: true, usuario: existe[0] }
        } else {
            if (this.usuarios.length === 0) {
                return { status: "error", msg: "No existen usuario registrados" }
            }
            
            return { status: "error", msg: "Existen usuarios duplicados" }
        }
    }

    registrarUsuarios(name, usuario, contrasena, email, type) {
        const existe = this.usuarios.filter((u) => u.email === email);

        if (existe.length > 0) {
            return { status: "error", msg: "El correo ya está registrado" }
        }

        const data = type === 1
            ? new Empleado((this.usuarios.length + 1), name, usuario, contrasena, email, type)
            : new Dueno((this.usuarios.length + 1), name, usuario, contrasena, email, type);

        this.usuarios.push(data);

        return { status: "sucess", msg: "Usuario registrado exitosamente", usuario: data }
    }

    registrarMascotas() {}

    obtenerMascotas() {}

    obtenerDuenos() {}
    
    obtenerEmpleado() {}
    
    obtenerUsuario() {}
}