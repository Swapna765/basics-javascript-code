let num = 2345
let rev = 0

while(num !== 0){
  let dit = num % 10
  rev = rev *10 + dit
  num = Math.floor(num / 10)
}
console.log(rev)