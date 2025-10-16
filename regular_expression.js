// user name
let a = "1234dcvbnht//"
let name = /^[A-Za-z0-9]{5,12}$/;  // ^ --> Start of the string, [A-Za-z0-9] --> Match any letter (A–Z, a–z) or digit (0–9)  

if (name.test(a)) {
  console.log("Valid username");
} else {
  console.log("Invalid username");
}



// email
function email(str){
  return str.match(/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/);
}
console.log(email("SWApna"))


// white space
let str = "Swapna rani sahoo"
let ans = str.replace(/ /g, "-");
console.log(ans)