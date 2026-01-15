const Article = require("../src/Models/Article");

test("total", () => {
  const article = new Article("donut", 4, 2, "gourmandises");
  expect(article.total()).toBe(8);
});
