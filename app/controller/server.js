"use strict";

const express = require('express');
const http = require('http');
const config = require('../config');

/** 
 * @class {ServerController} ServerController
 * 
 

 * @this ServerController
 */
module.exports = class ServerController {

	/**
	 * @constructor
	 */
	constructor(port) {
		if (!port) port = config.defaultPort;

		/** @property {number} _port - Specifies Port */
		this._port = port;
		/** @property {express} _app - Specifies the express app */
		this._app = null;
		/** @property {http.Server} _server - Specifies the Server */
		this._server = null;

		this._init();
	}

	get server() {
		return this._server;
	}

	start() {
		this._server.listen(this._port, () => {
			console.log('Stream Checker started..');
		});
	}

	_init() {
		this._app = express();
		this._server = http.Server(this._app);

		this._initRoute();
	}

	_initRoute() {
		this._app.get('/', (req, res) => {
			res.send('hi');
		});
	}

};