const express= require('express')
const app =express()
const http = require('http').Server(app);
const io=require('socket.io')(http)
const path =require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})



// io.on('connection',function(socket){
//     socket.on('disconnect', function(msg){
//         console.log('message:'+msg);
//       });
// })
io.on('connection', function(socket){
    io.emit('chat login', { msg: '连接成功!' });
    socket.on('disconnect', function(msg){
        console.log('a user disconnected');
    });
    socket.on('chat message', function(msg){
       console.log('message: ' + msg);
       io.emit('chat message' , '你好')
    });
  });
http.listen(8088,()=>{
    console.log("server running in 8088")
})