/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/

"use strict";
//These are the functions for Math
/*
 * returns a rounded version of the number PI
 * @param {Number} num - The number that PI will be rounded to
 * @returns {Number} - The rounded PI
 */
Math.PI2 = (till) => {
	// Value of PI till the first 100 digits
	const PI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067;
	// Use of ?? makes sure that till is not undefined
	return Number(PI.toFixed(till ?? 2));
};
Math.randomNum = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
Math.randomcolor = () => `rgb(${Math.randomNum(255)},${Math.randomNum(255)},${Math.randomNum(255)})`;
/*
 * This function compares wheter a number falls in a certain range
 * @param {number} num - The number to be checked
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @param {boolean} strict - Whether the range is inclusive or not
 * @returns {boolean} - Returns true if the number falls in the range
 */
Math.range = (number, min, max, strict = false) => {
	return strict ? number > min && number < max : number >= min && number <= max;
};

/*
 * A simpler method of for loop
 * @param {Function} callback - The function that will be called for each iteration
 * @param {argument} args - The extra arguments that will be passed to the callback function
 * @returns {undefined}
 * @example
 * (5).times((index, str) => {console.log(str, index)}, "Hello World!");
 * > Hello World! 0
 * > Hello World! 1
 * > Hello World! 2
 * > Hello World! 3
 * > Hello World! 4
 */
Number.prototype.times = function (callback, ...args) {
	for (let i = 0; i < this; i++) callback(i, ...args);
};

//These are the functions for Date
/*
 * A simple function for formating string with a date
 * @param {string} format - The format of the date
 * @returns {string} - The formatted date
 */
Date.prototype.preset = function (preset) {
	const t = (e) => ("0" + e).slice(-2);
	return preset
		.replace(/MM/g, t(this.getMonth() + 1))
		.replace(/YYYY/g, this.getFullYear())
		.replace(/DD/g, t(this.getDate()))
		.replace(/DDD/g, t(this.getFullMonth()))
		.replace(/hh/g, t(this.getHours()))
		.replace(/mm/g, t(this.getMinutes()))
		.replace(/ss/g, t(this.getSeconds()));
};
/*
 * Returns the month name
 * returns {string} - The name of the month
 */
Date.prototype.getFullMonth = function () {
	return ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.getMonth()];
};
/*
 * Returns an array of the number of days in each month
 * @returns {array} - An array of the number of days in each month
 */
Date.prototype.getMonthArray = function () {
	return [31, this.getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 30];
};
//These are the functions for Arrays
/*
 * Returns a random element from the array
 * @returns {any} - The random element from the array
 */
Array.prototype.random = function random() {
	return this[Math.randomNum(this.length - 1)];
};
/*
 * checks wheter the Array is empty or not
 * @returns {boolean} - Returns true if the array is empty
 */
Array.prototype.isEmpty = function empty() {
	return JSON.stringify([]) == JSON.stringify(this);
};
/*
 * Tries to parse all the strings to numbers
 * @returns {array} - The parsed array
 */
Array.prototype.toNum = function number() {
	return this.map((r) => (isNaN(r) || isNaN(parseFloat(r)) ? r : parseFloat(r)));
};
/*
 * This function chunks an array into smaller arrays
 * @param {number} chunkSize - The size of the chunk
 * @returns {array} - The chunked array
 */
Array.prototype.chunk = function chunking(chunkSize) {
	let chunks = [];
	for (let i = 0; i <= this.length; i += chunkSize) {
		chunks.push(this.slice(i, i + chunkSize));
	}
	return chunks;
};
/*
 * This function randomizes the order of an array
 * @returns {array} - The randomized array
 */
Array.prototype.randomize = function randomize() {
	let currentIndex = this.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
	}
	return this;
};
/*
 * This function filters all the duplicate elements in an array
 * @returns {array} - The filtered array
 */
Array.prototype.nodupes = function nodupes() {
	return this.filter((e, i, a) => a.indexOf(e) == i);
};
/*
 * returns the first element of an array
 * @returns {any} - The first element of the array
 */
Array.prototype.first = function first() {
	return this[0];
};
/*
 * returns the last element of an array
 * @returns {any} - The last element of the array
 */
Array.prototype.last = function last() {
	return this[this.length - 1];
};
/*
 * Rotates the array clockwise
 * @param {number} times - The amount by which the array will be rotated
 * @returns {array} - The rotated array
 */
Array.prototype.rotate = function rotate(times = 1) {
	times -= this.length * Math.floor(times / this.length);
	this.push.apply(this, this.splice(0, times));
	return this;
};

//Functions related to Objects
Object.isEmpty = (obj) => JSON.stringify({}) === JSON.stringify(obj);

//Functions related to Strings
/*
 * Capitalizes the first letter of all the words in a string
 * @returns {string} - The converted string
 */
String.prototype.title = function title() {
	return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
};
/*
 * Checks whetert he given string is a valid url or not
 * @param {number} [method=0] - Each method uses a different way of checking wheter the string is a valid url or not. Chose as per you liking
 * @returns {boolean} - Returns true if the string is a valid url
 */
String.prototype.isURL = function isURL(method = 0) {
	if (method === 1) {
		try {
			return Boolean(new URL(urlString));
		} catch (e) {
			return false;
		}
	} else if (method === 2) {
		var a = document.createElement("a");
		a.href = str;
		return a.host && a.host != window.location.host;
	} else if (method === 3) {
		var inputElement = document.createElement("input");
		inputElement.type = "url";
		inputElement.value = urlString;

		if (!inputElement.checkValidity()) {
			return false;
		} else {
			return true;
		}
	} else if (method === 4) {
		return !!/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(urlString);
	} else if (method === 5) {
		return string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
	} else {
		throw new RangeError("Invalid method Number. Please use methods between 0 to 5");
	}
};
//Functions related to Elements
/*
 * Sets tooltip to the element or returns the tooltip of the element
 * @param {string} text - The text to be displayed in the tooltip
 */
Node.prototype.tooltip = function tooltip(text) {
	return this.attr("title", text);
};
/*
 * Sets/Returns the attribute of the element
 * @param {string} attr - The attribute to be set/returned
 * @param {string} [value] - The value to be set to the attribute
 */
Node.prototype.attr = function attr(attr, value) {
	if (value === void 0) {
		return this.getAttribute(attr);
	} else {
		return this.setAttribute(attr, value);
	}
};

/*
 * Converts a string to an element node
 * @param {string} str - The string to be converted
 * @returns {element} - The parsed element
 */
const createElm = (html) => {
	const t = document.createElement("div");
	t.innerHTML = html;
	return t.removeChild(t.firstElementChild);
};

//All the cursour Information is stored here
`
let cursourInfo = { mouseonpage: false, CursorX: 0, CursorY: 0, clicking: false };
if (window.Event) document.captureEvents(Event.MOUSEMOVE);
document.onmouseenter = function () {
	cursourInfo.mouseonpage = true;
};
document.onmouseleave = function () {
	cursourInfo.mouseonpage = false;
};
document.onmousedown = function () {
	cursourInfo.clicking = true;
};
document.onmouseup = function () {
	cursourInfo.clicking = false;
};
document.onmousemove = (e) => {
	cursourInfo.CursorX = window.Event ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	cursourInfo.CursorY = window.Event ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
};`;

const sum = (arr) => {
	return arr.reduce((a, b) => a + b, 0);
};

class Device {
	isPhone() {
		return ["Android", "webOS", "iPhone", "iPad", "BlackBerry", "Windows Phone"].some((a) => navigator.userAgent.includes(a));
	}
	OS() {
		let i = (i) => navigator.userAgent.match(i);

		if (i("Win")) return "Windows";
		else if (i("Mac")) return "Macintosh";
		else if (i("Linux")) return "Linux";
		else if (i("Android")) return "Android";
		else if (i("like Mac")) return "iOS";

		return "Unknown";
	}
	timezone() {
		Intl.DateTimeFormat().resolvedOptions().timeZone;
	}
}

class Page {
	find_parameter(parameter) {
		let href = window.location.href;
		let regex = new RegExp(`[&?]${parameter}=([^&]*)`, "i");
		let match = href.match(regex);
		print(match);
		return match[1];
	}
	cookie_dict() {
		let cookie_dict = {};
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i].split("=");
			cookie_dict[cookie[0].trim()] = cookie[1];
		}
		return cookie_dict;
	}
	in_iframe() {
		return window.location != window.parent.location;
	}
	async is_online(fetch_check = false) {
		if (!fetch_check) {
			return navigator.onLine;
		} else {
			return await fetch("https://i.imgur.com/8pNz0UC.png", { cache: "no-store" })
				.then((r) => r.blob())
				.then((r) => true)
				.catch((error) => false);
		}
	}
}

// Instesting functions that I am planning on adding
const Dummy_class = class Dummy {
	static isinstance(variable, type_variable) {
		return type(variable) == type_variable;
	}
	static rgb(r, g, b) {
		return `rgb(${r},${g}${b}`;
	}
	static isfunction(functionToCheck) {
		return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
	}

	static rand_bool() {
		return Math.randomNum(100) % 2 == 0;
	}
	find_from_array(string, match_array) {
		for (var i = 0; match_array.length >= i; i++) {
			if (string.includes(match_array[i])) return { found: true, from: match_array[i] };
		}
		return { found: false };
	}
	InsertCss(css) {
		let t = document.createElement("style");
		return t.appendChild(document.createTextNode(css)), document.head.appendChild(t), t;
	}
	geolocation() {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition((o) => {
				(Dummy.lat = o.coords.latitude), (Dummy.lon = o.coords.longitude);
			});
	}
};
