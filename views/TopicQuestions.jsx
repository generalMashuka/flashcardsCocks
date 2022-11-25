const React = require('react');
const Layout = require('./Layout');
const Question = require('./Question');

// React-компонент
function TopicQuestions({ quizes }) {
  return (
    <Layout title="Quiz">

      <div id="quizes">
        {quizes.map((quiz) => (
          <Question key={quiz.id} quiz={quiz} />
        ))}
      </div>

      <script src="/js/question.js" defer />
    </Layout>
  );
}

module.exports = TopicQuestions;
