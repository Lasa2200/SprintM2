# Documentación Spint Final I

## **index.html**
En esta seccion describiremos la composición y funcionamiento de nuestro index.html, él cuál está compuesto por una barra de navegación, un título `<h1>` más un subtítulo `<h2>`, prosigue con el `<main>`, que suma un texto explicativo sobre el negocio, una galería de imágenes y una tabla oculta para ser utilizada como modal y finaliza con un `<footer>` compuesto por los nombres de los integrantes del grupo, el nombre del negocio y el año actual.

#### **Barra de navegación**
1. Durante el grupal 1, se hace un listado con las secciones de esta barra.
2. Se incluyó como `<nav>` en el ejercicio grupal 2, con 3 secciones (Pedidos / Seguimiento / Contacto). Las primeras dos opciones sólo aparecen sin llevar a ninguna dirección, mientras que la tercera sección *Contacto* está enlazado a `formulario.html`, un formulario de contacto para contactarse con *Te lo vendo*.
3. Se le da estilo y responsividad durante el ejercicio 3 y 4, para que al navegar en celulares el menú se transforme en un menú desplegable, como un estilo hamburguesa.
4. Se adiciona una sección inicio en el ejercicio 6, para volver a `index.html` desde cualquier página, junto a ello se suma un boton *estadisticas* que enlaza al producto del ejercicio 6, que es una tabla creada con Datatables. 
5. Para el sprint final del modulo, se le da una funcionalidad que aparezca como modal al hacer click sobre aquella sección.

#### Header
Es la sección con menos cambios durante el proyecto. 
1. En el ejercicio 1 se crean sus componentes.
2. Finalmente en el ejercicio 2 y 3 se le da estilo con CSS y Bootstrap.

#### Main
1. En el ejercicio 1 se genera la estructura HTML del documento con un `<p>` describiendo que es *¿Te lo vendo?*.
2. Durante el ejercicio 2 se le da semantica, asignado a esta parte como la que posee el contenido principal del sitio, además de agregar divisores para las imagenes.
3. Para la actividad 3 se le da responsividad a los textos y las imagenes, esto para que las fotos desplieguen una sobre otra en dispositivos móviles.
4. Para el aprendizaje esperado 4 se agregan las funciones de bootstrap con el mismo objetivo.
5. Durante el sprint para lograr el despliegue de un modal al hacer click en el boton *estadísticas*, se agrega una tabla de forma oculta, que permite la construcción del elemento requerido al ser solicitado por el cliente.

#### Footer
1. Construcción basica del footer durante el ejercicio 1
2. Se le da está definición semantica para el ejercicio 2
3. Durante los ejercicios 3 y 4 se le da estilo con CCS y Bootstrap, sin recibir más modificaciones desde entonces.

## **tabla.JS**

En el seguimiento documento se especifica la funcionalidad del archivo `tabla.js`. Principalmente es usado para definir los datos de una tabla y posteriormente mostrarlos al ejecutarse desde el `Navbar` del sitio web de *TeLoVendo*.

+ _En este proyecto se trabajó con los framework de: `Bootstrap5` y  `Jquery 3.2.1`_


**Block code "Array"**

Se especifica la `data` de cada uno de los productos dentro de la tabla, cada uno de los atributos correspondería a su _ID, nombre , valor , categoría, color_ y _medida_ del producto 
```
var data = [
   { id: "1", nombre: "Pepino", valor: "1500", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "2", nombre: "Porotos", valor: "2300", categoria: "Legumbres", color: "Café", medida: "kg" },
   { id: "3", nombre: "Naranja", valor: "1730", categoria: "Fruta", color: "Naranja", medida: "kg" },
   { id: "4", nombre: "Manzana roja", valor: "1250", categoria: "Fruta", color: "Roja", medida: "kg" },
   { id: "5", nombre: "Platano", valor: "1500", categoria: "Fruta", color: "Amarillo", medida: "kg" },
   { id: "6", nombre: "Choclo", valor: "1200", categoria: "Verdura", color: "Amarillo", medida: "kg" },
   { id: "7", nombre: "Apio", valor: "1000", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "8", nombre: "Papa", valor: "2200", categoria: "Verdura", color: "Cafe", medida: "kg" },
   { id: "9", nombre: "Sandia", valor: "2000", categoria: "Fruta", color: "Roja", medida: "unidad" },
   { id: "10", nombre: "Manzana verde", valor: "1250", categoria: "Fruta", color: "Verde", medida: "kg" },
   { id: "11", nombre: "Garbanzos", valor: "1670", categoria: "Legumbres", color: "Café", medida: "kg" }
]
```



**Block code "función Datatable"**

Se especifica la función para ejecutar la librería de `DataTable`

+ Cuando el documento carga se ejecuta la función
+ Desde el documento se busca el id _#insertInfo_ para ejecutar las siguientes sentencias:
  - Se cambia el lenguaje del `DataTable` a español
  + Desde el `Array` se extraen los datos y se definen en columnas
    * Las columnas están definidas como _data_ y cada uno de sus átributos del `Array[]` se enlaza a una columna de `data[]`
```
$(document).ready(function () {
   $('#insertInfo').DataTable({
      language: {
         url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      data: data,
      columns: [
         { data: 'id' },
         { data: 'nombre' },
         { data: 'valor' },
         { data: 'categoria' },
         { data: 'color' },
         { data: 'medida' }
      ]
   });
});
```

