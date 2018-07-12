function Mostrar()
{
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadNegativos=0;
	var cantidadPares=0;
	var contador=0;
	var promedioPositivos;
	var promedioNEgativos;
	var diferencia;
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			alert("Dato no valido");
			numero=prompt("Ingrese numero");
			numero=parseInt(numero);
		}

		if(numero==0)
		{
			cantidadCeros++;

		}else
		{
			

			if(numero<0)
			{
				cantidadNegativos++;
				sumaNegativos=sumaNegativos+numero;
			}else
			{
				cantidadPositivos++;
				sumaPositivos=sumaPositivos+numero;
			}
		}

		if(numero!=0 && numero%2==0)
		{
			cantidadPares++;
		}

		contador++;
		respuesta=confirm("Ingresar nuevo numero");

	
	}

	diferencia=sumaPositivos-sumaNegativos;
	promedioPositivos=cantidadPositivos/contador*100;
	promedioNEgativos=cantidadNegativos/contador*100;

	document.write("La suma de negativos es "+sumaNegativos);
	document.write("<br>La suma de positivos es "+sumaPositivos);
	document.write("<br>La cantidad de positivos es "+cantidadPositivos);
	document.write("<br>La cantidad de negativos es "+cantidadNegativos);
	document.write("<br>La cantidad de ceros es "+cantidadCeros);
	document.write("<br>La cantidad de pares es "+cantidadPares);
	document.write("<br>El promedio de positivos es "+promedioPositivos);
	document.write("<br>El promedio de negativos es "+promedioNEgativos);
	document.write("<br>La diferencia entre positivos y negativos es "+diferencia);




}//FIN DE LA FUNCIÓN