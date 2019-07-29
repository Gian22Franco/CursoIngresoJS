function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';



	do {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			alert("Lo ingresado no es un numero");
			numero = parseInt(prompt("Ingrese un numero:"));
		}

		acumulador = acumulador + numero;

		contador++;

		respuesta = prompt("Quiere ingresar un número");

	} while (respuesta == 's');

	// promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN