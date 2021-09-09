const express = require('express');
const ws = require('ws');

const app = express();

const wss = new ws.Server({noServer:true});

//on event connection call callback with argument websocket
wss.on('connection', function(ws, req){
    ws.on('message', message=>console.log(message));
});

const server = app.listen(process.env.PORT||3000);
server.on('upgrade', function (req, ws, head){
    //on upgrade request by client -> upgrade protocol/connection
    wss.handleUpgrade(req, ws, head, function(ws){
        //trigger event 'connection' after upgrade from http to websocket protocol
        wss.emit('connection', ws, req);
    })
})