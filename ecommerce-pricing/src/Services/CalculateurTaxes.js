class CalculateurTaxes {
  calculerTaxes(articles) {
    let taxes = 0;

    articles.forEach((article) => {
      const totalArticle = article.total();
      if (article.categorie === "Gourmandises" || article.categorie === "Sucre") {
        taxes += totalArticle * 0.20;
      }

      if (article.categorie === "Fruits" || article.categorie === "Legumes") {
        taxes += totalArticle * 0.055;
      }
    });

    return taxes;
  }
}

module.exports = CalculateurTaxes;
