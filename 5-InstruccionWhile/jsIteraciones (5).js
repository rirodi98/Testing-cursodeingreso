function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

 	while(sexo!="f" && sexo!="m")
 		{
 			alert("Dato incorrecto");
 			sexo = prompt("ingrese f ó m .");
 		}
 	if(sexo=="f")
 		{
 			sexo="Femenino";
 		}else
 		{
 			sexo="Masculino";
 		}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN