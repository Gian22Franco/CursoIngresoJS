function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{

    case"Enero":
    case "Marzo" :
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case"Diciembre":
        alert ("Este mes tiene 30 dìas");
    break;

    case"Febrero":
        alert ("Este mes tiene menos de 29 dìas" );
    break;
    // default: 
            //alert ("Este mes tiene 30 dias" );
    // ** Otra forma de hacerlo**
}

	


}//FIN DE LA FUNCIÓN
    