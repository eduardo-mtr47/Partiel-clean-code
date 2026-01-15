class Article {
  
    constructor(nom, prixUnitaire, quantite, categorie) {
    this.nom = nom;
    this.prixUnitaire = prixUnitaire;
    this.quantite = quantite;
    this.categorie = categorie;
  }

  total() {
    return this.quantite * this.prixUnitaire;
  }
}

module.exports = Article;
