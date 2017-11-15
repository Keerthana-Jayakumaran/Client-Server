var http = require('http');
var fs =require('fs');
var  connectedclients = {};
console.log('server listening');
var server = http.createServer(function(req,res)
{
    fs.readFile('./index1.html','utf-8',function(err,content)
    {res.writeHead(200,{"content-type": "text/html"});
    res.end(content);
    

});

});

// loading socket.io
var io =require('socket.io').listen(server);

//when a client connects , we note it in th console 
io.sockets.on('connection',function(socket){
     createclientsids(socket);
     console.log('A client connected'+ socket.id);

    socket.on('fromclient',function(res){
        console.log('client sends data'+res);
    });
     socket.on('disconnect',function(){
        console.log('client disconnected'+socket.id);
    });
    socket.on('filterVariable',function(d)
    {
        console.log('the parameters'+ ' '+d);
    })

});

function createclientsids(d)
{
    // reading a file to get the filter variables for the connected client
    // var data = fs.readFileSync('Client.txt');
    // var str = data.toString();
    // var arr = str.split(',');
    // console.log(str);
    // console.log(arr);
    connectedclients[d] = 'hi';
    
    console.log('the connected clients individual'+' '+JSON.stringify(connectedclients,null,2) );
}


server.listen(8080);

