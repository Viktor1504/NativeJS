// promises

/*console.log('start')

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

console.log(promise)

console.log('end')*/

//___________________________________

/*console.log('start')

const promiseFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Some data from server')
        }, 2000);
    })
}

promiseFetch('google.com')
    .then(data => {
        console.log('Then1', data)
    })
    .then(data => {
        console.log('Then2', data)
        throw new Error('SOME ERROR')   // Этот Promise зареджектится, и управление перейдет к ближайшему catch
    })
    .then(data => {
        console.log('Then3', data) // Этот блок пропустится из-за предыдущей ошибки
    })
    .then(data => {
        console.log('Then4', data) // Этот блок тоже пропустится из-за ошибки
    })
    .catch(err => {
        console.log('Catch1', err) // Этот catch выполнится, так как в предыдущем then была ошибка
    })
    .then(data => {
        console.log('Then5', data) // Этот блок выполнится, потому что catch вернул успешный результат (по умолчанию undefined)
    })
    .finally(something => {
        console.log('finally', something)  // finally - ничего не принимает и ничего не возвращает
        return 60
    })
    .catch(err => {
        console.log('Catch2', err) // Этот блок не выполнится, потому что ошибки больше нет
    })*/


//-----------Задачи---------------

// 1
const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

delay(3000)
    .then(() => {
        alert('Hello!')
    })

// 2

//  reject1catch1then1


