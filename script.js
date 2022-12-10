// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Arrays
var num = numericCharacters;
var lowerCase = lowerCasedCharacters;
var upperCase = upperCasedCharacters;
var special = specialCharacters;

var passwordBtnEl = document.querySelector("#generate");

var passwordLength = prompt("Please select password length between 10-64");
// confirm length
var passwordEl = parseInt(passwordLength);
console.log(passwordEl);

// confirm number is between 10-64
while (passwordEl < 10 || passwordEl > 64) {
  alert("Please pick a number between 10-64");
  passwordLength = prompt("Please select password length between 10-64");
}

// Confirm characters used
var useLower = lowerCase;
var useUpper = upperCase;
var useNum = numericCharacters;
var useSpecial = specialCharacters;

var lowerConfirm = confirm("Use lower case?");
var upperConfirm = confirm("Use upper case?");
var numConfirm = confirm("Use numbers?");
var specialConfirm = confirm("Use special characters?");
var password = "";

var characters = [];

lowerConfirm ? characters.push(...useLower) : "";
upperConfirm ? characters.push(...useUpper) : "";
numConfirm ? characters.push(...useNum) : "";
specialConfirm ? characters.push(...useSpecial) : "";
console.log(characters);
console.log(characters.length);
console.log(passwordEl);

// generate password
function generatePassword() {
  for (let i = 0; i <= passwordEl; i++) {
    var createdPassword = (password +=
      characters[Math.floor(Math.random() * characters.length)]);
    console.log(createdPassword);
  }
  return createdPassword;
}

// print password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password-display");
  passwordText.value = password;
}

passwordBtnEl.addEventListener("click", writePassword);
