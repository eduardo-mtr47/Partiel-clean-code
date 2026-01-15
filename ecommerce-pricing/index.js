const Panier = require("./src/Models/Panier");
const Article = require("./src/Models/Article");
const Client = require("./src/Models/Client");

const RemiseFidelite = require("./src/Remises/RemiseFidelite");
const CalculateurTaxes = require("./src/Services/CalculateurTaxes");
const CalculateurPrix = require("./src/Services/CalculateurPrix");
const GenerateurFacture = require("./src/Rapports/GenerateurFacture");

const panier = new Panier();
panier.ajouter(new Article("Donut", 15, 2, "Gourmandises"));
panier.ajouter(new Article("Pomme", 10, 1, "Fruits"));

const client = new Client("Mendes", "Eduardo", "test@test.com", "Or");
const remise = new RemiseFidelite(client);
const taxes = new CalculateurTaxes();
const calculateur = new CalculateurPrix();
const facture = new GenerateurFacture();
const resultat = calculateur.calculerTotal(panier, remise, taxes);
facture.afficher(resultat);
