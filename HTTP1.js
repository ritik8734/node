const http = require("http");

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify({ bfbf: "ritik is the best" }));
    resp.end();
}).listen(3022);
