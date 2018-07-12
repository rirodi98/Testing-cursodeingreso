function Mostrar()
{
	var nota;
	var contador=0;
	var sexo;
	var notasTotales=0;
	var notaMasBaja=11;
	var promedioNotas;
	var cantidadVarones=0;

	while(contador<100)
		{
			nota=prompt("Ingrese nota");
			nota=parseInt(nota);

			while(nota<0 || nota>10 || isNaN(nota))
				{
					alert("dato incorrecto");
					nota=prompt("Ingrese nota");
					nota=parseInt(nota);
				}

			sexo=prompt("Ingrese sexo, 'f' o 'm'");

			while(sexo!="f" && sexo!="m")
				{
					alert("dato incorrecto");
					sexo=prompt("Ingrese sexo, 'f' o 'm'");

				}
			if(nota>=0 || nota<10)
				{
					notasTotales=nota+notasTotales;
				}

			if(nota<notaMasBaja)
				{
					notaMasBaja=nota;
				}	


			if(sexo == "m")
				{
					if(nota>5)
						{
							cantidadVarones++;
						}
				}

			contador++;			
		}//while

	promedioNotas=notasTotales/100;

	alert("El promedio de notas es "+promedioNotas);
	alert("La nota mas baja es "+ notaMasBaja);
	alert("La cantidad de varones que su nota supero el 6 es de "+cantidadVarones);

}
