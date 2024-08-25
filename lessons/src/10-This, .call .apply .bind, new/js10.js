// this — это специальное ключевое слово в JavaScript,
// которое ссылается на текущий контекст исполнения функции или объекта.
// В зависимости от того, как и где используется this, его значение может отличаться.
// Основная функция this — дать доступ к объекту, который вызывает функцию или метод.

// 1. Global scope
// 2. simple Functions, arrow Functions
// 3. call apply bind
// 4. function constructor

// 1. Global Scope
// В глобальной области видимости `this` указывает на глобальный объект.
// В браузере это `window`, в Node.js — `global`.

// console.log(this); // Выведет `window` в браузере или `global` в Node.js

// 2. Simple Functions
// В обычных функциях `this` определяется в момент вызова.
// Если функция вызывается в глобальной области, `this` указывает на глобальный объект.

/*function foo() {
    console.log(this);
}

foo(); // Выведет `window` (или `global` в Node.js) — функция вызвана в глобальном контексте.*/

// 3. Arrow Functions
// В стрелочных функциях `this` определяется в момент создания и
// наследуется из внешнего контекста. Они не имеют своего собственного `this`.

/*const bar = () => {
    console.log(this);
};

bar(); // Выведет `window`, так как стрелочная функция захватывает `this` из глобального контекста.*/

// Пример разницы между обычной и стрелочной функцией:

/*const obj = {
    x: 10,
    method: function () {
        console.log(this.x); // `this` указывает на объект `obj`
    },
    arrowMethod: () => {
        console.log(this.x); // `this` указывает на глобальный объект, так как
        // стрелочная функция захватила `this` при создании
    }
};

obj.method();      // Выведет объект `obj`
obj.arrowMethod(); // Выведет глобальный объект `window` (или `global` в Node.js)*/

// 4. call, apply, bind
// Эти методы позволяют явно задавать значение `this` при вызове функции.

/*function greet() {
    console.log(`Hello, ${this.name}`)
}

const person = {
    name: "Alice"
}

greet.call(person); // Выведет: "Hello, Alice" - `this` указывает на объект `person`
greet.apply(person); // Выведет: "Hello, Alice" - `this` указывает на объект `person`

const boundGreet = greet.bind(person); // Создает новую функцию с фиксированным значением `this`
boundGreet(); // Выведет: "Hello, Alice"*/

/*
const car = {
    speed: 200,
    showSpeed() {
        console.log(this.speed);
        return 1
    }
}

const scooter = {
    speed: 60
}

const ferrari = {
    speed: 330
}
*/

// car.showSpeed.call({speed: 10})
// car.showSpeed.bind(scooter).call(ferrari) // переопределить можно только 1 раз

// Эта строка не сработает, так как `call` немедленно вызывает функцию:
// setTimeout(car.showSpeed.call(car), 1000)

// Этот вариант работает, так как `bind` создаёт новую функцию с привязанным контекстом:
// setTimeout(car.showSpeed.bind(car), 1000)

// Этот вариант работает, так как передаётся стрелочная функция, которая вызовет `showSpeed` позже:
// setTimeout(() => car.showSpeed(), 1000)

// Эта строка не работает, так как `car.showSpeed()` вызывается немедленно, а не через 1 секунду:
// setTimeout(car.showSpeed(), 1000)
/*const show = car.showSpeed
show() // undefined*/

// car.showSpeed.call(scooter); // Переопределяет контекст вызова, передавая параметры через запятую, и сразу вызывает функцию
// car.showSpeed.apply(scooter);  // Переопределяет контекст вызова, передавая параметры массивом, и сразу вызывает функцию
// car.showSpeed.bind(scooter); // Переопределяет контекст вызова, но не вызывает функцию. Параметры передаются через запятую.
// Для вызова нужно добавить "()" в конце или сохранить результат в переменную и вызвать её позже.

// задача 4 на bind
/*// Функция sum принимает два аргумента a и b и возвращает их сумму
function sum(a, b) {
    return a + b
}

// Используем метод bind, чтобы создать новую функцию sum10,
// которая уже имеет предопределенное значение первого аргумента (10)
// и принимает только один аргумент b
const sum10 = sum.bind(null, 10)

// Выводим результат вызова функции sum10 с аргументом 5 в консоль
// В данном случае 10 + 5 = 11-Class, private fields, setget, static methods
console.log(sum10(5))*/

// задача 3

/*
const array = [1, 2, 3, 4, 5]

Array.prototype.multiBy = function (n) {
    return this.map(el => el * n)
}

console.log(array.multiBy(5))*/


// 5. Function Constructor - возвращает однотипные объекты
// При использовании функции как конструктора (с оператором `new`), `this` указывает на новый объект.

/*function Person(name) {
    this.name = name;
}

const newPerson = new Person("Bob");
console.log(newPerson.name);

function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

const car1 = new Car('bmw', 200)
const car2 = new Car('kia', 220)

console.log(car1)
console.log(car2)*/

// задача 2
// global.x = 50
// window.x = 50

// Функция foo создает и возвращает объект
function foo() {
    // Локальная переменная x внутри функции foo
    const x = 10

    // Возвращаемый объект содержит:
    return {
        // Свойство x со значением 20
        x: 20,
        /*Метод bar является стрелочной функцией Стрелочные функции не имеют собственного this,
        поэтому в данном случае this будет указывать на внешний контекст, где this.x будет
         неопределен (undefined)*/
        bar: () => {
            console.log(this.x)
        },
        /*Метод baz является обычной функцией Обычные функции имеют собственный this, и в данном
        случае this будет указывать на объект, в котором этот метод был вызван, т.е. на объект,
        возвращаемый из функции foo. Таким образом, this.x будет равно 20*/
        baz: function () {
            console.log(this.x)
        }
    }
}

/*const obj = foo() // Вызов функции foo создает объект obj
/!*Вызов метода bar у объекта obj Поскольку bar является стрелочной функцией, this в данном методе
указывает на глобальный объект или undefined в строгом режиме, и x не определен в этом контексте
Поэтому в консоль будет выведено undefined*!/
obj.bar()
/!*Вызов метода baz у объекта obj Поскольку baz является обычной функцией, this в данном методе
указывает на объект obj Таким образом, x будет равно 20 Поэтому в консоль будет выведено 20*!/
obj.baz()*/

// Вызов foo с контекстом {x: 30} Этот контекст будет захвачен стрелочной функцией bar
const obj2 = foo.call({x: 30});

/*Вызов метода bar, bar — это стрелочная функция, которая захватила контекст {x: 30}
Поэтому this.x внутри bar будет 30*/
obj2.bar(); // Выведет 30

/*Вызов метода baz, baz — это обычная функция, которая получает свой контекст в момент вызова
Здесь this будет ссылаться на obj2, у которого свойство x равно 20*/
obj2.baz(); // Выведет 20

let y = obj2.bar // Стрелочная функция захватила контекст {x: 30}
let z = obj2.baz // Обычная функция, которая при вызове потеряет контекст

y() // Выведет 30
z() // В строгом режиме вызовет ошибку, в нестрогом выведет `undefined` (если глобальный `x` не определен)