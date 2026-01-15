class GenerateurFacture {
  afficher(resultat) {
    console.log("Total brut :", resultat.totalBrut, "€");
    console.log("Remise fidélité :", "-", resultat.montantRemise, "€");
    console.log("Total après remise :", resultat.totalBrut - resultat.montantRemise, "€");
    console.log("Taxes :", "+", resultat.taxes, "€");
    console.log("========================");
    console.log("TOTAL FINAL :", resultat.totalFinal, "€");
  }
}

module.exports = GenerateurFacture;
