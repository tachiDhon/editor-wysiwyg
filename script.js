(function($)
{
	$.fn.zone_texte=function( options )
	{
		// les options
		var settings = $.extend({
            buttons: []
        }, options );

		// fonction pour modifier le texte surligné
		function button_command(nom, element) {
			if (typeof element === 'undefined') {
				element = "";
			}
			document.execCommand(nom, false, element);
		}

		// on utilise le Jquery pour jouer avec le DOM pour commencer à placer notre site
		$('textarea').replaceWith('<div class="container" id="zone_texte" contentEditable="true"></div>');

		// on vérifie si le bouton est demandé si OUI, on le créé via JQUERY
		if(settings.buttons.indexOf('bold') != -1) {
					$('#zone_texte').before('<input type="button" value="G" style="font-weight: bold;" id="bold"/>');
		}

		if(settings.buttons.indexOf('italic') != -1) {
			$('#zone_texte').before('<input type="button" value="I" style="font-weight: italic;" id="italic" />');
		}

		if(settings.buttons.indexOf('color') != -1) {
			$('#zone_texte').before('<input type="color" id="color">');
		}

		if(settings.buttons.indexOf('texte barré') != -1) {
			$('#zone_texte').before('<input type="button" value="U" style="text-decoration: line-through" id="lineT">');
		}

		if(settings.buttons.indexOf('taille police') != -1) {
			$('#zone_texte').before('<select id="monselect"></select>');
			for(i=1; i <=7 ; i+=1) {
				$('#monselect').append('<option value="'+i+'">'+ i +'</option>')
			  }
		}

		if(settings.buttons.indexOf('lien') != -1) {
			$('#zone_texte').before('<input type="button" value="Lien" id="lien">');
		}

		if(settings.buttons.indexOf('justif à gauche') != -1) {
			$('#zone_texte').before('<input type="button" value="Texte à gauche" id="justifL">');
		}

		if(settings.buttons.indexOf('justif à droite') != -1) {
			$('#zone_texte').before('<input type="button" value="Texte à droite" id="justifR">');
		}

		if(settings.buttons.indexOf('justif center') != -1) {
			$('#zone_texte').before('<input type="button" value="Centrer le texte" id="justifM">');
		}
		// on place ici les boutons pour le résultat
		$('#zone_texte').after('<input type="button" id="renduButton" value="Obtenir le HTML" />');
		$('#renduButton').after('<textarea id="rendu"></textarea>');


		// on créé la fonction pour utiliser notre fonction perso pour modifier le texte
		$('#bold').click(function() {
			button_command('bold');
		})

		$('#italic').click(function() {
			button_command('italic');
		})

		$('#color').click(function() {
			button_command('foreColor', $('#color').val());
		})

		$('#lineT').click(function() {
			button_command('strikeThrough');
		})

		$('#monselect').click(function() {
			button_command('fontSize',$('#monselect option:selected').text());
		})

		$('#lien').click(function() {
			button_command('createLink', "https://www.google.com");
		})

		$('#justifL').click(function() {
			button_command('justifyLeft');
		})

		$('#justifR').click(function() {
			button_command('justifyRight');
		})

		$('#justifM').click(function() {
			button_command('justifyCenter');
		})

		// on créé le texte en html pour récupérer les balises
		$('#renduButton').click(function() {
				$('#rendu').text($("#zone_texte").html().replace('&nbsp;', ' '));
		})
    }
})(jQuery);
