class Panier {
    
  constructor() {
    this.articles = [];
  }

  ajouter(article) {
    this.articles.push(article);
  }

  retirer(nomArticle) {
    this.articles = this.articles.filter((a) => a.nom !== nomArticle);
  }

  totalBrut() {
    return this.articles.reduce((sum, a) => sum + a.total(), 0);
  }
}

module.exports = Panier;
