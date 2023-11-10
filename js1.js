'use strict'

const superUser = {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
            lat: "-38.2386",
            lng: "57.2232",
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

// const newSuperUser = {
//     ...superUser, address: {...superUser.address, city: "London"},
// };

const deepCopyOfSuperUser = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {...superUser.address.geo, lat: '3424234'},
    },
    company: {...superUser.company},
};

 console.log(deepCopyOfSuperUser.address);
console.log(superUser);

//
// const newSuperUser2 = {
//     ...superUser,
//     address: {
//         ...superUser.address,
//         street: "Kattie",
//         geo: {...superUser.address.geo, lng: "60", lat: "60"},
//     },
// };
// // superUser.company.name = "someCompany";
// // superUser.address.suite = "198";
// // console.log(superUser.address.suite);
// // console.log(newSuperUser2.address.suite);
// // console.log(superUser);
//
// const foo = delete newSuperUser2.address.fff;


