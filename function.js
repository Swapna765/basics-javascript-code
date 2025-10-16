var a=5
var b=8

function sum(a,b){
    return a+b;
}
let c = sum(6,9)
console.log(c)  // 15








const sum3 = function(a, b){
    return a+b
}
let ans = sum3(1,7)
console.log(ans)  // 8







function xy(){
    for(i = 1; i<=100; i = i+2){
        console.log(i)   // odd number 1-99
    }
}
xy()







const xyz = function(name) {
    console.log(name) // Swapna
}
xyz("Swapna")







// Function Declaration
function vbn(bn){
    console.log("Hiii.."+ bn)  // hiii...Swapna
}
vbn("Swapna")













function fun() {
  console.log(typeof arguments);
  console.log(typeof fun());
}
console.log(fun(1, 2, 3));





function fun() {
return;
}
fun()
console.log(fun()); // undefined







function greet() {
  console.log("Hi!");  // hi!
}
let result = greet();
console.log(result);   // undefined








// NaN === NaN   // false





console.log(typeof(5+"5"));   // string

console.log(typeof("3"-"4"));  // number

console.log(typeof("hii"-7));  // number
console.log("hii"-7);  // NaN





let aa = 7
let bb = " hii"
let cc = aa + bb

console.log(cc)  // 7 hii
console.log(typeof cc)  // string






