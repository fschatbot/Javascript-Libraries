/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/

//Random number generator to use : Math.randomnum([Maximum], [Minimum]); by default Minimum will be 0
Math.randomNum = (max,min = 0) => Math.floor(Math.random() * (max - min + 1) ) + min;
//To use: randomcolor(); Returns a random color
const randomcolor = () => `rgb(${Math.randomNum(255)},${Math.randomNum(255)},${Math.randomNum(255)})`
//To use: new Date().setPreset([preset]); You can try this preset to understand 'DD|MM|YYYY - hh:mm:ss'
Date.prototype.setPreset = function(preset) {
	const pad = (a) => ("0"+a).slice(-2)
	return preset.replace(/MM/g,pad(this.getMonth()+1))
	.replace(/YYYY/g,this.getFullYear())
	.replace(/DD/g,pad(this.getDate()))
	.replace(/hh/g,pad(this.getHours()))
	.replace(/mm/g,pad(this.getMinutes()))
	.replace(/ss/g,pad(this.getSeconds()))
}
//To use: new Date().getFullMonth();
Date.prototype.getFullMonth = function(){['Janurary','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()]}
//Get The parameter from url; To use: getparameter('expiredate'); How the url looks = https://www.example.com/?expiredate=tomorrow&isexpired=false
const getparameter = (parameter) => {
	let fetch = window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'));
	return fetch ? fetch[1] : null
}
//Converts the passed numbers accordingly for Timeout functions
const getSeconds = (num) => num*1000;
const getMinutes = (num) => num*60000;
const getHours = (num) => num*3600000;

//Returns a random object from the array; To use: ['a','b','c'].random()
Array.prototype.random = function(){return this[Math.randomNum(this.length-1)]}

const elementGenerator = (elementName,config = [],innerhtml = '') => {
    //This function quickly generates a element
    let element = document.createElement(elementName);
    for (const key in config){
        element.setAttribute(key,config[key])
    }
    element.innerHTML = innerhtml;
    return element
}

//Functions related to Objects
Object.isEmpty = (obj) => JSON.stringify(obj) == '{}';


//Checks if the number is in a certain ranges; not strict means the number could be min or max
Math.range = (number,min,max,strict) =>{
	number = Number(number);
	return strict ?  number > min && number < max : number >= min && number <= max
}

//This gets the cursours location
let CursorX,CursorY;
window.onload = init;
function init() {
	if (window.Event) document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove = (e) => {
		CursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
		CursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	}
}