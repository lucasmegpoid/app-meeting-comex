const express = require('express');
const http = require('http');
const { Server } = require('socket.io')
const path = require('path')

const index = require('./routes/index')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//ROUTES

app.use('/', index);


// start server
const port = process.env.PORT || 3000;
server.listen(port, () => console.log('Server started on port http://localhost:' + port));