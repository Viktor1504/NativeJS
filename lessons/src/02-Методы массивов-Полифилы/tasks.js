/*1. Методы массивов
Задача: Фильтрация массива по длине строк

Напишите функцию filterByLength(arr, minLength),
которая принимает массив строк arr и число minLength. Функция должна вернуть новый массив, содержащий
только те строки, длина которых больше или равна minLength. Используйте метод filter.*/

const filterByLength = (arr, minLength) => {
    return arr.filter(el => el.length >= minLength)
}

const words = ['apple', 'banana', 'kiwi', 'grape'];
console.log(filterByLength(words, 5)); // ['apple', 'banana', 'grape']

/*2. Методы массивов
Задача: Преобразование чисел в строки

Напишите функцию mapToStrings(arr), которая принимает массив чисел и
возвращает массив строк, представляющих эти числа. Используйте метод map.
*/

const mapToStrings = (arr) => {
    return arr.map(el => el.toString())
}

const numbers = [1, 2, 3, 4, 5];
console.log(mapToStrings(numbers)); // ['1', '2', '3', '4', '5']

/*3. Методы массивов
Задача: Подсчет суммы значений массива

Напишите функцию sumArray(arr), которая принимает массив чисел и
возвращает их сумму. Используйте метод reduce.*/

const sumArray = (arr) => {
    return arr.reduce((acc, el) => {
        return acc + el
    }, 0);
}

const numbers2 = [10, 20, 30, 40];
console.log(sumArray(numbers2)); // 100

/*4. Полифил: Метод Array.prototype.includes
Задача: Реализация полифила для includes

Реализуйте полифил для метода массива includes. Напишите функцию arrayIncludesPolyfill(arr, value),
которая принимает массив arr и значение value, и возвращает true,
если массив содержит это значение, и false в противном случае.
Не используйте встроенный метод includes.*/

const arrayIncludesPolyfill = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }
    return false
}

const fruits = ['apple', 'banana', 'kiwi'];
console.log(arrayIncludesPolyfill(fruits, 'banana')); // true
console.log(arrayIncludesPolyfill(fruits, 'grape')); // false

/*5. Полифил: Метод Array.prototype.map
Задача: Реализация полифила для map

Реализуйте полифил для метода массива map.
Напишите функцию arrayMapPolyfill(arr, callback),
которая принимает массив arr и функцию callback,
и возвращает новый массив, в котором каждый элемент является
результатом применения функции callback к соответствующему элементу исходного массива.
*/

const numbers3 = [1, 2, 3, 4];

function arrayMapPolyfill(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

console.log(arrayMapPolyfill(numbers3, num => num * 2)); // [2, 4, 6, 8]

/*6. Методы массивов и полифилы
Задача: Проверка на палиндромы

Напишите функцию filterPalindromes(arr), которая принимает массив строк и возвращает новый массив,
содержащий только палиндромы (слова, которые читаются одинаково слева направо и справа налево).
Используйте метод filter и напишите полифил для метода reverse, если он недоступен.*/

const words2 = ['madam', 'racecar', 'apple', 'level'];

function arrayReversePolyfill(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function isPalindrome(word) {
    const reversed = arrayReversePolyfill(word.split('')).join('');
    return word === reversed;
}

function filterPalindromes(arr) {
    return arr.filter(isPalindrome);
}

console.log(filterPalindromes(words2)); // ['madam', 'racecar', 'level']
