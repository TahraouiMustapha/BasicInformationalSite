const fs = require('fs');

function serveFile(filepath, res) {
    fs.readFile(filepath, function(err, data) {
        if(err) {
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                if(err) {
                    res.write('Page not found !');
                    return ;
                } else {
                    res.write(data);
                }
                res.end()
            })
            return;
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }

    }) 
}

module.exports = {serveFile}; 