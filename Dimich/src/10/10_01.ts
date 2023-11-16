export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}

export const makeHairStyle = (u: UserType, power: number) => {
    return {
        ...u,
        hair: u.hair / power
    }
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
    return {...u, books: [...u.books, ...newBooks]}
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => {
    return {...u, books: u.books.filter(b => b !== bookForDelete)}
}