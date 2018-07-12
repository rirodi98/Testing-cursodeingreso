function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
		alert("Tiene 28 dias");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 dias");
		break;
		default:
		alert ("Tiene 31 dias")
		break;
	}
	



}//FIN DE LA FUNCIÓN