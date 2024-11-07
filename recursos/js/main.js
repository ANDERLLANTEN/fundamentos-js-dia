/*metodo mas usado*/
//document.getElementById("demo").innerHTML = "Hello JavaScript";
//document.getElementById("demo").style.fontSize ="35px";

/*salida de datos */
//window.alert(5+2);
//console.log(6+2);

/*declaracion */
let a,b,c;
a = 5;
b = 6;
c = a + b;
//window.alert(c);
//document.getElementById("demo").innerHTML = c;


/*variables*/
let p,q,r;
p= 5;
q = 7;
const m = 8;
r= p + q + m;
document.getElementById("demo1").innerHTML = r;

/*tipos de datos */
let num = 24; //numero entero
let name = "anderson llanten"; //cadena
let km = 14.5; //numero 
let isColombiano = true; // booleano
let obj = {firstname:"ana", lastname:"perez"}; //objeto

let y = 17 + "poo";
let unir = "17" + "poo";
window.alert(unir);
window.alert(y);


/*definicion de funciones */
function myfunction(){
    document.getElementById("demo2").innerHTML ="New paragraph";
}