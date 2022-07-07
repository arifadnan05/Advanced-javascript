const students = [
    {id: 35, name: 'Arif'},
    {id: 5, name: 'Mim'},
    {id: 45, name: 'Ony'},
    {id: 34, name: 'Rasel'}

]
const names = students.map(s => s.name)
console.log(names)

const bigger = students.filter(s => s.id > 40)
console.log(bigger)