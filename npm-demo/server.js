const http = require('http'); //imports something from node js and stores it into const named http
const app = require('./app');

const port=process.env.PORT || 4000; //assigns a port where the project should run, it can be hard coded or get it through an environment variable, since it's not set we will use 3000 as our default port

const server=http.createServer(app);

server.listen(port); //this will restart the server and will pass the server as an argument