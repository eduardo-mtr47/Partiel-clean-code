const Panier = require("../src/Models/Panier");
const Article = require("../src/Models/Article");

test("total brut du panier", () => {
  const panier = new Panier();
  panier.ajouter(new Article("donut", 5, 2, "gourmandises"));
  panier.ajouter(new Article("banane", 2, 3, "fruits"));
  expect(panier.totalBrut()).toBe(16);
});

test("retirer un article", () => {
  const panier = new Panier();
  panier.ajouter(new Article("donut", 5, 2, "gourmandises"));
  panier.ajouter(new Article("banane", 2, 3, "fruits"));
  panier.retirer("donut");
  expect(panier.totalBrut()).toBe(6);
});
