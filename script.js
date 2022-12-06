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

var num = [
  specialCharacters,
  upperCasedCharacters,
  lowerCasedCharacters,
  numericCharacters,
];
var passwordBtnEl = $("#generate");
var passwordDisplayEl = $("#password-display");

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = "";
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// passwordBtnEl.on("dblclick", function () {
//   var newPassword = passwordGenerator(15);
//   passwordDisplayEl.text(newPassword);
// });

passwordBtnEl.click(function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
