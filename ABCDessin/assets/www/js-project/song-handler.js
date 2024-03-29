/*
 * Fichier contenant la logique de gestion des sons. 
 * La librairie permettra de récupérer l'sound d'une lettre à partir de la description d'une lettre.
 */

/*
 * Classe permettant la gestion des ressources audio.
 */
soundHandler = function () {
	
	// Chemin vers le dossier de medias sons
	this.mediaPath = 'media/sounds';
	// Extension son
	this.extension = '.mp3';
	// Média en cours de lecture
	this.media = null;
	
	/*
	 * Fonction permettant de récupérer le flux audio en fonction de la lettre décrite.
	 * Le format la lettre devra être a-z ou A-Z
	 * 
	 * @param letter : Lettre dont on veut la ressource audio (a-z; A-Z)
	 */
	this.getSoundPath = function (letter) {
		
		var soundPath = '';
		
		// On test la validité du paramètre
		if(this.isValidLetter(letter)) {
			// Le parametre passé est une lettre
			console.log('sound-handler : getSoundPath : Le paramètre est valide : ' + letter);
			
			// Initialisation du chemin de la ressource
			soundPath = this.mediaPath + "/" + letter + this.extension;
		}
		else
			console.log('sound-handler : getSoundPath : Le paramètre n\'est pas valide.');
		
		console.log('sound-handler : getSoundPath : Chemin de la ressource : "' + soundPath + '"');
		return soundPath;
	}
	
	/*
	 * Fonction permettant de savoir si la lettre est au bon format.
	 * 
	 * @param letter : Chaine à tester
	 */
	this.isValidLetter = function (letter) {
		return (letter && ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')));
	}
	
	/*
	 * Fonction permettant de savoir si l'application est lancée dans un mobile.
	 */
	var isInMobile = function () {
		// Récupération du code JQuery de détection de device sur http://detectmobilebrowsers.com/
		//(function(a){jQuery.browser.mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
//		alert(navigator.userAgent);
//		alert(navigator.vendor);
//		alert(window.opera);
	    
	    var useragent = navigator.userAgent.toLowerCase();
        return ( useragent.search("iphone") != -1 || useragent.search("ipod") != -1 || useragent.search("android") != -1 );
	}
	this.isInMobile = isInMobile;
	
	var getPhoneGapPath = function (){

	    var path = window.location.pathname;
	    //var path = "/android_asset/www/test.html";
	    //path = path.substr( path, path.length - 18 );
	    path1 = path.substr( 1, path.length - 1 );
	    path2 = path1.split("/");
	    path3 = path2.splice(0, path2.length-1);
	    path4 = path3.join("/");
        path5 = "/" + path4 + "/";
        return path5;

	};
	this.getPhoneGapPath = getPhoneGapPath;
	
	/*
	 * Fonction permettant de lancer la lecture d'une source audio en utilisant l'API cordova.
	 * 
	 * @param : src : chemin vers le fichier audio.
	 */
	this.playCordovaAudio = function (src) {
		// Créer l'objet Media à partir de src
	    //alert(getPhoneGapPath() + src);
        this.media = new Media(getPhoneGapPath() + src, function() {}, function() { console.log('sound-handler: playCordovaAudio : Erreur ouverture du média : ')});
        
        // Lire le clip audio
        this.media.play();
	}
	
	this.playHTML5Audio = function (src) {
	  $('#playSound').remove();
	  $('body').append('<span id="playSound"></span>');
	  $('#playSound').html("<audio autoplay> <source src='" + src + "' type='audio/mpeg' /> </audio>");
	  
	  console.log("Lecture du média : " + src + " en cours ...");
	}
	
	/*
	 * Fonction permettant de lire la ressource audio associée à la lettre passée en paramètre.
	 * 
	 * @param letter : Lettre à lire
	 */
	this.playSound = function (letter) {
		
		// On test la validité du paramètre
		if(this.isValidLetter(letter)) {
			// Le parametre passé est une lettre
			console.log('sound-handler : playSound : Le paramètre est valide : ' + letter);
			
			// Chemin du fichier audio
			var soundPath = this.getSoundPath(letter);
			
			// Test du device Mobile ou Non ? 
			if(this.isInMobile()){
				console.log('sound-handler : playSound : Le device est un mobile');
				
				// On utilise l'API de cordova pour la lecture
				this.playCordovaAudio(soundPath);
			}
			else {
				console.log('sound-handler : playSound : Le device est n\'est pas un mobile');
				
				// On utilise HTML 5 pour la lecture du fichier Audio
				this.playHTML5Audio(soundPath);
			}
				
		}
		else
			console.log('sound-handler : playSound : Le paramètre n\'est pas valide.');
	}
	/*
	 * Fonction jouant la musique de la vitoire
	 */
	this.playWin = function () {

		
		// Chemin du fichier audio
		var soundPath = this.mediaPath + "/win" + this.extension;
		
		// Test du device Mobile ou Non ? 
		if(this.isInMobile()){
			console.log('sound-handler : playWin : Le device est un mobile');
			
			// On utilise l'API de cordova pour la lecture
			this.playCordovaAudio(soundPath);
		}
		else {
			console.log('sound-handler : playWin : Le device est n\'est pas un mobile');
			
			// On utilise HTML 5 pour la lecture du fichier Audio
			this.playHTML5Audio(soundPath);
		}	
	}
	/*
	 * Fonction jouant la musique de la defaite
	 */
	this.playFail = function () {

		
		// Chemin du fichier audio
		var soundPath = this.mediaPath + "/fail" + this.extension;
		
		// Test du device Mobile ou Non ? 
		if(this.isInMobile()){
			console.log('sound-handler : playFail : Le device est un mobile');
			
			// On utilise l'API de cordova pour la lecture
			this.playCordovaAudio(soundPath);
		}
		else {
			console.log('sound-handler : playFail : Le device est n\'est pas un mobile');
			
			// On utilise HTML 5 pour la lecture du fichier Audio
			this.playHTML5Audio(soundPath);
		}	
	}
}