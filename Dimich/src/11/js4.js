// function getNumber() {
//     // const promise = Promise.resolve(Math.random())
//     const promise = new Promise((resolve, reject) => {
//         // reject('some error')
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 2000)
//     })
//
//     return promise
// }

// getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    read() {
        const data = (localStorage.getItem('some-key'))
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = (localStorage.getItem('some-key'))
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

// const result = repo.save({name: 'IT-KAMASUTRA'})
// console.log('SAVED')

const run = async () => {
    await repo.saveAsync({name: 'IT-KAMASUTRA'})
    console.log('SAVED')
    const data = await repo.readAsync()
    console.log(data)
}

run()