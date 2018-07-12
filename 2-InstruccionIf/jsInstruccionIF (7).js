function Mostrar()
{
//tomo la edad  

	var estadocivil
	var edad
	edad= document.getElementById('edad').value;
	estadocivil= document.getElementById('estadoCivil').value;
	if(edad<18)
	{
		if(estadocivil!="Soltero")
		{
			alert("Es muy pequeño para No ser soltero");
		}
	}


}//FIN DE LA FUNCIÓN