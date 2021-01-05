/*===================NOTE===================*/
/*     This script was made by Himanshu     */
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
	return preset.replaceAll('MM',pad(this.getMonth()+1))
	.replaceAll('YYYY',this.getFullYear())
	.replaceAll('DD',pad(this.getDate()))
	.replaceAll('hh',pad(this.getHours()))
	.replaceAll('mm',pad(this.getMinutes()))
	.replaceAll('ss',pad(this.getSeconds()))
}
//Get The parameter from url; To use: getparameter('expiredate'); How the url looks = https://www.example.com/?expiredate=tomorrow&isexpired=false
const getparameter = (parameter) => {
	let fetch = window.location.href.match(new RegExp(`[&?]${parameter}=([^&]*)`,'i'));
	return fetch ? fetch[1] : ''
}

//To use: new Date().getFullMonth();
Date.prototype.getFullMonth = function(){['Janurary','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()]}

//Converts the passed numbers accordingly for Timeout functions
const getSeconds = (num) => num*1000;
const getMinutes = (num) => num*60000;
const getHours = (num) => num*3600000;

//Returns a random object from the array; To use: ['a','b','c'].random()
Array.prototype.random = function(){return this[Math.randomNum(this.length-1)]}