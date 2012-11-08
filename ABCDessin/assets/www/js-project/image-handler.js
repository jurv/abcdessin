/*
 * Fichier contenant la logique de gestion des images. 
 * La librairie permettra de récupérer un flux son à partir de la description d'une lettre.
 */

/*
 * Classe permettant la gestion des ressources images.
 */
imageHandler = function() {
	
	// Chemin vers le dossier de medias images
	this.mediaPath = '/medias/images';
	// Préfixe minuscule
	this.prefixeMin = '-min';
	// Préfixe majuscule
	this.prefixeMaj = '-maj';
	// Préfixe pointillé
	this.prefixePt  = '-pt';
	// Cursive
	this.prefixeCursive = 'cursive';
	// Extension image
	this.extension = '.png';
	
	/*
	 * Fonction permettant de récupérer l'image en fonction de la lettre décrite.
	 * Le format la lettre devra être a-z ou A-Z
	 * 
	 * @param : 
	 * 		letter    : Lettre à rendre
	 * 		isCursive : La police est-elle cursive ?
	 */
	this.getRessource = function (letter, isCursive) {
		
		var imagePath = '';
		
		// On test la validité du paramètre
		if(letter && ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z'))) {
			// Le parametre passé est une lettre
			console.log('image-handler : getRessource : Le paramètre est valide : ' + letter);
			
			// Initialisation du chemin de la ressource
			imagePath = this.mediaPath + "/" + letter;
			
			// Majuscule ou Minuscule
			if(letter >= 'a' && letter <= 'z')
				imagePath += this.prefixeMin;
			else if(letter >= 'A' && letter <= 'Z')
				imagePath += this.prefixeMaj;
			
			// Gestion de la cursive
			if(isCursive)
				imagePath += '-cursive';
			
			// Ajout de l'extension
			imagePath += this.extension;
		}
		else
			console.log('image-handler : getRessource : Le paramètre n\'est pas valide.');
		
		console.log('image-handler : getRessource : Chemin de la ressource : "' + imagePath + '"');
		return imagePath;
	};
	
	// Font cursive
	this.cursiveFont = "cursive";
	// Font normale
	this.normalFont = "comic";
	// Taille de la font
	this.fontSize = "1em";
	
	
	/*
	 * Fonction permetttant de rendre une lettre.
	 * 
	 * @param : 
	 * 		letter    : Lettre à rendre
	 * 		isCursive : La police est-elle cursive ?
	 */
	this.getHtmlRessource = function (letter, isCursive) {
		
		var htmlRender = '<span style="';
		
		// On test la validité du paramètre
		if(letter && ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z'))) {
			// Le parametre passé est une lettre
			
			// Majuscule ou Minuscule
			if(letter >= 'a' && letter <= 'z')
				htmlRender += "text-transform: lowercase; ";
			else if(letter >= 'A' && letter <= 'Z')
				htmlRender += "text-transform: uppercase; ";
			
			// Type de police
			if(isCursive)
				htmlRender += "font-family:'" + this.cursiveFont + "' ; ";
			else
				htmlRender += "font-family:'" + this.normalFont + "' ; ";
			
			// Taille
			htmlRender += "font-size:" + this.fontSize + " ; ";
		}
		else
			console.log('image-handler : getRessource : Le paramètre n\'est pas valide.');
		
		htmlRender += '">' + letter + "</span>";
		
		console.log("image-handler : getRessource : Rendu HTML : " + htmlRender);
		return htmlRender;
	};
	
	this.generateRandomLetter = function()
	{
	    var theLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	    //You can change theLetters to include whatever characters you want the function
	    //to pick from. You can even change its values to numbers!
	    return theLetters[Math.floor(Math.random()*theLetters.length)];
	    //Math.floor truncates the number passed in to the decimal point, and
	    //Math.random returns a random number each time it is called.
    };
};