const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 10-This, .call .apply .bind, new задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}
// NB!!! Все преобразования выполняем иммутабельно, если не сказано иное

// 1. Создайте полную (глубокую) копию объекта user.
const deepCopyUser = {...user, friends: [...user.friends]}
console.log(deepCopyUser)

// 2. Создайте полную (глубокую) копию массива students.
const deepCopyStudents = students.map(s => ({...s}))
console.log(deepCopyStudents)

// 3. Создайте полную (глубокую) копию объекта superUser
const deepCopySuperUser = {...superUser, friends: superUser.friends.map(friend => ({...friend}))} // если в массиве лежит объект, используем map
console.log(deepCopySuperUser)

//4. Отсортируйте students по успеваемости (лучший идёт первым)
const sortedScores = [...students].sort((a, b) => b.scores - a.scores) // sort мутирует массив из-за этого делаем копию
const sortedScores2 = students.toSorted((a, b) => b.scores - a.scores) // toSorted возвращает новый массив
console.log(sortedScores)
console.log(sortedScores2)

//5. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(s => s.scores >= 100)
console.log(bestStudents)

//6. Сформируйте массив имён студентов
const arrStudents = students.map(s => s.name)
console.log(arrStudents)

//7. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
const studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick)

// Внесите следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммутабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends

const superUserCorrect1 = {...superUser, friends: superUser.friends.filter(friend => friend.id !== 1)}
console.log(superUserCorrect1)

//06-Lexical_Environment_Closure_Recursion. поменяйте объекту с id=2 из массива  friends значение св-ва name на "Donald"
const superUserCorrect2 = {
    ...superUser,
    friends: superUser.friends.map(friend => friend.id === 2 ? {...friend, name: 'Donald'} : friend)
}
console.log(superUserCorrect2)

//07_Promises, create Promise, .then .catch .finally. добавьте в список друзей нового друга
const newFriend = {
    id: 5,
    name: "Nick",
    age: 27,
    isMarried: false,
    scores: 99
}

const superUserCorrect3 = {...superUser, friends: [...superUser.friends, newFriend]}
console.log(superUserCorrect3)
console.log(superUser)

//08-Promises_async-await_static_metods_of_Promise. Найдите студента с самым высоким баллом не используя методы массивов и Math.max()*
let bestStudent = students[0]
for (let i = 1; i < students.length; i++) {
    if (students[i].scores > bestStudent.scores) bestStudent = students[i]
}
console.log(bestStudent)

//09-JS Asynchronous, Eventloop, Micro-Macro queues. Найдите сумму баллов всех студентов (reduce)*
const scoresSum = students.reduce((acc, student) => acc + student.scores, 0)
console.log(scoresSum)

/*10-This, .call .apply .bind, new. Д.З.:
Напишите функцию addFriends, которая принимает параметром массив students
и добавляет в каждому студенту свойство "friends",
значением которого является массив имён всех остальных студентов из массива students,
за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.*/
const addFriends = (students) => {
    const studentsNames = students.map(student => student.name)
    return students.map(student => ({
        ...student,
        friends: studentsNames.filter(friend => friend !== student.name)
    }))
}
console.log(addFriends(students))

/*11-Class, private fields, setget, static methods. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
массив students и количество лучших студентов, которое надо получить в
новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
getBestStudents(students, 3) => [{...}, {...}, {...}]
getBestStudents(students, 06-Lexical_Environment_Closure_Recursion) => [{}, {}, ...., {}, null, null, null, null ]*/

function getBestStudents(studentsArray, quantity = 0) {
    const sortedBestStudents = [...studentsArray].sort((a, b) => b.scores - a.scores)
    if (quantity === 0) return sortedBestStudents[0]
    const newArray = sortedBestStudents.slice(0, quantity)

    while (newArray.length < quantity) {
        newArray.push(null)
    }
    return newArray
}

console.log(getBestStudents(students, 7))
