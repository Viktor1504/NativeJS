function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Pavel',
    age: 24,
    syaHello: hello,
    syaHelloWindow: hello.bind(this),
    logInfo(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const victor = {
    name: 'Victor', age: 30
}

const petr = {
    name: 'Petr', age: 25
}

const pavel = {
    name: 'Pavel', age: 24
}

// person.logInfo.bind(victor, 'LBR', '+375298825900')()
//
// person.logInfo.call(petr, 'HP', '+37529883400')
//
// person.logInfo.apply(pavel, ['Venski', '+375298825340'])

const array = [1, 2, 3, 4, 5]

// function multiBy(arr, n) {
//     return arr.map(e => e * n)
// }

Array.prototype.multiBy = function (n) {
    return this.map(e => e * n)
}

console.log(array.multiBy(2))

let str = 'Hello'

let a = str[0]

console.log(a)