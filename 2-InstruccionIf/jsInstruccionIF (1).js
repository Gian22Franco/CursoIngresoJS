function mostrar()
{ var edad;

edad= document.getElementById("edad").value;
nBonita = (edad == 15);

if (nBonita) {
    alert("Niña Bonita");

    }

    else {
        alert("Su edad es "+ edad);
    }

}