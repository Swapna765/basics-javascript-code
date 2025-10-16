// console.log(a)    // ReferenceError: a is not defined



// console.log(a)      // undefined
// var a



// console.log(a)      // ReferenceError: Cannot access 'a' before initialization
// let a



// When we add a number with a string the o/p will be string -> concatenation



// Type cortion --> It makes the string in to number when we perform substration in between string and number

// let a = "4"
// let b = 9
// console.log(a-b)  // ans --> -5




// let a = prompt("a : ")  // It take user input in browser   ----> If u take a number like this from the user input it's type should be string

// let a = Number(prompt("a : "))  // It take user input in browser   ----> If u take a number like this from the user input it's type should be string
// console.log(typeof a)           // It should be a number in the type


// let a = prompt("abc : ")    // If u take the input as number then
// a = Number(a)               // Type conversion
// console.log( typeof a)      // Now it's type is a number





// Swapping of two number  --> With out using 3rd variable

// let a = 5
// let b = 3

// console.log("The value of a:", a)
// console.log("The value of b:",b)

// a = a-b
// b = b+a
// a = b-a
// console.log("After the Swapping....")
// console.log("The value of a:",a)
// console.log("The value of b:",b)




// By using 3rd variable

// let v = 5
// let h = 6
// console.log("Before swapping...")
// console.log("The value of v: ", v)
// console.log("The value of h: ", h)
// let j = h
// h = v
// v = j
// console.log("After Swapping...")
// console.log("The value of v: ", v)
// console.log("The value of h: ", h)


// By using array  ---> Destructuring

// let a = 7;
// let b = 8;

// [a,b] = [b,a]
 
// console.log(a,b) 



// let d = 234
// console.log(d%10)     // 4


// let d = 234
// console.log(d/10)     // 23.4



// let d = 234
// console.log(Math.floor(d/10))     // 23  --> It removes the decimal number from the division




// let a= 5
// console.log(a)   // 5
// a++
// console.log(a)   // 6
// ++a
// console.log(a)   // 7



// let b = 5
// console.log(b)  // 5
// b--
// console.log(b)   // 4
// --b
// console.log(b)   // 3



// let c = 4
// let h = ++c
// console.log(h)  // 5




// let c = 4
// console.log(c)  // 4
// let h = c++
// console.log(c)  // 5
// console.log(h)  // 4

// ++h
// console.log(c)   // 5
// console.log(h)   // 5





// let a = 11
// let b = 22
// let c = a + b + a++ + b++ + ++a + ++b
// console.log(a)
// console.log(b)
// console.log(c)




// let b = true
// b++
// console.log(b)
// console.log(typeof b)




// let a = 11++;        // SyntaxError: Invalid left-hand side expression in postfix operation
// console.log(a)       // We can not apply unary operator in a constant




// let a = 5;
// let b = ++(a++)         // (a++ ==> 5)  ==>  ++5 --> It is an error
// console.log(b)



// let s = 7
// console.log(s>0?"+ve": s<0?"-ve":"0")





// console.log(Math.round(11.3))    // 11
// console.log(Math.round(11.5))    // 12
// console.log(Math.round(11.6))    // 12


// console.log(Math.ceil(11.3))      // 12
// console.log(Math.floor(11.3))     // 11


// console.log(Math.trunc(11.3))     // It removes the numbers after the point


// console.log(Math.pow(2,5))           // 2^5
// console.log(Math.sqrt(11.3))         // square root
// console.log(Math.cbrt(11.3))            // Cube root
// console.log(Math.abs(-11.3))            // It makes the - ve to + ve number
// console.log(Math.max(11.3, 34, 65, 11)) // 65
// console.log(Math.min(11.3, 34, 65, 11)) // 11
// console.log(Math.random())              // 0 to 1
// console.log(Math.trunc(Math.random()*9000)+1000) // (Math.random()*9000) => 0 to 999  then  +1000 makes it 1000 to 10000 randomly
// let a = 23.45678
// console.log(a.toFixed(2))     // 23.45  --->  It onlt take 2 degit after the point




// Area and Perimeter of a rectangle

// let a = 3
// let b = 4
// let area = (a*b) 
// console.log(area)
// let perimeter = 2*(a+b)
// console.log(perimeter)




// let v = 3
// console.log(2*Math.PI*v)
// console.log(typeof(2*Math.PI*v))

// console.log((2*Math.PI*v).toFixed(2))








// let a = (NaN === NaN)      // false
// console.log(a)


// let b = (isNaN===NaN)      // false
// console.log(b)


// console.log(isNaN(NaN))    // true




// let age = Number(prompt("Enter your age: "));

// if(isNaN === age){
//     console.log("Invalid entry...")
// }

// else if(age >= 18){
//     console.log("You can vote...")
// }

// else{
//     console.log("You can not vote...")
// }








// let amount = Number(prompt("The amout is"))
// console.log(amount)
// let dis = 0


// if(amount>0 && amount<=100){
//     // console.log(amount)
//     dis = 0
// }

// else if(amount>101 && amount<=500){
//     // console.log(amount - Math.floor((5*amount)/100))
//     dis = 5
// }

// else if(amount<=0){
//     console.log("The amount is not valid")
// }
// else{
//     console.log("Byyy")
// }
// console.log(amount - Math.floor((dis*amount)/100))






// let day = 2

// switch(day){
//     case 1:
//     case 2:
//     case 3:
//         console.log("Hii")
//         break
//     case 4:
//     case 5:
//         console.log("Hello")
//         break
//     default :
//     console.log("Invalid")
// }






// switch(true){
//     case 1==6:
//         console.log("Hello")
//         break

//     case 19<6:
//         console.log("Helllllllllllo")
//         break

//     case 1==6:
//         console.log("Helloooooooooooo")
//         break
//     default: console.log("Invalid")
// }











switch(true){
    case 1>6:
        console.log("Hello")
        break

    case 1<6:
        console.log("Helllllllllllllo")
        break

    case 1==6:
        console.log("Helloooooooooooooo")
        break
    default: console.log("Invalid")
}