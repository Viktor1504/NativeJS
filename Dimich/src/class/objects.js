const deleteUser = (userId) => {
    return {
        type: 'DELETE-USER',
        payload: {userId: userId},
    }
}

const action1 = deleteUser('12323')
const action2 = deleteUser('45452')

console.log(action1)
console.log(action2)

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')
console.log(u1)
console.log(u2)