//consts to allow quick adjustments to the password criteria.
const minPasswordCharacters = 10;
const maxPasswordCharacters = 64;

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
  while (length < minPasswordCharacters || length > maxPasswordCharacters || isNaN(length)) {
    //Filters to int so we can collect the correct type of data for use later in the program. 
    length = parseInt(prompt("How many characters would you like your password to have? \n Enter a number between 10-64.", 10)); //specifies denary numbers, else other number types could be supported
    if (isNaN(length)) {
      alert("Password length must be a number");
    }
    else if (length < minPasswordCharacters) {
      alert("Password length must be greater than 10");
    }
    else if (length > maxPasswordCharacters) {
      alert("Password length must be less than 64");
    }
  }

  //getting user inputs for type of characters they would like in their password.
  //values declared here to set the correct state for future logic.
  let hasSpecialCharacters = false;
  let hasNumericCharacters = false;
  let hasUpperCaseCharacters = false;
  let hasLowerCaseCharacters = false;
  while (!hasLowerCaseCharacters && !hasNumericCharacters && !hasSpecialCharacters && !hasUpperCaseCharacters) {
    //asking user to confirm each character type, one by one.
    hasSpecialCharacters = confirm("Click 'OK' if you would like special characters in your password!");
    hasUpperCaseCharacters = confirm("Click 'OK' if you would like special characters in your password!");
    hasNumericCharacters = confirm("Click 'OK' if you would like special characters in your password!");
    hasLowerCaseCharacters = confirm("Click 'OK' if you would like lower case characters in your password!");
    //alerting the user that they must click OK on at least one of the above options.
    if (!hasLowerCaseCharacters && !hasNumericCharacters && !hasSpecialCharacters && !hasUpperCaseCharacters) {
      alert("Your password must contain at least one character type! \n Make sure you click okay on at least one of the options presented!");
    }
  }

  //creating the passwordOptions object to be returned at the end of this function.
  let passwordOptions = {
    passwordLength: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  }

  console.log(passwordOptions); //returning the passwordOptions object to the console.
  return passwordOptions; //returns length as a number to be used in future logic.
}

// Function for getting a random element from an array
function getRandom(arr) {
  console.log(`receiving array \n ${arr}`);
  let randomIndex = Math.floor(Math.random() * arr.length); //random number to refer to specific character in array.
  console.log(`Random index is: ${randomIndex}`);
  console.log(`Random value is ${arr[randomIndex]}`); //console log for debugging reference
  return arr[randomIndex]; //returns the random index value selected earlier.
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let passwordCharacters = []; //setting the array for the password characters to be used later
  let possibleCharacters = []; //store arrays of all valid characters
  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters); //adds lower case character array to possible characters
  }
  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters); //adds uper case character array to possible characters
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters); //adds numeric character array to possible characters
  }
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters); //adds special character array to possible characters
  }

  let tmpPasswordLength = options.passwordLength; //setting the size for the while loop below

  while (tmpPasswordLength > 0) {
    passwordCharacters.push(getRandom(possibleCharacters)); //will return a random value from the possible character array and add it to the generated password
    tmpPasswordLength--;
    console.log(`Password is currently: ${passwordCharacters}`); //print each step of randomisation
  }
  return passwordCharacters.join(""); //joins each element in the array to be displayed on the website
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