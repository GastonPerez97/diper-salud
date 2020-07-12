function validar() {
  var error = false;
  var mensajeError = "";
  var contadorSintomas = 0;

  if (document.getElementById("form-nombre").value == "") {
    error = true;
    mensajeError += "<p>El campo Nombre y Apellido no puede estar vacío</p>";
  }
  if (document.getElementById("form-dni").value == "") {
    error = true;
    mensajeError += "<p>El campo DNI no puede estar vacío</p>";
  }
  if (document.getElementById("form-telefono").value == "") {
    error = true;
    mensajeError += "<p>El campo Telefono no puede estar vacío</p>";
  }

  var opcionesFiebre = document.getElementsByName("fiebre");
  var seleccionadoFiebre = false;
  for (var i in opcionesFiebre) {
    if (opcionesFiebre[i].checked) {
      seleccionadoFiebre = true;
    }
  }
  if (opcionesFiebre[0].checked) {
    contadorSintomas++;
  }
  if (!seleccionadoFiebre) {
    error = true;
    mensajeError += "<p>Debe seleccionar una opción en la primera pregunta de Sintomas</p>";
  }

  var opcionesCabeza = document.getElementsByName("cabeza");
  var seleccionadoCabeza = false;
  for (i in opcionesCabeza) {
    if (opcionesCabeza[i].checked) {
      seleccionadoCabeza = true;
    }
  }
  if (opcionesCabeza[0].checked) {
    contadorSintomas++;
  }
  if (!seleccionadoCabeza) {
    error = true;
    mensajeError += "<p>Debe seleccionar una opción en la segunda pregunta de Sintomas</p>";
  }

  var opcionesTos = document.getElementsByName("tos");
  var seleccionadoTos = false;
  for (i in opcionesTos) {
    if (opcionesTos[i].checked) {
      seleccionadoTos = true;
    }
  }
  if (opcionesTos[0].checked) {
    contadorSintomas++;
  }
  if (!seleccionadoTos) {
    error = true;
    mensajeError += "<p>Debe seleccionar una opción en la tercera pregunta de Sintomas</p>";
  }

  var opcionesGarganta = document.getElementsByName("garganta");
  var seleccionadoGarganta = false;
  for (i in opcionesGarganta) {
    if (opcionesGarganta[i].checked) {
      seleccionadoGarganta = true;
    }
  }
  if (opcionesGarganta[0].checked) {
    contadorSintomas++;
  }
  if (!seleccionadoGarganta) {
    error = true;
    mensajeError += "<p>Debe seleccionar una opción en la cuarta pregunta de Sintomas</p>";
  }

  var opcionesRespirar = document.getElementsByName("respirar");
  var seleccionadoRespirar = false;
  for (i in opcionesRespirar) {
    if (opcionesRespirar[i].checked) {
      seleccionadoRespirar = true;
    }
  }
  if (opcionesRespirar[0].checked) {
    contadorSintomas++;
  }
  if (!seleccionadoRespirar) {
    error = true;
    mensajeError += "<p>Debe seleccionar una opción en la quinta pregunta de Sintomas</p>";
  }

  if (error) {
    document.getElementById("mensaje-nombre").innerHTML = mensajeError;
    return false;
  } else {
    document.getElementById("mensaje-nombre").innerHTML = "<p>El formulario fue completado correctamente. " + contadorSintomas.toString() + " síntomas de COVID-19 fueron registrados</p>";
    return false;
  }
}

function paisesVisitados(x) {
  if (x == 0) {
    document.getElementById("paises-visitados-fila").style.display = "none";
  } else {
    document.getElementById("paises-visitados-fila").style.display = "flex";
  }
}

function mostrarDireccion(x) {
  if (x == 0) {
    document.getElementById("direccion").style.display = "none";
    document.getElementById("ciudad-input").style.width = "44%";
  } else {
    document.getElementById("direccion").style.display = "block";
    document.getElementById("ciudad-input").style.width = "100%";
  }
}