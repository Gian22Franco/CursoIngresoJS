function mostrar()
{
var precio;
var descuento;
var resultado;



precio= parseInt(prompt("Ingrese el valor: "));
descuento = parseInt(prompt("Ingrese el porcetaje de descuento: "));

resultado= precio - ((precio*descuento)/100)  ;

document.getElementById("elPrecioFinal").value= resultado;

}
