jq-collapse.js
==============

Es una extensión para `jQuery` que permite ocultar y mostrar el contenido de un elemento con algunos atributos de datos `data-*`, para su ejecución se necesita de un elemento que acciona y otro que reacciona con una animación de cambio de alto o ancho según sea el caso.

Documentación y ejemplos [aquí](https://wilnicho.github.io/jq-collapse.js).

¿Qué necesito?
--------------
Un navegador moderno y las dependencias de `jQuery` y `Bootstrap` en sus versiones correspondientes.

¿Cómo se usa?
-------------
Incluya dentro de su proyecto los archivos `bs-dropzone.css` y `bs-dropzone.js` que debe descargar previamente.

```html static
<link rel="stylesheet" href="bs-dropzone.css">
```
```html static
<script type="text/javascript" src="bs-dropzone.js"></script>
```

#### Aplicación por defecto.

```html static
<input type="file" name="file">
```
```js static
// aplica arrastrar y soltar en el elemento :file
$('#elemento').bs_dropzone();
```
