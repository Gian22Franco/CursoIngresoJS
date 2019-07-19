function mostrar()
{
    var ingreso;
    var mensaje="Este dìa de la semana no existe";

    ingreso=prompt("Ingrese un dìa de la semana");

    switch (ingreso)

    {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            mensaje= "A trabajar!";
        break;

        case "Sabado":
        case "Domingo":
            mensaje= "Bueno Finde!!";
        break;
        
       
    }
    alert (mensaje);
}
