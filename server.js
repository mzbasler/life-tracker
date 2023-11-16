const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  if(req.url === 'dashboard.html'){
    filePath = path.join(__dirname, req.url === '/cadastrar.html' ? '/cadastrar.html' : req.url);
  }
  if(req.url === 'login.html'){
    filePath = path.join(__dirname, req.url === '/login.html' ? '/login.html' : req.url);
  }

  fs.readFile(filePath, (err, data) => {
   if (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

   let contentType = 'text/html';
    if (req.url.endsWith('.css')) {
      contentType = 'text/css';
   } else if (req.url.endsWith('.js')) {
     contentType = 'application/javascript';
   } else if (req.url.endsWith('.svg')) {
    contentType = 'image/svg+xml';
   } else if (req.url.endsWith('.scss')) {
    contentType = 'text/css';
   }

   res.writeHead(200, { 'Content-Type': contentType });
   res.end(data);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});