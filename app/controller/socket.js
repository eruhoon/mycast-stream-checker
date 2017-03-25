"use strict";

const socketio = require('socket.io');

/** 
 * @class {ServerController} SocketController
 * @this ServerController
 */
module.exports = class SocketController {

	/**
	 * @typedef {server}
	 * 
	 */


	/**
	 * 
	 * @param {server} server 
	 */
	constructor(server) {

		/** @property {http.Server} _server - Specifies server */
		this._server = server;
		/** @property {socketio} _io - Specifies server */
		this._io = null;

		this._init();
	}

	_init() {
		this._io = socketio(this._server);
	}

};