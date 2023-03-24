/*===================NOTE===================*/
/*This script was made by Himanshu Sultaina */
/* Please don't claim this as your own work */
/*     This script is under MIT License     */
/*==========================================*/
"use strict";

let right_click = class right_click {
	constructor(right_click_element,display_type="block") {
		// Define the variables
		this.elem = right_click_element
		this.display_type = display_type
		// Add the event listener
		if (document.addEventListener) {
			document.addEventListener('contextmenu',(event)=> {
				this.open_event(event);
				event.preventDefault();
			}, false);
			document.addEventListener("click", (e) => this.close(e))
		} else {
			document.attachEvent('oncontextmenu', function() {
				this.open_event()
				window.event.returnValue = false;
			});
		}
		this.fix_elem()
		this.elem.style.display = "none"
		
	}

	open_event(event=undefined) {
		let evt = event || window.event
		if (evt.pageY && evt.pageX){
            const {pageX, pageY} = evt;
			const {normalizedX,normalizedY} = this.normalizePozition(pageX,pageY)
			return this.open_at(normalizedX,normalizedY)
		} else if (evt.clientY && evt.clientX){
			const { clientX: mouseX, clientY: mouseY } = evt;
			const {normalizedX,normalizedY} = this.normalizePozition(clientX,clientY)
			return this.open_at(normalizedX,normalizedY)
		} else {
			return null
		}
	}
	fix_elem() {
		this.elem.style['z-index'] = 100000;
		this.elem.style.position = "absolute";
	}

	open_at(x,y) {
		// Open the menu at the specific location
		this.elem.style.display = this.display_type;
		this.elem.style.top = `${y}px`;
		this.elem.style.left = `${x}px`;
	}

	close(event) {
		// Close the menu if the user clicks outside the box
		if (event.target.offsetParent != this.elem){
			this.elem.style.display = "none";
		}
	}

	normalizePozition(mouseX, mouseY) {
		// ? compute what is the mouse position relative to the container element (scope)
		let scope = document.querySelector("body");
		let contextMenu = this.elem
		const {
		  left: scopeOffsetX,
		  top: scopeOffsetY,
		} = scope.getBoundingClientRect();
	  
		const scopeX = mouseX - scopeOffsetX;
		const scopeY = mouseY - scopeOffsetY;
	  
		// ? check if the element will go out of bounds
		const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;
	  
		const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;
	  
		let normalizedX = mouseX;
		let normalizedY = mouseY;
	  
		// ? normalzie on X
		if (outOfBoundsOnX) {
		  normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
		}
	  
		// ? normalize on Y
		if (outOfBoundsOnY) {
		  normalizedY = scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
		}
		return { normalizedX, normalizedY };
	  };
}

const block_right_click = class block_right_click{
	constructor() {
		if (document.addEventListener) {
			document.addEventListener('contextmenu',(event)=> event.preventDefault(), false);
		} else {
			document.attachEvent('oncontextmenu', () => {window.event.returnValue = false;});
		}
	}
}