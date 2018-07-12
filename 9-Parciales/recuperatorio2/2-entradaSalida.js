//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var importeFinal;

	importe= prompt("Ingrese importe","Pesos");
	importe=parseInt(importe);

	iva=importe*0.21;

	importeFinal=importe+iva;

	document.getElementById('importe').value=importeFinal;
	
}

