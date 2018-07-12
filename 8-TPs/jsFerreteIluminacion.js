/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas=document.getElementById('Cantidad').value;
 	var marca=document.getElementById('Marca').value;
 	var precio=35;
 	var resultado;
 	var descuento;
 	var impuesto;
 	var importeFinal;

 	if(lamparitas>5)
 	{
 		descuento=0.5; 
 	}else
 	{
 		if(lamparitas==5)
 		{
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				descuento=0.6;
 				break;
 				default:
 				descuento=0.7;
 				break;
 			}
 		}else
 			{
 				if(lamparitas==4)
 				{
 					switch(marca)
 					{
 						case "ArgentinaLuz":
 						case "FelipeLamparas":
 						descuento=0.75;
 						break;
 						default:
 						descuento=0.8;
 						break;
					}
 				}else
 				{
 					if(lamparitas==3)
 					{
 						switch(marca)
 						{
 							case "ArgentinaLuz":
 							descuento=0.85;
 							break;
 							case "FelipeLamparas":
 							descuento=0.9;
 							break;
 							default:
 							descuento=0.95;
 							break;
 						}
 					}else
 					{

 					}
 				}
 			}
 		}
 	

 	resultado=lamparitas*precio*descuento;
 	if(resultado>120)
 	{
 		impuesto=resultado*0.1;
 		importeFinal=impuesto+resultado;
 		alert("IIBB Usted pago de "+impuesto);
 		document.getElementById('precioDescuento').value=importeFinal;
 	}else
 	{
 		document.getElementById('precioDescuento').value=resultado;
 	}
}

