function mostrar()
{


//     Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
// a) La cantidad de números pares. 
// b) La cantidad de números impares. 
// c) La cantidad de ceros. 
// d) El promedio de todos los números positivos ingresados. 
// e) La suma de todos los números negativos. 
// f) El número y la letra del máximo y el mínimo.

    var letra;
    var numero;
    var seguir;
    var contador=0;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumulador=0;
    var promedio;
    var acumuladorNegativo=0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;


    do{

        letra=prompt("Ingrese una letra");

        numero=parseInt(prompt("Ingrese un numero: "));
        while(isNaN(numero) || numero < -100 || numero > 100){
            numero=parseInt(prompt("Ingrese nuevamente un numero:"));
        }

        if (numero % 2== 0){
            contadorPares ++;
        }

        if(numero % 2 != 0){
            contadorImpares ++;
        }

        if (numero==0){
            contadorCeros ++;
        }

        if(numero >= 0){
            acumulador= acumulador + numero;
            contadorPositivos ++;
        
        }

        if (numero < 0){
            acumuladorNegativo=acumuladorNegativo+numero;

        }

        if (contador==0){
            letraMin=letra;
            minimo=numero;
            letraMax=letra;
            maximo=numero;
        }

        if(numero < minimo){
            letraMin=letra;
            minimo=numero;
        }

        if(numero > maximo){
            letraMax=letra;
            maximo=numero;
        }

        
        
        

       contador ++;



        seguir= prompt("Quiere ingresar nuevos datos?");
    }while(seguir == 's');
    promedio= acumulador / contadorPositivos;
    
    document.write("La cantidad de numeros pares es " + contadorPares + "<br>");
    document.write("La cantidad de numeros impares es " + contadorImpares + "<br>");
    document.write("La cantidad de numeros cero es " + contadorCeros + "<br>");
    document.write("El promedio de los positivos es " + promedio + "<br>");
    document.write("La suma de los numeros negativos es " + acumuladorNegativo + "<br>");
    document.write("El numero y la letra del maximo es " + maximo +", "+ letraMax +  "<br>");
    document.write("El numero y la letra del minimo es " + minimo +", "+ letraMin + "<br>");
}
