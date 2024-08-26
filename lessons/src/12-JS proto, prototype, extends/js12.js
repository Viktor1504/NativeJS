// __proto__ | prototype

/*
class Car {
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
        this.state = {}
    }

    startEngine() {
        console.log(`${this.brand} is started`)
    }

    stopEngine = () => {
        console.log(`${this.brand} is stopped`)
    }
}

const car1 = new Car('bmw', 220)
const car2 = new Car('kia', 250)
*/

/*console.log(car1 === car2) //false
console.log(car1.state === car2.state) //false
console.log(car1.startEngine === car2.startEngine) //true
console.log(car1.stopEngine === car2.stopEngine) //false*/

// __proto__ - это ссылка на prototype класса или ф-ции конструктора с помощью которого был создан объект

/*console.log(Car)
console.log(car1.__proto__ === Car.prototype)*/

/*
const a = 5
const b = 5
console.log(a.__proto__ === Number.prototype)
console.log(a.__proto__ === b.__proto__)*/

/*
const obj1 = {}
const obj2 = {}
const obj3 = new Object()

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === Object.prototype)
*/
/*
class Car {
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
        this.state = {}
    }

    startEngine() {
        console.log(`${this.brand} is started`)
    }

    stopEngine = () => {
        console.log(`${this.brand} is stopped`)
    }
}

const car1 = new Car('bmw', 220)
const car2 = new Car('kia', 250)*/

/*console.log(car1)
console.log(car1.__proto__ === Car.prototype)
console.log(car1.__proto__.__proto__ === Object.prototype)
console.log(car1.__proto__.__proto__.__proto__ === null)*/

// console.log(Car.__proto__ === Function.prototype)

/*
console.log(Function.__proto__ === Function.prototype)
console.log(Function.__proto__.__proto__ === Object.prototype)*/

// console.log(Object.__proto__ === Function.prototype)


/*class Car {
    constructor(brand) {
        this.brand = brand
    }

    startEngine() {
        console.log(`${this.brand} is started`)
    }

    static compareCars(car1, car2) {
        car1.speed > car2.speed ? console.log(`${car1.brand} is faster`) : console.log(`${car2.brand} is faster`)
    }
}*/

/*class SuperCar extends Car {
    constructor(brand, canFly) {
        super(brand)
        this.canFly = canFly
    }

    fly() {
        console.log(`${this.brand} is flying`)
    }
}*/

/*
const superCar1 = new SuperCar('supBmw', 'black', 300, true)

console.log(superCar1.__proto__ === SuperCar.prototype)
console.log(superCar1.__proto__.__proto__ === Car.prototype)
console.log(superCar1.__proto__.__proto__.__proto__ === Object.prototype)
console.log(superCar1.__proto__.__proto__.__proto__.__proto__ === null)*/

// superCar1.startEngine()

function Car(brand, speed) {
    this.brand = brand
    this.speed = speed
}

Car.prototype.startEngine = function () {
    console.log(`${this.brand} is started`)
}

Car.compareCars = function (car1, car2) { // это static - не доступен для истансов но доступен для класса
    car1.speed > car2.speed ? console.log(`${car1.brand} is faster`) : console.log(`${car2.brand} is faster`)
}

const car1 = new Car('BMW')

// car1.startEngine()

function SuperCar(brand, speed, canFly) {
    this.brand = brand
    this.speed = speed
    this.canFly = canFly
}

const superCar1 = new SuperCar('SuperBMW', 300, true)
const superCar2 = new SuperCar('SuperKIA', 400, true)

// console.dir(superCar1)

/*// deplicated
SuperCar.prototype.__proto__ = Car.prototype
SuperCar.__proto__ = Car*/

Object.setPrototypeOf(SuperCar.prototype, Car.prototype)
Object.setPrototypeOf(SuperCar, Car)

// console.log(superCar1.__proto__ === SuperCar.prototype)

superCar1.startEngine()
SuperCar.compareCars(superCar1, superCar2)
