const http = require("http");

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);

    const { method } = req;

    if (method == 'GET') {
        res.end("<h1> Hello GET </h1>");    
    }
    if (method == 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            res.end(`Hallo, ${name}`);
        })
    }
    if (method == 'PUT') {
        res.end("<h1> Hello PUT </h1>");    
    }
    if (method == 'DELETE') {
        res.end("<h1> Hello DELETE </h1>"); 
    }

}
const PORT = 10000;
const HOSTNAME = "localhost";

const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})