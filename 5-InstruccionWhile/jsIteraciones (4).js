function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");
	while (numero < 0 || numero > 10)
	// while (!(numero > 0 && numero < 10) )

	{

		var numero = prompt("Error, ingrese un número entre 0 y 10 nuevamente.");
	}

	document.getElementById("Numero").value	= numero;
}
