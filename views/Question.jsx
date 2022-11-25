const React = require('react');
const Layout = require('./Layout');

function Question({ quiz }) {
  return (
      <div data-id={quiz.id} className="card" style={{ width: '18rem;' }}>
        <img src={quiz.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" key={quiz.id}>{quiz.question}</p>
          <form name="formQuestion" className="formQ input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">👀</span>
            <input name="answer" type="text" className="form-control" placeholder="ваш ответ" aria-label="Username" aria-describedby="addon-wrapping" />
            <button type="submit" className="btn btn-primary">?</button>
            <a href="http://localhost:3000/" className="btn btn-primary">НА ГЛАВНУЮ</a>
          </form>
        </div>
      </div>
  );
}

module.exports = Question;
