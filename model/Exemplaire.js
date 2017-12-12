class Exemplaire{



    constructor(unIdLivre,unNumero, unStatut, uneDateRetour, unTitre){
        this._unIdLivre = unIdLivre;
        this._unNumero = unNumero;
        this._unStatut = unStatut;
        this._uneDateRetour = uneDateRetour;
        this._unTitre = unTitre
    }

    get unIdLivre() {
        return this._unIdLivre;
    }

    get unTitre() {
        return this._unTitre;
    }

    get unNumero() {
        return this._unNumero;
    }

    set unNumero(value) {
        this._unNumero = value;
    }

    get unStatut() {
        return this._unStatut;
    }

    set unStatut(value) {
        this._unStatut = value;
    }

    get uneDateRetour() {
        return this._uneDateRetour;
    }

    set uneDateRetour(value) {
        this._uneDateRetour = value;
    }
}
module.exports = Exemplaire;