const http =  require('http');
const fs = require('fs');
const url = require('url')
const {serveFile} = require('./servefile')

const server = http.createServer(function(req, res) {
    console.log('a new request received')
    let myUrl = url.parse(req.url, true);
    
    if(myUrl.pathname == '/') {
        serveFile('index.html', res);
    }  else if(myUrl.pathname == '/about') {
        serveFile('about.html', res);
    } else if(myUrl.pathname == '/contact') {
        serveFile('contact-me.html', res);
    } else {
        serveFile(myUrl.pathname, res);
    }

})

server.listen(8080, ()=> {
    console.log('server has started')
});