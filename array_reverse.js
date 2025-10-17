let array = [1, 2, 3, 4, 5, 6, 7];
let x = array.reverse();
console.log(x);





// 2 pointer

function reversearray(a) {
  let left = 0,
    right = a.length - 1;
  while (left < right) {
    [a[left], a[right]] = [a[right], a[left]];
    left++;
    right--;
  }
}
let a = [1, 2, 3, 4, 5, 6, 7];
reversearray(a);
console.log(a.join(" "));






// Traditional

function reversearr(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
reversearr(arr);
console.log(arr.join(" "));
