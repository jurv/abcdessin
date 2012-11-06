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
 * Fonction de gestion de la page "Apprentissage".
 */
pageApprentissage = function () {
	
	// Lettre courante
	this.currentLetter = 'z';
	// Manager des lettres
	this.managerLetter = new imageHandler();
	
	/*
	 * Fonction permettant de récupérer la lettre suivante celle passée en paramètres
	 */
	this.getNextLetter = function ( ) {
		
		// Mise en place du bouclage sur l'alphabet
		if(this.currentLetter == 'z') {
			this.currentLetter = 'a';
			return true;
		}
		
		// On récupère le numéro de caractère
		var charIndex = this.currentLetter.charCodeAt(0);
			
		// Reconstitution de la lettre
		charIndex ++;
		this.currentLetter = String.fromCharCode(charIndex);
	}
	
	/*
	 * Fonction permettant de récupérer la lettre précédent celle passée en paramètres
	 */
	this.getPreviousLetter = function ( ) {
		
		// Mise en place du bouclage sur l'alphabet
		if(this.currentLetter == 'a') {
			this.currentLetter = 'z';
			return true;
		}
		
		// On récupère le numéro de caractère
		var charIndex = this.currentLetter.charCodeAt(0);
			
		// Reconstitution de la lettre
		charIndex --;
		this.currentLetter = String.fromCharCode(charIndex);
	}
	
	/*
	 * Fonction permettant de retourner la lettre courante en capitale.
	 * 
	 * @param : isCursive : Police cursive ?
	 */
	this.printCapitalLetter = function (isCursive) {
		
		return this.managerLetter.getHtmlRessource(this.currentLetter.toUpperCase(), isCursive);
	}
	
	/*
	 * Fonction permettant de retourner la lettre courante en non capitale.
	 * 
	 * @param : isCursive : Police cursive ?
	 */
	this.printLowerLetter = function (isCursive) {
		
		return this.managerLetter.getHtmlRessource(this.currentLetter.toLowerCase(), isCursive);
	}
	
	/*
	 * Fonction permettant d'afficher la lettre suivante dans les divs
	 */
	this.toNextLetter = function () {
		
		// On passe à la lettre suivante
		this.getNextLetter();
		
		// Lettre majuscule non cursive
		$('#maj_letter_display').html(this.printCapitalLetter(false));
		// Lettre minuscule non cursive
		$('#min_letter_display').html(this.printLowerLetter(false));
		// Lettre minuscule cursive
		$('#cur_letter_display').html(this.printLowerLetter(true));
	}
	
	/*
	 * Fonction permettant d'afficher la lettre précédente dans les divs
	 */
	this.toPreviousLetter = function () {
	
		// On passe à la lettre suivante
		this.getPreviousLetter();
		
		// Lettre majuscule non cursive
		$('#maj_letter_display').html(this.printCapitalLetter(false));
		// Lettre minuscule non cursive
		$('#min_letter_display').html(this.printLowerLetter(false));
		// Lettre minuscule cursive
		$('#cur_letter_display').html(this.printLowerLetter(true));
	}
}
