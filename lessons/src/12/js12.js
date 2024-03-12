// fetch('https://google.com/?query=js')
//     .then(data => {
//         console.log('data', data.url)
//     })
//
// fetch('https://bing.com/?query=js')
//     .then(data => {
//         console.log('data', data.url)
//     })
//
// fetch('https://yahoo.com/?query=js')
//     .then(data => {
//         console.log('data', data.url)
//     })

// fetch('https://yahoo.com/?query=js')
//     .then(data => {
//         console.log('data from yahoo', data.url)
//         return fetch('https://bing.com/?query=js')
//     })
//     .then(data => {
//         console.log('data from bing', data.url)
//         return fetch('https://google.com/?query=js')
//     })
//     .then(data => {
//         console.log('data from google', data.url)
//     })

// const run = async () => {
//     try {
//         const dataFromYahoo = await fetch('https://yahoo1.com/?query=js')
//         console.log('dataFromYahoo', dataFromYahoo.url)
//         const dataFromBing = await fetch('https://bing.com/?query=js')
//         console.log('dataFromBing', dataFromBing.url)
//         const dataFromGoogle = await fetch('https://google.com/?query=js')
//         console.log('dataFromGoogle', dataFromGoogle.url)
//     } catch (err) {
//         console.log('ERROR', err.message)
//     }
// }
//
// run()

// const pr1 = fetch('https://yahoo.com/?query=js')
// const pr2 = fetch('https://bing3456.com/?query=js')
// const pr3 = fetch('https://google.com/?query=js')
//
// const bigPromise = Promise.all([pr1, pr2, pr3])
//
// bigPromise
//     .then((bigData) => {
//         console.log('bigdata', bigData)
//     })
//     .catch((err) => {
//         console.log('error', err)
//     })

// all | race | any | allSettled

// all -------------------------------  попадаем в then если все зарезолвилось, если хотябы 1 реджект попадаем в catch

// Promise.all([
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://google.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log('bigdata', bigData)
//     })
//     .catch((err) => {
//         console.log('error', err)
//     })

// race ------------------------------- отлавливает любое изменение любого из промисов, если это resolve то мы попадаем в then, если это reject то мы попадаем в catch
// остальные запросы игнорируются

// Promise.race([
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://google7585.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log('bigdata', bigData.url)
//     })
//     .catch((err) => {
//         console.log('error', err.url)
//     })

// any ------------------------------- попадем в then если хотябы 1 из промисов зарезолвится, тот который зарезолвился первым, в catch попадем если все 3 промиса зареджектились

// Promise.any([
//     fetch('https://yahoo4334.com/?query=js'),
//     fetch('https://bing34.com/?query=js'),
//     fetch('https://google434.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log('bigdata', bigData.url)
//     })
//     .catch((err) => {
//         console.log('error', err)
//     })

// allSettled ------------------------------- всегда попадаем в then но изменяется статус

// Promise.allSettled([
//     fetch('https://yahoo.com/?query=js'),
//     fetch('https://bing.com/?query=js'),
//     fetch('https://google.com/?query=js')
// ])
//     .then((bigData) => {
//         console.log('bigdata', bigData)
//     })
