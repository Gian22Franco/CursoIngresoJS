
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho= parseInt(prompt("Ingrese el ancho:"));
        while(isNaN(ancho)){
            ancho=parseInt(prompt("Error, ingrese nuevamente el ancho;"));
        }
    
    largo= parseInt(prompt("Ingrese el largo"));
        while (isNaN(largo)){
            ancho= parseInt(prompt("Error, ingrese nuevamente el largo"));

        }

    
    perimetro= ancho*2 + largo*2;

    alert(perimetro);


}
