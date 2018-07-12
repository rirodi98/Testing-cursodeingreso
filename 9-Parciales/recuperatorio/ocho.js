function Mostrar()
{
	var numero;
	var respuesta=true;
	var acumulador=0;
	var cantidadPares=0;
	var promedio;
	var sumaNumeros=0;
	var maximo=0;
	var minimo=999999999999999;

	while(respuesta==true)
		{
			numero=prompt("Ingrese numero","Solo numeros positivos");
			numero=parseInt(numero);

			while(numero<0 || isNaN(numero))
				{
					alert("Numero no valido");
					numero=prompt("Ingrese numero","Solo numeros positivos");
					numero=parseInt(numero);

				}

			sumaNumeros=sumaNumeros+numero;

			if(numero>maximo)
				{
					maximo=numero;
				}

			if(numero<minimo)
				{
					minimo=numero;
				}		
			if(numero%2==0)
				{
					cantidadPares++;
				}

			acumulador++;
			respuesta=confirm("¿Desea seguir ingresando numeros?");		
		} 
		
			promedio=sumaNumeros/acumulador;
			
			document.write("La cantidad de numeros pares ingresados es "+cantidadPares);
			document.write("<br>El promedio es "+promedio);
			document.write("<br>La suma total de los numeros es "+sumaNumeros);
			document.write("<br>El numero maximo es "+maximo);
			document.write("<br>El numero minimo es "+minimo);		


}
