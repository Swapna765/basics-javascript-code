console.log("The Table of 9 is:")
for(let i=1; i<=20;i++){
    console.log(`9 x ${i} = ${9*i}`)
    // console.log(`9 x ${i} :`, 9*i)
}

let num = 12345
let reversed = 0

while (num !== 0) {
  let digit = num % 10
  reversed = reversed * 10 + digit
  num = Math.floor(num / 10)
}

console.log(reversed)

