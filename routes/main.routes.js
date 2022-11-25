const mainRouter = require("express").Router();
const HomePage = require("../views/HomePage");

mainRouter.get("/", async (req, res) => {
  res.renderComponent(HomePage);
});

mainRouter.get("/new_name", async (req, res) => {});

module.exports = mainRouter;
