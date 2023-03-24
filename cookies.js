class CookiesManager {
	static getInstance() {
		return new CookiesManager();
	}
	constructor() {
		this.cookie_json = {};
		this.parse_cookies();
	}
	get cookies() {
		return this.cookie_json;
	}

	parse_cookies() {
		this.cookie_json = {};
		if (!document.cookie) return;
		document.cookie.split(/\s*;\s*/).forEach((pair) => {
			pair = pair.split(/\s*=\s*/);
			var name = decodeURIComponent(pair[0]);
			var value = decodeURIComponent(pair.splice(1).join("="));
			this.cookie_json[name] = value;
		});
	}

	set_cookie(name, value, days) {
		var d = new Date();
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}

	get_cookie(name) {
		return this.cookie_json[name];
	}

	toString() {
		return JSON.stringify(this.cookie_json);
	}
}
