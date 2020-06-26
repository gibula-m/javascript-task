import ReactDOMServer from 'react-dom/server';

export function render(page: any, config = {}) {
  const title = 'Issue Tracker';

  return `<!doctype html>
    <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    <body>
      <main>
        ${ReactDOMServer.renderToStaticMarkup(page)}
      </main>
      <footer class="container"><p><small>Copyright ${new Date().getFullYear()}</small></p></footer>
      <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>`;
}
