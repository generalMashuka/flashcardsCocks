const React = require('react');
const Layout = require('./Layout');

module.exports = function LastPage({ user }) {
  return (
    <Layout>
      <h1>Итого</h1>
      <div className="">
        <div>{user[0].name}</div>
        <div>{user[0].points}</div>
      </div>
    </Layout>
  );
}