import ReactDOMServer from 'react-dom/server';

export function render(page: any, config = {}) {
  const title = 'Issue Tracker';

  return `<!doctype html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <header><h1>${title}</h1></header>
      <main>
        ${ReactDOMServer.renderToStaticMarkup(page)}
      </main>
      <footer><p><small>Copyright ${new Date().getFullYear()}</small></p></footer>
    </body>
    </html>`;
}
