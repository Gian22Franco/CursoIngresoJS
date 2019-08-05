function mostrar() {

    var notas;
    var sexo;
    var contador=0;
    var promedio;
    var acumulador=0;
    var sexMin;
    var minimo;
    var contadorV=0;

    while(contador< 5){ 

    notas = parseInt(prompt("Ingrese nota"));
    while (isNaN(notas) || notas < 0 || notas >10 ) {
        notas = parseInt(prompt("Numero invalido, ingrese nuevamente"));

    }
    sexo= prompt("Ingrese sexo");
        while (sexo != "f" && sexo != "m"){ 
            sexo= prompt("Sexo invalido");
        }

       acumulador = acumulador + notas;
       
        if(contador==0){
            sexMin=sexo;
            minimo=notas;
        }

        if (contador<minimo){
            minimo=notas;
        }
    
        if (sexo== "m" && notas>=6){
            contadorV++;
        }

      contador ++;    
    }
    promedio= acumulador/contador;
    alert( promedio);
    alert( "La nota mas baja es "+ minimo + " y esta persona es: "+ sexMin);
    alert ("La cantidad de varones con nota mayor o igual a 6 es: " + contadorV);

}
    


