const readlineSync = require('readline-sync');

function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }

  let hasUppercase = false;
  let hasNumber = false;

  for (let char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }
    if (!isNaN(char) && char !== ' ') {
      hasNumber = true;
    }
  }

  return hasUppercase && hasNumber;
}

let password;

do {
  password = readlineSync.question("Enter a password: ");
  if (!isValidPassword(password)) {
    console.log("Password must be at least 8 characters, have one uppercase letter and one number. Please try again.");
  }
} while (!isValidPassword(password));

console.log("Password accepted!");
