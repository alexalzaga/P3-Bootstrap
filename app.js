function hasValue(input) {
	if (input.value.trim() === "") {
		return false;
	}
	return true;
}

var alertPlaceholder = document.getElementById('alertaInicioSesion')

function alert(message, info, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<br>' + info + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

const form = document.querySelector("#signup");

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let userOk = hasValue(form.elements["user"]);
	let passOk = hasValue(form.elements["password"]);
	// if valid, submit the form.
	if (userOk && passOk) {
		alert('DEMO: NO SE HA ENVIADO NINGUN FORMULARIO. Inicio exitoso.', 'Usuario es: '+form.elements["user"].value+'; Contraseña es: '+form.elements["password"].value, 'success');
	} else {
		alert('DEMO: NO SE HA ENVIADO NINGUN FORMULARIO. Inicio fallido.', 'Inserte ambos campos', 'danger');
	}
})