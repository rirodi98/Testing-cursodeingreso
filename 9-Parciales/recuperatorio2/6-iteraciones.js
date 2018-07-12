//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var dia=0;
	var maximo=0;
	var minimo=99999;
	
	while(dia<7)
		{
			ventas=prompt("Ingrese el importe total de ventas");
			ventas=parseInt(ventas);

			while(ventas<1 || isNaN(ventas))
				{
					alert("dato incorrecto");
					ventas=prompt("Ingrese el importe total de ventas");
					ventas=parseInt(ventas);

				}

		if(ventas<minimo)
			{
				minimo=ventas;
			}

		if(ventas>maximo)
			{
				maximo=ventas;
			}	

		dia++;	
		}

	alert("El mayor importe registrado fue "+maximo+" pesos");
	alert("El minimo importe registrado fue "+minimo+" pesos");	
}

