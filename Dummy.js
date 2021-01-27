/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/

/* Sites That made a lot of this possible
* https://www.ipify.org/
* https://ip-api.com/
*/



//These are the functions for Math
Math.PI2 = till => Number(Math.PI.toFixed(till||2))
Math.randomNum = (max,min=0) => Math.floor(Math.random()*(max-min+1))+min;
Math.randomcolor=()=>`rgb(${Math.randomNum(255)},${Math.randomNum(255)},${Math.randomNum(255)})`;
Math.range=(number,min,max,strict)=>{return strict?number>min&&number<max:number>=min&&number<=max};
Math.getSeconds = (num) => num*1000;
Math.getMinutes = (num) => num*60000;
Math.getHours = (num) => num*3600000;
Math.Multiply = (num1,num2,option) => Number((num1*num2).toFixed(option || 2).replace(/0+$/,'').replace(/\.$/, ''))
Math.divide = (num1,num2,option) => Number((num1/num2).toFixed(option || 2).replace(/0+$/,'').replace(/\.$/, ''))
Math.CircleArea = (radius) => Math.Multiply(Math.PI2(),Math.pow(radius,2));
Math.pythagoras = (num1,num2) =>Math.sqrt(Math.pow(num1,2)+Math.pow(num2,2));

//These are the functions for Date
Date.prototype.setPreset = function(preset) {
    const t = e => ("0" + e).slice(-2);
    return preset.replace(/MM/g, t(this.getMonth() + 1))
        .replace(/YYYY/g, this.getFullYear())
        .replace(/DD/g, t(this.getDate()))
        .replace(/hh/g, t(this.getHours()))
        .replace(/mm/g, t(this.getMinutes()))
        .replace(/ss/g, t(this.getSeconds()))
};
Date.prototype.getFullMonth = function(){['Janurary','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()]}

//These are the functions for Arrays
Array.prototype.random=function(){return this[Math.randomNum(this.length-1)]};
Array.prototype.last=function(){return this[this.length-1]};
Array.prototype.isEmpty=function(){return"[]"==JSON.stringify(this)};
Array.prototype.toNum=function(){return this.map(r=>isNaN(r)||isNaN(parseFloat(r))?r:parseFloat(r))};

//Functions related to Objects
Object.isEmpty=(obj=>"{}"==JSON.stringify(obj));
Object.forEach=(obj,callback)=>{for(let f in obj)callback(f)};

//Get The parameter from url; To use: getparameter('expiredate'); How the url looks = https://www.example.com/?expiredate=tomorrow&isexpired=false
const getparameter = (parameter) => {
	let fetch = window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'));
	return fetch ? fetch[1] : null
}

//Pass in the element as a string and get a parsed element
const createElm=html=>{const t=document.createElement("div");return t.innerHTML=html,t.removeChild(t.firstElementChild)};

//All the cursour Information is stored here
let cursourInfo = {}
if (window.Event) document.captureEvents(Event.MOUSEMOVE);
document.onmouseenter = function(){cursourInfo.mouseonpage = true};
document.onmouseleave = function(){cursourInfo.mouseonpage = false};
document.onmousedown = function(){cursourInfo.cursourclicking = true};
document.onmouseup = function(){cursourInfo.cursourclicking = false};
document.onmousemove = (e) => {
	cursourInfo.CursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	cursourInfo.CursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

//All Code here is for stuff related to colors
const hexToRgb = e => {
    let s = e => parseInt(e, 16);
    let r = e.slice(1, 3),
        g = e.slice(3, 5),
        b = e.slice(5, 7);
    return `rgb(${s(r)}, ${s(g)}, ${s(b)})`
};
function tooltip(element,text){
    element.setAttribute('title',text)
}

//input css
//iframe function auto import function

let Dummy = {
	href: location.href,
	rgb:function(r,g,b){return `rgb(${r},${g},${b})`},
	matchany:function(string,match){return match.map(a=>string.match(a)).includes(true)},
	isPhone:undefined,
	OS:"Unknown OS",
    InsertCss: function(css){let t=document.createElement("style");return t.appendChild(document.createTextNode(css)),document.head.appendChild(t),t},
	fetchip: function (ip){let t=new XMLHttpRequest;return t.open("GET",`http://ip-api.com/json/${ip}?fields=66846719`,!1),t.setRequestHeader("Content-Type","application/json"),t.send(),JSON.parse(t.response)},
	geolocation: ()=>{if (navigator.geolocation) navigator.geolocation.getCurrentPosition((o)=>{Dummy.lat=o.coords.latitude,Dummy.lon=o.coords.longitude});}
}
//Checking if the user is on a phone or not
Dummy.isPhone=Dummy.matchany(navigator.userAgent,[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/BlackBerry/i,/Windows Phone/i]);
//Checking the Operating System
!function(){let i=i=>navigator.userAgent.match(i),n=i=>Dummy.OS=i;i("Win")?n("Windows"):i("Mac")?n("Macintosh"):i("Linux")?n("Linux"):i("Android")?n("Android"):i("like Mac")?n("iOS"):n(void 0)}();
//Fetch User IP and some other information
fetch("https://api.ipify.org/").then(t=>t.text()).then(t=>{Dummy.IP=t,fetch(`http://ip-api.com/json/${t}?fields=1704443`).then(t=>t.json()).then(t=>{Dummy={...Dummy,...t}})});
