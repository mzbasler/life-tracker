const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/dashboard':
      filePath = 'dashboard.html';
      break;
    case '/login':
      filePath = 'login.html';
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
  }

  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    let contentType = 'text/html';
    if (filePath.endsWith('.css')) {
      contentType = 'text/css';
    } else if (filePath.endsWith('.js')) {
      contentType = 'application/javascript';
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
