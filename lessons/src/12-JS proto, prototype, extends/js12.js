// __proto__ | prototype

// Пример различия между __proto__ и prototype

class Car {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    // Метод, который будет общим для всех объектов и находиться в прототипе класса (Car.prototype)
    startEngine() {
        console.log(`Start ${this.brand}`);
    }

    // Метод, который будет находиться в каждом новом объекте, так как он объявлен как стрелочная функция
    stopEngine = () => {
        console.log(`Stop ${this.brand}`);
    }
}

const car1 = new Car('BMW', 220);
const car2 = new Car('BMW', 200);

console.log(car1 === car2) // false
console.log(car1.brand === car2.brand); // true
console.log(car1.startEngine === car2.startEngine); // true
console.log(car1.stopEngine === car2.stopEngine) // false

/*__proto__ - это свойство является ссылкой на prototype класса или ф-ции конструктора, с помощью которого/которой был
создан данный объект. */

console.log(car1.__proto__ === car2.__proto__) // true
console.log(car1.__proto__ === Car.prototype); // true

const arr = new Array()
const arr2 = []

console.log(arr.__proto__ === Array.prototype) // true
console.log(arr2.__proto__ === Array.prototype) // true

const str = 'str';
const str2 = 'str';

// console.log(str === str2) // true
console.log(str2.__proto__ === String.prototype); // true

// При обращении к методу или свойству примитивного значения (например, str2), происходит неявный анбоксинг:
// Примитив временно превращается в объект-обёртку (например, объект типа String).
// Это позволяет использовать методы и свойства, доступные у объекта String.
// После выполнения операции объект-обёртка уничтожается, и остаётся исходное примитивное значение.

console.log(Car.__proto__ === Function.prototype); // true

const num = new Number(5);
const num2 = new Number(5);

console.log(num === num2); // false

// num и num2 — это два разных объекта Number, каждый из которых содержит значение 5.
// Хотя значения одинаковы, сравнение объектов с помощью === проверяет ссылки на объекты.
// Поскольку num и num2 указывают на разные объекты в памяти, результат сравнения будет false.

const num3 = 5;
const num4 = 5;

console.log(num3 === num4); // true

// num3 и num4 — это примитивные числа (тип number).
// В случае примитивов сравнение с помощью === выполняется по значению.
// Оба числа равны 5, поэтому результат сравнения будет true.

const number = 42
console.log(number.__proto__ === Number.prototype)

console.log(car1.__proto__.__proto__ === Object.prototype) // true
console.log(Car.prototype.__proto__ === Object.prototype) // true
console.log(Car.__proto__ === Function.prototype)

console.log(Function.__proto__ === Function.prototype)

// как происходит наследование, раньше... с ипользованием ф-ции конструктора
function Bike(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Bike.prototype.startEngine = function () {
    console.log(`start ${this.brand}`);
}

Bike.compareBikesSpeed = function (bike1, bike2) {
    if (bike1.speed > bike2.speed) {
        console.log(`${bike1.brand} is faster than ${bike2.brand}`);
    } else {
        console.log(`${bike2.brand} is faster than ${bike1.brand}`);
    }
}


function SuperBike(brand, speed, canFly) {
    Bike.call(this, brand, speed);
    this.canFly = canFly;
}

SuperBike.prototype.fly = function () {
    if (!this.canFly) {
        console.log(`I can't start flying ${this.brand}`);
        return;
    }
    console.log(`start flying ${this.brand}`);
}

// SuperBike.prototype.__proto__ = Bike.prototype;
// SuperBike.__proto__ = Bike
Object.setPrototypeOf(SuperBike.prototype, Bike.prototype);
Object.setPrototypeOf(SuperBike, Bike);

const bike1 = new Bike("Suzuki", 300)
const bike2 = new Bike("Harley", 250)
const superBike1 = new SuperBike('bmw', 1000, true);
const superBike2 = new SuperBike('Yamaha', 700, true);

superBike1.startEngine();
superBike2.fly()

Bike.compareBikesSpeed(bike1, bike2)
SuperBike.compareBikesSpeed(bike1, superBike1)





