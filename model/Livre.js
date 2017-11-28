class Livre{

    List = require("collections/list");

    titre;
    resume;
    ISBN;
    auteur;


    public Livre(unTitre, unResume, unISBN, unAuteur, lesGenres){
        this.titre = unTitre;
        this.resume = unResume;
        this.ISBN = unISBN;
        this.auteur = unAuteur;
        this.List = lesGenres;
    }
}