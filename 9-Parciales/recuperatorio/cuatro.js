function Mostrar()
{
	var numeroUno=prompt("Ingrese numero");
	var numeroDos=prompt("Ingrese numero");
	var suma;
	var resultado;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if(suma==0)
		{
			resultado="cero";

		}else
		{
			if(suma<0)
				{
					resultado="negativo";
				}else
				{
					resultado="positivo";
				}
		}

	document.write("El resultado es: "+resultado);
		

}
