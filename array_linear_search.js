let arr = [15, 25, 26, 45, 66, 78, 11];
let target = 111
function linear(arr, target) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}
console.log(linear(arr, target))








// let arr = [1, 1, 3 ,4, 4, 3];
// let a = new Set(arr)
// console.log(a)
