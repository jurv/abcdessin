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
        /*
        var h = $("#cur_letter_display").height();
        $("#min_letter_display").height(h+"px");
        */
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
};


/*
 * Classe permettant la gestion de la page "Jeux d'écoute".
 */
pageJeuxEcoute = function () {
    
    // Numéro d'autolecture
    var autoPlayInt = 0;
    this.autoPlayInt = autoPlayInt;
    
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
     * Fonction permettant de retourner la lettre courante en capitale.
     * 
     * @param : isCursive : Police cursive ?
     */
    var printCapitalLetter = function (letter, isCursive) {
        return managerLetter.getHtmlRessource(letter, isCursive);
    }
    this.printCapitalLetter = printCapitalLetter;
    
    /*
     * Fonction permettant d'afficher la lettre suivante dans les divs
     */
    var toNextLetter = function () {
        $("#validletter").html(printCapitalLetter("?",true));
        $("#validletter").css("background","#ffffff")
        // On passe à la lettre suivante
        //on regénère l'ensemble des lettre
        var tabLetters = new Array;
        var i = 0;
        //pour chaque div on génère une lettre
        $('.smallDisplay').each(function(){
            var letter = managerLetter.generateRandomLetter();
            tabLetters[i] = letter;
            $(this).html(managerLetter.getHtmlRessource(letter.toLowerCase(), true));
            i++;
        });
        
        //on sélectionne la lettre valide au hasard
        var position = Math.floor(Math.random() * tabLetters.length);
        this.validLetter = tabLetters[position];
        
        // On lance la lecture de la lettre
        managerSong.playSound(this.validLetter);
    }
    this.toNextLetter = toNextLetter;
    
    var validate = function(el) {
        html   = $(el).html();
        letter = $(el).find("span:first").html();
        place  = false;
        if(letter == this.validLetter){
            $("#validletter").html(printCapitalLetter(this.validLetter,true));
            $("#validletter").css("background","#99E26E")
            managerSong.playWin();
            setInterval(toNextLetter, 3000);
        }else{
            managerSong.playFail();
        }
    }
    this.validate = validate;
    
    var readLetter = function() {
        // On lance la lecture de la lettre
        managerSong.playSound(this.validLetter);
    } 
    this.readLetter = readLetter;
    
 }

/*
 * Classe permettant la gestion de la page de menu principal.
 */
pageMainMenu = function () {
    // Numéro d'autolecture
    var autoPlayInt = 0;
    this.autoPlayInt = autoPlayInt;
    
    // Génération de la lettre à trouver
    // Séléction de la lettre dans la plage minuscule de la table ascii
    var currentLetter = 97 + Math.floor(Math.random() * 122);
    this.currentLetter = String.fromCharCode(currentLetter);

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
        
        // On initialise le menu
        initializeMenu();
    };
    this.initialize = initialize;
    
    $(window).resize(function(){
        initialize();
    });
    
    /*
     * Fonction permettant d'initialiser les menus de la page
     */
    var initializeMenu = function () {
        
        // On resize les lignes
        var h = $(window).height();
        var l = $(window).width();

        // On enlève les 10 px de padding
        h -= 50;
        
        // On divise par trois
        hu = h / 3;
        hu = Math.round(hu);
        
        // On répercute sur les lignes
        $('.ligne').css('height', hu + 'px');
        $('.tile').css('height', hu + 'px');
        nbDiv = 0;
        $('.ligne').each(function() { 
            nbDiv = 0;
            $(this).css('width', l);
            $(this).find('.tile').each(function() {
                nbDiv++;
            });
            $(this).find('.tile').each(function() {
                $(this).css('width', Math.round((l-2) / nbDiv) + 'px');
            });
        });
        
    };
    this.initializeMenu = initializeMenu;
};

/*
 * Classe permettant la gestion de la page de menu de jeux.
 */
pageMenuJeux = function () {
    
    var imageManager = new imageHandler();
    this.imageManager = imageManager;
    
    /*
     * Fonction permettant d'initialiser la page.
     */
    var initialize = function () {
        
        // On initialise le menu
        initializeMenu();
        
        // On initialise les textes des menus
        initializeMenuCaption();
    };
    this.initialize = initialize;
    
    $(window).resize(function(){
        initialize();
    });
    
    /*
     * Fonction permettant d'initialiser les menus de la page
     */
    var initializeMenu = function () {
        
        // On resize les lignes
        var h = $(window).height();
        var l = $(window).width();

        // On enlève les 10 px de padding
        h -= 50;
        
        // On divise par trois
        hu = h / 3;
        hu = Math.round(hu);
        
        // On répercute sur les lignes
        $('.ligne').css('height', hu + 'px');
        $('.tile').css('height', hu + 'px');
        nbDiv = 0;
        $('.ligne').each(function() { 
            nbDiv = 0;
            $(this).css('width', l);
            $(this).find('.tile').each(function() {
                nbDiv++;
            });
            $(this).find('.tile').each(function() {
                $(this).css('width', Math.round((l-2) / nbDiv) + 'px');
            });
        });
    };
    this.initializeMenu = initializeMenu;
    
    /*
     * Fonction permettant d'initialiser les intitulés des menus
     */
    var initializeMenuCaption = function () {
        $('#content-maj2min').html(imageManager.getHtmlRessource('A', true) + " = " + imageManager.getHtmlRessource('a', true));
        $('#content-min2maj').html(imageManager.getHtmlRessource('a', true) + " = " + imageManager.getHtmlRessource('A', true));
        $('#content-ordre').html(imageManager.getHtmlRessource('A', true) + ", " + 
                                 imageManager.getHtmlRessource('B', true) + ", " +
                                 imageManager.getHtmlRessource('C', true) + ", " +
                                 imageManager.getHtmlRessource('D', true) + " ... "
                                 );
    };
    this.initializeMenuCaption = initializeMenuCaption;
};

/*
 * Classe de gestion du score
 */
var scoreManager = function(){
	
	var bddManager = new bddHandler();
	this.bddManager = bddManager;
	
	/*
	 * Fonction permettant de r�cup�rer un score
	 * @param gameName nom du jeu dont on veut recup les scores
	 * @return scoreArray Tableau de tableaux (scores bon, mauvais et leur date)
	 */
	var getScores = function getScores(gameName) {
		var i=0;
		//Chaque score d'une session d'un jeu
		var scoresLine;
		//Score d'une session serialis�
		var storedScores;
		// Tableau de tableaux (scores bon, mauvais et leur date) � retourner
		var scoreArray = new Array();;
		//if (gameName != "dessiner" || gameName != "ordre" || gameName != "cu2maj" || gameName != "maj2min")
		while (bddManager.getValue(gameName + "-"+ i)){
			storedScores = bddManager.getValue(gameName + "-"+ i);
			scoresLine=JSON.parse(storedScores);
			scoreArray[i] = scoresLine;
			i++;
		}
		return scoreArray;
	}; 
	this.getScores = getScores;
	
	/*
	 * Fonction permettant de recuperer le score par la date et le nom du jeu
	 * @param gameName : nom du jeu dont on veut le score
	 * @param date : date � laquelle on veut le score
	 */
	var getScoreByDate = function(gameName,date){
		scoreArrayTotal = getScores(gameName);
		var i = 0;
		for (i = 0; i < scoreArrayTotal.length; i++){
			if (scoreArrayTotal[i].date === date){
				return scoreArrayTotal[i];
			}
		}
		return -1;
	};
	this.getScoreByDate = getScoreByDate;
	
	/*
	 * Fonction permettant d'ajouter un score au jeu "dessiner"
	 * @param gameName nom du jeu dont on veut ajouter le score
	 * @param goodScore nombre de bonne r�ponse
	 * @param badScore nombre de mauvaise r�ponse
	 * @param date date de la session
	 */
	var addScore = function (gameName, goodScore,badScore,date) {
		//Recup�rer l'index de la derniere valeur presente en bdd pour un jeu donn�
		var i = 0;
		while (bddManager.getValue(gameName +"-"+ i)){
			i++;
		}
		var row = {"goodScore" : goodScore, "badScore" : badScore, "date" : date.toLocaleFormat("%x").toString() };
		bddManager.setValue(JSON.stringify(row),gameName +"-"+ i);
		console.log('index.js : scoreManager : Insertion de ' + JSON.stringify(row));
	};
	this.addScore = addScore;
	/*
	 * 
	 */
	var pushBadScore = function(gameName,badScore){
		today = new Date;
		day = today.getDate();
		month = (today.getMonth())+1;
		year = today.getFullYear();
		strDate= day + "/" + month + "/" + year;
		var scoreDuJour = getScoreByDate(gameName,strDate);
		scoreDuJour.badScore = scoreDuJour.badScore + badScore;
		addScore(gameName,scoreDuJour.goodScore,scoreDuJour.badScore, strDate);
	};
	this.pushBadScore = pushBadScore;
	
	var pushGoodScore = function(gameName,goodScore){
		today = new Date;
		day = today.getDate();
		month = (today.getMonth())+1;
		year = today.getFullYear();
		strDate= day + "/" + month + "/" + year;
		var scoreDuJour = getScoreByDate(gameName,strDate);
		scoreDuJour.goodScore = scoreDuJour.goodScore + goodScore;
		addScore(gameName,scoreDuJour.goodScore,scoreDuJour.badScore, strDate);
	};
	this.pushBadScore = pushBadScore;

	/*
	 * Test
	 */
	testScore = function () {
		var bonneReponse="12";
		var mauvaisesReponse="6";
		var date = new Date("01/01/2012");
		addScore("dessin",bonneReponse,mauvaisesReponse, date);
		var scoreArray = getScores("dessin");
		alert(scoreArray[0].goodScore);
	};
	this.testScore = testScore;
};