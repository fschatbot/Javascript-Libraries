let loadedFonts = [];
let fontList = {};

class FontNotFound extends Error {}
class VariantNotFound extends FontNotFound {}
class InvalidFamilyName extends VariantNotFound {}
/*
 * @param fonts {string[] | string} - Font or a list of fonts that your want to be added
 */
async function loadFont({ name, variant = "regular" }) {
	name = name.toLowerCase();
	variant = variant.toLowerCase();
	// fonts = [...fonts]; // Convert it into a list
	if (Object.isEmpty(fontList)) await loadFontList();

	// Dealing with the font name
	if (!(name in fontList)) throw new FontNotFound(`${name} is not a registered Google font!`);
	requestedFont = fontList[name];

	// Dealing with the fontVariable
	match = variant.match(/[134579]00|thin|extra-?light|light|regular|medium|semi[\s-]?bold|extra[\s-]?bold|bold|black/i);
	matchMap = {
		100: "100",
		200: "200",
		300: "300",
		400: "regular",
		500: "500",
		600: "600",
		700: "700",
		800: "800",
		900: "900",
		thin: "100",
		extralight: "200",
		light: "300",
		regular: "regular",
		medium: "500",
		semibold: "600",
		bold: "700",
		extrabold: "800",
		black: "900",
	};
	finalVariant = matchMap[String(match).replace(/\s|-/, "")] + (variant.includes("italic") ? "italic" : "");

	if (!requestedFont.variants.includes(finalVariant)) throw new VariantNotFound(`The variant "${variant}"(${finalVariant}) is not a valid variant`);
	// Dealing with loading the font in

	// loadedFonts.concat(font);
}

function unloadFonts(fonts) {
	fonts = [...fonts];
}

async function loadFontList() {
	return await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDDiO8nLVRMDaXwrJp61Cdcar5gFmmiR1Q")
		.then((resp) => resp.json())
		.then((list) => {
			list.items.forEach((item) => {
				fontList[item.family.toLowerCase()] = item;
			});
		});
}

loadFont({
	name: "Abhaya Libre",
	variant: "bold",
});

// https://fonts.googleapis.com/css2?family=ABeeZee&display=swap


/*
Link to analyze

https://fonts.googleapis.com/css2?family=ABeeZee&family=Abhaya+Libre:wght@800&family=Poppins:ital,wght@1,100;1,400&display=swap

- ABeeZee
 - Regular
- Abhaya Libre
 - Extra Bold
- Poppins
 - Thin 100 Italic
 - Regular 400 Italic
*/