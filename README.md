jq-collapse.js
==============

Es una extensión para `jQuery` que permite ocultar y mostrar el contenido de un elemento con algunos atributos de datos `data-*`, para su ejecución se necesita de un elemento que acciona y otro que reacciona con una animación de cambio de alto o ancho según sea el caso.

Documentación y ejemplos [aquí](https://wilnicho.github.io/jq-collapse.js).

¿Qué necesito?
--------------
Un navegador moderno y la dependencia de `jQuery` en su última versión.

¿Cómo se usa?
-------------
Incluya dentro de su proyecto el archivo `jq-collapse.js` que debe descargar previamente.

```html static
<script type="text/javascript" src="jq-collapse.js"></script>
```

### 1. Implementación
La implementación por defecto está definida de la siguiente manera:

```html static
<button type="button" id="ejecutar" data-jqcollapse-action="1">Ejecutar</button>
<p data-jqcollapse-reaction="1">A menudo mis alumnos me preguntan...</p>
```
```js static
// implementación por defecto
$('#ejecutar').jq_collapse();
```
