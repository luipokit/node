var http = require('http');
//using module 
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    
    //add an HTTP Header
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //get the current date and time
    res.write("The date and time are currently: " + dt.myDateTime());
    
    //output the required url
    res.write(req.url);

    res.end();
}).listen(8080);

