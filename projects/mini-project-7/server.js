let express = require('express');
let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
const port = process.env.PORT;
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let usercount=0;
io.on('connection', (socket) => {
  console.log('a user connected');
  usercount++;
  socket.on("message", (data)=>{
    io.emit("incoming", data);
    function createTree(){
      for (let i = 0; i < usercount; i++) {
        let randomXPosition = Math.round(Math.random()*100).toString();
        let randomYPosition = Math.round(Math.random()*10).toString();
        let randomTree= Math.round(Math.random()*4).toString()
        let treeinfo={xpos:randomXPosition,ypos:randomYPosition,treenum:randomTree};
        io.emit("newtree", treeinfo)
      }
    }
    createTree();
  })
  socket.on('disconnect', ()=>{
    usercount--;
  })

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
