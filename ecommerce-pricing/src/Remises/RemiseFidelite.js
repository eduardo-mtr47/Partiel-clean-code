const RemiseInterface = require("./RemiseInterface");

class RemiseFidelite extends RemiseInterface {
  constructor(client) {
    super();
    this.client = client;
  }

  calculer(montant) {
    if (this.client.niveau === "Bronze") return montant * 0.05;
    if (this.client.niveau === "Argent") return montant * 0.10;
    if (this.client.niveau === "Or") return montant * 0.15;

    return 0;
  }
}

module.exports = RemiseFidelite;
