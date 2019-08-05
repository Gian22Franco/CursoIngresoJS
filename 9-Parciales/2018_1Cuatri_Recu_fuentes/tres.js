function mostrar()
{
var precio;
var porcentaje;
var precioFinal;


precio=parseInt(prompt("Ingrese el precio:"));
    while (isNaN(precio)){
        precio=parseInt(prompt("Error, ingrese el precio nuevamente"));
    }
porcentaje= parseInt(prompt("Ingrese el porcetaje de descuento:"));
    while (isNaN(porcentaje)){
        porcentaje=parseInt(prompt("Error, ingrese el porcentaje nuevamente"));

    }

    precioFinal= precio-precio*porcentaje/100;

  document.getElementById("elPrecioFinal").value=precioFinal;









}
