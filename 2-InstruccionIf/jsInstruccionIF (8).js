function mostrar()
{
    var edad;
    var ecivil;

    edad=document.getElementById("edad").value;
    ecivil=document.getElementById("estadoCivil").value;

    if (edad < 18 && ecivil != "Soltero")
    {



    }

    else if (edad >= 18 && ecivil == "Soltero" )
    {
    
        alert ("No es menor y es Soltero");     

    }

	


}