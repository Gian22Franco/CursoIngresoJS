function mostrar()
{
var letra;
var numero;
var seguir;
var contadorPares=0;
var contadorImpares=0;
var contadorCero=0;
var acumulador =0;
var contadorPositivos=0;
var promedio;
var acumuladorNegativos=0;
var maximo;
var minimo;
var letraMin;
var letraMax;




do{

    numero= parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (isNaN(numero) || numero < -100 || numero > 100)
        {
            numero= parseInt(prompt("Numero Invalido, ingrese nuevamente: "));
        }
      
        letra= prompt("Ingrese una letra");
        
    

    if(numero > 0 ){
        acumulador= acumulador + numero;
        contadorPositivos++;
    }

    if(numero<0){
        acumuladorNegativos= acumuladorNegativos + numero;
       
    }

    if ( numero % 2 == 0){
        contadorPares++;
    }

    if (numero % 2 == 1){
        contadorImpares++;
    }

    if (numero == 0) {
        contadorCero++;
    }

    if (numero <= 100 && numero >= -100){
        letraMin=letra;
        letraMax=letra;
        maximo=numero; 
        minimo=numero;

    }else{
        if(numero<minimo){
            letraMin=letra;
            minimo=numero;
        }
        if(numero>maximo){
            letraMax=letra;
            maximo=numero;
        }
    }





seguir= prompt("Quiere seguir ingresando ?");

}while (seguir == 's')
     
promedio= acumulador/contadorPositivos;
document.write("El promedio de los positivos es: " + promedio); 
document.write("La cantidad de numeros pares es: " + contadorPares);
document.write("La cantidad de numeros impares es: "+ contadorImpares);
document.write("La cantidad de numeros cero es: "+ contadorCero);
document.write("La suma de los numeros negativos es: "+ acumuladorNegativos);
document.write("El numero minimo es "+ minimo + " Y su letra es "+ letraMin);
document.write("El numero maximo es "+ maximo + "  Y su letra es "+ letraMax);
}
 





























