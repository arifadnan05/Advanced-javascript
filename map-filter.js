const numbers = [3, 5, 6, 8, 9]

const result = numbers.map(function(element){
    return element * element
})
console.log(result)

//arrow function map 

const outPut = numbers.map((x) => x * x)
console.log(outPut)

// filter function

const filterr = numbers.filter(x => x > 5)
console.log(filterr)

// find function 

const findd = numbers.find(x => x > 5)
console.log(findd)