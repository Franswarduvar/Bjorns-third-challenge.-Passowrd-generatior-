var generateBtn = document.querySelector("#generate");
function generatePassword(){

//Possible inclusions in the password
var Alow = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
var Ahigh = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Anum = ['0','1','2','3','4','5','6','7','8','9'];
var Achar = ['@','#,'%','<','>','&','^','*','-',','_','=','+'];

var userarrey = [];
var finalarray = [];

//user prompts
var Charrange = prompt ("Whats the number of characters you would like in your password? You may choose between 8 and 128 characters.");
var numbersY = confirm ("Would you like numbers in your password?");
var uppercase = confirm ("Would you like uppercase characters?");
var lowercase = confirm ("Would you like lowercase characters?");
var Simchar = confirm ("Would you like special characters?");
// This checks the user answer and adds or unadds it from the password
if (Charrange < 8){
  confirm("Needs to be more then 8");
}
if (Charrange > 128){
  confirm("Needs to be less then 128");
}
if (numbersY){
  userarrey = userarrey.concat(Anum);
}
if (uppercase){
  userarrey = userarrey.concat(Ahigh);
}
if (lowercase){
  userarrey= userarrey.concat(Alow);
}
if (Simchar){
  userarrey= userarrey.concat(Achar);
}
//Random generator
for (var i = 0; i < Charrange; i++){
finalarray.push (userarrey[Math.floor(Math.random() * userarrey.length)]);
}


return finalarray.join("");

}


// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



