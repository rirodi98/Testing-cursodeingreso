function Mostrar()
{
	var numero=prompt("ingrese numero");
	var divisores=0;

	for(contador=1;contador<=numero;contador++)
	{
		if(numero%contador==0)
		{
			document.write("<br>"+contador);
			divisores++;
		}

	}	
	document.write("<br>La cantidad de divisores es "+divisores);



}//FIN DE LA FUNCIÓN