const api = {
    async save() {

    }, async read() {
        return {name: 'IT-KAMASUTRA'}
    }
}

async function xxx() {
    return 100500
}

async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read', data)
    let a = xxx()
    console.log(a)
}

run()