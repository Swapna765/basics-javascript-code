let ar = [];
function countvowel(str) {
  return str.match(/[aeiouAEIOU]/gi)?.length || 0;
}
let x = countvowel("SWApna");
console.log(countvowel("SWApna"));
ar.push(x);
console.log(ar);
