function Mostrar()
{
	var edad;
	var persona=0;
	var sexo;
	var sumaEdad=0;
	var promedio;
	var edadMasBaja=999;
	var cantidadVarones=0;

	while(persona<100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);

			while(edad<0 || edad>100 || isNaN(edad))
				{
					alert("Dato no valido");
					edad=prompt("Ingrese edad");
					edad=parseInt(edad);

				}

			
			
			sexo=prompt("Ingrese sexo","'f' o 'm'");

			while(sexo!="m" && sexo!="f")
				{
					alert("Dato no valido");
					sexo=prompt("Ingrese sexo","'f' o 'm'");
				}	

			sumaEdad=sumaEdad+edad;

			if(edad<edadMasBaja)
				{
					edadMasBaja=edad;
				}		
			if(sexo=="m")
				{
					if(edad>19)
						{
							cantidadVarones++;
						}
				}	

			persona++;	
		}
	promedio=sumaEdad/100;
	alert("El promedio de edad es de: "+promedio);
	alert("La edad mas baja es "+edadMasBaja+" años");
	alert("La cantidad de varones mayer de 20 es "+cantidadVarones);	
}
