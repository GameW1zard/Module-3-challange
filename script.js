// Assignment code here

var lengthchoice = 8
var heldlowercase = "hotdog"
var helduppercase = "PIZZA"
var heldnumber = 69
var heldsymbol = "!"
var devided = 0
var masterhold =""
var uppercasechoice
var numberschoice
var symbolschoice
var password




function passswordlength () {
 
 
 
 
  
  lengthchoice = prompt ("Please choose a length for the password between 8 and 128", "8")
  console.log(lengthchoice)
  devided = Math.round(lengthchoice / 4)




  //console.log(lengthchoice / 8)
  if (confirm("Would you like to include uppercase letters in the password?") === true) {console.log("Lenghchoice decremented by " + devided + " it is " + lengthchoice); uppercasechoice = true}
  else {uppercasechoice = false}
  
  if (confirm("would you like to include numbers in the password?") === true) {console.log("lenghtchoice decremented by " + devided + " it is " + lengthchoice); numberschoice = true}
  else {numberschoice = false}

  if (confirm("would you like to include symbols in the password?") === true) {console.log("lenghtchoice decremented by " + devided + " it is " + lengthchoice); symbolschoice = true}
  else {symbolschoice = false}

  if (uppercasechoice === true && numberschoice === false && symbolschoice === false) {lengthchoice -= devided; masterhold = generatelowercase() + generateuppercase();}
 
  if (uppercasechoice === true && numberschoice === true && symbolschoice === false) {lengthchoice -= devided * 2; masterhold = generatelowercase() + generateuppercase() + generatenumber();}
  
  if (uppercasechoice === true && numberschoice === true && symbolschoice === true) {lengthchoice -= devided * 3; masterhold = generatelowercase() + generateuppercase() + generatenumber() + generatesymbol();}
  
  if (uppercasechoice === false && numberschoice === false && symbolschoice == false) {masterhold = generatelowercase(); }

  if (uppercasechoice === false && numberschoice === true && symbolschoice == false) {lenghtchoice -= devided; masterhold = generatelowercase() + generatenumber(); console.log ("Masterhold is now " + masterhold)}

  if (uppercasechoice === false && numberschoice === false && symbolschoice == true) {lengthchoice -= devided; masterhold = generatelowercase() + generatesymbol();}

  if (uppercasechoice === false && numberschoice === true && symbolschoice == true) {lengthchoice -= devided * 2; masterhold = generatelowercase() + generatenumber() + generatesymbol();}

  if (uppercasechoice === true && numberschoice === false && symbolschoice == true) {lengthchoice -= devided * 2; masterhold = generatelowercase() + generateuppercase() + generatesymbol();}

  password = masterhold.split('').sort(function(){return 0.5-Math.random()}).join('');




  writePassword()

}


 
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
  while (counter < devided) {
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
  while (counter < devided) {
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
  while (counter < devided) {
    result += symbol.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passswordlength);




