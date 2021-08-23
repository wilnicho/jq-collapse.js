/**
 * 
 * jq-collapse v0.5
 *
 * https://github.com/wilnicho/jq-collapse.js
 * 
 * copyright (c) 2020 wilfredo nina choquetarqui
 * 
 */

// Define el uso estricto de javascript
'use strict';

// Extiende la función de jquery
jQuery.fn.extend({

	// Define el nombre de la función y los parámetros de entrada
	jq_collapse: function (options) {

		// Define las variables generales
		let $window = $(window), $document = $(document), $actions = $(this);

		// Define los parámetros por defecto
		let settings = {
			type: 'vertical',
			time: 0.5,
			size: 'auto',
			slide: false,
			fade: false,
			save: false,
			storage: 'session',
			responsive: true,
			media: 768
		}

		// Define la función para convertir un valor textual en un valor booleano
		const parseBoolean = function (string) {

			// Verifica y retorna el valor booleano
			return (string === true || string === 'true') ? true : false;

		}

		// Define la función para limpiar los parámetros de un elemento
		const _sanitize = function (parameters) {

			// Limpia los parámetros de acuerdo a su tipo
			parameters.type = ($.inArray(parameters.type, ['horizontal', 'vertical']) >= 0) ? parameters.type : settings.type;
			parameters.time = ($.isNumeric(parameters.time)) ? parseFloat(parameters.time) : settings.time;
			parameters.size = ($.isNumeric(parameters.size)) ? parseInt(parameters.size) : settings.size;
			parameters.slide = ($.inArray(parameters.slide, [true, false, 'true', 'false']) >= 0) ? parseBoolean(parameters.slide) : settings.slide;
			parameters.fade = ($.inArray(parameters.fade, [true, false, 'true', 'false']) >= 0) ? parseBoolean(parameters.fade) : settings.fade;
			parameters.save = ($.inArray(parameters.save, [true, false, 'true', 'false']) >= 0) ? parseBoolean(parameters.save) : settings.save;
			parameters.storage = ($.inArray(parameters.storage, ['session', 'local']) >= 0) ? parameters.storage : settings.storage;
			parameters.responsive = ($.inArray(parameters.responsive, [true, false, 'true', 'false']) >= 0) ? parseBoolean(parameters.responsive) : settings.responsive;
			parameters.media = ($.isNumeric(parameters.media)) ? parseInt(parameters.media) : settings.media;

			// Retorna los parámetros
			return parameters;

		}

		// Define la función para obtener los parámetros de un elemento
		const _get = function ($action) {

			// Define las variables
			let type, time, size, slide, fade, save, storage, responsive, media;

			// Obtiene los parámetros y elimina los espacios en blanco
			type = $.trim($action.attr('data-jqcollapse-type'));
			time = $.trim($action.attr('data-jqcollapse-time'));
			size = $.trim($action.attr('data-jqcollapse-size'));
			slide = $.trim($action.attr('data-jqcollapse-slide'));
			fade = $.trim($action.attr('data-jqcollapse-fade'));
			save = $.trim($action.attr('data-jqcollapse-save'));
			storage = $.trim($action.attr('data-jqcollapse-storage'));
			responsive = $.trim($action.attr('data-jqcollapse-responsive'));
			media = $.trim($action.attr('data-jqcollapse-media'));

			// Limpia y retorna los parámetros
			return _sanitize({
				type: (type) ? type : options.type,
				time: (time) ? time : options.time,
				size: (size) ? size : options.size,
				slide: (slide) ? slide : options.slide,
				fade: (fade) ? fade : options.fade,
				save: (save) ? save : options.save,
				storage: (storage) ? storage : options.storage,
				responsive: (responsive) ? responsive : options.responsive,
				media: (media) ? media : options.media
			});

		}

		// Reformula los parámetros de entrada con los parámetros por defecto
		options = $.extend({}, settings, options);

		// Limpia los parámetros para evitar resultados no deseados
		options = _sanitize(options);

		// Define y ejecuta el evento cambio de tamaño de la ventana
		$window.on('resize', function () {

			// Recorre los elementos de acción
			$actions.each(function () {

				// Obtiene el elemento de acción actual
				let $action = $(this);

				// Obtiene los elementos de reacción
				let $reactions = $('[data-jqcollapse-reaction="' + $.trim($action.attr('data-jqcollapse-action')) + '"]');

				// Obtiene los parámetros del elemento de acción actual
				let parameters = _get($action);

				// Verifica si el tipo del elemento de acción es horizontal o vertical
				if (parameters.type == 'vertical') {

					// Verifica si el elemento de acción es responsivo y cambia el ancho de los elementos de reacción
					$reactions.css('height', ($document.outerWidth() < parameters.media && parameters.responsive) ? 'auto' : parameters.size);

				} else {

					// Verifica si el elemento de acción es responsivo y cambia el ancho de los elementos de reacción
					$reactions.css('width', ($document.outerWidth() < parameters.media && parameters.responsive) ? 'auto' : parameters.size);

				}

			});

		}).trigger('resize');

		// Recorre los elementos de acción
		$actions.each(function () {

			// Obtiene el elemento de acción actual
			let $action = $(this);

			// Obtiene los elementos de reacción
			let $reactions = $('[data-jqcollapse-reaction="' + $.trim($action.attr('data-jqcollapse-action')) + '"]');

			// Obtiene los parámetros del elemento de acción actual
			let parameters = _get($action);

			// Define la variable de opacidad
			let opacity;

			// Verifica si el elemento de acción actual permite almacenar su estado
			if (parameters.save) {

				// Verifica si el estado del elemento de acción actual es oculto o visible
				if (((parameters.storage == 'session') ? sessionStorage.getItem('jqcollapse' + window.location.pathname + $.trim($action.attr('data-jqcollapse-action'))) : localStorage.getItem('jqcollapse' + window.location.pathname + $.trim($action.attr('data-jqcollapse-action')))) == 'hide') {

					// Cambia el estado del elemento de acción actual a oculto
					$action.attr('data-jqcollapse-state', 'hide');

					// Determina la opacidad
					opacity = (parameters.fade) ? 0 : 1;

					// Verifica si el elemento de acción es responsivo
					if ($document.outerWidth() < parameters.media && parameters.responsive) {

						// Oculta los elementos de reacción con referencia al alto
						$reactions.stop().animate({
							height: 'toggle',
							opacity: opacity
						}, 0);

					} else {

						// Verifica si el tipo del elemento de acción es horizontal o vertical
						if (parameters.type == 'vertical') {

							// Oculta los elementos de reacción con referencia al ancho
							$reactions.stop().animate({
								height: 'toggle',
								opacity: opacity
							}, 0);

						} else {

							// Oculta los elementos de reacción con referencia al ancho
							$reactions.stop().animate({
								width: 'toggle',
								opacity: opacity
							}, 0);

						}

					}

				} else {

					// Cambia el estado del elemento de acción actual a visible
					$action.attr('data-jqcollapse-state', 'show');

				}

			} else {

				// Cambia el estado del elemento de acción actual a visible
				$action.attr('data-jqcollapse-state', 'show');

			}

		});

		// Define el evento clic en los elementos de acción
		$actions.on('click', function (e) {

			// Obtiene el elemento de acción actual
			let $action = $(this);

			// Obtiene los elementos de reacción
			let $reactions = $('[data-jqcollapse-reaction="' + $.trim($action.attr('data-jqcollapse-action')) + '"]');

			// Obtiene los parámetros del elemento de acción actual
			let parameters = _get($action);

			// Define la variable de animación
			let animation;

			// Cancela el comportamiento del evento por defecto
			e.preventDefault();

			// Verifica si el tipo del elemento de acción es horizontal o vertical
			if (parameters.type == 'vertical') {

				// Verifica si el elemento de acción es responsivo y asigna la animación con referencia al alto o ancho
				animation = { height: 'toggle' };

			} else {

				// Verifica si el elemento de acción es responsivo y asigna la animación con referencia al alto o ancho
				animation = ($document.outerWidth() < parameters.media && parameters.responsive) ? { height: 'toggle' } : { width: 'toggle' };

			}

			// Reasigna el parámetro tiempo de acuerdo a la animación
			parameters.time = (parameters.slide) ? parameters.time : 0;

			// Verifica si el estado del elemento actual es visible u oculto
			if ($action.attr('data-jqcollapse-state') == 'show') {

				// Cambia el estado del elemento actual a oculto
				$action.attr('data-jqcollapse-state', 'hide');

				// Asigna la opacidad
				animation.opacity = (parameters.fade) ? 0 : 1;

				// Ejecuta el evento antes de ocultar los elementos de reacción
				$action.trigger('hide.jq.collapse', [$reactions]);

				// Oculta los elementos de reacción con la animación definida
				$reactions.stop().animate(animation, parameters.time * 1000, function () {

					// Reinicia el desplazamiento a su estado inicial
					$reactions.scrollTop(0);

					// Ejecuta el evento después de ocultar los elementos de reacción
					$action.trigger('hidden.jq.collapse', [$(this)]);

				});

			} else {

				// Cambia el estado del elemento actual a visible
				$action.attr('data-jqcollapse-state', 'show');

				// Asigna la opacidad
				animation.opacity = 1;

				// Ejecuta el evento antes de mostrar los elementos de reacción
				$action.trigger('show.jq.collapse', [$reactions]);

				// Muestra los elementos de reacción con la animación definida
				$reactions.stop().animate(animation, parameters.time * 1000, function () {

					// Reinicia el desplazamiento a su estado inicial
					$reactions.scrollTop(0);

					// Ejecuta el evento después de mostrar los elementos de reacción
					$action.trigger('shown.jq.collapse', [$(this)]);

				});

			}

			// Verifica si el elemento actual permite almacenar su estado
			if (parameters.save) {

				// Verifica si el tipo de almacenamiento del elemento actual es sesion o local
				if (parameters.storage == 'session') {

					// Almacena el estado del elemento actual en la memoria del navegador
					sessionStorage.setItem('jqcollapse' + window.location.pathname + $.trim($action.attr('data-jqcollapse-action')), $action.attr('data-jqcollapse-state'));

				} else {

					// Almacena el estado del elemento actual en la memoria del navegador
					localStorage.setItem('jqcollapse' + window.location.pathname + $.trim($action.attr('data-jqcollapse-action')), $action.attr('data-jqcollapse-state'));

				}

			}

		});

	}

});