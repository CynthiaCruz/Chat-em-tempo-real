const http = require('http');
const express = require('express');
const app = express();

const servidorHttp = http.createServer(app);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    socket.addListener('nova mensagem', (mensagem) => {
        io.emit('nova mensagem', mensagem);
    })
})

app.use(express.static('public'));

servidorHttp.listen(1000, '192.168.15.8'); //chat disponível na mesma rede