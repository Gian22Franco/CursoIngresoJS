function mostrar()


{
    var ancho;
    var largo;
    

    ancho= prompt("Ingrese el ancho");
    while(isNaN(ancho)){
        ancho=prompt("Numero incorrecto, ingreselo nuevamente");
    

    }
    largo= prompt("ingrese el largo");
    while(isNaN(largo)){
        largo=prompt("Numero incorrecto, ingreselo nuevamente");
    
        
    }

    alert(ancho*2 + largo*2);



}
