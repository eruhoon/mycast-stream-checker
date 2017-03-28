"use strict";

let ServerController = require('./controller/server');
let SocketController = require('./controller/socket');
let FullTvLibrary = require('./library/fulltv');

const serverController = new ServerController(9000);
let server = serverController.server;
const socketController = new SocketController(server);

serverController.get('/fulltv', (req, res) => {
	let library = new FullTvLibrary();

	library.update(() => {
		res.json(library.list);
	});
});

serverController.start();