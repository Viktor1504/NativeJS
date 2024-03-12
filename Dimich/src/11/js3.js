function divide(a, b) {
    return new Promise((resolve, reject) => {
        b === 0 ? reject("Деление на ноль невозможно") : resolve(a / b);
    })
}

//
// divide(10, 2)
//     .then(num => num)
//     .then(num => num + 2)
//     .then(num => num + 2)
//     .then(num => {
//         return Promise.reject(`error ${num}`)
//     })
//     .catch(console.log)

async function run() {
    const num = await divide(10, 2)
    console.log(num)
}

run()