const cantidad = 1000;

function validar() {
  var error = false;
  var mensajeError = "";
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regexTelefono = /^[0-9]{4}[-]{1}[0-9]{4}$/;

  if (document.getElementById("form-nombre").value == "") {
    error = true;
    mensajeError += "<p>El campo Nombre y Apellido no puede estar vacío</p>";
  }

  if (document.getElementById("email").value == "") {
    error = true;
    mensajeError += "<p>El campo Email no puede estar vacio</p>";
  } else if (!regexEmail.test(document.getElementById("email").value)) {
    error = true;
    mensajeError += "<p>El email ingresado es invalido</p>";
  }

  if (document.getElementById("telefono").value != "" && !regexTelefono.test(document.getElementById("telefono").value)) {
    error = true;
    mensajeError += "<p>El telefono ingresado es invalido</p>";
  }

  if ((error)) {
    document.getElementById("mensaje-nombre").innerHTML = mensajeError;
    return false;
  } else {
    document.getElementById("mensaje-nombre").innerHTML = "<p>El formulario fue completado correctamente.";
    return false;
  }

}

function contadorCaracteres() {
  var caracteres = document.getElementById("consulta").value.length;
  var restantes = cantidad - caracteres;
  document.getElementById("caracteres").innerHTML = "<p>Caracteres restantes: " + restantes + " / 1000</p>";
}
