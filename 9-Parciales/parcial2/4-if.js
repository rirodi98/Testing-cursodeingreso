//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
/*sison= se concatenana
siel premero es mas grande se multipica
si el segundo es mas grande se restan
si la multiplicacion da unnum par mostrar es par*/
	var numero1= prompt("ingrese numero");
	var numero2= prompt("ingrese numero");
	var resultado;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	
 if(numero1==numero2)
	{
		resultado=numero1+""+numero2;
		
		
	}else
	{	
		if(numero1>numero2)
		{
			resultado=numero1*numero2;
			if(resultado%2==0)
			{
				alert(" Es par");
			}	
		}else
	{
		resultado=numero1-numero2;
	}
		
	}

	alert(resultado);
}

