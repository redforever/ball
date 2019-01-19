http = require('http');

server = http.createServer((req, res) => {
    res.end('Mon premier serveur nodejs!!!');
});

server.listen(3000);
