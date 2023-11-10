export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

//users[1]
let user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 323232, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

usersArray.find(u => u.id === 1)