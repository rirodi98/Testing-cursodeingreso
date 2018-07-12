/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
 	var edad;
 	var sexo;
 	var EstadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var Nacionalidad;
 	edad= prompt("Ingrese edad entre 18 y 90 años");
 	edad= parseInt(edad);
	
	
 	
	
 	while(edad<18 || edad>90 || isNaN(edad))
 		{
 			alert("Dato incorrecto");
 			edad= prompt("Ingrese edad entre 18 y 90 años");
 			edad= parseInt(edad);

 		}
 			
 			
 		


 	sexo= prompt("ingrese sexo, 'F' para femenino o 'M' para masculino");
 	
 	while(sexo!="M" && sexo!="F" && isNaN(sexo))
 	{
 		alert("dato incorrecto");
 		sexo= prompt("ingrese sexo, 'F' para femenino o 'M' para masculino");
 		


 	}
 	switch(sexo)
 		{
 			case "M":
 			sexo= "Masculino";
 			break;
 			case "F":
 			sexo= "Femenino";
 			break;
 		}

 	EstadoCivil= prompt("Ingrese estado civil, 1 soltero, 2 casado, 3 divorciado, 4 viudo");
 	EstadoCivil= parseInt(EstadoCivil);



 	while (EstadoCivil!=1 && EstadoCivil!=2 && EstadoCivil!=3 && EstadoCivil!=4 && isNaN(EstadoCivil))
 		{
 			alert("dato incorrecto")
 			EstadoCivil= prompt("Ingrese estado civil, 1 soltero, 2 casado, 3 divorciados, 4 viudo");
 			EstadoCivil= parseInt(EstadoCivil);
 		}
 	switch(EstadoCivil)
 				{
 					case 1: 
 					EstadoCivil="Soltero";
 					break;
 					case 2: 
 					EstadoCivil="Casado";
 					break;
 					case 3: 
 					EstadoCivil="Divorciado";
 					break;
 					case 4: 
 					EstadoCivil="Viudo";
 					break;
 				}
 	
 	sueldoBruto= prompt("ingrese sueldo bruto")
 	sueldoBruto= parseInt(sueldoBruto);

 	while(sueldoBruto<8000 || isNaN(sueldoBruto))
 	{
 		alert("sueldo insuficiente");
 		sueldoBruto= prompt("ingrese sueldo bruto")
 		sueldoBruto= parseInt(sueldoBruto);

 	}
 	legajo= prompt("Ingrese legajo");
 	legajo= parseInt(legajo);

 	while (legajo<1000 || legajo>9999 || isNaN(legajo))
 	{
 		alert("Legajo incorrecto")
 		legajo= prompt("Ingrese legajo");
 		legajo= parseInt(legajo);
 	}

 	Nacionalidad= prompt("Ingrese nacionalidad, 'A' Argentinos,'E' Extranjeros, 'N' Naturalizados");

 	while (Nacionalidad!="A" && Nacionalidad!="E" && Nacionalidad!="N")
 	{
 			alert("Dato no valido");
 			Nacionalidad= prompt("Ingrese nacionalidad, 'A' Argentinos,'E' Extranjeros, 'N' Naturalizados");
 	}
 	switch(Nacionalidad)

 		{
 			case "A":
 			Nacionalidad= "Argentino";
 			break;
 			case "E":
 			Nacionalidad= "Extranjero";
 			break;
 			case "N":
 			Nacionalidad="Naturalizado";
 			break;

 		}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=EstadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=legajo;
 	document.getElementById('Nacionalidad').value=Nacionalidad;
}
