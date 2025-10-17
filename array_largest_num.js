let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
let large = Math.max(...arr);
console.log(large);


// using function

let arr1 = [10, 20, 4, 556, 4891, 1, 12, 46];
function large1(arr1) {
  let large1 = Math.max(...arr1);
  console.log(large1);
}
large1(arr1)


// or

function largest(arr2){
    let max = arr[0];
    for(let i = 1; i<arr2.length; i++){
        if(arr2[i]>max){
            max=arr2[i]
        }
    }
    return max;
}
let arr2 = [10, 20, 4, 556, 4891, 1, 12, 46];
console.log(largest(arr))