/*const fruit = {
    color: "red", // статическое свойство
    size: 'small', // статическое свойство
}

const obj = {
    value: 'key' // статическое свойство
}

console.log(obj)*/

// без использования динамических (вычисляемых) св-в
/*const createObj = (key, value) => {
    const newObj = {}
    newObj[key] = value
    return newObj
}

console.log(createObj('fruit', 'testValue'))*/

/*с использованием динамических (вычисляемых) св-в
динамические (вычисляемые) св-ва - вычисляются в момент выполнения кода,
отличительной особенностью являются квадратные скобки при описании свойства
let obj = {
   [выражение] : значение
}
*/

/*const createObj2 = (key, value) => {
    return {
        [key]: value,
    }
}

console.log(createObj2('vegetable', 'tomato'))*/

// 1
/*const isStudent = true
const person = {
    name: 'John', // статическое свойство
    [isStudent ? 'isStudent' : 'isTeacher']: isStudent ? 'yes' : "yes, i'm teacher"  // динамическое (вычисляемое) свойство
}
console.log(person)*/

// 2
/*
const prefix = 'status'
const user = {
    [prefix + '_id']: '123123f-2213sfd-123fd-2311rfd',
    [prefix + '_name']: 'pending',
}

console.log(user)*/

// 3
/*
const index = 5

const obj = {
    [index + 4] : 'nine'
}

console.log(obj)*/

// 4
/*const sum = (a, b) => a + b;
const testObj = {
    [sum(1, 5)]: sum(1, 5)
}
console.log(testObj)*/

// 5
/*
const testObj = {
    ['age' + 2]: '32',
    [2 + 2]: 'four'
}

console.log(testObj)*/

// 6
/*
const createObj = (key, value) => {
    return {
        [key.toUpperCase()]: value
    }
}

console.log(createObj('yo', 'Victor'))*/

// 7
/*const STATUS_BUSY = 'busy'
const STATUS_READY = 'ready'

const STATUS_LABELS = {
    [STATUS_BUSY]: 'ожидает',
    [STATUS_READY]: 'готов'
}

const drivers = [
    {name: 'Igor', status: 'busy'},
    {name: 'Alice', status: 'ready'},
    {name: 'Bob', status: 'busy'},
]

const driversStatuses = drivers.map(driver => {
    const {status} = driver
    return STATUS_LABELS[status]
})

console.log(driversStatuses)*/

// Object.keys(), Object.values(), Object.entries()

// Object.keys() - возвращает массив ключей объекта
/*const user = {
    name: 'Ivan',
    age: 32,
    isMarried: true
}
console.log(Object.keys(user))

// Object.values() - возвращает массив значений объекта
console.log(Object.values(user))

// Object.entries() - возвращает массив пар ключ значений (каждое значение это массив)
console.log(Object.entries(user))*/

// new Map, new Set

// Map - коллекция ключ\значение, как и объект. Но основная разница, что ключи могу быть любого типа.
// Set - особый вид коллекции, 'множество значений(без ключей)', каждое значение может появляться
// только один раз
/*
const map = new Map()
map.set('1', 'one')
map.set(2, 'two')
map.set(true, 'boolean')

console.log(map)
console.log(typeof map)
console.log(map.get('1'))
console.log(map.has(2))
map.delete('1')
map.clear()
console.log(map)*/
/*const newMap = new Map([['name', 'victor'], ['age', 23], ['isMarried', true]]);
console.log(newMap)*/

/*const set = new Set()
set.add(1)
set.add(true)
set.add(1)
set.add(2)
console.log(set.has(1))
set.delete(2)
console.log(set.size)
set.clear()
console.log(set)*/

const newSet = new Set([1, 2, true, 'value']);
console.log(newSet)

const numbers2 = [1, 2, true, 'value', 2, 2, 'newValue'];
const arrNumbers = [...new Set(numbers2)]
console.log(arrNumbers)
console.log(newSet.size)