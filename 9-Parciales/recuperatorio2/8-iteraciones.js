//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta=true;
	var ingresos=0;
	var cantidadDePares=0;
	var promedio;
	var suma=0;
	var maximo=0;
	var minimo=99999;

	while(respuesta==true)
		{
			numero= prompt("Ingrese numero","Solo numero positivos");
			numero= parseInt(numero);

			while(numero<0 || isNaN(numero))
				{
					alert("dato no valido");
					numero= prompt("Ingrese numero","Solo numero positivos");
					numero= parseInt(numero);

				}
			suma=suma+numero;
			
			if(numero<minimo)
				{
					minimo=numero;
				}
			
			if (numero>maximo)
				{
					maximo=numero;
				}		
			
			if (numero%2==0)
				{
					cantidadDePares++;
				}
			ingresos++;
			respuesta=confirm("¿Ingresar otro numero?");

		}
	promedio=suma/ingresos;

	document.write("La cantidad de numeros pares es: "+cantidadDePares);
	document.write("<br>El promedio de los numeros ingresados es de: "+promedio);
	document.write("<br>La suma de todos los numeros es: "+suma);
	document.write("<br>El numero maximo ingresado es: "+maximo);
	document.write("<br>El numero minimo ingresado es: "+minimo);
}

