bs-dropzone.js
==============

Es una extensión para `jQuery` y `Bootstrap` que permite transformar visualmente un elemento de entrada para archivos `<input type="file">` en un elemento que permite los gestos de arrastrar y soltar dentro de una zona, es totalmente personalizable y permite hacer una llamada de función cuando el evento change es ejecutado.

Documentación y ejemplos [aquí](https://wilnicho.github.io/bs-dropzone.js).

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
