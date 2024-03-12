//Lexical environment | closers | recursion

// let сar = 'bmw'
//
// function startEngine() {
//     const car = 'kia'
//     console.log(`start ${car}`)
// }
//
// car = 'audi'
//
// startEngine()

// -----------------------------------

// globalLE {foo: Function, bar: Function}

// const a = 20 // globalLE {foo: Function, bar: Function, a: 20}
// const b = 30 // globalLE {foo: Function, bar: Function, a: 20, b: 30}
//
// function foo() {
//     // fooLE {} --> globalLE
//     const a = 40     // fooLE {a: 40} --> globalLE
//     const b = 50     // fooLE {a: 40, b: 50} --> globalLE
//     console.log(a)
//
//     bar()
// }
//
// foo()
//
// function bar() {
//     // barLE {} --> globalLE
//     console.log(b)
// }

// ---------------------------------------

// globalLE {a: undefined, foo: Function} --> null                         var и function foo() - происходит всплытие

// console.log(a)
// // console.log(car)
// foo()
//
// let car = 'bmw' // {a: undefined, car: 'bmw'}
// let car2 = 'audi' // {a: undefined, car: 'bmw', car2: 'audi'}
//
// console.log(car)
//
// var a = 10 // {a: 10, car: 'bmw', car2: 'audi'}
//
// console.log(a)

// -----------------------------------------

// globalLE {foo: Function} --> null

// const a = 10 // globalLE {foo: Function, a: 10} --> null
//
// function foo() {
//     // fooLE{} --> globalLE
//     const b = 20 // fooLE{b: 20} --> globalLE
//     console.log(a + b) // (10 + 20)
// }
//
// foo() // globalLE {foo: Function, a: 10} --> null

// ---------------------------------------------

// Замыкание - это способность функции запомнить в каком лексическом окружении ее создали

// globalLE {counterCreator: Function} ----> null
// const counterCreator = () => {
//     // counterCreatorLE {count: 0} ---> globalLE
//     let count = 0
//     return () => {
//         // ---> counterCreatorLE
//         console.log(++count)
//     }
// }
//
// const counter = counterCreator()
//
// counter()
// counter()
// counter()

// ------------------------

// globalLE {pow: Func} ---> null

// const pow = (x, n) => {
//     // powLE {x: 2, n: 4} ---> globalLE
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
//
// console.log(pow(5, 2))

// const factorial = (num) => {
//     return num === 1 ? num : num * factorial(num - 1)
// }
//
// console.log(factorial(3))

const pow = (x, n) => {
    // Базовый случай: если степень равна 1, то результат равен основанию
    if (n === 1) {
        return x;
    } else {
        // Рекурсивный случай: умножаем основание на результат pow для меньшей степени
        return x * pow(x, n - 1);
    }
};
console.log(pow(5, 4))

// Рассмотрим пример вызова функции pow(2, 3)

// Шаг 1: pow(2, 3) - это не базовый случай, поэтому переходим к рекурсивному случаю.
// Шаг 2: 2 * pow(2, 2) - это тоже не базовый случай, снова переходим к рекурсивному случаю.
// Шаг 3: 2 * (2 * pow(2, 1)) - теперь n стало равным 1, это базовый случай.
// Шаг 4: 2 * (2 * 2) - это результат для n = 1 (базовый случай).
// Шаг 5: 2 * 4 - это результат для n = 2 (рекурсивный случай).
// Шаг 6: 8 - это итоговый результат для n = 3 (рекурсивный случай).

// Итоговый результат: 8

// Теперь давайте подытожим:
// pow(2, 3) = 2 * pow(2, 2)
//           = 2 * (2 * pow(2, 1))
//           = 2 * (2 * 2)
//           = 2 * 4
//           = 8
