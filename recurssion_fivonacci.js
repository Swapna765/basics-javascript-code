let a = 0;
let b = 1;

for(let i = 1; i<=15; i++){
    console.log(a)
    let next = a+b;
    a=b;
    b =next;
}


function fibo(n){
    if(n===0 || n===1){
        return 1;
    }
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(10));
