function mostrar() {
    var notas;
    var sexo;
    var promedio;
    var contador = 0;
    var acumulador = 0;
    //var maximo;
    var minimo;
    var sexoMinimo;
    //var sexoMaximo;
    var contadorMasculino=0;

    // for (var i = 0; i<5; i++){ } For para repetir 5 veces.
    while (contador < 5) {
        notas = parseInt(prompt("Ingrese la nota"));
        while (isNaN(notas) || notas < 0 || notas > 10) {
            notas = parseInt(prompt("No es una nota valida, ingrese nuevamente:"));
        }
        sexo = prompt("ingrese f para femenino y m para masculino"); //.toLowerCase; para que pase todo lo ingresado a minusculas
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Sexo no valido, ingrese nuevamente:");//.toLowerCase;

            
        
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

        if (sexo == "m" &&  notas >= 6 ){
            contadorMasculino++;
        }
        
    

    }
    promedio = acumulador / contador;
    alert("El promedio de las notas es: " + promedio);
    alert("La nota mas baja es: " + minimo + ". Esta persona es: " + sexoMinimo);
    alert("La cantidad de varones que tienen 6 es: " + contadorMasculino);
}
