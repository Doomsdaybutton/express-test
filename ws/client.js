const ws = require('ws');

//create url for the websocket connection
let url = 'ws://localhost:3000';
console.log(url);

//create a websocket connection to url
const client = new ws(url);

//
client.on('open', ()=>{client.send('hi from client');});