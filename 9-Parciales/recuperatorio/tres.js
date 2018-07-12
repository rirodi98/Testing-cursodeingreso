function Mostrar()
{
 	var precioUno=document.getElementById('precioUno').value;
 	var precioDos=document.getElementById('precioDos').value;
 	var precioTres=document.getElementById('precioTres').value;
 	var suma;
 	var promedio;

 	precioUno=parseInt(precioUno);
 	precioDos=parseInt(precioDos);
 	precioTres=parseInt(precioTres);

 	suma=precioUno+precioDos+precioTres;

 	promedio=suma/3;

 	alert("La suma es de: "+suma);
 	alert("El promedio es de: "+promedio);
}
