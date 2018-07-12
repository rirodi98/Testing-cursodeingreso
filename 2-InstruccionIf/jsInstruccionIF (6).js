function Mostrar()
{
//tomo la edad  
var edad
edad= document.getElementById('edad').value;

if (edad<13) 
{
	alert("Usted es un niño");
}else
{
	if (edad>12 && edad<18) 
	{
		alert("Usted es un adolecente");
	}else{
			alert ("Usted es mayor");
	}
}



}//FIN DE LA FUNCIÓN