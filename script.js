// Assignment code here

var lengthchoice = 8
var heldlowercase = "hotdog"
var helduppercase = "PIZZA"
var heldnumber = 69
var heldsymbol = "!"

function passswordlength () {
lengthchoice = prompt ("Please choose a length for the password between 8 and 128", "8")
console.log(lengthchoice)
confirm("press a button")
heldlowercase = generatelowercase(lengthchoice)
console.log ("unsecure lowercase " + heldlowercase)
helduppercase = generateuppercase(lengthchoice)
console.log ("unsecure uppercase " + helduppercase)
heldnumber = generatenumber(lengthchoice)
console.log ("unsecure number " + heldnumber)
heldsymbol = generatesymbol (lengthchoice)
console.log ("unsecure symbol " + heldsymbol)

}
console.log (lengthchoice)

 
function generatelowercase (length) {

    let result = '';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = lowercase.length;
    let counter = 0;
    while (counter < lengthchoice) {
      result += lowercase.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  

}

function generateuppercase (length) {

  let result = '';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = uppercase.length;
  let counter = 0;
  while (counter < lengthchoice) {
    result += uppercase.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;


}

function generatenumber (length) {

  let result = '';
  const number = '0123456789';
  const charactersLength = number.length;
  let counter = 0;
  while (counter < lengthchoice) {
    result += number.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;


}

function generatesymbol (length) {

  let result = '';
  const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  const charactersLength = symbol.length;
  let counter = 0;
  while (counter < lengthchoice) {
    result += symbol.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;


}

//console.log (unsecure)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passswordlength);


//test code


