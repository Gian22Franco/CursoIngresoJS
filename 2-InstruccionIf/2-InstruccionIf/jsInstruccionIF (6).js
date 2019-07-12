function mostrar()
{   var edad;
    
    
    edad= document.getElementById("edad").value;
    edad=parseInt(edad);
    
    
    if ((edad >13) && (edad<=17)){
    alert("Es un adolscente");

    
}
    else if  ((edad>=18) && (edad<=100)) {
        alert("Es un adulto");
    
    }
    else  {
        alert("Es un niño");



    }
    
}


//(edad<=13)
