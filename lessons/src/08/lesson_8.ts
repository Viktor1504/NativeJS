// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: number[]): number {
    return nums.reduce((currentSum, currentNumber) => currentSum + currentNumber)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return '00';
    } else if (a === b && b === c) {
        return '10';
    } else if (a === b || b === c || a === c) {
        return '01';
    }
    return '11';
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return String(number).split('').reduce((sum, currentNum) => sum + Number(currentNum), 0);
}

// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let oddSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    return evenSum > oddSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    // return array.filter(el => el % 1 === 0 && el > 0).map(el => el * el)
    return array.reduce((result: Array<number>, el: number) => {
        if (el % 1 === 0 && el > 0) {
            result.push(el * el);
        }
        return result;
    }, []);
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    // Рекурсия
    return (N === 0) ? 0 : N + sumFirstNumbers(N - 1);

    // Формула суммы арифметической прогрессии
    // return (N * (N + 1)) / 2;
}

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): number[] {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result: number[] = [];

    for (let i = 0; i < banknotes.length; i++) {
        const currentBanknote = banknotes[i];

        while (amountOfMoney >= currentBanknote) {
            result.push(currentBanknote);
            amountOfMoney -= currentBanknote;
        }
    }

    return result;
}
