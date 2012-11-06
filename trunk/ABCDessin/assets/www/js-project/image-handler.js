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
	 * @param letter : Lettre dont on veut l'image (a-z; A-Z)
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
	
	
};