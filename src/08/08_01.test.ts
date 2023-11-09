type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '323232': {id: 323232, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should add corresponding user', () => {
    let user = {id: 100500, name: 'Igor'}
    users[user.id] = user;

    expect(users[100500]).toEqual({id: 100500, name: 'Igor'});
    console.log(users)
})

test('should update corresponding user', () => {
    let user = {id: 100500, name: 'Igor'}
    users[user.id] = user;

    users[1].name = 'Ekaterina'
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})


test('should delete corresponding user', () => {
    delete users[1]
    expect(users['1']).toBeUndefined()
})