// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  let length = 0;
  //storing the length of the password via user input. Will keep asking the user for the correct input before moving on.
  while(length < 10 || length > 64 || isNaN(length))
  {
    //Filters to int so we can collect the correct type of data for use later in the program. 
    length = parseInt(prompt("How many characters would you like your password to have? \n Enter a number between 10-64.", 10)); //specifies denary numbers, else other number types could be supported
    if(isNaN(length))
    {
      alert("Password length must be a number");
    }
    else if(length < 10)
    {
      alert("Password length must be grteater than 10");
    }
    else if(length > 64)
    {
      alert("Password length must be less than 64");
    }
  }

  //getting user inputs for type of characters they would like in their password.
  let hasSpecialCharacters = false;
  let hasNumericCharacters = false;
  let hasUpperCaseCharacters = false;
  let hasLowerCaseCharacters = false;
  while(!hasLowerCaseCharacters && !hasNumericCharacters && !hasSpecialCharacters && !hasUpperCaseCharacters)
  {
    hasSpecialCharacters = confirm("Click 'Okay' if you would like special characters in your password!");
    hasUpperCaseCharacters = confirm("Click 'Okay' if you would like special characters in your password!");
    hasNumericCharacters = confirm("Click 'Okay' if you would like special characters in your password!");
    hasLowerCaseCharacters = confirm("Click 'Okay' if you would like lower case characters in your password!");
    //alerting the user that they must click okay on at least one of the above options.
    if (!hasLowerCaseCharacters && !hasNumericCharacters && !hasSpecialCharacters && !hasUpperCaseCharacters)
    {
      alert("Your password must contain at least one character type! \n Make sure you click okay on at least one of the options presented!");
    }
  }
  
  return length; //returns length as a number to be used in future logic.
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random * arr.length); //random number to refer to specific character in array.
  console.log(`Random value is ${arr[randomIndex]}`); //console log for debugging reference
  return arr[randomIndex]; //returns the random index value selected earlier.
}

// Function to generate password with user input
function generatePassword() {
  passwordLength = getPasswordOptions();
  while(passwordLength > 0)
  {
    getRandom();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);