/*
1. Типы данных
Задача: Определение типа данных

Напишите функцию getType(value), которая принимает аргумент value
и возвращает строку с типом данных этого значения. Используйте оператор typeof.
*/

const getType = (value) => typeof value

console.log(getType(42)); // "number"
console.log(getType('Hello')); // "string"
console.log(getType(true)); // "boolean"
console.log(getType({})); // "object"
console.log(getType(undefined)); // "undefined"

/*
2. Объекты
Задача: Подсчет свойств объекта

Напишите функцию countProperties(obj), которая принимает объект obj
и возвращает количество его собственных свойств.*/

const countProperties = (obj) => {
    return Object.keys(obj).length;
}

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

console.log(countProperties(person)); // 3

/*
3. Деструктуризация
Задача: Деструктуризация массива

У вас есть массив с координатами [x, y, z]. Напишите функцию getCoordinates, которая принимает
массив координат и возвращает объект с полями x, y и z, используя деструктуризацию.*/

const coordinates = [10, 20, 30]

const getCoordinates = (arr) => {
    const [x, y, z] = arr;
    return {x, y, z}
}

console.log(getCoordinates(coordinates))

/*
4. Деструктуризация объектов
Задача: Объединение и деструктуризация объектов

Напишите функцию mergeAndDestructure(obj1, obj2), которая принимает два объекта,
    объединяет их, а затем использует деструктуризацию для извлечения нескольких
полей в отдельные переменные.
   Функция должна вернуть объект, где ключи - это имена переменных, а значения - их значения.*/

const user = {name: 'John', age: 30};
const contact = {phone: '123-4567', email: 'john@example.com'};

function mergeAndDestructure(obj1, obj2) {
    const merged = {...obj1, ...obj2};
    const {name, email} = merged;
    return {name, email};
}

console.log(mergeAndDestructure(user, contact)); // { name: 'John', email: 'john@example.com' }

/*
5. Типы данных и объекты
Задача: Преобразование данных

Напишите функцию convertToObject(arr), которая принимает массив из строк,
где каждая строка состоит из двух частей, разделенных двоеточием,
и возвращает объект, где первая часть строки становится ключом, а вторая - значением.*/

/*const data = ['name:Alice', 'age:25', 'city:New York'];

const convertToObject = (arr) => {
    const obj = {}
    arr.forEach(el => {
        const [key, value] = el.split(':');
        obj[key] = value;
    })
    return obj
}

console.log(convertToObject(data))*/

// при помощи reduce
const data3 = ['name:Alice', 'age:25', 'city:New York'];

const convertToObjectReduce = (arr) => {
    return arr.reduce((acc, el) => {
        const [key, value] = el.split(':')
        acc[key] = value
        return acc
    }, {})
}

console.log(convertToObjectReduce(data3))

// пример работы с forEach
const data2 = ['name:Alice', 'age:25', 'city:New York'];

data2.forEach((el, index, array) => array[index] = el + ' yo!') // так можно мутировать исходный массив

console.log(data2)