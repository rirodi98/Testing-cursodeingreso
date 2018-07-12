//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var alumnos=0;
	var promedio;
	var notaMasBaja=11;
	var cantidadDeVarones=0;
	var notasTotales=0;

	while(alumnos<6)
		{
			nota=prompt("Ingrese nota","0 a 10");
			nota=parseInt(nota);

			while(nota<0 || nota>10 || isNaN(nota))
				{
					alert("dato incorrecto");
					nota=prompt("Ingrese nota","0 a 10");
					nota=parseInt(nota);

				}

			sexo=prompt("Ingrese sexo","'f' para mujer o 'm' para varon");
			
			while(sexo!="m" && sexo!="f")
				{
					alert("dato incorrecto");
					sexo=prompt("Ingrese sexo","'f' para mujer o 'm' para varon");

				}	

			notasTotales=notasTotales+nota;

			if(nota<notaMasBaja)
				{
					notaMasBaja=nota;
				}	
			if(sexo=="m")
				{
					if(nota>5)
						{
							cantidadDeVarones++;
						}
				}
			alumnos++;		
		}
	promedio=notasTotales/6;

	alert("El promedio de las nota es de "+promedio);
	alert("La nota mas baja es "+notaMasBaja);
	alert("La cantidad de varores que sacaron 6 o mas es de "+ cantidadDeVarones);
	
}

