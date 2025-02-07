// Created web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var config = {
    port: 8080,
    root: '.',
    index: 'index.html'
};

var server = http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(config.root, uri);

    fs.exists(filename, function (exists) {
        if (!exists) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found\n');
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/' + config.index;

        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write(err + '\n');
                res.end();
                return;
            }

            res.writeHead(200);
            res.write(file, "binary");
            res.end();
        });
    });
});

server.listen(config.port);