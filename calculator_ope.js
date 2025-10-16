function cal(a, b, operator) {
  if (operator === "+") {
    // return a+b;
    console.log(a + b);
  }
  if (operator === "-") {
    console.log(a - b);
  }
  if (operator === "*") {
    console.log(a * b);
  }
  if (operator === "/") {
    console.log(a / b);
  }
  if (operator === "**") {
    console.log(a ** b);
  }
}
cal(43, 34, "+");
cal(43, 34, "-");
cal(43, 34, "*");
cal(43, 34, "/");
cal(43, 34, "**");











const cal = function (a, b, ope) {
  switch (ope) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Invalid operator";
  }
};

console.log(cal(2, 4, "+")); 
console.log(cal(2, 4, "-")); 






