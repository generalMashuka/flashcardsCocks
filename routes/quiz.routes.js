const quizRouter = require('express').Router();
const TopicQuestions = require('../views/TopicQuestions');

const { Quiz } = require('../db/models');

quizRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const quizes = await Quiz.findAll({
    where: {
      topic_id: id,
    },
    raw: true,
  });

  res.renderComponent(TopicQuestions, { quizes });
});

quizRouter.post('/submit-answer', async (req, res) => {
  const question = await Quiz.findOne({where: {id: Number(req.body.id)}, raw: true});
    res.json({question: question.answer});
})

module.exports = quizRouter;
