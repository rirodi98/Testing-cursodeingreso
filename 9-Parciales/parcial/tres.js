function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=2*(largo+ancho);

	alambre=perimetro*3;

	alert("Se necesitaran "+alambre+" metros de alambre");



}
