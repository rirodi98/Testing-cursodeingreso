function Mostrar()
{
  	var peso;
  	var contenedor=0;
  	var masPesado=0;
  	var menosPesado=99999;

  	while(contenedor<50)
  		{
  			peso=prompt("Ingrese peso del contenedor", "Expresar en Kg")
  			peso=parseInt(peso);

  			while(peso<1 || isNaN(peso))
  				{
  					alert ("dato no valido");
  					peso=prompt("Ingrese peso del contenedor","Expresar en kg")
  					peso=parseInt(peso);
  				}

  			if(peso>masPesado)
  				{
  					masPesado=peso;
  				}

  			if(peso<menosPesado)
  				{
  					menosPesado=peso;
  				}

  			contenedor++;			

  		}
  	
  	alert("El contenedor mas pesado, pesa: "+masPesado);
  	alert("El contenedor menos pesado, pesa: "+menosPesado);	

}
