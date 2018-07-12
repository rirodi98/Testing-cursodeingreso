function Mostrar()
{ 
	var numero;
	var contador=0;
	var respuesta=true;
	var cantidadPares=0;
	var numerosIngresados=0;
	var promedio;
	var maximo=0;
	var minimo=99999;

	while(respuesta==true)
		{
			numero= prompt("Ingrese nummero", "solo numeros positivos");

			while(numero<0 || isNaN(numero))
				{
					alert("Numero no valido");
					numero= prompt("Ingrese nummero", "solo numeros positivos");
				}

			numero=parseInt(numero);
				
			numerosIngresados=numerosIngresados+numero;
				
			if(numero%2==0 && numero!=0)
				{
					cantidadPares++;
				}
			if(numero>maximo)
				{
					maximo=numero;

				}	
			if(numero<minimo)
				{
					minimo=numero;
				}	
			contador++;	

			respuesta= confirm("¿Desea seguir ingresando numeros?");	
		}

		promedio=numerosIngresados/contador;
		document.write("La cantidad de numeros pares es "+cantidadPares);
		document.write("<br> El promedio es "+promedio);
		document.write("<br> La suma total de los numeros ingresados es "+numerosIngresados);
		document.write("<br> El numero maximo es "+maximo);
		document.write("<br> El numero minimo es "+ minimo);
}
	