/*
 * Fichier contenant la logique de gestion des données. 
 * La librairie permettra de récupérer traiter les données dans la base local storage.
 */

/*
 * Classe permettant les accès aux données stockées dans le local-storage.
 */
bddHandler = function () {
	
	/*
	 * Fonction permettant d'insérer une valeur dans la base de données.
	 */
	this.setValue = function ( value, key ) {
		localStorage.setItem(key, value);
	};
	
	/*
	 * Fonction permettant de récupérer une valeur dans la base de données.
	 */
	this.getValue = function ( key ) {
		return localStorage.getItem(key);
	};
	
	/*
	 * Fonction permettant de supprimer une valeur dans la base de données.
	 */
	this.removeValue = function ( key ) {
		localStorage.removeItem(key);
	};
	
	/*
	 * Fonction permettant de supprimer toutes les valeurs dans la base de données.
	 */
	this.clearAll = function () {
		localStorage.clear();
	}
};