// примитивные
// Number, string, boolean, bigInt, symbol, null, undefined

// ссылочные
// массивы, объекты, функции

//Особенности у ссылочного типа данных:
// 1) сложная структура
// 2) имеются свои методы и свойства
// 3) ссылочный тип данных


const user1 = {
    id: 1,
    name: 'Bob',
    isStudent: true
}

const user2 = user1 // #12314212 - ссылка в памяти
// console.log(user1 === user2) // true

// мутабельно
user2.name = 'Alex'

// console.log('user1', user1) // user1 {id: 1, name: 'Alex', isStudent: true}
// console.log('user2', user2)// user2 {id: 1, name: 'Alex', isStudent: true}


// иммутабельно
const user3 = {
    id: 1,
    name: 'Bob',
    isStudent: true
}

const user4 = {
    id: user3.id,
    name: user3.name,
    isStudent: user3.isStudent
}

// console.log(user3 === user4) // false

const user5 = {
    id: 1,
    name: 'Bob',
    isStudent: true
}

const user6 = {...user5}

// console.log(user5 === user6) // false
//
// console.log(user6)

const students = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    }
]

// pop() - удалить последний элемент массива (мутабельно)

//students.pop()
// console.log(students)

// иммутабельно
const students2 = [...students]
students2.pop()
// console.log(students2)

const students3 = students.filter(s => s.id !== 4)
const students4 = students3.map(s => s.id !== 4 ? s : null)

// console.log(students3)
console.log(students4)

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey. Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: ' -38.2386',
            Ing: '57.2232'
        },
    },
    phone: ' 024-648 - 3804',
    website: ' ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models'
    }
}

const newSuperUser = {
    ...superUser,
    address: {...superUser.address, city: 'Toronto', geo: {...superUser.address.geo, lat: 'test value'}},
    company: {...superUser.company}
}

const newSuperUser2 = {
    ...superUser,
    address: {...superUser.address, geo: {...superUser.address.geo}},
    company: {...superUser.company}
}

const newStructuredClone = structuredClone(superUser)
newStructuredClone.address.geo = 'test value newStructuredClone'
console.log(newStructuredClone)

console.log(newSuperUser.address.city)
console.log(superUser.address.city)

console.log(newStructuredClone === superUser) // false

// деструктуризация
//objects
const employee = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: "Doevich",
    role: 'admin'
}
const firstName = 'Nika'

const {firstName: userName, lastName, role = 'user'} = employee
// console.log(firstName, lastName) // John Doe
console.log(firstName, userName)

console.log(role) // admin

const employee2 = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: "Doevich",
    newRole: 'user',
    permession: {
        canEdit: true,
        canDelete: true
    }
}

const message = 'Test message'

const {newFirstName, message: newMessage, newRole = 'admin', permession: {canEdit, canDelete}} = employee2

console.log(newRole)

// деструктуризация массивов
const colors = ['red', 'green', 'yellow', 'blue', 'white', 'black']

const [redColor, , , blueColor] = colors

console.log(redColor, blueColor)

const colors2 = ['red', ['1', '2', '3'], 'yellow', 'blue', 'white', 'black']

const [redValue, [, secondValue]] = colors2

console.log(secondValue)

const employee3 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: "Ivanovich",
    message: 'Hello!',
    newRole: 'user',
    permession: {
        canEdit: true,
        canDelete: true
    }
}

// деструктуризация в функции
const sayHi = ({firstName, message}) => {
    console.log(`${firstName}: ${message}`)
}

sayHi(employee3)