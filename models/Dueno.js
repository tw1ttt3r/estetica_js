class Dueno extends Usuario {
    constructor(id, name, usuario, contrasena, correo, tipo) {
        super(id, usuario, contrasena, correo, tipo);
       this.id = id;
       this.name = name;
       this.status = true;
       this.mascotas = [];
    }

    cambiarName() {}

    cambiarStatus() {}

    registarMascota() {}

    cambiarStatusMascota() {}
}