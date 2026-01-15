class CalculateurPrix {
  calculerTotal(panier, remiseFidelite, calculateurTaxes) {
    
    const totalBrut = panier.totalBrut();
    const montantRemise = remiseFidelite ? remiseFidelite.calculer(totalBrut): 0;
    const totalApresRemise = totalBrut - montantRemise;
    const taxes = calculateurTaxes.calculerTaxes(panier.articles);
    const totalFinal = totalApresRemise + taxes;

    return {
      totalBrut,
      montantRemise,
      taxes,
      totalFinal,
    };
  }
}

module.exports = CalculateurPrix;
