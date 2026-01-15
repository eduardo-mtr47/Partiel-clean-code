class RemisePourcentage {
  constructor(pourcentage) {
    this.pourcentage = pourcentage;
  }

  calculer(montant) {
    return montant * (this.pourcentage / 100);
  }
}

module.exports = RemisePourcentage;
