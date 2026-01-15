const RemisePourcentage = require("../src/Remises/RemisePourcentage");

test("remise de 20% sur 50", () => {
  const remise = new RemisePourcentage(20);
  expect(remise.calculer(50)).toBe(10);
});

test("remise de 10% sur 100", () => {
  const remise = new RemisePourcentage(10);
  expect(remise.calculer(100)).toBe(10);
});
