function mostrar() {
    var notas;
    var sexo;
    var promedio;
    var contador = 0;
    var acumulador = 0;
    var maximo;
    var minimo;
    var sexoMinimo;
    var sexoMaximo;
    var contadorMasculino;


    while (contador < 5) {
        notas = parseInt(prompt("Ingrese la nota"));
        while (isNaN(notas) || notas < 0 || notas > 10) {
            notas = parseInt(prompt("No es una nota valida, ingrese nuevamente:"));
        }
        sexo = prompt("ingrese f para femenino y m para masculino");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Sexo no valido, ingrese nuevamente:");

        }
        acumulador = acumulador + notas;

        if (contador == 0) {
            sexoMinimo=sexo;
            minimo = notas;

        } else {

            if (notas < minimo) {
                sexoMinimo = sexo;
                minimo = notas;
            }
        }
        contador++;
    }
  
// if(sexo == " m ") && nota >= 6{
    //contadorMasculino++;
}


    promedio = acumulador / contador;
    alert("El promedio de las notas es: " + promedio);
    alert("La nota mas baja es: " + minimo + ". Esta persona es: " + sexoMinimo);

}


