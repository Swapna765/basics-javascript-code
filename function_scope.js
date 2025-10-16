// function functionScopeExample() {
//   var a = 5;
//   console.log(a); // 5
//   let functionVar = "I am is a function";
//   console.log(functionVar); // I am is a function
// }
// functionScopeExample();
// console.log(a); // Undefined

// if (true) {
//   var a = 3;
//   console.log(a); // 3
//   let blockVar = "I am in a block";
//   const blockConst = "I am also in a block";
//   console.log(blockVar); // Accessible
//   console.log(blockConst); // Accessible
// }
// // console.log(blockVar);   // Throws ReferenceError
// // console.log(blockConst); // Throws ReferenceError
// console.log(a); // 3










// const globalVar = "Global";
// function outer() {
//   const outerVar = "Outer";

//   function inner() {
//     const innerVar = "Inner";

//     console.log(innerVar); // Found in inner scope  --> Inner
//     console.log(outerVar); // Found in outer scope  --> Outer
//     console.log(globalVar); // Found in global  scope  --> Global
//   }
//   console.log(inner());  // undefined
// }
// console.log(outer());  // undefined








var x = 10;
function foo() {
  console.log(x);   // undefined
  var x = 20;
  console.log(x);   // 20
}
console.log(foo());   // undefined









function foo() {
  return;  // Function ends here
  {
    test: 1   // undefined
  }
}
console.log(typeof foo());    // undefined











{
    let k= 7;
}
// console.log(k);  // Refferencr error



{
    const v = 4;
}
// console.log(v);    // Refferencr error








{
    var b= 10;
}
console.log(b);



const n = 7
console.log(n)

// n =9         // TypeError: Assignment to constant variable.
// console.log(n)
