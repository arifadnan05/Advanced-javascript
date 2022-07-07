function add (num1, num2){
    console.log([...arguments])
    return num1 + num2 + arguments[4]
    
}
const result = add(3, 4, 5, 4, 5, 7)
console.log(result)