const Panier = require("../src/Models/Panier");
const Article = require("../src/Models/Article");
const Client = require("../src/Models/Client");

const RemiseFidelite = require("../src/Remises/RemiseFidelite");
const CalculateurTaxes = require("../src/Services/CalculateurTaxes");
const CalculateurPrix = require("../src/Services/CalculateurPrix");

test("calcul complet avec remise fidelite et taxes", () => {
  const panier = new Panier();
  panier.ajouter(new Article("Donut", 15, 2, "Gourmandises"));
  panier.ajouter(new Article("Pomme", 10, 1, "Fruits"));
  const client = new Client("Mendes", "Eduardo", "test@test.com", "Or");
  const remise = new RemiseFidelite(client);
  const taxes = new CalculateurTaxes();
  const calculateur = new CalculateurPrix();

  const resultat = calculateur.calculerTotal(panier, remise, taxes);

  // Total brut = 30
  // Remise Or 15% = 4.5
  // Total après remise = 25.5
  // Taxes = (20 * 0.20) + (10 * 0.055) = 4 + 0.55 = 4.55
  // Total final = 25.5 + 4.55 = 30.05

  expect(resultat.totalBrut).toBe(40);
  expect(resultat.montantRemise).toBe(6);
  expect(resultat.taxes).toBe(6.55);
  expect(resultat.totalFinal).toBe(40.55);
});
