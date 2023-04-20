// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// Set all possible variables for generator
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbolsChars = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

function generatePasswordOptions() {
  let length = prompt("Please enter length of password between 8 and 128 characters.");
  // First alert should state amount of characters allowed for password generation
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128 characters!!");
    return null;
    // New alert to prompt user that they have input an invalid amount of characters pre defined
  }
  let lowerCase = confirm("Do you want to include lowercase characters?");
  let upperCase = confirm("Do you want to include uppercase characters?");
  let numeric = confirm("Would you like to include numbers?");
  let specialCharacters = confirm("Would you like to use special characters?");
   // Asks user if ok or cancel on object question

  if (
    lowerCase === false &&
    upperCase === false &&
    numeric === false &&
    specialCharacters === false
  ) {
    alert("User should select at least one character type!!!");
    return null;
    // Alerts user they must choose at least one character type
  }

  let passwordOptions = {
    length1: length,
    lowerCase1: lowerCase,
    upperCase1: upperCase,
    numeric1: numeric,
    specialCharacters1: specialCharacters,
  };
  return passwordOptions;
}

// Function for actual random password generator
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  let options = generatePasswordOptions();
  let result = [];
  let randomCharacters = [];
  let altCharacters = [];
  if(options.lowerCase1) {
    randomCharacters.push(getRandom(lowercaseChars));
    altCharacters = altCharacters.concat(lowercaseChars);
  }
  if(options.upperCase1) {
    randomCharacters.push(getRandom(uppercaseChars));
    altCharacters = altCharacters.concat(uppercaseChars);
    // The generator is now pulling from the lower and uppercase "let" from the global array to generate a password
  }
}
