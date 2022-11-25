const React = require("react");
const Layout = require("./Layout");

// React-компонент
function HomePage() {
  return (
    <Layout title="Home Page">
      <div className="quiz">
        <h1>Quiz</h1>
        <form id="create_name">
          <div className="write_name">
            <input
              name="name"
              placeholder="Введите имя"
              className="name form-control form-control-lg"
            />
          </div>
          <div className="add_name">
            <button type="submit" className="btn btn-primary">
              Добавить
            </button>
          </div>
        </form>

        <form id="choice_topic">
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Выберите тему:
            </button>
            <a
              data_id="1"
              type="button"
              className="topic_1 list-group-item list-group-item-action"
              href="http://localhost:3000/topic/1"
            >
              MTV 2000-х
            </a>
            <a
              data_id="2"
              type="button"
              className="topic_2 list-group-item list-group-item-action"
              href="http://localhost:3000/topic/2"
            >
              Чья тень?
            </a>
            <a
              data_id="3"
              type="button"
              className="topic_3 list-group-item list-group-item-action"
              href="http://localhost:3000/topic/3"
            >
              Верно/неверно
            </a>
          </div>

          {/* <div className="list-group">
          <div className="topic_1">
            <a href="/topic_MTV" id="topic_MTV">
              MTV 2000-х
            </a>
          </div>
          <div className="topic_2">
            <a href="/topic_shadow" id="topic_shadow">
              Чья тень?
            </a>
          </div>
          <div className="topic_3">
            <a href="/topic_true_false" id="topic_true_false">
              Верно/неверно
            </a>
          </div>
        </div> */}
        </form>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
