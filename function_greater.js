let aa = 45;
let bb = 78;
let cc = 64;

function tyu() {
  if (aa > bb) {
    console.log("1");
  }
  else if (aa > cc) {
    console.log("2");
  } 
  else if (bb > aa) {
    console.log("3");
  } 
  else if (bb > cc) {
    console.log("4");
  } 
  else {
    console.log("5");
  }
}
tyu();








function cvb(a, b, c){
    if(a>b && a>c){
        console.log("a is greater")
    }
    else if(b>a && b>c){
        console.log("b is greater")
    }
    else{
        console.log("c is greater")
    }
}
cvb(3,4,6)