function Mostrar()
{

	var numero;
	var maximo=0;
	var minimo=999999;
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
		
		if (numero<minimo)
			{
				minimo=numero;
			} 
		if(numero>maximo)
			{
				maximo=numero;
			}	
		respuesta=confirm("¿Desea ingresar numero?");
			
	}

	alert("Numero maximo ingresado: "+maximo);
	alert("Numero minimo ingresado: "+minimo);



}//FIN DE LA FUNCIÓN