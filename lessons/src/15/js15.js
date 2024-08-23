// Class

/*const car1 = {
    brand: 'bmw',
    color: 'black',
    startEngine() {
        console.log(`${this.brand} is started`)
    }
}
const car2 = {
    brand: 'ferrari',
    color: 'red',
    startEngine() {
        console.log(`${this.brand} is started`)
    }
}

car1.startEngine()
car2.startEngine()*/

//-------------------------------------------------------------------------

/*function carCreator(brand, color) {
    const obj = {
        brand,
        color,
        startEngine() {
            console.log(`${this.brand} is started`)
        }
    }
    return obj
}

const car1 = carCreator('bmw', 'black')
const car2 = carCreator('ferrari', 'red')

console.log(car1)
console.log(car2)

car1.startEngine()*/

//-------------------------------------------------------------------------

// функция-конструктор JavaScript
/*function CarCreator(brand, color) {
    this.brand = brand
    this.color = color
/!*так не делаем, используем prototype,
позволяет избежать создания новой функции для каждого создаваемого объекта.*!/
    this.startEngine = function () {
        console.log(`${this.brand} is started`)
    }
}

CarCreator.prototype.startEngine = function () {
    console.log(`${this.brand} is started`)
}

const car1 = new CarCreator('bmw', 'black')
const car2 = new CarCreator('ferrari', 'red')

console.log(car1)
console.log(car2)

car1.startEngine()
car2.startEngine()*/

//-------------------------------------------------------------------------

/*class Car {
    constructor(brand, color) {
        // {}
        this.brand = brand
        this.color = color
    }

    startEngine() {
        console.log(`${this.brand} is started`)
    }

    /!* если создать метод через function expression внутри конструктора или метода,
    то для каждого экземпляра класса будет создана новая копия этого метода в памяти,
    что может привести к избыточному использованию памяти при большом количестве экземпляров. *!/
    showColor = function () {
        console.log(this.color)
    }
}

const car1 = new Car('bmw', 'black')
const car2 = new Car('ferrari', 'red')

console.log(car1.startEngine === car2.startEngine)
console.log(car1.showColor === car2.showColor)*/

//-------------------------------------------------------------------------

// class Car {
//     #brand // приватное свойство, для того чтобы нельзя было обратиться напрямую
//     #speed
//
//     constructor(brand, color, speed) {
//         this.#brand = brand
//         this.color = color
//         this.#speed = speed
//     }
//
//     startEngine() {
//         console.log(`${this.#brand} is started`)
//     }
//
//     // getBrand() {
//     //     return this.#brand
//     // }
//
//     // setBrand(newBrand) {
//     //     if (newBrand.length < 3) {
//     //         throw new Error(`to short`)
//     //     }
//     //     this.#brand = newBrand
//     // }
//     get brand() {
//         return this.#brand
//     }
//
//     set brand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error(`to short`)
//         }
//         this.#brand = newBrand
//     }
//
//     get speed() {
//         return this.#speed
//     }
//
//     static compareCars(car1, car2) {  //доступен только в классе
//         car1.speed > car2.speed ? console.log(`${car1.brand} is faster`) : console.log(`${car2.brand} is faster`)
//     }
// }
//
// const bmw = new Car('bmw', 'black', 200)
// const ferrari = new Car('ferrari', 'red', 300)
//
// Car.compareCars(bmw, ferrari)

// console.log(car1.brand)
//
// car1.brand = 'ferrari'
//
// console.log(car1.brand)

//-------------------------------------------------------------------------

class Car {
    #brand // приватное свойство, для того чтобы нельзя было обратиться напрямую

    constructor(brand, color, speed) {
        this.#brand = brand
        this.color = color
        this.speed = speed
    }

    startEngine() {
        console.log(`${this.#brand} is started`)
    }

    static compareCars(car1, car2) {  //доступен только в классе
        car1.speed > car2.speed ? console.log(`${car1.brand} is faster`) : console.log(`${car2.brand} is faster`)
    }

    get brand() {
        return this.#brand
    }
}

const bmw = new Car('bmw', 'black', 200)

class SuperCar extends Car {
    constructor(brandForSuperCar, color, speed, canFly) {
        super(brandForSuperCar, color, speed)
        this.canFly = canFly
        this.brandForSuperCar = brandForSuperCar
    }

    fly() {
        console.log(`${this.brandForSuperCar} is flying`)
    }
}

const superBmw = new SuperCar('bmw', 'black', 200, true)
const superFerrari = new SuperCar('ferrari', 'red', 300, true)

superBmw.startEngine()
superBmw.fly()

SuperCar.compareCars(superBmw, superFerrari)