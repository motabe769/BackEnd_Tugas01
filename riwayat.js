
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request: '+req.url);
    if (req.url==='/index.html'||req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);   
    }
    else if (req.url==='/hidup.html'||req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/hidup.html').pipe(res);   
    }
    else if (req.url==='/pendidikan.html'||req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/pendidikan.html').pipe(res);   
    }
    else if (req.url==='/pekerjaan.html'||req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/pekerjaan.html').pipe(res);   
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    } 
});

server.listen(3000);
console.log('server aktif.Listening port 3000.');