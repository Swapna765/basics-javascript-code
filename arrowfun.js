// Explicit return
const x = (a,b) =>{
    return a+b;
};


// single parameter
const square = num => num * num;
console.log(square(4))


// Implicity function
const substraction = (a, b) => a - b;
console.log(substraction(4,7))


const sdf = (a) => a*a;
console.log(sdf(5))


const getpi = () => {
    console.log("3.14")
}
getpi()
console.log(getpi())