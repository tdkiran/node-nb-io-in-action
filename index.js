const http = require('http');
const fs = require('fs');

const short = (res) => {
    fs.readFile(__dirname + '/short.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.length);
        res.end(data.length + '\n');
    });
};

const long = (res) => {
    fs.readFile(__dirname + '/long.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.length);
        res.end(data.length + '\n');
    });
};



const requestListener = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);

    if (req.url === '/short') {
        short(res);
    } else if (req.url === '/long') {
        long(res);
    } else {
        res.end('404 not found');
    }

}

const server = http.createServer(requestListener);
server.listen(8080);