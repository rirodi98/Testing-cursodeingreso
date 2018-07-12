function Mostrar()
{
	var numero;
	var positivo=0;
	var negativo=1;
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
			if(numero<0)
				{
					negativo=negativo*numero;
				}else
				{
					positivo=positivo+numero;
				}	
			respuesta=confirm("¿Desea ingresar otro numero?");	
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN