function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0||numero>10||isNaN(numero))
		{
			alert("numero incorrecto");
			numero = prompt("ingrese un número entre 0 y 10.");

		}

		alert("numero valido");


}//FIN DE LA FUNCIÓN()