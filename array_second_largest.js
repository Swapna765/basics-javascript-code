function largest(arr){
    let max = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max-1;
}
let arr = [12, 35, 1, 10, 34, 36, 1]
console.log(largest(arr))



// or

let a = [12, 35, 1, 10, 34, 36, 1]
function getsecend(a){
    let largest = -1, secondlargest = -1;
    for(let i = 1; i<a.length; i++){
        if(a[i]>largest)
            largest=a[i]
    }
    for(let i = 0; i<a.length; i++){
       if(a[i]>secondlargest && a[i] !== largest)
        secondlargest = a[i];
    }
    return secondlargest;
}
console.log(getsecend(a))