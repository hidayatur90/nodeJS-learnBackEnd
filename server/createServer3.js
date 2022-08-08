const http = require("http");

const requestListener = (req, res) => {
    res.setHeader = ('Content-Type', 'application/json');

    const { method, url } = req;

    if (url === "/") {
        if (method == "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message : "Ini halaman Homepage!"
            }));
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message : `Halaman tidak ditemukan, menggunakan method ${method}`
            }));
        }

    } else if (url === "/about") {
        if (method == "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message : "Ini halaman About!"
            }));
        } else if (method == "POST") {
            let body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            })
            req.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                res.statusCode = 200;
                res.end(JSON.stringify({
                    name    : `${name}`,
                    message : `Hallo!! ${name} Selamat Malam`
                }));
            })
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message : `Halaman tidak ditemukan, menggunakan method ${method}`
            }))
        }

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message : "Halaman Tidak ditemukan!"
        }));
    }
}

const PORT = 10000;
const HOSTNAME = "localhost";

const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})