#ifndef LIBRERIA_H_INCLUDED
#define LIBRERIA_H_INCLUDED
typedef struct
{
    int  codigoP;
    char descripcionP[50];
}eProv;
typedef struct
{
    int codigo;
    char descripcion[50];
    float Importe;
    int cantidad;
    int estado;
    int idProv;

}eProducto;
/**
 *
 * \param recibe un vector y el tamaño.
 * \param
 * \return devuelde el vector inicialiazado con un id autoincremental.
 *
 */

void codigoProducto(eProducto [],int);
/**
 *
 * \param recibe vector y tamaño.
 * \param
 * \return el vector con todos sus componentes inicializados con el flag de estado en 1 para saber que esta disponible para usar.
 *
 */


void iniciar(eProducto [],int);
/**
 *
 * \param recibe vector de tipo eProducto, su tamaño, otro vector de tipo eProv y su tamaño.
 * \param
 * \return hace una alta si encuentra lugar, determina si los valores de cantidad y importe son validos.
 *
 */

void alta(eProducto [],int ,eProv [],int);
/**
 *
 * \param recibe un vector del tipo eProducto y busca si hay lugar en el array para realizar una nueva alta.
 * \param
 * \return retorna el primer indice que encuentra disponible para la alta.
 *
 */

int buscarLugar(eProducto [],int);
/**
 *
 * \param recibe un vector eProducto, su tamaño, un vector eProv y su tamaño
 * \param
 * \return busca por id el producto, si no lo encuentra, tira error. si lo encuentra pregunta que se quiere modificar, de contestar afirmativamente. pregunta que campo y lo modifica.
 *
 */

void modificar(eProducto [],int ,eProv [],int);
/**
 *
 * \param recibe un vector de tipo eProducto y su tamaño.
 * \param
 * \return busca si al menos hay una alta ya realizada.
 *
 */

int buscarAlta(eProducto [],int );
/**
 *
 * \param recibe un vector del tipo eProducto, su tamaño y el id del producto.
 * \param
 * \return devuelve el indice del producto, y si no lo encuentra devuelve -1;
 *
 */

int buscarProducto (eProducto [],int,int);
/**
 *
 * \param recibe un vector eProducto, su indice, un vector eProv y su tamaño.
 * \param
 * \return hace un printf con el vector el indice indicado.
 *
 */

void mostrarProducto (eProducto [],int ,eProv[],int);
/**
 *
 * \param recibe un vector eProv y su tamaño
 * \param
 * \return permite elegir un proveedor de una lista.
 *
 */

int pro(eProv [], int );
/**
 *
 * \param recibe un vector eProducto, su tamaño, un vector eProv y su tamaño
 * \param
 * \return busca por id el producto, si no lo encuentra, tira error.
   si lo encuentra pregunta que se quiere dar de baja, de contestar afirmativamente.
   realiza una baja logica llevando su flag estado en 1.

 */

void baja(eProducto [],int ,eProv [],int );
/** \brief
 *
 * \param
 * \param
 * \return
 *
 */

void Listar (eProducto[],int,eProv [],int);
/**
 *
 * \param no recibe nada
 * \param
 * \return la opcion elegida de un lista q muestra.
 *
 */

int menu();
/**
 *
 * \param no recibe nada.
 * \param
 * \return pide un valor, valida y devuelve el valor validado.
 *
 */

int validarCantidad();
/** \brief
 *
 * \param
 * \param
 * \return
 *
 */

void informar(eProducto [],int ,eProv [],int);




#endif // LIBRERIA_H_INCLUDED
