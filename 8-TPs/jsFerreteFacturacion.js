/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var a;
	var b;
	var c;
	var resultado;

	a=document.getElementById('PrecioUno').value;
	b=document.getElementById('PrecioDos').value;
	c=document.getElementById('PrecioTres').value;

	a= parseInt(a);
	b= parseInt(b);
	c= parseInt(c);
	
	resultado= a+b+c;
	alert("La suma es: "+resultado);
}
function Promedio () 
{
	var a;
	var b;
	var c;
	var resultado;
	var promedio;

	a=document.getElementById('PrecioUno').value;
	b=document.getElementById('PrecioDos').value;
	c=document.getElementById('PrecioTres').value;

	a= parseInt(a);
	b= parseInt(b);
	c= parseInt(c);
	
	resultado= a+b+c;
	promedio= resultado/3;
	alert("El promedio es: "+promedio);
	
	
	

}

function PrecioFinal () 
{ 
	var a;
	var b;
	var c;
	var resultado;
	var iva;
	var precioFinal;

	a=document.getElementById('PrecioUno').value;
	b=document.getElementById('PrecioDos').value;
	c=document.getElementById('PrecioTres').value;

	a= parseInt(a);
	b= parseInt(b);
	c= parseInt(c);
	
	resultado= a+b+c;
	iva= resultado*0.21;
	precioFinal=resultado + iva;
	alert("El precio final es: "+precioFinal);

}