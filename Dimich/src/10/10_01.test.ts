import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Victor',
        hair: 32,
        address: {city: 'Minsk'}
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'}
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop.title).toBe(movedUser.laptop.title)
    expect(movedUser.address.house).toBe(user.address.house)
})

test('upgrade laptop to MacBook', () => {
    let user: UserWithLaptopType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'}
    }

    const upgradedLaptop = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(upgradedLaptop)
    expect(user.address).toBe(upgradedLaptop.address)
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)
    expect(upgradedLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})


test('companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Victor',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = addNewCompany(user, 'js')


})