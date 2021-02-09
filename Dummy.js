/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/

"use strict";
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
Array.prototype.random=function random(){return this[Math.randomNum(this.length-1)]};
Array.prototype.last=function last(){return this[this.length-1]};
Array.prototype.isEmpty=function empty(){return"[]"==JSON.stringify(this)};
Array.prototype.toNum=function number(){return this.map(r=>isNaN(r)||isNaN(parseFloat(r))?r:parseFloat(r))};

//Functions related to Objects
Object.isEmpty=(obj=>JSON.stringify({})===JSON.stringify(obj));

//Pass in the element as a string and get a parsed element
const createElm=html=>{const t=document.createElement("div");return t.innerHTML=html,t.removeChild(t.firstElementChild)};

//All the cursour Information is stored here
let cursourInfo = {mouseonpage: false, CursorX: 0, CursorY: 0, clicking: false}
if (window.Event) document.captureEvents(Event.MOUSEMOVE);
document.onmouseenter = function(){cursourInfo.mouseonpage = true};
document.onmouseleave = function(){cursourInfo.mouseonpage = false};
document.onmousedown = function(){cursourInfo.clicking = true};
document.onmouseup = function(){cursourInfo.clicking = false};
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

let Dummy = {
    parameter:function parameter(parameter) {return window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'))[1]},
    tooltip:function tooltip(element,text){element.setAttribute('title',text)},
    rgb:function(r,g,b){return `rgb(${r},${g},${b})`},
    matchany:function matchany(string,match){return Array.from(match).map(a=>string.match(a)).includes(true)},
    isPhone:['Android','webOS','iPhone','iPad','BlackBerry','Windows Phone'].map(a=>navigator.userAgent.match(a)).includes(true),
    OS:"Unknown OS",
    Online:navigator.onLine,
    validUrl: function isValidURL(string) {return string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null},
    InsertCss: function(css){let t=document.createElement("style");return t.appendChild(document.createTextNode(css)),document.head.appendChild(t),t},
    geolocation: function(){if (navigator.geolocation) navigator.geolocation.getCurrentPosition((o)=>{Dummy.lat=o.coords.latitude,Dummy.lon=o.coords.longitude});}
}
//Checking the Operating System
!function(){let i=i=>navigator.userAgent.match(i),n=i=>Dummy.OS=i;i("Win")?n("Windows"):i("Mac")?n("Macintosh"):i("Linux")?n("Linux"):i("Android")?n("Android"):i("like Mac")?n("iOS"):n(void 0)}();
//Updating the Online or Offline thing in Dummy
window.addEventListener('online', ()=>{Dummy.Online = navigator.onLine});
window.addEventListener('offline', ()=>{Dummy.Online = navigator.onLine});