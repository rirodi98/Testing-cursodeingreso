#include <stdio.h>
#include <stdlib.h>
#include "libreria.h"



void informar(eProducto vec[],int tam,eProv prov[],int tamP)
{
    int i;
    float suma=0;
    float acumular=0;
    int supera=0;
    int noSupera=0;
    int supPro=0;
    int noPro=0;

    float promedio;
    system("cls");
    for(i=0;i<tam;i++)
    {
        if(vec[i].estado==0)
        {
            suma=suma+vec[i].Importe;
            acumular++;
        }
    }
    promedio=suma/acumular;
    printf("Total: %.2f\nPromedio: %.2f\n",suma,promedio);
    for(i=0;i<tam;i++)
    {
        if(vec[i].Importe>promedio&&vec[i].estado==0)
        {
            supera++;

        }
        if(vec[i].Importe<promedio&&vec[i].estado==0)
        {
            noSupera++;
        }
    }
    printf("Productos que superan el importe promedio: %d\nLos que NO son: %d\n",supera,noSupera);
    for(i=0;i<tam;i++)
    {
        if(vec[i].cantidad<=10&&vec[i].estado==0)
        {
            noPro++;
        }
    }
    for(i=0;i<tam;i++)
    {
        if(vec[i].cantidad>10&&vec[i].estado==0)
        {
            supPro++;
        }
    }
    printf("La cantidad de productos cuyo stock es menor igual a 10: %d\nLa cantidad de productos cuyo stock es mayor a 10: %d\n\n",noPro,supPro);
}
