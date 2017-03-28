"use strict";

let request = require('request');

const URL = 'http://api.full.co.kr/media/live';

/** 
 * @class {FullTvManager} FullTvManager
 * @this FullTvManager
 */
module.exports = class FullTvManager {

	/**
	 * @constructor
	 */
	constructor() {}

	get list() {
		return list;
	}

	get fanList() {
		return list.filter(e => e.isFan);
	}

	update(callback) {
		update(callback);
	}

};

let list = [];

let update = (callback) => {
	let cookie = request.cookie('partner=kukudas; Pauth=Y; firstview=Y; thumb_partner=Y; userLoginSaveYN=N; userLoginYN=Y; userReferer=http%3A%2F%2Fwww.full.co.kr%2Flive; _ga=GA1.3.1515285960.1490661168; _gat=1');
	let jar = request.jar();
	jar.setCookie(cookie, URL);

	let opt = {
		form: {
			search: {
				limit: 20
			}
		},
		jar
	};

	request.post(URL, opt, (err, res, body) => {
		if (err || res.statusCode !== 200) return;

		let info = JSON.parse(body);
		let result = info.array.map((e) => ({
			title: e.title,
			nickname: e.userNick,
			thumbnail: e.imgThumbnail,
			isFan: parseInt(e.fanLevel) > 0,
			description: e.desc,
			streamUrl: e.server + '/' + e.storage + '/' + e.code
		}));

		list = result;
		callback();
	});
};