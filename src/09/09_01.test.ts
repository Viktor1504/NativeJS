type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Victor',
        age: 30,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(31)

    const superUser = user

    superUser.age = 1000

    expect(user.age).toBe(1000)
})

test('array type test', () => {

    let users = [
        {
            name: 'Victor',
            age: 30
        },
        {
            name: 'Pavel',
            age: 24
        },
    ]

    let admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {

    const usersCount = 100

    let adminsCount = usersCount

    adminsCount++

    expect(adminsCount).toEqual(101)

})

test('reference type test obj', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Victor',
        age: 30,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')
    expect(user2.address.title).toBe('Minsk City')
})

test('reference type array', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Victor',
        age: 30,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Pavel'

    expect(users[0].name).toBe('Pavel')
    expect(user.name).toBe('Pavel')
})


test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
});

function passportist(letters: any) {
    const copy = [...letters].sort()
}