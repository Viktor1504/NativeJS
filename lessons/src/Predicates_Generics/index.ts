const filterArray = <T>(arr: T[], predicate: (value: T) => boolean): T[] => {
    return arr.filter(predicate)
}


// Пример 1: Фильтрация чисел
const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

const result = filterArray(numbers, isEven)
console.log(result) // [2, 4]

// Пример 2: Фильтрация строк
const words = ['hello', 'world', 'typescript']
const startsWithT = (word: string) => word.startsWith('t')

const result2 = filterArray(words, startsWithT)
console.log(result2) // ["typescript"]

export {}