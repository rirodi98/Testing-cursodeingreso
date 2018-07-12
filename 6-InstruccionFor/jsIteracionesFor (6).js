function Mostrar()
{
	var numero=prompt("Ingrese numero");
	

	for(contador=1;contador<=numero;contador++)
	{
		if(contador%2==0)
		{
			document.write("<br>"+contador);
		}
	}



}//FIN DE LA FUNCIÓN