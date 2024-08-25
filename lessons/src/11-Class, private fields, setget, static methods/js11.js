// class

// Без класса
/*
const startEngine = () => console.log(`start ${this.brand}`);

function creatorCar(brand, speed) {
    return {
        brand: brand,
        speed: speed,
        foo: startEngine
    }
}

const bmw = creatorCar('bmw', 220)
const kia = creatorCar('kia', 200)

bmw.foo()
kia.foo()

console.log(bmw)
console.log(kia)*/

// ф-ция конструктор
/*function CarCreator(brand, speed) {
    // this ссылается на новый объект, создаваемый функцией-конструктором
    this.brand = brand
    this.speed = speed
    // Если определить метод startEngine здесь, он будет создан заново для каждого экземпляра:
    // this.startEngine = function () {
    //     console.log(`start ${this.brand}`)
    // }
}

// Определяя метод startEngine на прототипе, мы создаем его только один раз для всех экземпляров.
CarCreator.prototype.startEngine = function () {
    console.log(`start ${this.brand}`)
}

const bmw = new CarCreator('bmw', 220)
const kia = new CarCreator('kia', 200)

console.log(bmw)
console.log(kia)

console.log(bmw.startEngine === kia.startEngine)  // true, так как обе ссылки указывают на одну и ту же функцию*/

// классы 1
/*
class Car {
    constructor(brand, speed) {
        // this ссылается на новый объект, создаваемый конструктором
        this.brand = brand;
        this.speed = speed;
    }

    startEngine() {
        console.log(`start ${this.brand}`);
        // Методы, объявленные через function declaration внутри класса,
        // автоматически добавляются в прототип и будут общими для всех экземпляров.
    }

    stopEngine = () => {
        console.log(`stop ${this.brand}`);
        // Метод, объявленный через стрелочную функцию, создается заново для каждого экземпляра.
        // Он не добавляется в прототип, а хранится в самом объекте, поэтому
        // у каждого экземпляра будет своя версия этого метода.
    }
}

const bmw = new Car('BMW', 220);
const kia = new Car('KIA', 200);

console.log(bmw);
console.log(kia);

bmw.startEngine();
kia.startEngine();

console.log(bmw.startEngine === kia.startEngine);  // true, так как startEngine хранится в прототипе и общий для всех экземпляров
console.log(bmw.stopEngine === kia.stopEngine);    // false, так как stopEngine создается заново для каждого экземпляра
*/

// клас 2
/*
class Car {
    #wheals

    constructor(brand, speed, wheals) {
        this.brand = brand;
        this.speed = speed;
        this.#wheals = wheals
    }

    startEngine() {
        console.log(`start ${this.brand}`);
    }

    get wheals() {
        return this.#wheals;
    }

    set wheals(newWhealsCount) {
        if (typeof newWhealsCount === 'number') {
            this.#wheals = newWhealsCount;
            return
        }
        throw new Error('wrong type for wheels');
    }
}

const bmw = new Car('BMW', 220, 3);
const kia = new Car('KIA', 200, 4);

// bmw.#wheals = 2 // так нельзя, потому как свойство приватное

console.log(bmw)
console.log(kia)

console.log(bmw.wheals)
console.log(kia.wheals);

bmw.wheals = 5
kia.wheals = 6

console.log(bmw.wheals);
console.log(kia.wheals);
*/

// класс 3 - статические методы
/*
class Car {
    #wheals; // Приватное свойство, доступное только внутри класса
    #speed

    constructor(brand, speed, wheals) {
        this.brand = brand;
        this.#speed = speed;
        this.#wheals = wheals; // Инициализация приватного свойства
    }

    startEngine() {
        console.log(`start ${this.brand}`);
    }

    get wheals() {
        return this.#wheals; // Геттер для получения значения приватного свойства
    }

    set wheals(newWhealsCount) {
        if (typeof newWhealsCount === 'number') {
            this.#wheals = newWhealsCount; // Установка нового значения приватного свойства
            return;
        }
        throw new Error('wrong type for wheels'); // Бросаем ошибку, если тип данных неверный
    }

    get speed() {
        return this.#speed; // Геттер для получения значения приватного свойства
    }

    set speed(newSpeed) {
        if (typeof newSpeed === 'number') {
            this.#speed = newSpeed; // Установка нового значения приватного свойства
            return;
        }
        throw new Error('wrong type for speed'); // Бросаем ошибку, если тип данных неверный
    }


    static compareCarsSpeed(car1, car2) {
        // Статический метод доступен только на уровне класса, не на уровне экземпляра
        // Используется для выполнения операций над экземплярами или другой логики, связанной с классом
        if (car1.speed > car2.speed) {
            console.log(`${car1.brand} is faster than ${car2.brand}`);
        } else {
            console.log(`${car2.brand} is faster than ${car1.brand}`);
        }
    }
}

const bmw = new Car('BMW', 220, 3);
const kia = new Car('KIA', 200, 4);

// bmw.#wheals = 2 // Ошибка: Прямой доступ невозможен, так как свойство приватное

console.log(bmw);
console.log(kia);

console.log(bmw.wheals); // Получение значения приватного свойства через геттер
console.log(kia.wheals);

bmw.wheals = 5; // Установка нового значения через сеттер
kia.wheals = 6;

bmw.speed = 300 // Установка нового значения через сеттер
kia.speed = 250


console.log(bmw.wheals); // Вывод измененных значений
console.log(kia.wheals);
console.log(bmw.speed); // Вывод измененных значений
console.log(kia.speed);

Car.compareCarsSpeed(bmw, kia); // Вызов статического метода*/

// класс 4 - наследование
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    startEngine() {
        console.log(`start ${this.brand}`);
    }
}

class SuperCar extends Car {
    // Класс-наследник не создает новый экземпляр, а использует конструктор родительского класса через super()
    constructor(brand, speed, canFly) {
        super(brand, speed); // Вызов конструктора родительского класса для инициализации общих свойств
        this.canFly = canFly;
    }

    fly() {
        if (!this.canFly) {
            console.log(`I can't start flying ${this.brand}`);
            return;
        }
        console.log(`start flying ${this.brand}`);
    }
}

const bmw = new Car('BMW', 220);
console.log('bmw', bmw);

const superBmw = new SuperCar('SuperBMW', 300, true);
console.log('superBmw', superBmw);

superBmw.fly(); // Вызов метода fly, который доступен только в SuperCar
superBmw.startEngine(); // Вызов метода startEngine, унаследованного от Car
