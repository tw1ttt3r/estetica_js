const estetica = new Estetica("Pedritos");

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
    if (resultado.status === "error") {}
}

function registraUsuario() {}

function procesaFormulario(id, formulario) {
    switch(id) {
        case "login":
            const user = formulario.get("user")
            const pass = formulario.get("pass")
            login(user, pass)
            break;
        case "registro":
            const user1 = formulario.get("user")
            const pass1 = formulario.get("pass")
            const email = formulario.get("email")
            const type = formulario.get("type")
            console.log(user1, pass1, email, type)
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

document.querySelector("#regitrar").addEventListener("click", () => {
    habilitaSeccion("registro")
});

document.querySelector("#regresarLogin").addEventListener("click", () => {
    habilitaSeccion("login")
});