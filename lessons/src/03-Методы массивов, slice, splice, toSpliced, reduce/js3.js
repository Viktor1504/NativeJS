// slice, splice, toSplice, reduce

// slice - отрезает кусок массива, второй параметр вырезает не включительно (иммутабельно)
// если не указать второй параметр, то вырезает до конца массива

// массив.slice(откуда отрезать, [докуда отрезать])

// 1
/*const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.slice(0, 2)
console.log(result)*/

// 2
/*const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.slice(1)
console.log(result)*/

// 3
/*const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.slice(1, -1)
console.log(result)*/

// 4
/*
const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.slice(-1)
console.log(result)
*/

// splice - отрезает кусок массива (мутабельный)
// массив.splice(с какого индекса удаляем, сколько удаляем)

// 1
/*const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.splice(1, 3)
console.log(result)*/

// 2
/*
const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.splice(2, 0, 'value1', 'value2', 'value3');
console.log(arr)
*/

// 3
/*
const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.splice(-2, 1)
console.log(arr)
*/

// toSpliced - имутабельный

// reduce() - это метод массива в JavaScript, который применяется для преобразования массива в одно значение,
// используя функцию-аккумулятор. Если не указываем начальное значение, то берется нулевой элемент массива

// 1
/*
const number = [1, 2, 3, 4, 5]
const result = number.reduce((acc, b) => acc + b)
console.log(result)
*/

// 2
/*const fruits = [
    {name: 'apple', quantity: 2},
    {name: 'banana', quantity: 3},
    {name: 'orange', quantity: 1},
]

const result = fruits.reduce((acc, fruit) => acc + fruit.quantity, 0);
console.log(result)*/

// 3
/*const number = [5, 2, 3, 7, 5]
const maxNumber = number.reduce((acc, item) => acc > item ? acc : item)
console.log(maxNumber)*/

// 4

/*const people = [
    {name: 'John', age: 32},
    {name: 'Joe', age: 21},
    {name: 'Jan', age: 43}
]

const result = people.reduce((acc, item) => {
    const {name, age} = item
    acc.totalNames.push(name)
    acc.totalAges += age
    return acc
}, {totalNames: [], totalAges: 0})

console.log(result)*/

// 5

/*
const people = [
    {name: 'John', age: 32, budget: 4500},
    {name: 'Jane', age: 4500, budget: 300},
    {name: 'February', age: 4500, budget: 300},
    {name: 'Mary', age: 4500, budget: 300},
    {name: 'Milk', age: 4500, budget: 300}
]

const result = people.reduce((acc, item) => acc + item.budget, 0)
console.log(result)*/

// 6
/*
const people = [
    {name: 'John', age: 32, budget: 4500},
    {name: 'Jane', age: 4500, budget: 300},
    {name: 'February', age: 4500, budget: 300},
    {name: 'Mary', age: 4500, budget: 300},
    {name: 'Milk', age: 4500, budget: 300}
]

const result = people.reduce((acc, item) => {
    acc.push(item.name)
    return acc
}, [])
console.log(result)*/

// 7
/*
const words = ['Hello', ' ', 'World', '!'];

const result = words.reduce((acc, item) => acc + item, '')
console.log(result)*/

// 8
const number = [5, 2, 3, 7, 5]

const result = number.reduce((acc, el) => acc > el ? el : acc)
console.log(result)