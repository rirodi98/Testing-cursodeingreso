function Mostrar()
{
  	var dia=0;
  	var importeVentas;
  	var importeMayor=0;
  	var importeMenor=999999999;

  	while(dia<24)
  	{
  		importeVentas= prompt("Ingrese el importe de las ventas","Pesos");
  		importeVentas=parseInt(importeVentas);
  		

  		while(importeVentas<1 || isNaN(importeVentas))
  			{
  				alert("Dato incorrecto");
  				importeVentas= prompt("Ingrese el importe de las ventas","Pesos");
  				importeVentas=parseInt(importeVentas);
  			}

  		if(importeVentas>importeMayor)
  			{
  				
  				importeMayor=importeVentas;

  				
  			}

  		if(importeVentas<importeMenor)
  			{
  				importeMenor=importeVentas;
  			}	
  			
			dia++;
  	}

  	

  	alert("El importe mayor registrado fue "+importeMayor+" pesos");
  	alert("El importe menor registrado fue "+importeMenor+" pesos");
}
