function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (!(sexo== "f" || sexo == "m"))
    {
        var sexo = prompt("Error, ingrese f ó m nuevamente.");
    }



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN