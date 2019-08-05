function mostrar()
{
var numero1;
var num1String;
var numero2;
var num2String;
var suma;


numero1=parseInt(prompt("Ingrese el numero uno:"));
num1String=numero1.toString();
numero2=parseInt(prompt("Ingrese el numero 2"));
num2String=numero2.toString();

if(numero1 == numero2){
    alert(num1String + num2String);

}

if (numero1 > numero2){
    alert( numero1/numero2);
}if(numero1<numero2) {
    alert(numero1+numero2);
}


suma= numero1+numero2;

if (suma<50 ){

    alert( "La suma es "+ suma+ " y es menor que 50");
}




}
