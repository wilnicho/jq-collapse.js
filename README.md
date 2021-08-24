jq-collapse.js
==============

Proyecto mantenido por `Wilfredo Nina Choquetarqui`.

Documentación y ejemplos [aquí](https://wilnicho.github.io/jq-collapse.js).

¿Qué es jq-collapse.js?
-----------------------

Es una extensión para `jQuery` que permite ocultar y mostrar el contenido de un elemento con algunos atributos de datos `data-*`, para su ejecución se necesita de un elemento que acciona y otro que reacciona con una animación de cambio de alto o ancho según sea el caso.

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

### 2. Animación
Para incluir animación en los elementos a ocultar o mostrar debe asignar valores a los parámetros de desplazamiento, opacidad y tiempo respectivamente, estos parámetros pueden definirse de manera general en `javascript` o de manera individual en `html` como atributos de datos. Los valores de los parámetros deben ser booleanos para el desplazamiento como para la opacidad y numéricos para el tiempo, ya que este está definido en segundos.

```html static
<!-- asignación de parámetros de manera individual -->
<button type="button" id="ejecutar" data-jqcollapse-action="1" data-jqcollapse-slide="true" data-jqcollapse-fade="true" data-jqcollapse-time="1">Ejecutar</button>
<p data-jqcollapse-reaction="1">A menudo mis alumnos me preguntan...</p>
```
```js static
// asignación de parámetros de manera general
$('#ejecutar').jq_collapse({
    slide: true,
    fade: true,
    time: 1
});
```

### 3. Posición y tamaño
La posición en los elementos a ocultar o mostrar pueden ser definidos como horizontal o vertical según sea el caso y el tamaño puede ser variable en píxeles estando por defecto un ancho y un alto automáticos. Estos parámetros pueden definirse de manera general en `javascript` o de manera individual en `html` como atributos de datos. Estas funcionalidades sólo pueden ser perceptibles cuando hay algún tipo de animación en ejecución.

```html static
<!-- asignación de parámetros de manera individual -->
<button type="button" id="ejecutar" data-jqcollapse-action="1" data-jqcollapse-type="horizontal" data-jqcollapse-size="200">Ejecutar</button>
<p data-jqcollapse-reaction="1">A menudo mis alumnos me preguntan...</p>
```
```js static
// asignación de parámetros de manera general
$('#ejecutar').jq_collapse({
    type: 'horizontal', // horizontal o vertical
    size: 200,
    slide: true
});
```

### 4. Persistencia
En los elementos a ocultar o mostrar se puede definir un parámetro con el cual el estado de ese elemento puede persistir sin importar que el usuario recargue la página, para esto debe activar el parametro save y definir el modo de almacenamiento como `sessionStorage` o `localStorage` según el caso. Estos parámetros pueden definirse de manera general en `javascript` o de manera individual en `html` como atributos de datos.

```html static
<!-- asignación de parámetros de manera individual -->
<button type="button" id="ejecutar" data-jqcollapse-action="1" data-jqcollapse-save="true" data-jqcollapse-storage="session">Ejecutar</button>
<p data-jqcollapse-reaction="1">A menudo mis alumnos me preguntan...</p>
```
```js static
// asignación de parámetros de manera general
$('#ejecutar').jq_collapse({
    save: true,
    storage: 'session' // session o local
});
```

### 5. Comportamiento responsivo
Los elementos a ocultar o mostrar por defecto tienen un comportamiento responsivo, es decir que su funcionalidad cambia de acuerdo al tamaño de la pantalla. Los parámetros tipo y tamaño serán afectados cuando el tamaño de la pantalla sea menor a 768 píxeles por defecto, en otras palabras tendrá un comportamiento parecido a `@media(min-width: 768px)` que se define en css.

Cuando el parámetro `responsive` está activado el tamaño del elemento cambiará de cualquier valor numérico definido inicialmente a uno automático y el tipo cambiará siempre a vertical sea cual sea su valor inicial, ahora cuando el parámetro `responsive` está desactivado el funcionamiento definido inicialmente se mantiene constante, tal es el caso del siguiente ejemplo.

```html static
<!-- asignación de parámetros de manera individual -->
<button type="button" id="ejecutar" data-jqcollapse-action="1" data-jqcollapse-save="true" data-jqcollapse-storage="session">Ejecutar</button>
<p data-jqcollapse-reaction="1">A menudo mis alumnos me preguntan...</p>
```
```js static
// asignación de parámetros de manera general
$('#ejecutar').jq_collapse({
    responsive: false,
    media: 768,
    type: 'horizontal',
    slide: true
});
```

### 6. Eventos
Cuando los elementos a ocultar o mostrar son ejecutados se disparan ciertos eventos, los cuales pueden ser personalizados.

| Evento | Descripción |
| - | - |
| show.jq.collapse | Este evento se dispara inmediatamente cuando el método `show` es invocado. |
| shown.jq.collapse | Este evento se dispara cuando un elemento de reacción termina de hacerce visible incluyendo el tiempo de animación. |
| hide.jq.collapse | Este evento se dispara inmediatamente cuando el método `hide` es invocado. |
| hidden.jq.collapse | Este evento se dispara cuando un elemento de reacción termina de ocultarse incluyendo el tiempo de animación. |

```js static
$('#ejecutar').on('shown.jq.collapse', function () {
    // código a ejecutar
});
```

Como habrá visto la librería es muy fácil de implementar y personalizar, el comportamiento responsivo y la capacidad de persistencia la hace una herramienta muy poderosa.

Esta herramienta fue desarrollada pensando también para dar la funcionalidad de ocultar y mostrar a elementos de un `layout`, si desea entrar en mayor detalle puede ingresar al siguiente enlace [cs-layout.css](https://wilnicho.github.io/cs-layout.css).

Licencia
-------------------------
Copyright © 2020 Wilfredo Nina Choquetarqui; Publicado bajo la licencia MIT.
