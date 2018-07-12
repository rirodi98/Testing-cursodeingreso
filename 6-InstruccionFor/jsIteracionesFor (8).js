function Mostrar()
{
	var numero=prompt("ingrese numero");
	var divisores=0;

	for(contador=1;contador<=numero;contador++)
	{
		if(numero%contador==0)
		{
			
			divisores++;
		}

	}

	if(divisores==2)
		{
			document.write("Es primo");
		
		}else
		{
			document.write("No es primo");
		}
	
	



}//FIN DE LA FUNCIÓN