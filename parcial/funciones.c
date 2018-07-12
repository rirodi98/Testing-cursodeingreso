#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "libreria.h"
void codigoProducto(eProducto vec[],int tam)
{
    int i;
    for(i=0;i<tam;i++)
    {
        vec[i].codigo=200+i;
    }
}
void iniciar(eProducto vec[],int tam)
{
    int i;
    for(i=0;i<tam;i++)
    {
        vec[i].estado=1;
    }
}
void alta(eProducto vec[],int tam,eProv prov[],int tamP)
{

    int vacio;

    vacio=buscarLugar(vec,tam);
    if(vacio==-1)
    {
        printf("no mas lugar para agregar productos");

    }
    else
    {
        eProducto nuevo;
        printf("ID: %d\n",vec[vacio].codigo);
        nuevo.codigo=vec[vacio].codigo;
        nuevo.estado=0;
        printf("Ingrese descripcion\n");
        fflush(stdin);
        gets(nuevo.descripcion);
        printf("Ingrese importe\n");
        scanf("%f",&nuevo.Importe);

        while (nuevo.Importe<=0)
        {
            printf("dato incorrecto");
            system("cls");
            printf("Ingrese importe\n");
            scanf("%f",&nuevo.Importe);
        }
        nuevo.cantidad=validarCantidad();
        nuevo.idProv=pro(prov,5);
        vec[vacio]=nuevo;
        printf("Se realizo alta!");
    }
}
int buscarLugar(eProducto vec[],int tam)
{
    int i;
    int indice=-1;
    for(i=0;i<tam;i++)
    {
        if(vec[i].estado==1)
        {
            indice=i;
            break;
        }
    }
    return indice;
}
void modificar(eProducto vec[],int tam,eProv prov[],int tamP)
{
    int continuar;
    int codigo;
    int indice;
    char confirma;
    int modifica;
    continuar=buscarAlta(vec,tam);
    if(continuar==-1)
    {
        printf("para realizar la accion debe primero dar de alta un producto\n");
    }
    else
    {
        printf("Ingrese codigo de producto: ");
        scanf("%d",&codigo);
        indice=buscarProducto(vec,tam,codigo);
        if(indice==-1)
        {
            printf("no se encontro producto\n");
        }
        else
        {
          mostrarProducto(vec,indice,prov,tamP);
          printf("\nquiere modificar(s/n): ");
          fflush(stdin);
          scanf("%c",&confirma);
          if(confirma=='s')
          {
              int salir=0;
              do
                  {
                      system("cls");
                  printf("1.DESCRIPCION\n2.IMPORTE\n3.CANTIDAD\n4.SALIR\n");
                    scanf("%d",&modifica);
                    switch(modifica)
                    {
                    case 1:
                        printf("Ingrese descripcion: ");
                        fflush(stdin);
                        gets(vec[indice].descripcion);
                        break;
                    case 2:
                            printf("Ingrese importe\n");
                            scanf("%f",&vec[indice].Importe);

                            while (vec[indice].Importe<=0)
                            {
                                printf("dato incorrecto");
                                system("cls");
                                printf("Ingrese importe\n");
                                scanf("%f",&vec[indice].Importe);
        }
                            break;
                    case 3:
                            vec[indice].cantidad=validarCantidad();
                            break;
                    default:
                        salir=1;
                    break;


                    }
                  }while(salir!=1);
          }
          else
          {
              printf("operacion cancelada\n");
          }

        }
    }
}
int buscarAlta(eProducto vec[],int tam)
{
    int i;
    int indice=-1;
    for(i=0;i<tam;i++)
    {
        if(vec[i].estado==0)
        {
            indice=i;
            break;
        }
    }
    return indice;
}
int buscarProducto (eProducto vec[],int tam,int codigo)
{
    int i;
    int indice=-1;
    for(i=0;i<tam;i++)
    {
        if(vec[i].codigo==codigo&&vec[i].estado==0)
        {
            indice=i;
            break;
        }
    }
    return indice;
}
void mostrarProducto (eProducto vec[],int j,eProv prov[],int tam)
{
    int i;
    int ii;
    for(i=0;i<tam;i++)
    {
        if(vec[j].idProv==prov[i].codigoP)
        {
            ii=i;
        }
    }
    printf(" %d   %8s   %.2f   %d      %s",vec[j].codigo,vec[j].descripcion,vec[j].Importe,vec[j].cantidad,prov[ii].descripcionP);

}
int pro(eProv vec[], int tam)
{
    int i;
    int elec;
    for(i=0;i<tam;i++)
    {
        printf(" %d   %s\n",vec[i].codigoP,vec[i].descripcionP);
    }
    printf("ingrese id proveedor: ");
    scanf("%d",&elec);
    return elec;
}
void baja(eProducto vec[],int tam,eProv prov[],int tamP)
{
    int continuar;
    int codigo;
    int indice;
    char confirma;
    continuar=buscarAlta(vec,tam);
   if(continuar==-1)
    {
        printf("para realizar la accion debe primero dar de alta un producto\n");
    }
    else
    {
        printf("Ingrese codigo de producto: ");
        scanf("%d",&codigo);
        indice=buscarProducto(vec,tam,codigo);
        if(indice==-1)
        {
            printf("no se encontro producto\n");
        }
        else
        {
            mostrarProducto(vec,indice,prov,tamP);
            printf("\nconfirma baja(s/n): ");
            fflush(stdin);
            scanf("%c",&confirma);
            if(confirma=='s')
            {
                vec[indice].estado=1;
                printf("Se realizo la baja\n");
            }
            else
                {
                    printf("se cancelo operacion\n");
                }
        }
        }
}

void Listar (eProducto vec[],int tam,eProv prov[],int tamP)
{
    int i,j;
    float suma;
    int acumular=0;
    eProducto aux;
    system("cls");
    printf("A.Listar ordenado por importe(descendiente) y descripcion (ascendente)\n\n\n");
    for(i=0;i<tam-1;i++)
    {
        for(j=i+1;j<tam;j++)
        {
            if(vec[i].Importe<vec[j].Importe)
            {
                aux=vec[i];
                vec[i]=vec[j];
                vec[j]=aux;
            }
            else
            {
                if(vec[i].Importe==vec[j].Importe)
                {
                    if(strcmp (vec[i].descripcion,vec[j].descripcion)>0)
                    {
                        aux=vec[i];
                        vec[i]=vec[j];
                        vec[j]=aux;
                    }
                }
            }
        }
    }
    printf(" ID DESCRIPCION IMPORTE CANTIDAD PROVEEDOR\n\n");
    for(i=0;i<tam;i++)
    {
        if(vec[i].estado==0)
        {
            mostrarProducto(vec,i,prov,tamP);

            printf( "\n\n");
        }
    }
     system("pause");
     system("cls");
    printf("B.Todos los productos que en cantidad  son menor o igual a 10\n\n\n");
    printf(" ID DESCRIPCION IMPORTE CANTIDAD PROVEEDOR\n\n");
    for(i=0;i<tam;i++)
    {
        if(vec[i].cantidad<=10&&vec[i].estado==0)
        {
            mostrarProducto(vec,i,prov,tamP);
            printf("\n\n");
        }
    }
     system("pause");
     system("cls");
    printf("C.Todos los productos que en cantidad  son mayor a 10\n\n\n");
    printf(" ID DESCRIPCION IMPORTE CANTIDAD PROVEEDOR\n\n");
    for(i=0;i<tam;i++)
    {
        if(vec[i].cantidad>10&&vec[i].estado==0)
        {
            mostrarProducto(vec,i,prov,tamP);
            printf("\n");
        }
    }
    float promedio;

    for(i=0;i<tam;i++)
    {
        if(vec[i].estado==0)
        {
            suma=suma+vec[i].Importe;
            acumular++;
        }
    }
    promedio=suma/acumular;
    system("pause");
    system("cls");
    printf("D.Todos los productos que superan el promedio de los importes\n\n\n");
    printf(" ID DESCRIPCION IMPORTE CANTIDAD PROVEEDOR\n\n");
    for(i=0;i<tam;i++)
    {
        if(vec[i].Importe>promedio&&vec[i].estado==0)
        {
            mostrarProducto(vec,i,prov,tamP);
            printf("\n");
        }
    }
     system("pause");
     system("cls");
    printf("E.Todos los productos que no superan el promedio de los importes\n\n\n");
    printf(" ID DESCRIPCION IMPORTE CANTIDAD PROVEEDOR\n\n");
    for(i=0;i<tam;i++)
    {
        if(vec[i].Importe<promedio&&vec[i].estado==0)
        {

           mostrarProducto(vec,i,prov,tamP);
            printf("\n");
        }
    }
     system("pause");
     system("cls");
     printf("F.Todos los proveedores cuya cantidad de productos es menor a o igual a 10\n\n\n");
     printf("ID   NOMBRE\n\n");
     for(i=0;i<5;i++)
     {
         int sumaProv=0;

         for(j=0;j<tam;j++)
         {
             if(vec[j].idProv==prov[i].codigoP&&vec[j].estado==0)
             {
                 sumaProv=vec[j].cantidad+sumaProv;
             }
         }
         if(sumaProv<=10)
         {


            printf("%d  %s\n",prov[i].codigoP,prov[i].descripcionP);

         }
     }
     system("pause");
     system("cls");
     printf("G.Todos los productos provistos por cada proveedor\n\n\n");
     for(i=0;i<5;i++)
        {
        printf("%s\n\n",prov[i].descripcionP);
         for(j=0;j<tam;j++)
         {
             if(prov[i].codigoP==vec[j].idProv&&vec[j].estado==0)
             {
                 mostrarProducto(vec,j,prov,tamP);
                 printf("\n");
             }

         }
         printf("\n");
     }
      system("pause");
     system("cls");
     printf("H.Todos los productos provistos por un proveedor determinado\n\n\n");
     int posicion;
     char respuesta='s';
    while(respuesta=='s')
     {
         posicion=pro(prov,5);
    for(i=0;i<tam;i++)
     {
         if(vec[i].idProv==posicion&&vec[i].estado==0)
         {
             mostrarProducto(vec,i,prov,tamP);
             printf("\n");
         }
     }
     printf("desea continuar (s/n): ");
     fflush(stdin);
     scanf("%c",&respuesta);
     }
     system("pause");
     system("cls");
    printf("I.El proveedor que provee mas productos, mostrando los productos\n\n\n");
    int acumularPro;
    int  maximoPro;
    int minimoPro;
    int flag=0;
    for(i=0;i<5;i++)
    {
        int acumularPro=0;
        for(j=0;j<tam;j++)
        {
            if(prov[i].codigoP==vec[j].idProv&&vec[j].estado==0)
            {
                acumularPro++;

            }

        }

        if(acumularPro!=0)
        {
            if(acumularPro<minimoPro||flag==0)
            {
                minimoPro=acumularPro;
            }
            if(maximoPro<acumularPro||flag==0)
            {
            maximoPro=acumularPro;
            flag=1;
            }
        }


    }

    int z;
 for(i=0;i<5;i++)
    {
        acumularPro=0;
        for(j=0;j<tam;j++)
        {
            if(prov[i].codigoP==vec[j].idProv&&vec[j].estado==0)
            {
                acumularPro++;

            }
        }
             if(acumularPro==maximoPro)
        {
                printf("%s\n\n",prov[i].descripcionP);
                for(z=0;z<tam;z++)
        {
            if(prov[i].codigoP==vec[z].idProv&&vec[z].estado==0)
            {
              mostrarProducto(vec,z,prov,tamP);
               printf("\n");

            }
            }
        }
    }



   system("pause");
     system("cls");
printf("J.El proveedor que provee menos productos, mostrando los productos\n\n\n");
for(i=0;i<5;i++)
    {
        acumularPro=0;
        for(j=0;j<tam;j++)
        {
            if(prov[i].codigoP==vec[j].idProv&&vec[j].estado==0)
            {
                acumularPro++;

            }

        }
        if(minimoPro==acumularPro)
        {
            printf("%s\n\n",prov[i].descripcionP);
            for(z=0;z<tam;z++)
        {
            if(prov[i].codigoP==vec[z].idProv&&vec[z].estado==0)
            {
                mostrarProducto(vec,z,prov,tamP);
               printf("\n");

            }

            }
        }
    }
     system("pause");
     system("cls");
     printf("K.El proveedor que provee el producto mas caro, mostrando ese producto\n\n\n");
     float maximoVal;
     float minimoVal;

      flag=0;
     for(i=0;i<tam;i++)
     {

         if(vec[i].estado==0)
         {
             if(maximoVal<vec[i].Importe||flag==0)
             {
                 maximoVal=vec[i].Importe;

             }
             if(vec[i].Importe<minimoVal||flag==0)
                {
                    minimoVal=vec[i].Importe;

                    flag=1;
                }
         }
     }

     for(j=0;j<tam;j++)
     {
         if(vec[j].estado==0)
         {
             if(maximoVal==vec[j].Importe)
         {
             for(z=0;z<tamP;z++)
             {
                 if(vec[j].idProv==prov[z].codigoP)
                 {
                     printf("%s\n\n",prov[z].descripcionP);
                 }
             }
             mostrarProducto(vec,j,prov,tamP);
             printf("\n");
         }
         }
     }
     system("pause");
     system("cls");
     printf("L.El proveedor que provee el producto mas barato, mostrando ese producto\n\n\n");
      for(j=0;j<tam;j++)
     {
         if(vec[j].estado==0)
         {
             if(minimoVal==vec[j].Importe)
         {
             for(z=0;z<tamP;z++)
             {
                 if(vec[j].idProv==prov[z].codigoP)
                 {
                     printf("%s\n\n",prov[z].descripcionP);
                 }
            } mostrarProducto(vec,j,prov,tamP);
             printf("\n");

         }
         }
}
        system("pause");
     system("cls");
        printf("M.consulta recuperatorio");
        float sumando,totalP;
        int cantidad;

        for(i=0;i<5;i++)
        {
            sumando=0;
            totalP=0;
            cantidad=0;
            printf("%s: ",prov[i].descripcionP);
            for(j=0;j<tam;j++)
            {
                if(vec[j].estado==0)
                {
                    if(vec[j].idProv==prov[i].codigoP)
                    {
                    sumando=vec[j].Importe+sumando;
                    cantidad=cantidad+vec[j].cantidad;
                    }
                }
                totalP=sumando*cantidad;
            }
            printf("%.2f\n\n",totalP);
        }

}

