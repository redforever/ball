http = require('http');

var port = process.env.PORT || 8080;

server = http.createServer((req, res) => {
    res.end('Mon premier serveur nodejs!!!');
});

server.listen(port);
