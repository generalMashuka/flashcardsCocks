const mainRouter = require("express").Router();
const HomePage = require("../views/HomePage");
const { User } = require("../db/models");

mainRouter.get("/", async (req, res) => {
  res.renderComponent(HomePage);
});

mainRouter.post("/new_name", async (req, res) => {
  // console.log(req.body);
  const name = await User.create(req.body);
  console.log(name);
  res.json({ success: true });
});

module.exports = mainRouter;
