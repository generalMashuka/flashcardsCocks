const React = require('react');
const Layout = require('./Layout');

function Question({ quiz }) {
  return (
    <Layout>
      <div className="card" style={{ width: '18rem;' }}>
        <img src={quiz.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" key={quiz.id}>{quiz.question}</p>
          <form className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">👀</span>
            <input name="answer" type="text" className="form-control" placeholder="ваш ответ" aria-label="Username" aria-describedby="addon-wrapping" />
            <button type="submit" className="btn btn-primary">?</button>
            {/* <submit href="/" className="btn btn-primary">?</a> */}
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Question;
