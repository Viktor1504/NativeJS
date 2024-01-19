//c
//r - filter, search, SORT, pagination
//u
//d

//sort
const names = ['Donald', 'Bob', 'Alex']
names.sort()
console.log(names)
//1. сортирует строки по 'алфавиту' из коробки, т.е. без доп параметров

const namesAlt = ['Donald', 'Bob', 'Alex', 'alex', 'bob', 100, 'Юрий', 'игорь']
namesAlt.sort()
console.log(namesAlt)

//2. сортирует строки по unicode "из коробки", т.е. без доп. параметров
//цифры
//лат алфавит (заглавные)
//лат алфавит (строчные)
//символы других алфавитов (заглавные - строчные)

//3. работает мутабельно (сортирует массив на месте)

console.log(namesAlt === namesAlt.sort())
//4. возвращает ссылку на исходный массив

const sortedArr = namesAlt.toSorted()
console.log(sortedArr)
console.log(namesAlt === namesAlt.toSorted())
console.log(sortedArr === namesAlt.toSorted())
//5. метод toSorted() сортирует иммутабельно (возвращает ссылку на новый массив)

const numbers = [9, 100, 2000, 700, 5]
console.log(numbers.sort())
const compareFn = (a, b) => { //по убыванию
    if (a < b) {
        return 1
    } else {
        return -1
    }
    // return n > 0 => переставить
    // return n < 0 => не переставлять
}

const compareFnShort = (a, b) => a - b
console.log(numbers.sort(compareFnShort))
//6. Для отстальных случаев необходимо параметром передать функцию сравнения
//(callback). Функция соавнения должна возвращать число большее или меньшее 0

console.log(numbers.reverse())
//8. Вместе с sort часто используется reverse

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
//10. Сортировка массива объектов по строковым значениям


//bubble sort
const nums = [12, 34, 22, 87, 435, 3, 5, 6, 1, 6, 5555, 22, 3, 516, 6] //по возрастанию

let count = 0

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        count++
        if (nums[i + 1] < nums[i]) {
            isSorted = false;
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

console.log(count)
console.log(nums)