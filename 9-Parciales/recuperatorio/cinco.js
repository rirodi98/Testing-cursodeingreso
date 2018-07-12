function Mostrar()
{
	var mes=prompt("Ingrese mes","en miniscula");

	switch(mes)
		{
			case "enero":
			alert("Comienza el año");
			break;
			case "diciembre":
			alert("Se vienen las fiestas");
			break;
			default:
			alert("No es enero, ni diciembre");
			break;

		}
}
