const React = require("react");
const Layout = require("./Layout");

// React-компонент
function HomePage() {
  return (
    <Layout title="Home Page">
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

      <form id="choice_topic list-group">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Выберите тему:
          </button>
          <button
            type="button"
            class="topic_1 list-group-item list-group-item-action"
          >
            MTV 2000-х
          </button>
          <button
            type="button"
            class="topic_2 list-group-item list-group-item-action"
          >
            Чья тень?
          </button>
          <button
            type="button"
            class="topic_3 list-group-item list-group-item-action"
          >
            Верно/неверно
          </button>
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
    </Layout>
  );
}

module.exports = HomePage;
