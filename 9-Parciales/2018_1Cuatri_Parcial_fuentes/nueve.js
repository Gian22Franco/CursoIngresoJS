function mostrar()
{
    var marca;
    var peso; // entre 1 y 100 (validar)
    var temperatura; // -30 y 30
    var seguir;
    var contadorTemp=0;
    var maximo;
    var marcaMax;
    var contadorTempN=0;
    var acumuladorPeso=0;
    var promedio;
    var contadorPeso;


// La cantidad de temperaturas pares. 
// La marca del producto más pesado 
// La cantidad de productos que se conservan a menos de 0 grados.
// El promedio del peso de todos los productos.	
// El peso máximo y el mínimo.


do{

    marca= prompt("Ingrese una marca:");

    peso= parseInt(prompt("Ingrese un peso entre 1 y 100:"));
        while(isNaN(peso) || peso < 1 || peso > 100 ){
            peso =parseInt(  prompt("Peso invalido, ingrese nuevamente:"));
        }
    temperatura= parseInt(prompt("Ingrese la temperatura:"));
        while(isNaN(temperatura)|| temperatura < -30 || temperatura > 30){
            temperatura = parseInt(prompt("Temperatura invalida, ingresela nuevamente:"));
        }


// Cantidad temperaturas pares
if (temperatura %2 == 0){
    contadorTemp++;

}
// La marca del producto mas pesado
if (peso >= 1){
    marcaMax=marca;
    maximo=peso;
}else{
    if(peso>maximo){
        marcaMax=marca;
        maximo=peso;
    }
}

//  La cantidad de productos que se conservan a menos de 0 grados.

if (temperatura< 0){
    contadorTempN++;
}


// El promedio del peso de todos los productos.	
acumuladorPeso= acumuladorPeso + peso;




seguir= prompt("Quiere seguir ingresando ?");
}while (seguir == 's');

promedio= acumuladorPeso/ contadorPeso;
//document.write("La cantidad de temperaturas pares es: "+ contadorTemp);
//document.write("La marca del maximo es: "+ marcaMax);
//document.write("La cantidad de productos que se mantienen bajo 0 es: "+contadorTempN);
alert(promedio);

}

