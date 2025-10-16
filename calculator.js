function xyz(a, b){
    console.log(a+b)
}

function xyza(a, b){
    console.log(a-b)
}

function xyzb(a, b){
    console.log(a/b)
}

function xyzc(a, b){
    console.log(a%b)
}

xyz(3,7)
xyza(3,7)
xyzb(3,7)
xyzc(3,7)





// Function declaration
function substraction(a, b){
    return a+b
}
console.log(substraction(2,5))

// Function Initialization
const addition = function(a,b){
    return a+b
}
console.log(addition(5,9))

// Implicit return
const multiplication = (a,b)=> a-b;
console.log(multiplication(3,6))

// Explicit return
const division = (a,b) =>{
    return a/b
}
console.log(division(2,6))






const cube = (a) => a * a * a;
console.log(cube(4));
