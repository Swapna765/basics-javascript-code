function sorted(arr, n){
    var i = 0;
    while(i<n){
        var correct = arr[i] - 1;
        if(arr[correct] != arr[i]){
            swap(arr, i, correct)
        }
        else{
            i++;
        }
    }
}
function swap(arr, i, correct){
    var temp = arr[i];
    arr[i] = arr[correct];
    arr[correct] = temp;
}
let arr = [1,3,2,5,6,3,9]
var n = 7;

sorted(arr, n);
for(let i =0; i<n; i++){
    console.log(arr[i])
}
sorted()