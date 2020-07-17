const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.url ==="/"){
        res.write('Hello World, how are you ?');
        res.end();
    }

    if(req.url ==='/sgu/training'){
        res.write('This is a second route of the incoming HTTP request');
        res.end();
    }
});

/*
server.on('connection', (socket) => {
    console.log('New HTTP request, coming...');
});
*/

server.listen(3000);
console.log('listening on port 3000...');