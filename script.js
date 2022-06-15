

var charnum = 8-128;
var lowercase = true/false;
var uppercase = true/false;
var specialchar = true/false;
var numbers = true/false;
var Alow = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];

function generatePassword(){
  charnum = window.prompt("How many characters would you like?");
  if (charnum < 8){
    prompt ("invalid");
  }
  else if (charnum > 128) {
    prompt("invalid");
  }

 lowercase = confirm("would you like lowercase characters?");
 if (lowercase = true){
  console.log("true");
  }
  for (var i = 0; i <= charnumLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
 uppercase = confirm("would you like upercase characters?");
 if (uppercase = true){
  console.log("true");
  }
  numbers = confirm("would you like numbers characters?");
  if (numbers = true){
   console.log("true");
   }
 specialchar = confirm("would you like specialchar characters?");
 if (specialchar = true){
  console.log("true");
  }
  return "ththth"
}




// function generatePassword(){
// var numbers = "123456789";
// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var characters = "!@#$%^&*()";

// }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



