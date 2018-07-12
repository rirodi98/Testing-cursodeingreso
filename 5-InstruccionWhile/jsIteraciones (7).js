function Mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta==true)
		{
			numero=prompt("Ingrese numero");
			numero=parseInt(numero);

			while(isNaN(numero))
				{
					alert("dato no valido");
					numero=prompt("Ingrese numero");
					numero=parseInt(numero);
				}
			acumulador=acumulador+numero;
			contador++;
			respuesta=confirm("¿Desea seguir ingresando numeros?");	
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN