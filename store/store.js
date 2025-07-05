const state = {
  session: {}
}

function validaStorage() {
  const storage = localStorage.getItem("estetica");
  if (storage === undefined || storage === null) {
    console.warn("Información no localizada")
    return new Estetica("Pedritos")
  }

  const estetica = new Estetica("");

  estetica.rebuild(storage);

  return estetica;
  
}

function saveStorage(config) {
  localStorage.setItem("estetica", JSON.stringify(config));
}

function iniciaSesion(usuario) {
  state.session = {
    usuario: usuario.getUsuario(),
    id: usuario.getId()
  }
}

function cierraSesion() {
  state.session = {}
}