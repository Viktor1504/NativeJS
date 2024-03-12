function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const run = async () => {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
    await wait(4000)
    console.log(4)
}

run()

