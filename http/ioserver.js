var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url.indexOf('ico')<0) {
        fs.readFile(__dirname+'/static' + req.url, 'utf8', function (err, data) {
            if (err) {
                console.log(err)
            }

            res.end(data);
        })
    }else{
        res.end("unknown page")
    }
});
var io=require('socket.io').listen(server);

server.on("error",function(err){
    console.log(err)
});

var socketCnt=0;

io.on("connection",function(socket){
    socket.emit("connect",{data:"connection server"});
    socket.on("login",function(obj){
        socket.id=socketCnt;
        socketCnt++;
        io.sockets.emit('userCnt',socketCnt);
        //socket.emit("userCnt",socketCnt);
    });


    socket.on("message",function(obj){
        if(obj){
            socket.emit("data",socket.id+"says "+obj.data);
        }
    });



    socket.on("disconnect",function(){
        if(socketCnt>0){
          socketCnt--;
        }
    });

});





server.listen(8015);
