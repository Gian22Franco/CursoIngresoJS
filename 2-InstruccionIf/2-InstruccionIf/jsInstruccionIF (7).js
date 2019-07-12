function mostrar()
{
    var edad;
    var estadoCivil;
    var pequeño;

    edad= document.getElementById("edad").value;
    edad= parseInt(edad);
    estadoCivil= document.getElementById("estadoCivil").value;
    estadoCivil=parseInt(estadoCivil);
  

    if((edad < 18) && (estadoCivil =! "Soltero" )) {  

        alert("Es muy pequeño para NO ser soltero");

    }

 

else {


    
}


	


}//FIN DE LA FUNCIÓN