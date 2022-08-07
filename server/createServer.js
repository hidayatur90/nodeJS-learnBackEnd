const http = require("http");


const requestListener = (rea, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end("<h1>Server</h1>")
}

const PORT = 10000;
const HOSTNAME = "localhost";

const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
})