export default function cal(a, b, operator) {
  if (operator === "+") {
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


// export {cal};
