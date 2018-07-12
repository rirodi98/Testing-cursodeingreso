#include <stdio.h>
#include <stdlib.h>
#include "libreria.h"
#define TAM 50
#define TAMP 5

int main()
{
    eProv proveedores[TAMP]={{11,"tramontina"},{12,"trotra"},{13,"filtran"},{14,"carlson"},{15,"artox"}};
    eProducto producto[TAM]={{200,"Mortero",20,100,0,12},{201,"Manoplas",20,100,0,12},{202,"Vasos",23,10,0,12},{203,"Mopas",19,100,0,11}};
    codigoProducto(producto,TAM);
    iniciar(producto,TAM);
    int i;
    for(i=0;i<4;i++)
    {
        producto[i].estado=0;
    }
    int salir=0;


    do
    {

        switch(menu())
    {
        case 1:
        alta(producto,TAM,proveedores,TAM);
        system("pause");
        break;
        case 2:
        modificar(producto,TAM,proveedores,TAM);
        system("pause");
        break;
        case 3:
        baja(producto,TAM,proveedores,TAM);
        system("pause");
        break;
        case 4:
        informar(producto,TAM,proveedores,TAM);
        system("pause");
        break;
        case 5:
        Listar(producto,TAM,proveedores,TAM);
        system("pause");
        break;
        case 6:
        salir=1;
        system("pause");
        break;
        default:
        printf("ERROR");
        break;
    }
    }while(salir!=1);
    return 0;
}

