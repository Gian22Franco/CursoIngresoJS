function mostrar()
{
// declarar variables
	
	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	
	do {
		numero = parseInt(prompt("Ingrese un numero"));
			while( isNaN(numero)){
				alert("No es un numero valido");
			numero=parseInt(prompt("ingrese un numero"));
			}


			if(contador == 0) {
				maximo=numero;
				minimo=numero;

			}

			if(numero>maximo){
				maximo = numero;
			}

			if(numero<minimo){
				minimo= numero;
			}

			contador ++;

			respuesta = prompt("Quiere ingresar otro número?");

	}while (respuesta == "s" )

	

document.getElementById("maximo").value =maximo;
document.getElementById("minimo").value =minimo;

}//FIN DE LA FUNCIÓN