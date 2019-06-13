 var persona ={
   firstname:"cesar",
   lastname:"roman",
   id:3,
   fullname: function(){
     return this.firstname+" "+this.lastname;
   }
 }

 console.log(persona.fullname());


 /*function nombre(){
   var nuevo=document.getElementById("name1").value;
   document.getElementById("p1").innerHTML=nuevo;
   console.log("ejecute");
 }*/

 var x = document.getElementById("btn").addEventListener("click",func2);
 function func2(){
    var nuevo=document.getElementById("name1").value;
   document.getElementById("p1").innerHTML=nuevo;
 }
 var y =document.getElementById("p1").addEventListener("copy",func3);
 function func3(){
   console.log("Se copio el texto de p1");
 }
 //arreglo destructing
 var test=["uno","dos","tres"];
 var [a2,b2,c2,d2]=test;
 var array=[1,2,3];

 console.log(array);
 console.log(array[0]);

 console.log(a2,b2);
//rest
 var t1= ["uno","dos",3,"cuatro"];
 var [aa,bb,...t2]=t1;

 var planets = ["1",2,"earth","venus","pluto","saturn"];
var [first,s,t,f, ...rest]=["mercury","mars", ...planets, "saturn"];
