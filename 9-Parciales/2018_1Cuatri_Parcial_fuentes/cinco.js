function mostrar()
{
    var ingreso;
   

    ingreso=prompt("Ingrese un planeta");

    switch (ingreso)

    {
        case "Tierra":
            alert("Aca vivimos" );
        break;

        case "Mercurio":
        case "Venus":
        case "Marte":
        case "Jupiter":
            alert("Acà hace mas calor");
        break;

        case "Saturno":
        case "Urano":
        case "Neptuno":
            alert("Acà hace mas frio");
        break;
        
        default :
            alert ("Este planeta no existe");
        break;
    }   

}
