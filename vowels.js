// let a = "sdfghjka";
let count = 0;
let vowelss = "AEIOUaeiou";
function vowels(a) {
  for (let i = 0; i < a.length; i++) {
    if (vowelss.includes(a[i])) {
      count++;
    }
  }
}
vowels("wertyuiokjhgfdsiiii")
console.log("The number of vowels in the string is:", count);






function countvowel(str){
  return str.match(/[aeiouAEIOU]/gi)?.length || 0;
}
console.log(countvowel("SWApna"))