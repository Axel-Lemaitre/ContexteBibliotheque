class Livre{

    _List = require("collections/list");

    _titre;
    _resume;
    _ISBN;
    _auteur;


    constructor(unTitre, unResume, unISBN, unAuteur, lesGenres){
        this._titre = unTitre;
        this._resume = unResume;
        this._ISBN = unISBN;
        this._auteur = unAuteur;
        this._List = lesGenres;
    }

    get List() {
        return this._List;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    get resume() {
        return this._resume;
    }

    set resume(value) {
        this._resume = value;
    }

    get ISBN() {
        return this._ISBN;
    }

    set ISBN(value) {
        this._ISBN = value;
    }

    get auteur() {
        return this._auteur;
    }

    set auteur(value) {
        this._auteur = value;
    }
}
module.exports = Livre;