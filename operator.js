/* 
Assignment (=)  to assign some value to a variable
Addition assignment ===>  x+ = 5    ===>  x = x + 5 => x = 10
Substraction assignment ===>  x- = 5    ===>  x = x - 5 => x = 0
Comparision operator ===> 
    ==   ---> Loose equality -> It only checks the value
    ===  ---> strictly equality -> It checks both value and data type
    !==   ---> inequality   -> strict
    !=   ---> inequality   -> loose 
Logical operators ===> It is a comparision of boolean data type
    && -> If the two value is matched then the loop will be execute
    || -> If any one value is matched then the loop will be execute 
Unary operator ===> Increament & Decreament
*/

// let x= 5
// x+=5
// console.log(x)

// x-= 5
// console.log(x)

let i = 1
let v =++i+i--  //  (++i = 2) + i(2)  ==> 2+2 = 4(ans)
// let h = i--i+i++  --> Error
console.log(v)
// console.log(h)