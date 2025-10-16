const swap = (a, b) => {
  console.log("The value of a:", a);
  console.log("The value of b:", b);
  a = a - b;
  b = b + a;
  a = b - a;
  console.log("After the Swapping....");
  console.log("The value of a:", a);
  console.log("The value of b:", b);
};
swap(3, 5);
