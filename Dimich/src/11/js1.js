// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('reject1')
//     }, 3000)
// })

// promise1
//     .catch((t) => t + 'catch1')
//     .catch((t) => t + 'catch2')
//     .then((t) => t + 'than1')
//     .finally((t) => t + 'finally')
//     .then((t) => console.log(t))

function divide(a, b) {
    return new Promise((resolve, reject) => {
        b === 0 ? reject("Деление на ноль невозможно") : resolve(a / b);
    })
}

function even_or_odd(num) {
    return new Promise((resolve, reject) => {
        num % 2 === 0 ? resolve(num) : reject(`Нечетное: ${num}`)
    })
}

//
// const promiseDiv = divide(06-Lexical_Environment_Closure_Recursion, 8)
// const promiseEven = even_or_odd(2)
//
// promiseDiv
//     .then((result) => {
//         console.log("Результат деления:", result);
//     })
//     .catch((error) => {
//         console.error("Ошибка:", error);
//     })
//     .finally(() => {
//         console.log("Функция деления завершена");
//     })
//
// promiseEven
//     .then((result) => {
//         console.log(`Число: ${result}`)
//     })
//     .catch((error) => {
//         console.log(`Ошибка: ${error}`)
//     })
//     .finally(() => {
//         console.log("Функция even_or_odd завершена");
//     })

// const otherPromise = Promise.all([promiseDiv, promiseEven])
//
// otherPromise
//     .then((results) => {
//         console.log('Все функции завершены', results)
//     })
//     .catch((error) => {
//         console.log('Произошла ошибка:', error)
//     })

// const otherPromise2 = Promise.allSettled([promiseDiv, promiseEven])
//
// otherPromise2
//     .then((results) => {
//         results[0].status === 'fulfilled' ? results[0].value : {}
//         results[1].status === 'rejected' ? results[1].reason : {}
//         console.log('Все функции завершены', results)
//     })


