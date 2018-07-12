#include <stdio.h>
#include <stdlib.h>
#include "libreria.h"

int menu()
{

    system("cls");
    int opcion;
    printf("-------ABM---------\n\n");
    printf("1.ALTAS\n2.MODIFICAR\n3.BAJA\n4.INFORMES\n5.LISTAR\n6.SALIR\n");
    scanf("%d",&opcion);
    return opcion;
}

int validarCantidad()
{
    int cantidad;
    printf("ingrese stock\n");
    scanf("%d",&cantidad);
    while (cantidad<0)
    {
        printf("dato incorrecto");
        system("cls");
        printf("Ingrese cantidad\n");
        scanf("%d",&cantidad);
    }
        return cantidad;
}
