class Auteur{


    constructor(unId, unNom, unPrenom, uneDateDeNaissance, uneDateDeDeces){
        this._unId = unId;
        this._nom = unNom;
        this._prenom = unPrenom;
        this._dateDeNaissance = uneDateDeNaissance;
        this._dateDeDeces = uneDateDeDeces;
    }

    get unId() {
        return this._unId;
    }


    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get dateDeNaissance() {
        return this._dateDeNaissance;
    }

    set dateDeNaissance(value) {
        this._dateDeNaissance = value;
    }

    get dateDeDeces() {
        return this._dateDeDeces;
    }

    set dateDeDeces(value) {
        this._dateDeDeces = value;
    }

}
module.exports = Auteur;