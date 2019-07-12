function mostrar()
{//var edad;

   // edad= document.getElementById("edad").value;
   // noAdolscente= (15 > edad ) && (17 < edad  );

    //if(noAdolscente) {
    //    alert("Esta persona no es un adolscente");


  //  }
   // else{
         
    //}




//}

var edad;
var adolscente;
var resultado;

edad= document.getElementById("edad").value;
edad=parseInt(edad);
adolscente = (edad >13) && (edad<=17);
resultado =! adolscente;


if (resultado){
alert("No es un adolscente");
}

}