function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;



	while (contador < 5) {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			alert("Lo ingresado no es un número");
			numero = parseInt(prompt("Ingrese un número:"));
		}

		acumulador = acumulador + numero;

		contador++;

	}

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN