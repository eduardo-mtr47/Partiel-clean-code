const CalculateurTaxes = require("../src/Services/CalculateurTaxes");
const Article = require("../src/Models/Article");

test("taxe 20% pour gourmandises", () => {
  const calc = new CalculateurTaxes();
  const articles = [
    new Article("donuts", 15, 1, "Gourmandises"),
  ];

  expect(calc.calculerTaxes(articles)).toBe(3);
});

test("taxe 5.5% pour fruits", () => {
  const calc = new CalculateurTaxes();
  const articles = [
    new Article("Pomme", 10, 1, "Fruits"),
  ];

  expect(calc.calculerTaxes(articles)).toBe(0.55);
});

test("taxes mixees", () => {
  const calc = new CalculateurTaxes();
  const articles = [
    new Article("donut", 15, 1, "Gourmandises"),
    new Article("pomme", 10, 1, "Fruits"),
  ];

  expect(calc.calculerTaxes(articles)).toBe(3.55);
});
