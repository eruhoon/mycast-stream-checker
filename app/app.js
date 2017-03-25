"use strict";

let ServerController = require('./controller/server');
let SocketController = require('./controller/socket');

const serverController = new ServerController(9000);

let server = serverController.server;

const socketController = new SocketController(server);

serverController.start();