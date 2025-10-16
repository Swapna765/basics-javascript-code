var a = 77
let i;
if(i<=1){
    console.log("not a prime number");
}
else{
    for(i=2; i<=Math.sqrt(a); i++){
        if(a%i===0){
            console.log("prime number");
        }
        else{
            console.log("not a prime number.");
        }
    }
}


