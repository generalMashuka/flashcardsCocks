const mainRouter = require('express').Router();
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const HomePage = require('../views/HomePage');

mainRouter.get('/', async (req, res) => {
  res.renderCompoent(HomePage);
});

module.exports = mainRouter;
