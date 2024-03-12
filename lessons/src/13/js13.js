// event-loop

//task 1
// function a() {
//     setTimeout(() => {
//         console.log('1')
//     })
// }
//
// function b() {
//     console.log('2')
// }
//
// a()
//
// new Promise(function (res, rej) {
//     console.log('3')
//     res()
// }).then(() => {
//     setTimeout(function timer() {
//         console.log('4')
//     }, 0)
// })
//
// b()

// 3 2 1 4

//task 2
// setTimeout(() => {
//     console.log('1')
//
// }, 0)
//
// setTimeout(() => {
//     console.log('2')
// }, 1000)
//
// new Promise(function (res, rej) {
//     console.log('3')
//     res()
//     console.log('4')
// }).then(() => {
//     console.log('5')
// })
//
// console.log('6')
//
// async function test1() {
//     console.log('7')
//     await test2()
//     console.log('8')
// }
//
// async function test2() {
//     console.log('9')
// }
//
// test1()
//
// console.log('10')
//
// // mac: 1 2
// // mic: 5 8
// // 3 4 6 7 9 10 5 8 1 2

//task 3
// console.log(1)
//
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => {
//         console.log(3)
//     })
// })
//
// new Promise((res, rej) => {
//     console.log(4)
//     res(5)
// }).then(data => {
//     console.log(data)
//
//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then(() => {
//             console.log(7)
//
//             setTimeout(() => {
//                 console.log(8)
//             }, 0)
//         })
// })
//
// setTimeout(() => {
//     console.log(9)
// })
//
// console.log(10)

// mac: 2 9 8
// mic: 5 6 7 3
// 1 4 10 5 6 7 2 3 9 8

//task 4
async function first() {
    console.log(9)
    await Promise.resolve(2).then(r => console.log(r))
    console.log(0)
    await Promise.resolve(3).then(r => console.log(r))
}

async function second() {
    console.log(10)
    await Promise.resolve(4).then(r => console.log(r))
    console.log(11)
    await Promise.resolve(5).then(r => console.log(r))
}

first()
second()

// mac:
// mic: 2 4 0 11 3 5
// 9 10 2 4 0 11 3 5