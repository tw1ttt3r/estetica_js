let estetica = validaStorage();

function habilitaSeccion(seccion) {
    document.querySelectorAll(".container").forEach((s) => {
        s.classList.remove("containeron")
        s.classList.add("containeroff")
        if (s.classList.contains(seccion)) {
            s.classList.remove("containeroff")
            s.classList.add("containeron")
        }
    });
    document.querySelectorAll("form").forEach((f) => f.reset());
}

function login(usuario, contrasena) {
    const resultado = estetica.login(usuario, contrasena)
    console.log(resultado)
    if (resultado.status === "error") {
        alert(resultado.msg);
    }

    preIniciaSession(resultado.usuario);
}

function registraUsuario(name, usuario, contrasena, email, type) {
    const resultado = estetica.registrarUsuarios(name, usuario, contrasena, email, type);
    if (resultado.status === "error") {
        alert(resultado.msg);
    }
    preIniciaSession(resultado.usuario);
}

function preIniciaSession(usuario) {
    iniciaSesion(usuario)
    
    document.getElementsByTagName("header")[0].style.display = "flex";
    document.querySelector("header > nav > ul > li:nth-child(1) > p").textContent = `Sesion: ${usuario.getUsuario()}` 
    habilitaSeccion("session");
}


function procesaFormulario(id, formulario) {
    switch(id) {
        case "login":
            const user = formulario.get("user")
            const pass = formulario.get("pass")
            if (!user || !pass) {
                alert("faltan datos")
                return
            }
            login(user, pass)
            break;
        case "registro":
            const name = formulario.get("name")
            const user1 = formulario.get("user")
            const pass1 = formulario.get("pass")
            const email = formulario.get("email")
            const type = formulario.get("type")
            if (!name || !user1 || !pass1 || !email || type === "") {
                alert("faltan datos")
                return
            }
            registraUsuario(name, user1, pass1, email, type)
            break;
        default:
            throw Error("Formulario no identificado");
    }
}

// Desactivar el submit de todos los forms
document.querySelectorAll("form").forEach((f) => f.addEventListener("submit", (event) => {
    event.preventDefault();
    const formulario = new FormData(event.target);
    const form = event.target.id;
    procesaFormulario(form, formulario);
}));

document.querySelector("#registrar").addEventListener("click", (e) => {
    e.preventDefault();
    habilitaSeccion("registro")
});

document.querySelector("#regresarLogin").addEventListener("click", (e) => {
    e.preventDefault();
    habilitaSeccion("login")
});

document.querySelector("#closesession").addEventListener("click", (e) => {
    e.preventDefault();
    cierraSesion();
    document.getElementsByTagName("header")[0].style.display = "none";
    habilitaSeccion("login")
});

document.querySelector("#saveStorage").addEventListener("click", (e) => {
    e.preventDefault();
    saveStorage(estetica.getConfig());
});