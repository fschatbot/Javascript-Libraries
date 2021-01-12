/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/


//These are the functions for Math
Math.randomNum = (max,min=0) => Math.floor(Math.random()*(max-min+1))+min;
Math.randomcolor=()=>`rgb(${Math.randomNum(255)},${Math.randomNum(255)},${Math.randomNum(255)})`;
Math.range=(number,min,max,strict)=>{return strict?number>min&&number<max:number>=min&&number<=max};
Math.getSeconds = (num) => num*1000;
Math.getMinutes = (num) => num*60000;
Math.getHours = (num) => num*3600000;

//These are the functions for Date
Date.prototype.setPreset = function(preset) {
	const pad = (a) => ("0"+a).slice(-2)
	return preset.replace(/MM/g,pad(this.getMonth()+1))
	.replace(/YYYY/g,this.getFullYear())
	.replace(/DD/g,pad(this.getDate()))
	.replace(/hh/g,pad(this.getHours()))
	.replace(/mm/g,pad(this.getMinutes()))
	.replace(/ss/g,pad(this.getSeconds()))
}
Date.prototype.getFullMonth = function(){['Janurary','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()]}

//These are the functions for Arrays
Array.prototype.random=function(){return this[Math.randomNum(this.length-1)]};
Array.prototype.last=function(){return this[this.length-1]};
Array.prototype.isEmpty=function(){return"[]"==JSON.stringify(this)};
Array.prototype.toNum=function(){return this.map(r=>isNaN(r)||isNaN(parseFloat(r))?r:Number(r))};

//Functions related to Objects
Object.isEmpty=(obj=>"{}"==JSON.stringify(obj));
Object.forEach=(obj,callback)=>{for(let f in obj)callback(f)};

//Get The parameter from url; To use: getparameter('expiredate'); How the url looks = https://www.example.com/?expiredate=tomorrow&isexpired=false
const getparameter = (parameter) => {
	let fetch = window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'));
	return fetch ? fetch[1] : null
}
const elementGenerator = (elementName,config = [],innerhtml = '') => {
    //This function quickly generates a element
    let element = document.createElement(elementName);
    for (const key in config){
        element.setAttribute(key,config[key])
    }
    element.innerHTML = innerhtml;
    return element
}

//All things that you log will now also be saved in console.logs
console.logs = [];
console._log = console.log.bind(console);
console.log = function(){
    console.logs.push(...Array.from(arguments));
    console._log.apply(console, arguments);
}

//All the cursour Information is stored here
let cursourInfo = {}
window.onload = init;
document.onmouseenter = function(){cursourInfo.mouseonpage = true};
document.onmouseleave = function(){cursourInfo.mouseonpage = false};
document.onmousedown = function(){cursourInfo.cursourclicking = true};
document.onmouseup = function(){cursourInfo.cursourclicking = false};
function init() {
	if (window.Event) document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove = (e) => {
		cursourInfo.CursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
		cursourInfo.CursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	}
}