/*alert("Hello World");

var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "shampoo";

console.log(frasco);


Tipos de datos primitivos y no primitivos

string 
number
boolean
underfined
null
symbol
object (no es primitivo)
*/

/*String es una cadena de texto, que siempre debe de ir entre comillas simples o dobles
var vaso = "leche";

//number no lleva comillas, y se refiere a un número con el cuál podemos hacer operaciones
var edad = 31;

//boolean solamente tiene dos salidas que es true or false
var cuentasPremium = false;

//undefined es un tipo de dato que existe pero no está definido o inicializado
var proximaCita =;

//null es un valor que no tenemos pero que declaramos
var aistenciaInvitados = null; */



var edad = "26";
var peso = 45;

console.log(typeof(edad));

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos.

//var es una variable con alcance global (tiene mayor alcance).

//let es una variable con alcance local (solo se utiliza dentro de un bloqueo de código).

//const es una constante, es decir, que es una variable que no cambia.

 var pesoTexto = peso.toString();
console.log (pesoTexto); /* primer console.log es para realizar el cambio */
console.log(typeof (pesoTexto)); /* con el typeof  consultamos si se realizó el cambio*/




var edadNumero = parseInt(edad); /* parseInt es para cambiar de string a number*/
console.log(edadNumero);
console.log(typeof (edadNumero));




