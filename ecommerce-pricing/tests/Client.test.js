const Client = require("../src/Models/Client");

test("informations client", () => {
  const client = new Client("Mendes", "Eduardo", "test@test.com", "Or");
  expect(client.nom).toBe("Mendes");
  expect(client.prenom).toBe("Eduardo");
  expect(client.mail).toBe("test@test.com");
  expect(client.niveau).toBe("Or");
});
