//sort - сортирует мутабельно
const names = ['Donald', 'Bob', 'Alex']
names.sort()
console.log(names)
//1. сортирует строки по 'алфавиту' из коробки, т.е. без доп параметров

const namesAlt = ['Donald', 'Bob', 'Alex', 'alex', 'bob', 100, 'Юрий', 'игорь']
namesAlt.sort()
console.log(namesAlt)

// //2. сортирует строки по unicode "из коробки", т.е. без доп. параметров
// -цифры
// -лат алфавит (заглавные)
// -лат алфавит (строчные)
// -символы других алфавитов (заглавные - строчные)

// //3. работает мутабельно (сортирует массив на месте)
console.log(namesAlt === namesAlt.sort())
// //4. возвращает ссылку на исходный массив

const sortedArr = namesAlt.toSorted()
console.log(sortedArr)
console.log(namesAlt === namesAlt.toSorted())
console.log(sortedArr === namesAlt.toSorted())
//5. метод toSorted() сортирует иммутабельно (возвращает ссылку на новый массив)

const numbers = [9, 100, 2000, 700, 5] // [ 100, 2000, 5, 700, 9 ]
console.log(numbers.sort())

// //6. Для остальных случаев необходимо параметром передать функцию сравнения
// //(callback). Функция сравнения должна возвращать число большее или меньшее 0

const compareFn = (a, b) => { //по убыванию
    if (a < b) {
        return 1
    } else {
        return -1
    }
    // return n > 0 => переставить
    // return n < 0 => не переставлять
}

console.log(numbers.sort((a, b) => a - b)) /*сравнивается по порядку, по 2 числа, если результат меньше нуля, то числа
не переставляются, если больше переставляются, если 0 то ничего не меняется*/

//8. Вместе с sort часто используется reverse
console.log(numbers.reverse())

const students = [{
    name: 'Bob', age: 22, isMarried: true, scores: 95
}, {
    name: 'Alex', age: 22, isMarried: true, scores: 89
}, {
    name: 'Helge', age: 24, isMarried: true, scores: 90
}, {
    name: 'Nick', age: 20, isMarried: false, scores: 120
}, {
    name: 'John', age: 19, isMarried: false, scores: 121
}, {
    name: 'alex', age: 22, isMarried: true, scores: 89
},]

console.log(students.sort((a, b) => a.age - b.age))
//9. Сортировка массива объектов по числовым значениям

console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// //06-Lexical_Environment_Closure_Recursion. Сортировка массива объектов по строковым значениям

// //bubble sort
const nums = [12, 34, 22, 87, 435, 3, 5, 6, 1, 6, 5555, 22, 3, 516, 6] //по возрастанию
let count = 0

const bubbleSort = (array) => {
    // Внешний цикл: выполняем n-1 проходов по массиву
    for (let n = 0; n < array.length - 1; n++) {
        // Внутренний цикл: проходим по массиву до (length - 1 - n), уменьшая диапазон с каждым проходом
        for (let i = 0; i < array.length - 1 - n; i++) {
            count++
            // Если текущий элемент больше следующего, меняем их местами
            if (array[i] > array[i + 1]) {
                const tmp = array[i]; // временно сохраняем значение текущего элемента
                array[i] = array[i + 1]; // заменяем текущий элемент на следующий
                array[i + 1] = tmp; // ставим сохранённое значение на место следующего элемента
            }
        }
    }
    // Возвращаем отсортированный массив
    return array;
}

// Пример использования
// console.log(bubbleSort(nums))
// console.log(count)


const bubbleSort2 = (array) => {
    // Внешний цикл: выполняем n-1 проходов по массиву
    for (let n = 0; n < array.length - 1; n++) {
        let isSorted = true // Флаг для отслеживания обменов, предполагаем, что массив отсортирован
        // Внутренний цикл: проходим по массиву до (length - 1 - n), уменьшая диапазон с каждым проходом
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                isSorted = false; // Устанавливаем флаг, так как произошел обмен
                // деструктурирующее присваивание для обмена элементов
                [array[i + 1], array[i]] = [array[i], array[i + 1]]
            }
        }
        // Если за проход не было обменов, массив уже отсортирован
        if (isSorted) return array
    }
    // Возвращаем отсортированный массив
    return array
}

// Пример использования
console.log(bubbleSort2(nums))
console.log(count)