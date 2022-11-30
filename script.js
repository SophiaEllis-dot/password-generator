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
var char = [lowerCasedCharacters, upperCasedCharacters];
var numbers = [numericCharacters];
var symbols = [specialCharacters];

// gets password from input, validation on input
function getPasswordOption() {
  passwordLength = prompt("Pick your password length between 10-64");
  {
    if (passwordLength == null) {
      return null;
    } else if (
      passwordLength < 10 ||
      passwordLength > 64 ||
      isNaN(passwordLength)
    ) {
      alert("enter number between 10-64");
      location.reload();
    }
  }
}
getPasswordOption();

var choices = {
  char: confirm("use lower and upper case characters in your password?"),
  numbers: confirm("use numbers in your password?"),
  symbols: confirm("use symbols in your password"),
};

var selectChar = [];
if (choices.char == true) {
  selectChar = selectChar.concat(char);
}

if (choices.numbers == true) {
  selectChar = selectChar.concat(numbers);
}

if (choices.symbols == true) {
  selectChar = selectChar.concat(symbols);
}

function createPassword() {
  getPasswordOption();

  var passwordChar = "";
  while (passwordChar.length < characterLength) {
    var index = Math.floor(Math.random() * charChoices.length);
    passwordChar += option[index];
  }
  return passwordChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}

// print to text box
document.getElementById("password").value = password;
