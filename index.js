const express= require('express')
const app =express()
const http = require('http').Server(app);
const io=require('socket.io')(http)
const path =require('path')

const Router = require('./routes')

Router(app)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.send(`
        <h1>聊天室</h1>
        <a href="group/group1">507聊天室</a>
        <a href="group/group2">南淳59栋</a>
    `)
})


io.on('connection', function(socket){
    socket.on('disconnect', function(msg){
        console.log('a user disconnected');
    });
    socket.on('group1', function(msg){
       io.emit('group1 msg' , msg)
    });
    socket.on('group2', function(msg){
        io.emit('group2 msg' , msg)
     });
  });
http.listen(8088,()=>{
    console.log("server running in 8088")
})