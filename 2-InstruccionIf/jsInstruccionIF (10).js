function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor((Math.random() * 10) + 1);

	if (numeroRandom>8)
	{
		alert(numeroRandom);
		alert("Excelente")

	}
	else
	{
		if(numeroRandom<4)
		{
			alert(numeroRandom);
			alert("Vamos, la proxima se puede");

		}
		else
		{

			alert(numeroRandom);
			alert("Aprobo");
			
		}

	}

}//FIN DE LA FUNCIÓN