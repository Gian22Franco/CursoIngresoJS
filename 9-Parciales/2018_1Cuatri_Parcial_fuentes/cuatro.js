function mostrar()
{
var numero1;
var numero1String;
var numero2;
var numero2String;
var suma;


numero1= parseInt(prompt("Ingrese un numero:"));
numero1String=numero1.toString();
numero2= parseInt(prompt("ingrese un numero:"));
numero2String= numero2.toString();

if( numero1 == numero2){

    alert( numero1String + numero2String);

}

if (numero1>numero2){
    alert(numero1-numero2);
}else{
    alert(numero1 + numero2);
}

suma=numero1+numero2

if (suma>10){
    alert("La suma es: "+ suma + "y supero 10");
}
}
