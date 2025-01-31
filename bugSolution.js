const http = require('http');

const server = http.createServer((req, res) => {
  // Solution: Stream the response instead of writing the entire URL at once
  req.pipe(res);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});