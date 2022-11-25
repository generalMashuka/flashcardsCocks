const quizRouter = require('express').Router();
const TopicQuestions = require('../views/TopicQuestions');


const { Quiz } = require('../db/models');

quizRouter.get('/1', async (req, res) => {
  const quizes = await Quiz.findAll({
    where: {
      topic_id: 1,
    },
    raw: true,
  });
console.log(quizes);

  res.renderComponent(TopicQuestions, { quizes });
});


// параметризированный запрос
quizRouter.get('/topic/1/:id', async (req, res) => {
  const { id } = req.params;
  const quizes = await Quiz.findByPk(Number(id));

  res.renderComponent(TopicQuestions, {
    quizes,
    hideButtons: true,
  });
});

module.exports = quizRouter;
