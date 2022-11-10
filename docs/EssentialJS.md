<div align="center">

# EssentialJS

[CDN Link](https://fschatbot.github.io/Javascript-Libraries/EssentialJS.min.js)

</div>

## Table of Content

- [Description](#description)
- [Adding to the project](#adding-to-the-project)
  - [CDN Links](#cdn-links)
  - [Adding it into HTML](#adding-it-into-html)
- [Documentation](#documentation)
  - [Math](#math)
  - [Date](#date)
  - [Array](#array)
  - [Objects](#objects)
  - [String](#string)
  - [Node](#node)
  - [Miscellaneous](#miscellaneous)

## Description

Javascript is a great language but it is missing a few important functions for which we have to run to `stackoverflow` all the time. `EssentialJS` aims to add these missing functions to the Javascript eco-system with the smallest bundle size so your code is clean, small and readable.

Bundle Size: ≤ 200B

## Adding to the project

### CDN Links

Not Minified: https://fschatbot.github.io/Javascript-Libraries/EssentialJS.js
<br>
Minified: https://fschatbot.github.io/Javascript-Libraries/EssentialJS.min.js

### Adding it into HTML

```js
<script type="text/javascript" src="https://fschatbot.github.io/Javascript-Libraries/EssentialJS.min.js"></script>
```

## Documentation

Here starts the documentation of script

### Math

`sum` - Adds up an array of numbers<br>
`Math.PI2` - returns a rounded version of the number PI<br>
`Math.randomFloat` - Returns a random float between the 2 numbers passed<br>
`Math.randomNum` - Returns a random integer between the 2 passed as arguments<br>
`Math.randomcolor` - Returns a random color in the RGB format (most likely to be used for CSS)<br>
`Math.range` - Returns a boolean if the number passed is between 2 values [can be made inclusive]<br>
`Number.prototype.times` - A quicker version of a for loop. Instead of typing the weird for loop you can use this to your advantage

```js
(5).times((index, str) => {console.log(str, index)}, "Hello World!");

> Hello World! 0
> Hello World! 1
> Hello World! 2
> Hello World! 3
> Hello World! 4
```

### Date

`Date.prototype.preset` - Allows you to quickly format a datetime object

```js
new Date().preset("hh:mm:ss DD/MM/YYYY"); // 15:27:26 06/11/2022
new Date().preset("DD MMMM YYYY"); // 06 November 2022
```

Formats:

- hh - hour padded with 0
- mm - minute padded with 0
- ss - second padded with 0
- DD - day padded with 0
- MM - month padded with 0
- MMM - Month name Ex: Jan, Feb, Mar, Apr
- MMMM - Full Month Name Ex: Janurary, March
- YYYY - Full Year Ex: 2022

`Date.prototype.getFullMonth` - Returns the full Month Name<br>
`Date.prototype.getMonthArray` - Returns the month array for that year

### Array

`Array.prototype.random` - Returns a random element from the array<br>
`Array.prototype.isEmpty` - Returns a boolean to indicate wheter the array is empty or filled<br>
`Array.prototype.toNum` - Trys converting all elements in the array to a number<br>
`Array.prototype.chunk` - Chunks the array into pieces

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.chunk(3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
arr.chunk(4); // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
```

`Array.prototype.randomize` - Randomizes the order of an array<br>

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.randomize(); // [3, 8, 4, 6, 5, 9, 2, 7, 1]
arr.randomize(); // [2, 1, 3, 5, 9, 4, 8, 7, 6]
```

`Array.prototype.nodupes` - This is a filter function that filters out all the duplicates from the array<br>

```js
let arr = [1, 4, 12, 3, 2, 4, 1, 4];
arr.nodupes(); // [1, 4, 12, 3, 2]
```

`Array.prototype.first` - returns the first element of an array<br>
`Array.prototype.last` - returns the last element of an array<br>
`Array.prototype.rotate` - Rotates the array in the right direction

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.rotate(); // [9, 1, 2, 3, 4, 5, 6, 7, 8]
arr.rotate(5); // [5, 6, 7, 8, 9, 1, 2, 3, 4]
```

`Array.prototype.insert` - Allows you to insert an element at a spefic index in an array<br>
`Array.prototype.remove` - Removes a perticular element from the array<br>
`Array.prototype.removeAll` - Removes all instances of the element from the array

### Objects

`Object.isEmpty` - Returns a boolean if the Object is empty

### String

`String.prototype.title` - Capitalizes the first letter of all the words in a string<br>
`String.prototype.isURL` - Returns a boolean if the string is a boolean or not. There are 5 different methods to choose from (ordered by the best and the faster to slow)

### Node

`Node.prototype.tooltip` - Adds tooltip to the element<br>
`Node.prototype.attr` - Returns the attribute of the element or sets it if speficied (works like jQuery) <br>
`NodeList.prototype.array` - Converts the result from `document.querySelectorAll` to a proper array<br>
`createElm` - Converts string containing html into a Node

### Miscellaneous

`Device` - A class that allows you to check some information about the device

```js
new Device().isPhone(); // false
new Device().OS(); // Windows
new Device().timezone();
```

`Page` - A class that allows you to check some information about the page/url

```js
// URL: http://localhost:3000?star=1
new Page().find_parameter("star"); // 1
new Page().cookie_dict(); // {} <-- This is just document.cookie but in a dictionary format
new Page().in_iframe(); // false <-- Checks wheter the page is top level or embeded
new Page().is_online((fetch_check = true)); // true
```

`Dummy_class` - A class filled with useless functions for you to explorer
