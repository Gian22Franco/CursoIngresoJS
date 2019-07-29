function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;


	var respuesta;


	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			alert("Lo ingresado no es correcto");
			numero = parseInt(promp("Ingrese un número nuevamente:"));

		}

		if (numero < 0) {

			negativo = negativo * numero;
			contador++;

		} else {
			positivo = positivo + numero;
		}

		respuesta = prompt("Quiere ingresar otro número?");
	} while (respuesta == 's')


	document.getElementById('suma').value = positivo;
	if (contador == 0) {
		negativo = 0
	}
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN