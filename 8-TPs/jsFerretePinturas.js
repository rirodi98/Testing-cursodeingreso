/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
		var temperatura=document.getElementById('Temperatura').value;
		var centígrados;
		temperatura=parseInt(temperatura);
		centígrados=(temperatura-32)/1.8;
		alert("La temperatura es "+centígrados+" centígrados");

}

function CentigradosFahrenheit () 
{
		var temperatura=document.getElementById('Temperatura').value;
		var centígrados;
		temperatura=parseInt(temperatura);
		centígrados=(temperatura*1.8)+32;
		alert("La temperatura es "+centígrados+" Fahrenheit");
}
