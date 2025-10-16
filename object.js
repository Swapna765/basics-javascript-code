let obj1 = { a : 1, b : 2}

let obj2 = { b : 2, c : 3}

let obj3 = { c: 5, d : 6 }

let obj4 = { ...obj1, ...obj2, ...obj3, e:7}

console.log(obj4)