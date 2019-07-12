function mostrar()
{var edad;
    edad= document.getElementById("edad").value;
//tomo la edad  
mayorEdad=(edad >= 18);
if (mayorEdad) {
    alert("Esta persona es mayor de edad");

    }

    if (edad<18)
    {
        alert("Esta persona es menor de edad");
    }

//     else {
//       alert("Esta persona es menor de edad");
//     }




}//FIN DE LA FUNCIÓN
