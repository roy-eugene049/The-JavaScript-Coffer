//Let's get started!

//Generate a random number between two values: 
    const randomNumber = Math.random() * (max - min) + min


//Check if a number is an integer: 
    const isInteger = (num) => num % 1 === 0


//Check if a value is null or undefined: 
    const isNil = (value) => value === null || value === undefined


//Check if a value is a truthy value: 

    const isTruthy = (value) => !!value


//Check if a value is a falsy value: 
    const isFalsy = (value) => !value


//Check if a value is a valid credit card number:


const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}

//Check if a value is an object: 
    const isObject = (obj) => obj === Object(obj)


//Check if a value is a function: 
    const isFunction = (fn) => typeof fn === 'function'


//Remove Duplicated from Array 
    const removeDuplicates = (arr) => [...new Set(arr)];


//Check if a value is a promise: 
    const isPromise = (promise) => promise instanceof Promise


//Check if a value is a valid email address:


	const isEmail = (email) => {
  const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return regex.test(email);
}

//Check if a string ends with a given suffix: 
    const endsWith = (str, suffix) => str.endsWith(suffix)


//Check if a string starts with a given prefix: 
    const startsWith = (str, prefix) => str.startsWith(prefix)


//Check if a value is a valid URL:


const isURL = (url) => {
  const regex = /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/;
  return regex.test(url);
}

//Check if a value is a valid hexadecimal color code:


const isHexColor = (hex) => {
  const regex = /#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;
  return regex.test(hex);
}

//Check if a value is a valid postal code:


const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}

//Check if a value is a DOM element:

const isDOMElement = (value) => typeof value === 'object' && value.nodeType === 1 && typeof value.style === 'object' && typeof value.ownerDocument === 'object';

//Check if a value is a valid CSS length (e.g. 10px, 1em, 50%):

const isCSSLength = (value) => /([-+]?[\d.]+)(%|[a-z]{1,2})/.test(String(value));

//Check if a value is a valid date string (e.g. 2022-09-01, September 1, 2022, 9/1/2022):


const isDateString = (value) => !isNaN(Date.parse(value));

//Check if a value is a number representing a safe integer (those integers that can be accurately represented in JavaScript): const isSafeInteger = (num) => Number.isSafeInteger(num)


//Check if a value is a valid Crypto address:


//Ethereum
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}

//bitcoin
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}

// ripple
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}

//Check if a value is a valid RGB color code


const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}

//Quickly create an array of characters from a string:


const string = "abcdefg";
const array = [...string];

//Quickly create an object with all the properties and values of another object, but with a different key for each property


const original = {a: 1, b: 2, c: 3};
const mapped = {...original, ...Object.keys(original).reduce((obj, key) => ({...obj, [key.toUpperCase()]: original[key]}), {})};

//Quickly create an array of numbers from 1 to 10


const array = [...Array(10).keys()].map(i => i + 1);

//Quickly shuffle an array


const shuffle = (array) => array.sort(() => Math.random() - 0.5);

//Convert an array-like object (such as a NodeList) to an array


const toArray = (arrayLike) => Array.prototype.slice.call(arrayLike);

//Sort Arrays


//Ascending
const sortAscending = (array) => array.sort((a, b) => a - b);

//Descending
const sortDescending = (array) => array.sort((a, b) => b - a);

//Debounce a function


const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};

//Open a new tab with a given URL


const openTab = (url) => {
  window.open(url, "_blank");
};

//Get the difference between two dates


const dateDiff = (date1, date2) => Math.abs(new Date(date1) - new Date(date2));

//Generate a random string of a given length


const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

//Get value of cookie


const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};
