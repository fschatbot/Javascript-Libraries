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
 * returns the last element of an array
 * @returns {any} - The last element of the array
 */
Array.prototype.last = function last() {
	return this[this.length - 1];
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

//Functions related to Objects
Object.isEmpty = (obj) => JSON.stringify({}) === JSON.stringify(obj);

//Functions related to Strings
/*
 * Capitalizes the first letter of all the words in a string
 * @deprecated — A legacy feature for browser compatibility
 * @param {string} str - The string to be converted
 * @returns {string} - The converted string
 */
String.prototype.title = function title() {
	return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
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
};

//All Code here is for stuff related to colors
const HexToRgb = (e) => {
	let s = (e) => parseInt(e, 16);
	let r = s(e.slice(1, 3)),
		g = s(e.slice(3, 5)),
		b = s(e.slice(5, 7));
	return { r, g, b };
};

const sum = (arr) => {
	return arr.reduce((a, b) => a + b, 0);
};

const RgbToHex = (r, g, b) => {
	let s = (c) => (0 + c.toString(16)).slice(-2);
	return "#" + s(r) + s(g) + s(b);
};
const Dummy_class = class Dummy {
	static find_parameter(parameter) {
		let href = window.location.href;
		let regex = new RegExp(`[&?]${parameter}=([^&]*)`, "i");
		let match = href.match(regex);
		print(match);
		return match[1];
	}
	static isinstance(variable, type_variable) {
		return type(variable) == type_variable;
	}

	static set_tooltip(element, text) {
		element.setAttribute("title", text);
	}
	static timezone() {
		Intl.DateTimeFormat().resolvedOptions().timeZone;
	}
	static rgb(r, g, b) {
		return `rgb(${r},${g}${b}`;
	}
	static isPhone() {
		return ["Android", "webOS", "iPhone", "iPad", "BlackBerry", "Windows Phone"].some((a) => navigator.userAgent.includes(a));
	}
	get in_iframe() {
		return window.location != window.parent.location;
	}
	static isfunction(functionToCheck) {
		return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
	}
	static async is_online(fetch_check = false) {
		if (!fetch_check) {
			return navigator.onLine;
		} else {
			return await fetch("https://i.imgur.com/8pNz0UC.png", { cache: "no-store" })
				.then((r) => r.blob())
				.then((r) => true)
				.catch((error) => false);
		}
	}

	static rand_bool() {
		return Math.randomNum(100) % 2 == 0;
	}
};

const Dummy = {
	timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
	parameter: function search_parameter(parameter) {
		return window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`, "i"))[1];
	},
	tooltip: function set_tooltip(element, text) {
		element.setAttribute("title", text);
	},
	rgb: function (r, g, b) {
		return `rgb(${r},${g},${b})`;
	},
	find: function find_from_array(string, match_array) {
		for (var i = 0; match_array.length >= i; i++) {
			if (string.includes(match_array[i])) return { found: true, from: match_array[i] };
		}
		return { found: false };
	},
	isPhone: ["Android", "webOS", "iPhone", "iPad", "BlackBerry", "Windows Phone"].some((a) => navigator.userAgent.includes(a)),
	OS: "Unknown OS",
	in_iframe: window.location != window.parent.location,
	Online: navigator.onLine,
	validUrl: function ValidURL(string) {
		return string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
	},
	InsertCss: function (css) {
		let t = document.createElement("style");
		return t.appendChild(document.createTextNode(css)), document.head.appendChild(t), t;
	},
	geolocation: function track() {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition((o) => {
				(Dummy.lat = o.coords.latitude), (Dummy.lon = o.coords.longitude);
			});
	},
};
//Checking the Operating System
!(function () {
	let i = (i) => navigator.userAgent.match(i),
		n = (i) => (Dummy.OS = i);
	i("Win") ? n("Windows") : i("Mac") ? n("Macintosh") : i("Linux") ? n("Linux") : i("Android") ? n("Android") : i("like Mac") ? n("iOS") : n(void 0);
})();
//Updating the Online or Offline thing in Dummy
