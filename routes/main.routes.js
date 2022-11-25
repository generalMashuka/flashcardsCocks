const mainRouter = require("express").Router();
const HomePage = require("../views/HomePage");

mainRouter.get("/", async (req, res) => {
  res.renderComponent(HomePage);
});

module.exports = mainRouter;
