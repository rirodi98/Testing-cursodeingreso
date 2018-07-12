function Mostrar()
{
  	var producto;
  	var iva;
  	var importe;

  	producto= prompt("Ingrese el valor del producto");
  	producto=parseInt (producto);
  	
  	iva= producto*0.21;

  		
  	

  	importe=producto+iva;

  	document.getElementById('importeFinal').value=importe;

}
