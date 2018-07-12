//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=2*(ancho+largo);
	alambre=perimetro*6;

	alert("La cantidad de alambre necesaria es "+alambre+" metros");
	
}

