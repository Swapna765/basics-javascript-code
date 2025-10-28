let fact = 1;
for(let i = 1; i<=15; i++){
    fact = fact*i;
}
console.log(fact);



function fcto(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * fcto(n - 1);
}
console.log(fcto(15))