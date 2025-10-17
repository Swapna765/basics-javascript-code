function smallest(arr){
    let min = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}
let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
console.log(smallest(arr))