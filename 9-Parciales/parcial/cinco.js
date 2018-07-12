function Mostrar()
{
	var dia

	dia=prompt("Ingrese dia","Ojala no sea lunes");

	switch(dia)
	{
		case"lunes":
		case"martes":
		case"miercoles":
		case"jueves":
		case"viernes":
		alert("A trabajar!!");
		break;
		case "sabado":
		case "domingo":
		alert("Es fin de semana");
		break
	}
}
