

var nombre= prompt("ingresa nombre","Nombre usuario");
var altura= prompt("ingresa tu altura en metros",);
var peso= prompt("ingresa tu peso en kilogramos",);

function inserta(){
  var element=document.getElementById("parrafo1").innerHTML="Bienvenido "+nombre;
  var imc=(peso/(altura*altura));

  if(imc>=30){
  document.getElementById("info").innerHTML="Tu imc es de:" + imc.toFixed(2)+"<br> (Tienes obesidad , ponte a dieta)";
  }else if((imc>=25)&&(imc<=29)){
  document.getElementById("info").innerHTML="Tu imc es de:" + imc.toFixed(2)+"<br> (Estas un poco pasado de peso, haz un poco de ejercicio)";
  }else if ((imc>=18.5)&&(imc<=24.9)) {
  document.getElementById("info").innerHTML="Tu imc es de:" + imc.toFixed(2)+"<br> (Felicidades!! Estas en tu peso ideal)";
  }else if (imc<=18.4) {
  document.getElementById("info").innerHTML="Tu imc es de:" + imc.toFixed(2)+"<br> (Estas en tu debajo de tu peso ideal, come mas!)";
  }

}
/*
function cambia(){
  var element = document.getElementById("parrafo1");
    element.classList.add("estilo2");
}


alert("hola mundo");
confirm("deseas usar nuestras cookies");
document.getElementById("btn").addEventListener("click",cambio2());
function cambio2(){
  document.getElementById("parrafo1").style.background="red";
}*/
