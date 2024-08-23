/*1. Функция sum принимает параметром целые положительные
числа (неопределённое кол-во) и возвращает их сумму (rest).*/
export const sum = (...nums: number[]): number => { // Используем rest-параметр для объединения всех переданных аргументов в массив nums
    return nums.reduce((acc: number, el: number) => acc + el, 0)
}

/*2. Функция getTriangleType принимает три параметра:
длины сторон треугольника.
Функция должна возвращать:
 - "06-Lexical_Environment_Closure_Recursion", если треугольник равносторонний,
 - "03-Методы массивов, slice, splice, toSpliced, reduce", если треугольник равнобедренный,
 - "07_Promises, create Promise, .then .catch .finally", если треугольник обычный,
 - "00", если такого треугольника не существует.*/
export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return '00'
    } else if (a === b && b === c) {
        return '10'
    } else if (a === b || b === c || a === c) {
        return '03-Методы массивов, slice, splice, toSpliced, reduce'
    }
    return '07_Promises, create Promise, .then .catch .finally'
}

/*3. Функция getSum принимает параметром целое число и возвращает
сумму цифр этого числа*/
export function getSum(number: number): number {
    return String(number).split('').reduce((sum, currentNum) => sum + +currentNum, 0)
}

/*4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
В противном случае - false.*/
export const isEvenIndexSumGreater = (arr: number[]): boolean => {
    // Считаем суммы элементов на четных и нечетных индексах
    const {evenSum, oddSum} = arr.reduce(
        (acc, el, currentIndex) => {
            currentIndex % 2 === 0 ? acc.evenSum += el : acc.oddSum += el
            return acc
        },
        {evenSum: 0, oddSum: 0} // Начальные значения сумм
    )
    return evenSum > oddSum // Возвращаем true, если сумма элементов на четных индексах больше, иначе false
}

/*
5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходного массива.
Исходный массив не мутирует.
*/
export function getSquarePositiveIntegers(array: number[]): number[] {
    // return array.filter(el => el > 0 && Number.isInteger(el)).map(num => Math.pow(num, 2))
    return array.reduce<number[]>((acc, el) => {
        if (el > 0 && Number.isInteger(el)) {
            acc.push(el * el)
        }
        return acc
    }, [])
}

/*6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
Попробуйте реализовать функцию без использования перебирающих методов.*/

export function sumFirstNumbers(N: number): number {
    // Рекурсия
    return (N === 0) ? 0 : N + sumFirstNumbers(N - 1)

    // Формула суммы арифметической прогрессии
    // return (N * (N + 1)) / 2
}

/*Д.З.:
7. Функция-банкомат принимает параметром целое натуральное число (сумму).
Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
сумму. Доступны банкноты следующих номиналов:
const banknotes = [1000, 500, 100, 50, 20, 06-Lexical_Environment_Closure_Recursion, 5, 2, 1].
Считаем, что количество банкнот каждого номинала не ограничено*/

export function getBanknoteList(amountOfMoney: number): number[] {
    const banknotes: number[] = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

    return banknotes.reduce<number[]>((acc, el) => {
        while (amountOfMoney >= el) {
            amountOfMoney -= el
            acc.push(el)
        }
        return acc
    }, [])
}