const express = require('express');
const ws = require('ws');
const http = require('http');
const app = express();
const server = http.createServer(app);

const wss = new ws.Server({ noServer: true });

//on event connection call callback with argument websocket
wss.on('connection', function (ws, req) {
	console.log('connection established');
	ws.on('message', (message) =>
		console.log('Server received message: ', message)
	);
});

app.use(express.static('public'));

server.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening on port: ${process.env.PORT || 3000}`);
});
