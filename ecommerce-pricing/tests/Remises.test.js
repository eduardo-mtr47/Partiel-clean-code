const Client = require("../src/Models/Client");
const RemiseFidelite = require("../src/Remises/RemiseFidelite");

test("bronze = remise 5%", () => {
  const client = new Client("Mendes", "Eduardo", "test@test.com", "Bronze");
  const remise = new RemiseFidelite(client);

  expect(remise.calculer(100)).toBe(5);
});

test("argent = remise 10%", () => {
  const client = new Client("Mendes", "Eduardo", "test@test.com", "Argent");
  const remise = new RemiseFidelite(client);

  expect(remise.calculer(100)).toBe(10);
});

test("or = remise 15%", () => {
  const client = new Client("Mendes", "Eduardo", "paul@test.com", "Or");
  const remise = new RemiseFidelite(client);

  expect(remise.calculer(200)).toBe(30);
});
