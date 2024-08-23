const students = [{
    name: "Bob", age: 22, isMarried: true, scores: 85,
}, {
    name: "Alex", age: 21, isMarried: true, scores: 89
}, {
    name: "Nick", age: 20, isMarried: false, scores: 120
}, {
    name: "John", age: 19, isMarried: false, scores: 100
}];


//
// const getNames = (array)=> {
//     const result = []   // new Array
//     const getName = el => el.name // !!!
//     for (let i = 0; i < array.length; i++) {
//         result[i] = getName(array[i])
//     }
//     return result
// }
//
// console.log(getNames(students));
//
// const getScores = (array) => {
//     const result = new Array()
//     const getResult = el => el.scores // !!!
//     for (let i = 0; i < array.length; i++) {
//         result[i] = getResult(array[i])
//     }
//     return result
// }
//
// console.log(getScores(students));

// const addScores = (array) => {
//     const result = new Array()
//     const getResult = el => ({...el, scores: el.scores + 06-Lexical_Environment_Closure_Recursion}) // !!!
//
//     for (let i = 0; i < array.length; i++) {
//         result[i] = getResult(array[i])
//     }
//     return result
// }
//
// console.log(addScores(students))

// const getMappedArray = (array, mapFunc) => {
//     const result = new Array()
//     for (let i = 0; i < array.length; i++) {
//         result[i] = mapFunc(array[i])
//     }
//     return result
//
// }
//
// console.log(getMappedArray(students, st => st.name));
// console.log(getMappedArray(students, el => el.scores));
//console.log(students.map(st => st.name));

// const getFilteredArray = (array, filterFunc) => {
//     const result = new Array()
//     for (let i = 0; i < array.length; i++) {
//         if (filterFunc(array[i])) {
//             result[result.length] = array[i]
//         }
//     }
//     return result
// }
//
// console.log(getFilteredArray(students, st => st.age >= 21));
// console.log(students.filter(st => st.age >= 21));

//find, push, indexOf, includes

// const getFind = (array, findFunc) => {
//     for (let i = 0; i < array.length; i++) {
//         if (findFunc(array[i])) {
//             return array[i]
//         }
//     }
// }
//
// console.log(getFind(students, st => st.scores === 89))

// const selfMadePush = (array, el) => {
//     array[array.length] = el
//     return array.length
// }
//
// console.log(selfMadePush(students, {name: 'Victor', age: 29, isMarried: false, scores: 112}));
// console.log(students)

// const selfMadeIndexOf = (array, el, start = 0) => {
//     for (let i = start; i < array.length; i++) {
//         if (array[i] === el) {
//             return i
//         }
//     }
//     return -1
// }
//
// let arr = [1, 2, 5]
//
// const selfMadeIncludes = (array, el, start = 0) => {
//     for (let i = start; i < array.length; i++) {
//         if (array[i] === el) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(selfMadeIncludes(arr, 2, 2));

// function getLength() {
//     return `Длинна массива равна ${this.length}`
// }

// students.getLength =>  `Длинна массива равна 4`

// Array.prototype.getLength = getLength
//
// console.log([].getLength());
//
// console.log([1, 2, 3, 4, 5].getLength());
