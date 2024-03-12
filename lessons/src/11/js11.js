// promise.then((data) => {
//     console.log(data)
// })

// promise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })
//
// promise.catch((err) => {
//     console.log(err)
// })
//

// promise.finally(() => {
//     console.log('finally')
// })
//
// promise
//     .then((data) => {
//         console.log('then1', data)
//         return 10
//     })
//     .then((data) => {
//         console.log('then2', data)
//         return a
//     })
//     .then((err) => {
//         console.log('Cath1', err)
//     })
//     .catch((data) => {
//         console.log('Catch1', data)
//     })


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('reject1')
//     }, 3000)
// })
//
// promise2
//     .catch((t) => t + 'catch1')
//     .catch((t) => t + 'catch2')
//     .then((t) => t + 'than1')
//     .finally((t) => t + 'finally')
//     .then((t) => console.log(t))
//
// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         // Проверка деления на ноль
//         if (b === 0) {
//             reject("Деление на ноль невозможно");
//         } else {
//             resolve(a / b);
//         }
//     });
// }
//
// // Пример использования промиса с методами then, catch, finally
// divide(10, 0)
//     .then((result) => {
//         console.log("Результат деления:", result);
//     })
//     .catch((error) => {
//         console.error("Ошибка:", error);
//     })
//     .finally(() => {
//         console.log("Завершено");
//     });


const evenF = (value) => {
    return new Promise((resolve, reject) => {
        // if (value % 2 === 0) {
        //     resolve(value * 100)
        // } else {
        //     reject(value / 100)
        // }
    })
}

// evenF(4)
//     .then((result) => {
//         console.log('Все хорошо', result)
//     })
//     .catch((result) => {
//         console.error('Все хуёво', result)
//     })
//     .finally(() => console.warn('Не ругайся!!!'))