/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$('#page-home').live('pageinit', function(event){  
    $('.api-div').hide();
    $('.api-div#api-intro').show();
    
    $('#intro').click(function() {
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);            
    });
    
    $('div ul li a').click(function(event) {
        event.preventDefault();
        //alert('clicked : ' + $(this).attr('id'));
        var attrId = $(this).attr('id');

        if (attrId.indexOf("click") !== 0) {
            return;
        }
        
        var api = '#api' + attrId.substring(attrId.indexOf('-'));
        
        // hide all div's, show only this one
        $('.api-div').hide();
        $(api).show();

        // if small screen and portrait - close after tap
        var disp = $('ul #listdivider').css("display");
        //alert(disp + ' : ' + api);
        if (disp === 'none') {
            $('div.ui-collapsible').trigger("collapse");
        } else {
            $.mobile.silentScroll(0);            
        }
    }); 
    
    $('#listdivider').click(function(event) {
        event.preventDefault();
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    });
});

/*
 * Fonction appellée lorsque la page est chargée.
 */
$(document).ready(function() {
	/*var imageManager = new imageHandler();
	var soundManager = new soundHandler();
	imageManager.getRessource('a');
	imageManager.getRessource('A');
	imageManager.getHtmlRessource('A');
	soundManager.playSound('a');*/
});

/*
 * Classe permettant la gestion de la page "Apprentissage".
 */
pageApprentissage = function () {
	
	// Numéro d'autolecture
	var autoPlayInt = 0;
	this.autoPlayInt = autoPlayInt;
	
	// Lettre courante
	var currentLetter = 'z';
	this.currentLetter = currentLetter;
	
	// Manager des lettres
	var managerLetter = new imageHandler();
	this.managerLetter = managerLetter;
	
	// Manager des sons
	var managerSong = new soundHandler();
	this.managerSong = managerSong;
	
	/*
	 * Fonction permettant d'initialiser la page.
	 */
	var initialize = function () {
		
		// On initialise les lettres
		pageManager.toNextLetter();
	}
	this.initialize = initialize;
	
	/*
	 * Fonction permettant de récupérer la lettre suivante celle passée en paramètres
	 */
	var getNextLetter = function ( ) {
		
		// Mise en place du bouclage sur l'alphabet
		if(currentLetter == 'z') {
			currentLetter = 'a';
			return true;
		}
		
		// On récupère le numéro de caractère
		var charIndex = currentLetter.charCodeAt(0);
			
		// Reconstitution de la lettre
		charIndex ++;
		currentLetter = String.fromCharCode(charIndex);
	}
	
	/*
	 * Fonction permettant de récupérer la lettre précédent celle passée en paramètres
	 */
	var getPreviousLetter = function ( ) {
		
		// Mise en place du bouclage sur l'alphabet
		if(currentLetter == 'a') {
			currentLetter = 'z';
			return true;
		}
		
		// On récupère le numéro de caractère
		var charIndex = currentLetter.charCodeAt(0);
			
		// Reconstitution de la lettre
		charIndex --;
		currentLetter = String.fromCharCode(charIndex);
	}
	
	/*
	 * Fonction permettant de retourner la lettre courante en capitale.
	 * 
	 * @param : isCursive : Police cursive ?
	 */
	var printCapitalLetter = function (isCursive) {
		
		return managerLetter.getHtmlRessource(currentLetter.toUpperCase(), isCursive);
	}
	this.printCapitalLetter = printCapitalLetter;
	
	/*
	 * Fonction permettant de retourner la lettre courante en non capitale.
	 * 
	 * @param : isCursive : Police cursive ?
	 */
	var printLowerLetter = function (isCursive) {
		
		return managerLetter.getHtmlRessource(currentLetter.toLowerCase(), isCursive);
	}
	this.printLowerLetter = printLowerLetter;
	
	/*
	 * Fonction permettant d'afficher la lettre suivante dans les divs
	 */
	var toNextLetter = function () {
		
		// On passe à la lettre suivante
		getNextLetter();
		
		// Lettre majuscule non cursive
		$('#maj_letter_display').html(printCapitalLetter(false));
		// Lettre minuscule non cursive
		$('#min_letter_display').html(printLowerLetter(false));
		// Lettre minuscule cursive
		$('#cur_letter_display').html(printLowerLetter(true));
		
		// On lit la lettre
		readLetter();
	}
	this.toNextLetter = toNextLetter;
	
	/*
	 * Fonction permettant d'afficher la lettre précédente dans les divs
	 */
	var toPreviousLetter = function () {
	
		// On passe à la lettre suivante
		getPreviousLetter();
		
		// Lettre majuscule non cursive
		$('#maj_letter_display').html(printCapitalLetter(false));
		// Lettre minuscule non cursive
		$('#min_letter_display').html(printLowerLetter(false));
		// Lettre minuscule cursive
		$('#cur_letter_display').html(printLowerLetter(true));
		
		// On lit la lettre
		readLetter();
	}
	this.toPreviousLetter = toPreviousLetter;
	/*
	 * Fonction permettant de jouer le son de lecture de la lettre courante.
	 */
	var readLetter = function () {
		// On lance la lecture de la lettre
		managerSong.playSound(currentLetter);
	}
	this.readLetter = readLetter;
	
	/*
	 * Fonction permettant de passer automatiquement les lettres toutes les 5 secondes.
	 */
	var play = function () {
		if(this.autoPlayInt == 0) {
			this.autoPlayInt = setInterval(toNextLetter, 3000);
		}
	}
	this.play = play;
	
	/*
	 * Fonction permettant de stoper le défilement automatique.
	 */
	var stop = function () {
		clearInterval(this.autoPlayInt);
		this.autoPlayInt = 0;
	}
	this.stop = stop;
}

/*
 * Classe permettant la gestion de la page "Jeux d'écoute".
 */
pageJeuxEcoute = function () {
    // Numéro d'autolecture
    var autoPlayInt = 0;
    this.autoPlayInt = autoPlayInt;
    
    // Génération de la lettre à trouver
    // Séléction de la lettre dans la plage minuscule de la table ascii
    var currentLetter = 97 + Math.floor(Math.random() * 122);
    this.currentLetter = String.fromCharCode(currentLetter);
    alert(this.currentLetter +currentLetter);
    // Manager des lettres
    var managerLetter = new imageHandler();
    this.managerLetter = managerLetter;
    
    // Manager des sons
    var managerSong = new soundHandler();
    this.managerSong = managerSong;
    
	/*
	 * Fonction permettant d'initialiser la page.
	 */
	var initialize = function () {
		
		// On initialise les lettres
		pageManager.toNextLetter();
	}
	this.initialize = initialize;
}
