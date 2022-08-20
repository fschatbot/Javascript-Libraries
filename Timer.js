/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/
"use strict";

const Timer = class timer {
	defaultonfinish = () => console.log("Times Up") // Default Function
	constructor(onfinish, millisecounds=1000) {
		// Check for bad input
		if (!Number.isInteger(millisecounds) || millisecounds <= 0){
			throw new Error("Sorry, but you have to pass in a integer for millisecounds")
		} else if (onfinish && {}.toString.call(onfinish) != '[object Function]') {
			throw new Error("Sorry, but you have to pass in a function for onfinish")
		}
		// Initiate the class
		this.millisecounds = millisecounds;
		this.onfinish = onfinish || this.defaultonfinish;
		this.timeout = setTimeout(this.onfinish, millisecounds)
		this.finishon = new Date(new Date().getTime() + millisecounds);
	}

	time_remaning() {
		return this.finishon - new Date()
	}
	
	cancel_timer() {
		clearTimeout(this.timeout);
	}
};

const Timer_loop = class time_loop {
	constructor(loop_function, loop_time=1000) {
		// Check for bad input
		if (!Number.isInteger(loop_time) || loop_time <= 0){
			throw new Error("Sorry, but you have to pass in a integer for loop_time")
		} else if (!loop_function || {}.toString.call(loop_function) != '[object Function]') {
			throw new Error("Sorry, but you have to pass in a function for loop_function")
		}
		// Initiate the class
		this.loop_time = loop_time
		this.loop_function = loop_function
		this.counter = 0
		this.nextrunon = new Date(new Date().getTime() + this.loop_time)
		this.loop = setInterval(() => {
			this.counter++; // Increment the counter evertime
			this.nextrunon = new Date(new Date().getTime() + this.loop_time) // Update the nextrunon variable
			this.loop_function(this.counter) //Pass it as an argument for the user to use
		}, this.loop_time);
	}

	next_run() {
		return this.nextrunon - new Date()
	}

	cancel_loop() {
		this.nextrunon = null
		clearInterval(this.loop)
	}
}
// An Example of Timer_loop can be creating a clock
// Below is a small exmaple of it (It uses the Dummy Library)
/*
let clock = new Timer_loop(() => {
    document.body.innerHTML = new Date().preset("hh:mm:ss DD/MM/YYYY")
})
*/