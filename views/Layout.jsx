const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="/styles/style.css" />
      </head>

      <body>

        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
