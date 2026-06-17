const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT      = 3000;
const DIR       = __dirname;
const DATA_FILE  = path.join(DIR, 'data.json');
const HTML_FILE  = path.join(DIR, 'index.html');
const AUDIO_FILE = path.join(DIR, 'birds.wav');

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(HTML_FILE, (err, data) => {
      if (err) { res.writeHead(500); return res.end('Could not read index.html'); }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

  } else if (req.method === 'GET' && req.url === '/data') {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(err ? '{"hobbies":[]}' : data);
    });

  } else if (req.method === 'GET' && req.url === '/birds.wav') {
    fs.readFile(AUDIO_FILE, (err, data) => {
      if (err) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, { 'Content-Type': 'audio/wav' });
      res.end(data);
    });

  } else if (req.method === 'POST' && req.url === '/data') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      fs.writeFile(DATA_FILE, body, 'utf8', err => {
        res.writeHead(err ? 500 : 200);
        res.end(err ? 'write error' : 'ok');
      });
    });

  } else {
    res.writeHead(404);
    res.end('not found');
  }

}).listen(PORT, '127.0.0.1', () => {
  console.log(`\n🌸 Hobby Garden running at http://localhost:${PORT}\n`);
  console.log('   Data is saved to: ' + DATA_FILE);
  console.log('   Press Ctrl+C to stop.\n');
});
