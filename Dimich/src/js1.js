// const users = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//     },
//     {
//         name: "Alex",
//         age: 24,
//         isMarried: true,
//     },
//     {
//         name: "Olya",
//         age: 21,
//         isMarried: true,
//     },
//     {
//         name: "Nick",
//         age: 29,
//         isMarried: false,
//     },
// ];
//
// const superUser1 = {
//     id: 06-Lexical_Environment_Closure_Recursion,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//         street: "Kattie Turnpike",
//         suite: "Suite 198",
//         city: "Lebsackbury",
//         zipcode: "31428-2261",
//         geo: {
//             lat: "-38.2386",
//             lng: "57.2232",
//         },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//         name: "Hoeger LLC",
//         catchPhrase: "Centralized empowering task-force",
//         bs: "target end-to-end models",
//     },
// };

// number, string, undefined, null, symbol, boolean, BigInt
// array, object

// const user = {
//     name: "Bob",
// };
//
// const newUser = user;
//
// user.name = "Donald";
//
// console.log(newUser.name);
// console.log(user.name);

// C - create
// R - read
// U - update
// D - delete

// const obj = {} // new Object()
// const arr = [] // new Array()

// mutable, unmutable
//
// const users = [
//   {
//     name: "Bob",
//     age: 22,
//     isMarried: true,
//   },
//   {
//     name: "Alex",
//     age: 24,
//     isMarried: true,
//   },
//   {
//     name: "Olya",
//     age: 21,
//     isMarried: true,
//   },
//   {
//     name: "Nick",
//     age: 29,
//     isMarried: false,
//   },
// ];
//  console.log(users[1].name);

// const newUser = {
//   name: "Donald",
//   age: 29,
//   isMarried: false,
// };
//
// users.push(newUser);
// console.log(users[users.length - 1].name);

// const copyUsers = []
// for (let i = 0; i < users.length; i++) {
// 	copyUsers.push(users[i])
// }
// copyUsers.push(newUser)

// const copyUsers = [...users, newUser];
//
// const car = {
//   brand: "bmw",
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// "use strict";

// function bar() {
//     console.log(this);
// }
//
// bar();

// car.startEngine();

const superUser = {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury", // 'London'
        zipcode: "31428-2261",
        geo: {
            lat: "-38.2386",
            lng: "57.2232", // '60'
        },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
    },
};

const newSuperUser = {
    ...superUser,
    address: {...superUser.address},
};

console.log(newSuperUser);

const newSuperUser2 = {
    ...superUser,
    address: {
        ...superUser.address,
        street: "Kattie",
        geo: {...superUser.address.geo, lng: "60", lat: "60"},
    },
};
superUser.company.name = "someCompany";
superUser.address.suite = "198";
console.log(superUser.address.suite);
console.log(newSuperUser2.address.suite);
console.log(superUser);

const foo = delete newSuperUser2.address.fff;

// newSuperUser2.address.geo = undefined;
// newSuperUser2.address.srt;
console.log(foo);
