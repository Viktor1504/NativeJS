// promise

/*// Функция, возвращающая промис, имитирующий сетевой запрос
const promiseFetch = (url) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // Раскомментируйте эту строку, чтобы промис был успешно выполнен
            // res('Некоторые данные с сервера')

            // В данный момент промис отклоняется с ошибкой
            rej('Некоторая ошибка с сервера')
        }, 1000);
    });
};*/

/*
// Обработка промиса с использованием then, catch и finally
promiseFetch()
    .then(data => {
        console.log(data);
    }, err => {
        console.log(err); // Обработка ошибки через второй параметр в then
    })
    .finally(() => {
        console.log('finally'); // Блок finally выполнится в любом случае
    });
*/

// Пример с запросами fetch:

/*
// Запросы выполняются параллельно, порядок результатов рандомный
fetch('https://google.com').then(res => {
    console.log('google', res.url);
});

fetch('https://bing.com').then(res => {
    console.log('bing', res.url);
});

fetch('https://yahoo.com').then(res => {
    console.log('yahoo', res.url);
});
*/

/*// Сохранение последовательности запросов с помощью цепочки промисов
fetch('https://google.com')
    .then(data => {
        console.log('google', data.url);
        return fetch('https://bing.com');
    })
    .then(data => {
        console.log('bing', data.url);
        return fetch('https://yahoo.com');
    })
    .then(data => {
        console.log('yahoo', data.url);
    });*/

/*// Обработка с использованием async/await
const foo = async () => {
    try {
        const google = await fetch('https://google.com');
        console.log('google', google.url);

        const bing = await fetch('https://bing.com');
        console.log('bing', bing.url);

        const yahoo = await fetch('https://yahoo.com');
        console.log('yahoo', yahoo.url);
    } catch (err) {
        console.log('error', err); // Обработка ошибок с помощью try/catch
    } finally {
        console.log('finally'); // Блок finally для завершения
    }
};

foo();*/

// Статические методы:

// Promise.all - ждет выполнения всех запросов, возвращает массив результатов
/*
Promise.all([
    fetch('https://google.com'),
    fetch('https://bing.com'),
    fetch('https://yahoo.com')
])
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('ОШИБКА: ', err.message); // Обработка ошибки, если хотя бы один запрос не выполнен
    });
*/

// Promise.race - возвращает первый выполненный (резолв или реджект) промис
/*Promise.race([
    fetch('https://google.com'),
    fetch('https://bing.com'),
    fetch('https://yahoo.com')
])
    .then(data => {
        console.log(data.url);
    })
    .catch(err => {
        console.log('ОШИБКА: ', err.message); // Обработка ошибки, если первым завершится отклоненный промис
    });*/

// Promise.any - возвращает первый успешно выполненный промис
/*
Promise.any([
    fetch('https://google.com'),
    fetch('https://bing.com'),
    fetch('https://yahoo.com')
])
    .then(data => {
        console.log(data.url);
    })
    .catch(err => {
        console.log('ОШИБКА: ', err.message); // Обработка ошибки, если все промисы были отклонены
    })*/

// allSettled - получает массив результатов, включая зареджектнутые запросы, метод catch не нужен

Promise.allSettled([
    fetch('https://google.com'),
    fetch('https://bing.com'),
    fetch('https://yahoo.com')
])
    .then(data => {
        console.log(data);
    })