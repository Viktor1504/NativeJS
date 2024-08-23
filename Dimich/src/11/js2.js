// const resolvedPromise = Promise.resolve([{}])
// resolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// const rejectedPromise = Promise.reject({message: 'some error'})
//
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// const usersAPI = {
//     getAllUsers() {
//         return Promise.resolve([{name: 'D'}, {name: 'N'}])
//     },
//     login(login, password) {
//         if (login === '123' && password === '123') {
//             return Promise.resolve({name: 'Dima', id: 08-Promises_async-await_static_metods_of_Promise, avatarUrl: ''})
//         } else {
//             return Promise.reject({message: 'Incorrect Login and password'})
//         }
//     }
// }
//
// const p = usersAPI.getAllUsers()
//     .then(users => console.log(users))
//
// const l = usersAPI.login('123', '1263')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         //show error
//         console.log(error)
//     })
