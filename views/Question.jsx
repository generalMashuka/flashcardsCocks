const React = require('react');
const Layout = require('./Layout');

function Question({ quiz }) {
  console.log(quiz);
  return (
    <Layout>
      <div className="card" style={{ width: '18rem;' }}>
        <img src={quiz.image} className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title" key={quiz.id}></h5>

          <p className="card-text">{quiz.question}</p>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">👀</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <a href="/" className="btn btn-primary">Следующий вопрос!</a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Question;
