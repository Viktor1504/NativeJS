/*this - — это специальное ключевое слово в JavaScript,
которое ссылается на текущий контекст исполнения функции или объекта.
В зависимости от того, как и где используется this, его значение может отличаться.
Основная функция this — дать доступ к объекту, который вызывает функцию или метод.*/

// 1. Global scope
// 2. simple Functions, arrow Functions
// 3. call apply bind
// 4. function constructor

/*// 1. Global Scope
// В глобальной области видимости `this` указывает на глобальный объект.
// В браузере это `window`, в Node.js — `global`.

console.log(this); // Выведет `window` в браузере или `global` в Node.js*/

/*// 2. Simple Functions
// В обычных функциях `this` определяется в момент вызова.
// Если функция вызывается в глобальной области, `this` указывает на глобальный объект.

function foo() {
    console.log(this);
}

foo(); // Выведет `window` (или `global` в Node.js) — функция вызвана в глобальном контексте.*/

/*// 3. Arrow Functions
// В стрелочных функциях `this` определяется в момент создания и
// наследуется из внешнего контекста. Они не имеют своего собственного `this`.

const bar = () => {
    console.log(this);
};

bar(); // Выведет `window`, так как стрелочная функция захватывает `this` из глобального контекста.

// Пример разницы между обычной и стрелочной функцией:

const obj = {
    method: function() {
        console.log(this); // `this` указывает на объект `obj`
    },
    arrowMethod: () => {
        console.log(this); // `this` указывает на глобальный объект, так как
                           // стрелочная функция захватила `this` при создании
    }
};

obj.method();      // Выведет объект `obj`
obj.arrowMethod(); // Выведет глобальный объект `window` (или `global` в Node.js)*/

/*
// 4. call, apply, bind
// Эти методы позволяют явно задавать значение `this` при вызове функции.

function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person); // Выведет: "Hello, Alice" - `this` указывает на объект `person`
greet.apply(person); // Выведет: "Hello, Alice" - `this` указывает на объект `person`

const boundGreet = greet.bind(person); // Создает новую функцию с фиксированным значением `this`
boundGreet(); // Выведет: "Hello, Alice"
*/

const car = {
    speed: 200,
    showSpeed() {
        console.log(this.speed);
    }
}

const scooter = {
    speed: 60
}

setTimeout(car.showSpeed.bind(car), 1000)
setTimeout(() => car.showSpeed(), 1000)

/*// car.showSpeed.call(scooter); // Переопределяет контекст вызова, передавая параметры через запятую, и сразу вызывает функцию
// car.showSpeed.apply(scooter);  // Переопределяет контекст вызова, передавая параметры массивом, и сразу вызывает функцию
car.showSpeed.bind(scooter); // Переопределяет контекст вызова, но не вызывает функцию. Параметры передаются через запятую.
// Для вызова нужно добавить "()" в конце или сохранить результат в переменную и вызвать её позже.*/


/*// 5. Function Constructor
// При использовании функции как конструктора (с оператором `new`), `this` указывает на новый объект.

function Person(name) {
    this.name = name;
}

const newPerson = new Person("Bob");
console.log(newPerson.name); // Выведет: "Bob"*/

