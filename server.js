const http = require('http');

let server = http.createServer((req, res) => {
  res.end("Hello World!");
})

server.listen(3000, () => {
  console.log("Server listen on http://localhost:3000");
});
