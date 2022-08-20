<div align="center">

# Utility Libraries

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&style=for-the-badge&logoColor=white)

</div>

The main purpose of this repo is to provide a set of utility libraries to be used in order projects.

## CDN links

Below are all the cdn links for the libraries.

```
https://fschatbot.github.io/Script/Dummy.min.js
https://fschatbot.github.io/Script/cookies.min.js
https://fschatbot.github.io/Script/data_recorder.min.js
https://fschatbot.github.io/Script/internet.min.js
https://fschatbot.github.io/Script/Right_click.min.js
https://fschatbot.github.io/Script/Timer.min.js
```

### Dummy Library

A powerful library which adds a lot of missing functions from standard JavaScript. Below is a list of all the functions in the library curently.

- `Math.PI2`
  - returns a rounded version of the number PI till 100
- `Math.randomNum`
  - returns a random int between two passed in numbers
- `Math.randomcolor`
  - returns a random color -> `{r,g,b}`
- `Math.range`
  - Checks wheter a given number is in range of two other numbers
- `Number.prototype.times`
  - a quick for loop using numbers
  - ```js
    (5).times((i, ...args) => {
    	/* code here */
    }, ...args);
    ```
- `Date.prototype.preset`
  - A simple function for formating string with a date
- `Date.prototype.getFullMonth`
  - returns the full name of the month
- `Array.prototype.random`
  - returns a random element from an array
- `Array.prototype.isEmpty`
  - returns true if the array is empty
- `Array.prototype.toNum`
  - returns the array with all elements converted to numbers
- `Array.prototype.chunk`
  - Chunks the array into smaller arrays of a given size
- `Array.prototype.randomize`
  - Randomizes the order of the array
- `Array.prototype.nodupes`
  - Removes all duplicate elements from the array
- `Array.prototype.first`
  - Returns the first element of the array
- `Array.prototype.last`
  - Returns the last element of the array
- `Array.prototype.rotate`
  - Rotates the array to the right by a given amount
- `Array.prototype.insert`
  - Inserts an element at a given index
- `Array.prototype.remove`
  - Removes an element at a given index
- `Array.prototype.removeAll`
  - Removes all instance of the element from the array
- `Object.isEmpty`
  - Returns true if the object is empty
- `String.prototype.title`
  - Returns the string with the first letter of each word capitalized
- `String.prototype.isURL`
  - Returns true if the string is a valid URL
  - Contains 6 different method to chose from (0 to 5)
- `Node.prototype.tooltip`
  - Adds a tooltip to the element
- `Node.prototype.attr`
  - Adds an attribute to the element
  - If no value is passed, then returns the attribute value
- `Device`
  - A class that returns information about the device
  - isPhone
    - returns boolean if the device is a phone
  - OS
    - returns the OS of the device
  - timezone
    - returns the timezone of the device
- `Page`
  - A class that returns information about the page
  - find_parameter
    - returns parameter value from the url
  - Cookie Dict
    - returns the page cookies as a dictionary
  - in_iframe
    - returns true if the page is in an iframe
  - is_online
    - A way of checking wheter the page is online or not.
    - method one is native method, method two is ping method
- `Dummy_class`
  - A class with function that planning to be added to the library
- `createElm`
  - Converts string to Node
- `sum`
  - Returns the sum of all the elements in the array
