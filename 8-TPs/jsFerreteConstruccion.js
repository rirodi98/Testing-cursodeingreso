/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var recAlambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro= 2*(largo+ancho);
	recAlambre=perimetro*3;

	alert(recAlambre);
}
function Circulo () 
{
	var radio;
	var diametro;
	var cirAlambre;

	radio=document.getElementById('Radio').value;
	
	diametro=Math.PI*radio;
	cirAlambre=diametro*3;

	alert(cirAlambre);
}
function Materiales () 
{
	var largo
	var ancho
	var superficie
	var bolsasCem
	var bolsasCal


	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	superficie=largo*ancho;
	bolsasCem= superficie*2;
	bolsasCal=superficie*3;

	alert("Se necesitan " +bolsasCem+" bolsas de cemento" );
	alert("Se necesitan "+bolsasCal+" bolsas de cal");

}