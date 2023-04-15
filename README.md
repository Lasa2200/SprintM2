# Documentación Sprint Final II

## **Enlace externo**
Esta documentación hace referencia al trabajo grupal sprint modulo 2. <br>
Para ir al __repositorio__ haz click  __[aquí](https://nodeca.github.io/pica/demo/)__

_______________________________________________________________

## **index.html**
En esta seccion describiremos la composición y funcionamiento de nuestro index.html, él cuál está compuesto por una barra de navegación, un título `<h1>` más un subtítulo `<h2>`, prosigue con el `<main>`, que suma un texto explicativo sobre el negocio, una galería de imágenes y una tabla oculta para ser utilizada como modal y finaliza con un `<footer>` compuesto por los nombres de los integrantes del grupo, el nombre del negocio y el año actual.

#### **Barra de navegación**
1. Durante el grupal 1, se hace un listado con las secciones de esta barra.
2. Se incluyó como `<nav>` en el ejercicio grupal 2, con 3 secciones (Pedidos / Seguimiento / Contacto). Las primeras dos opciones sólo aparecen sin llevar a ninguna dirección, mientras que la tercera sección *Contacto* está enlazado a `formulario.html`, un formulario de contacto para contactarse con *Te lo vendo*.
3. Se le da estilo y responsividad durante el ejercicio 3 y 4, para que al navegar en celulares el menú se transforme en un menú desplegable, como un estilo hamburguesa.
4. Se adiciona una sección inicio en el ejercicio 6, para volver a `index.html` desde cualquier página, junto a ello se suma un boton *estadisticas* que enlaza al producto del ejercicio 6, que es una tabla creada con Datatables. 
5. Para el sprint final del modulo, se le da una funcionalidad que aparezca como modal al hacer click sobre aquella sección, junto a ello se elimina el titulo "grupo 1" para ser reeemplazado con una imagen que actua como logo.

#### **Header**
Es la sección con menos cambios durante el proyecto. 
1. En el ejercicio 1 se crean sus componentes.
2. Finalmente en el ejercicio 2 y 3 se le da estilo con CSS y Bootstrap.

#### **Main**
1. En el ejercicio 1 se genera la estructura HTML del documento con un `<p>` describiendo que es *¿Te lo vendo?*.
2. Durante el ejercicio 2 se le da semantica, asignado a esta parte como la que posee el contenido principal del sitio, además de agregar divisores para las imagenes.
3. Para la actividad 3 se le da responsividad a los textos y las imagenes, esto para que las fotos desplieguen una sobre otra en dispositivos móviles.
4. Para el aprendizaje esperado 4 se agregan las funciones de bootstrap con el mismo objetivo.
5. Durante el sprint para lograr el despliegue de un modal al hacer click en el boton *estadísticas*, se agrega una tabla de forma oculta, que permite la construcción del elemento requerido al ser solicitado por el cliente.

#### **Footer**
1. Construcción basica del footer durante el ejercicio 1
2. Se le da está definición semantica para el ejercicio 2
3. Durante los ejercicios 3 y 4 se le da estilo con CCS y Bootstrap, sin recibir más modificaciones desde entonces.

_______________________________________________________________

## **contacto.html**

Este archivo HTML representa la página de contacto de un sitio web. Contiene un formulario que permite a los usuarios enviar un mensaje con su nombre, correo y consulta a través de la página web.

#### **Estructura del documento**

El documento HTML se compone de las siguientes etiquetas y elementos:

- `<!DOCTYPE html>`: Define el tipo de documento como HTML.
- `<html lang="es">`: Define el idioma principal del documento como español.
- `<head>`: Contiene información sobre el documento, como la codificación de caracteres, los metadatos y los enlaces a hojas de estilo y scripts.
- `<meta>`: Proporciona información adicional sobre el documento, como la descripción y las palabras clave.
- `<link>`: Especifica la ubicación de la hoja de estilo que se utilizará para el documento. Esta hoja permite que `<input>` se destaque al momento que el cliente se posiciona sobre él y se resalté en el instante que se está ingresando texto, esta misma función se utiliza para el momento de ingresar información en `<textarea>`.
- `<title>`: Define el título de la página que se mostrará en la pestaña del navegador.
- `<body>`: Contiene el contenido principal de la página.

#### **Composición del `body`**

- `<nav>`: Define una barra de navegación que permite a los usuarios acceder a diferentes secciones del sitio web.
- `<div class="container-fluid d-flex justify-content-center">`: Define un contenedor flexible que centra el contenido horizontalmente.
- `<div class="container m-5 ">`: Define un contenedor con un margen de 5 unidades.
- `<form>`: Define un formulario de contacto que permite a los usuarios enviar un mensaje.
- `<div class="mb-3">`: Define un grupo de elementos del formulario con un margen inferior de 3 unidades.
- `<label>`: Define una etiqueta de texto para un elemento del formulario.
- `<input>`: Define un campo de entrada de texto para un elemento del formulario.
- `<textarea>`: Define un área de texto para que los usuarios escriban su mensaje.
- `<input type="submit" value="Enviar" name="enviar">`: Define un botón de envío que envía el formulario.
- `<script>`: que vinculan archivos JavaScript a la página, estos archivos.

#### **Dependencias externas**

Este archivo HTML depende de las siguientes bibliotecas externas:

- Bootstrap 5.3.0-alpha2: se utiliza para aplicar estilos y clases a los elementos HTML.

_______________________________________________________________

## **estadisticas.html**

#### **Generalidades**

Como se señaló anteriormente, en el ejercicio grupal 6, se solicitó la creación de una nueva hoja html con el nombre `estadisticas.html`. 
Está incluye como elementos principales comunes de las otras paginas como el `<nav>` y el `<footer>`, se encuentra vinculada para los estilos visuales, mediante CDN, a Bootstrap. Junto a ello, posee las siguientes vinculaciones:
- Hoja de estilos main.css que estila al proyecto completo.
- tabla.js para ingresar los datos a la tabla HTML.


#### **Particularidades**

En el `<main>`, hay un `<table>` que se complemente con el archivo `tabla.js`. Este script contiene 6 columnas "id","fruta","$","categoria","color" y "medida", 11 filas con información que rellena la tabla, adicionalmente se incluye un buscador y permite mostrar 10, 25, 50 y 100 registros, junto a ello mostrarlo por paginas. Junto a ello permite ordenar los datos de forma númerica y alfabetica, gracias a flechas en el margen derecho de cada título.

#### **Notas del Sprint final**

Sin embargo, para el Sprint final del módulo 2, se decide desvincular esta página y se decide abrir mediante una tabla desde un modal.

_______________________________________________________________

## **funciones.js**

El archivo `funciones.js` contiene la función creada para capturar y validar  visualmente la información ingresada en el formulario que está en el archivo de `contacto.html`. <br>
La función llama al formulario y agrega los eventos que producen al presionar el evento `submit`, se crean variables para manejar cada uno de los `input`, comparamos la cantidad de caracteres de cada campo, sí este es 0, se asume que está vacío y aparece un aviso que se debe completar este campo. Esta validación se aplica a los 3 campos del formulario(usuario /correo / hablanos de tí). Sí todos los campos son validados se redirecciona a `index.html`
​
```
formulario.addEventListener('submit', function (event) {    //generamos una accion al presionar el boton submit
    event.preventDefault();                                 //prevenimos el evento por defecto, en este caso el 'submit'
    let nombre = document.querySelector('#nombre').value    //creamos variables para manejar cada uno de los input     
    let correo = document.querySelector('#correo').value
    let sobreti = document.querySelector('#texto').value
    if (nombre.length == 0) {                               //comparamos la cantidad de caracteres de cada campo
        alert("Por favor rellene el campo del nombre");     //en caso de que sea 0, se asume que está vacío
        document.querySelector('#nombre').focus();          //por ende se solicita que se rellene el campo faltante
    }                                                       //asimismo llevamos el foco al campo vacío.
    else if (correo.length == 0) {
        alert("Por favor rellene el campo del correo");
        document.querySelector('#correo').focus();
    }
    else if (sobreti.length == 0) {
        alert("Por favor rellene sobre el 'Sobre tí'");
        document.querySelector('#texto').focus();
    }
    else {
        window.location.href = "http://127.0.0.1:5500/";    //en caso de pasar cada una de las condiciones, se reenvía al index
                                                            // document.formulario.submit();
    }
});
```

_______________________________________________________________

## **tabla.js**

En el siguiente documento se especifica la funcionalidad del archivo `tabla.js`. Principalmente es usado para definir los datos de una tabla y posteriormente mostrarlos al ejecutarse desde el `Navbar` del sitio web de *TeLoVendo*.

+ _En este proyecto se trabajó con los framework de: `Bootstrap5` y  `Jquery 3.2.1`_

#### **Block code "Array"**

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

#### **Block code "función Datatable"**

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

