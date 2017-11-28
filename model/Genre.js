class Genre{


    _libelle;

    constructor(unLibelle){
        this._libelle = unLibelle;
    }

    get libelle() {
        return this._libelle;
    }

    set libelle(value) {
        this._libelle = value;
    }
}