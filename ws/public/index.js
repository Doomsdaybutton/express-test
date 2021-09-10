const ws = new WebSocket('wss://localhost:3000/');

ws.onopen = function () {
	console.log('connection opened');
};

ws.onmessage = function (msg) {
	//document.getElementById('counter').innerHTML = msg;
	console.log('received a message');
};
