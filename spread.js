let c = {
    name : "Swapna",
    clg : "NIT",
    age : 21,
    id : 265
}

console.log(c)

c.age = 22
c.home = "Bhadrak"

console.log(c)


let c1={
    ...c,
    name: "Iti",
    age: 24,
    batch:"Mern"
}

console.log(c1)



const{name, id, batch} = c1
console.log(name)
console.log(id)
console.log(batch)






function xyz(a, b, ...rest){
    console.log(a)
    console.log(b)
    console.log(rest)
}

xyz(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)




function fun(name="Swapna"){
    return name;
}

fun("yhrjv")