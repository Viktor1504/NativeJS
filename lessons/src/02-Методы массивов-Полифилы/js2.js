// методы массивов, полифилы
// push, pop, shift, unshift - мутабельные методы массивов

// push() - добавляет элемент в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const result = names.push('Nina') // push возвращает новую длину массива (5)
//
// console.log(names)

// pop() - удаляет последний элемент массива
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const poppedItem = names.pop() // возвращает удаленный элемент
// console.log(poppedItem)

// shift() - удаляет первый элемент массива, возвращает удаленный элемент
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const shiftedNames = names.shift()
// console.log(shiftedNames)

// unshift() - добавляет 1 и более элементов в начало массива, возвращает новую длину массива
const names = ['Alex', 'Bob', 'Ivan', 'Sasha']

names.unshift('Victor')
console.log(names)

// reverse() - меняет порядок элементов в массиве на обратный (мутабельно)
// toReverse() - меняет порядок элементов в массиве на обратный (имутабельно)
const toReversNames = names.toReversed()
names.reverse()
console.log(toReversNames)
console.log(names)

// split() - разбивает строку в массив по указанному разделителю

const str = 'ab-cd-ef'
const splitStr = str.split('-', 2)
console.log(splitStr)

const splitStr2 = str.split('')
console.log(splitStr2)

// split() - объединяет массив в строку по указанному разделителю

const names1 = ['Alex', 'Bob', 'Ivan', 'Sasha']

const joinNames = names1.join('-') // если ничего не передать, то разделитель будет запятой

console.log(joinNames)

const telephoneNumber = '1231151534'

const reversTelephoneNumber = telephoneNumber.split('').reverse().join('')
console.log(reversTelephoneNumber)

// concat() - сливает элементы массива (не мутирует исходный массив)
// более производительный чем спред оператор
// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const arr3 = [5, 6]
//
// const res = arr1.concat(arr2, arr3)
// console.log(res) // [ 1, 2, 3, 4, 5, 6 ]

// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const arr3 = [5, 6]
//
// const res = arr1.concat(arr2, [5, 6], 7, true)
// console.log(res)

const arr1 = [1, 2]
const arr2 = [3, 4]

const nestedArr = [[5, 6], [7, 8]]

const res = arr1.concat(arr2, nestedArr)
console.log(res)

// flat() - используется для преобразования многомерного массива в одномерный (не мутирует массив)

const flattedArray = res.flat(Infinity)
console.log('flattedArray', flattedArray)

// indexOf() - находит индекс искомого элемента (если нет возвращает -1)

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.indexOf(2)) // 1

const arr = [1, 2, 4, 3, 5, 6]
const res1 = arr.indexOf(3, 3)
console.log(res1)

// find() - возвращает первый элемент массива, который удовлетворяет условию (если нет возвращает undefined)

const arr3 = ['sasf', 'sadваваd', 'asdasgag', 'adfdaagha']
const res3 = arr3.find((el) => el.length === 4)

console.log(res3)

// findIndex() - возвращает индекс искомого элемента (если нет возвращает -1)

const arr4 = [1, 2, 3, 4, 5]

const res4 = arr4.findIndex((el) => el % 2 === 0)
console.log(res4)

// includes() - проверяет содержится ли элемент в массиве (возвращает true или false)

const arr5 = [1, 2, 3, 4, 5]
const res5 = arr5.includes(3)
console.log(res5)

console.log([3, 2, 3, [34, 23]].flat(Infinity).includes(34))

// filter() - возвращает отсортированные элементы по условию (новый массив)

const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const res6 = names2.filter((el) => el.length === 4)
console.log(res6)

// sort() - сортирует элементы (мутабельно)
// toSorted() - сортирует элементы (имутабельно)

const names3 = ['Виктор', 'Alex', 'Bob', 'Ivan', 'Sasha', 'Иван'] //[ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Виктор', 'Иван' ]
console.log(names3.sort())

// const numbers = [1, 2, 3, 4, -5, -2]
// console.log(numbers.sort())

const numbers = [1, 2, 3, 4, -5, -2]
console.log(numbers.toSorted())  // по возрастанию
console.log(numbers.toSorted((a, b) => b - a))  // по убыванию

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 1,
        name: 'alex',
        isStudent: true
    },
]

//  сортировка строки - localeCompare используется для сравнения двух строк с учетом их локализации
const result = users.toSorted((a, b) => a.name.localeCompare(b.name))
console.log(result)

const result2 = users.toSorted((a, b) => b.name.localeCompare(a.name))
console.log(result2)

// Полифилы - это куски кода, которые эмулируют современные веб-функции в старых браузерах, чтобы обеспечить совместимость.

const users1 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: false
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    }
]

// const resultUsers1 = users1.map(user => user.name)
// console.log(resultUsers1)

function newMap(arr, callback) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}

const userNamesArr = newMap(users1, (user) => user.name)

console.log(userNamesArr)