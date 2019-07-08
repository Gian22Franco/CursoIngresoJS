function mostrar()
{var edad;
    edad= document.getElementById("edad").value;
//tomo la edad  
mayorEdad=(edad >= 18);
if (mayorEdad) {
    alert("Esta persona es mayor de edad");

    }

    else {
        alert("Su edad es "+ edad);
    }




}//FIN DE LA FUNCIÓN