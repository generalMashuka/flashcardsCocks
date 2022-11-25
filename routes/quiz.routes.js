const quizRouter = require('express').Router();
const Question = require('../views/Question');

const { Quiz } = require('../db/models');

quizRouter.get('/', async (req, res) => {
  const quiz = await Quiz.findOne({
    where: {
      id: '1',
    },
    raw: true,
  });
  console.log(quiz);
  res.renderComponent(Question, { quiz });
});

module.exports = quizRouter;
