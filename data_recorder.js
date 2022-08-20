"use strict";

var userActions = [];
var start_time = null;
var max_data_len = 1 * 1000 * 1000; // 1 MB limit for the data

/*
 * Send the collected data to the server
 * @param {function} encoder - The encoder function to convert array to string (default: JSON.stringify)
 */
function sendData(encoder = JSON.stringify) {
	var encoded = encoder(userActions);
	if (encoded.length < max_data_len) return; // Make sure that we have sufficient data to send

	// userActions = userActions.slice(0, 1); // Remove all eleminents from the array but the keep the first one

	var xhr = new XMLHttpRequest();
	xhr.open("POST", window.customDataDumpURL || "/data", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(encoded);
}

function addEventListeners(target) {
	var target = typeof target == "string" ? document.querySelector(target) : document.body;

	// Adding the event listeners

	// I will not add all the eventlistners as some of them are unnecessary
	target.addEventListener("copy", (event) => recordEvent({ name: "copy", data: event.clipboardData.getData("text/plain") }, event));
	target.addEventListener("cut", (event) => recordEvent({ name: "cut", data: event.clipboardData.getData("text/plain") }, event));
	target.addEventListener("paste", (event) => recordEvent({ name: "paste", data: event.clipboardData.getData("text/plain") }, event));

	// Keyboard
	target.addEventListener("keydown", (event) => recordEvent({ name: "keydown", data: event.key }, event));
	target.addEventListener("keyup", (event) => recordEvent({ name: "keyup", data: event.key }, event));

	// Mouse
	document.onmouseup = (event) => recordEvent({ name: "mouseup", data: { x: event.clientX, y: event.clientY } }, event);
	document.onmousedown = (event) => recordEvent({ name: "mousedown", data: { x: event.clientX, y: event.clientY } }, event);
	document.onmousemove = (event) => recordEvent({ name: "mousemove", data: { x: event.clientX, y: event.clientY } }, event);
	/*
	// Event Listeners don't seem to work
	target.addEventListener("mousedown", (e) => recordEvent({ name: "mousedown", data: { x: e.clientX, y: e.clientY } }, e));
	target.addEventListener("mouseup", (e) => recordEvent({ name: "mouseup", data: { x: e.clientX, y: e.clientY } }, e));
	target.addEventListener("mousemove", (e) => recordEvent({ name: "mousemove", data: { x: e.clientX, y: e.clientY } }, e));
	*/

	// Dragging
	target.addEventListener("dragstart", (e) => recordEvent({ name: "dragstart", data: { x: e.clientX, y: e.clientY } }, e));
	target.addEventListener("dragend", (e) => recordEvent({ name: "dragend", data: { x: e.clientX, y: e.clientY } }, e));
	target.addEventListener("drop", (e) => recordEvent({ name: "drop", data: { x: e.clientX, y: e.clientY } }, e));

	// window Focus and Blur
	window.addEventListener("focus", (event) => recordEvent({ name: "focus" }, event));
	window.addEventListener("blur", (event) => recordEvent({ name: "blur" }, event));

	start_time = new Date().getTime();
	// Add initial data
	let i = function (i) {
		return navigator.userAgent.match(i);
	}; // Arrow functions are not supported in IE5
	var OS = i("Win") ? "Windows" : i("Mac") ? "Macintosh" : i("Linux") ? "Linux" : i("Android") ? "Android" : i("like Mac") ? "iOS" : "Unknown";
	recordEvent({ name: "page_load", target: document.body, data: { OS }, timeStamp: start_time });
}

/*
 * Adds the given event data to the userActions array
 * @param {Object} eventData - The event data to be added
 * @param {String} eventData.name - The name of the event
 * @param {Object} eventData.data - Any extra event related data
 * @param {Number} eventData.timeStamp - When the event took place
 * @param {Object} raw_event - The raw event object
 */
function recordEvent({ name, data, timeStamp }, raw_event) {
	if (raw_event && !raw_event.isTrusted) return; // Don't record events that are not trusted
	// Add the event to the userActions array
	var timeStamp = timeStamp || new Date().getTime() - start_time;
	var target = raw_event ? raw_event.target || raw_event.srcElement || document.body : document.body;
	var targetPath = getDomPath(target);
	var new_data = { name, target: targetPath, data, timeStamp };
	userActions.push(new_data);
	sendData();
}

// Check for page load and if the page is loaded add the event listeners
function isPageLoaded() {
	if (document.readyState == "complete") addEventListeners();
}

isPageLoaded();
document.addEventListener("readystatechange", isPageLoaded);

// https://stackoverflow.com/a/16742828/13703806
function getDomPath(el) {
	var stack = [];
	while (el.parentNode != null) {
		var sibCount = 0;
		var sibIndex = 0;
		for (var i = 0; i < el.parentNode.childNodes.length; i++) {
			var sib = el.parentNode.childNodes[i];
			if (sib.nodeName == el.nodeName) {
				if (sib === el) {
					sibIndex = sibCount;
				}
				sibCount++;
			}
		}
		if (el.hasAttribute("id") && el.id != "") {
			stack.unshift(el.nodeName.toLowerCase() + "#" + el.id);
		} else if (sibCount > 1) {
			stack.unshift(el.nodeName.toLowerCase() + ":eq(" + sibIndex + ")");
		} else {
			stack.unshift(el.nodeName.toLowerCase());
		}
		el = el.parentNode;
	}

	return stack.slice(1).join(" > "); // removes the html element
}
