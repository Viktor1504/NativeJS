// TASK_01 -> написать функцию накопления createAdder которая будет принимать новое значение
// и суммировать его к предыдущему результату:

/*const createAdder = (defaultValue = 0) => {
    let state = defaultValue;
    return (newValue) => {
        if (typeof newValue !== 'number') {
            console.log('the value must be a number');
            return
        }
        state += newValue;
        return state
    }
}

const task01 = createAdder(5)
console.log(task01(5))
console.log(task01('f'))
console.log(task01(3))*/

// TASK_02 →> создать функцию createPerson, которая будет возвращать объект с методами для задания и получения имени

// variant 1
/*const createPerson = (startName = '') => {
    return {
        name: startName,
        getName() {
            return this.name
        },
        setName(newName) {
            this.name = newName
        }
    }
}

const task02 = createPerson('Victor')
console.log(task02.getName())
task02.setName('Pavel')
console.log(task02.getName())*/

// variant 2
/*const createPerson = (startName = '') => {
    let name = startName
    return {
        getName() {
            return name
        },
        setName(newName) {
            name = newName
        }
    }
}

const task02 = createPerson('Victor')
console.log(task02.getName())
task02.setName('Pavel')
console.log(task02.getName())*/

// TASK_03 -> создать функцию createMultiplier, которая "запоминает" значение множителя
// и возвращает другую функцию, которая будет использовать этот множитель для умножения любого переданного числа.

/*const createMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};

const task03 = createMultiplier(5)
console.log(task03(5))*/

// TASK_04 -> Создайте функцию delay, которая задерживает выполнение на определённое количество времени.
// Для этого нужно использовать Promise, который разрешится (выполнится) через указанное количество миллисекунд.

/*const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
delay(5000).then(() => {
    console.log('Прошло 5 секунд')
})*/

// TASK_05 → Создайте функцию calculateSquare, которая принимает число и возвращает
// промис, который разрешается с результатом квадрата этого числа.

/*const calculateSquare = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject(new Error("Input must be a number"));
        } else {
            resolve(number * number);
        }
    });
}

calculateSquare('Hello!')
    .then((result) => {
        console.log("Square:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });*/

// TASK_06 -> Являются ли фрагменты кода ниже эквивалентными? Другими словами,
// ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2)
// promise.then(f1, f2)

/*
const examplePromise = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject('Her');
        } else {
            resolve(number * number);
        }
    })
}

examplePromise('df').then((res) => console.log(res), (res) => console.log(res))*/

// TASK_07 -> Есть «обычная» функция. Как можно внутри неё получить
// результат выполнения async-функции?

/*async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(res => console.log(res));
}

f()*/

// TASK_07 -> Напишите в каком порядке будут выведены логи (eventloop)

// 1
/*console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3")
    })
    .then(() => {
        console.log("4");
    });
setTimeout(() => {
    console.log("5");
}, 0);
console.log("6");*/


// 2

/*
async function asyncFunc1() {
    console.log("1");
    await asyncFunc2();
    console.log("2");
}

async function asyncFunc2() {
    console.log("3");
}

console.log("4");

setTimeout(() => {
    console.log("5");
}, 0);

asyncFunc1()

new Promise((resolve) => {
    console.log("6")
    resolve();
}).then(() => {
    console.log("7");
})

console.log("8");*/

// 3
/*async function asyncFuncX() {
    console.log("1");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("2");
}

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

asyncFuncX();

new Promise((resolve) => {
    console.log("5");
    resolve();
}).then(() => {
    console.log("6");
});

console.log("7");*/

// 4
/*async function asyncFunc1() {
    console.log("1");
    await asyncFunc2();
    console.log("2");
}

async function asyncFunc2() {
    console.log("3");
    return new Promise(resolve => setTimeout(() => {
        console.log("4");
        resolve();
    }, 1000));
}

console.log("5")

setTimeout(() => {
    console.log("6");
}, 500);

asyncFunc1();

new Promise((resolve) => {
    console.log("7");
    resolve();
}).then(() => {
    console.log("8");
});

console.log("9");*/

// 5 // then и catch попадают в microtasks

/*
Promise.resolve()
    .then(() => {
        console.log("then1");
        throw new Error("Error in first then");
    })
    .then(() => {
        console.log("then2")
    })
    .catch((error) => {
        console.error("catch:", error.message);
    })
    .then(() => {
        console.log("then3");
    })
    .finally(() => {
        console.log("Finally");
    });*/

// TASK08 -> Написать что выведет консоль (this)
// 1
/*class Person {
    constructor(name) {
        // Сохраняем имя в свойство объекта при создании экземпляра
        this.name = name;
    }

    greet() {
        // Этот метод просто выводит имя через консоль, используя this.name
        console.log(`Hello, my name is ${this.name}`);
    }

    delayedGreet() {
        // Используем обычную функцию в setTimeout
        setTimeout(function () {
            // Здесь this ссылается на глобальный объект (window или global),
            // а не на объект person, поэтому this.name будет undefined
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }

    delayedGreetArrow() {
        // Используем стрелочную функцию в setTimeout
        setTimeout(() => {
            // В стрелочной функции this ссылается на объект person,
            // так как стрелочные функции унаследуют контекст из метода
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
}

const person = new Person("John");
person.greet(); // Hello, my name is John
person.delayedGreet(); // Hello, my name is undefined (из-за потери контекста)
person.delayedGreetArrow(); // Hello, my name is John (стрелочная функция сохраняет контекст)*/

// 2
/*
const person = {
    name: "Alice",
    friends: ["Bob", "Charlie"],
    printFriends() {
        this.friends.forEach(function (friend) {
            console.log(`${this.name} knows ${friend}`);
        });
    },
    printFriendsArrow() {
        this.friends.forEach((friend) => {
            console.log(`${this.name} knows ${friend}`);
        });
    }
}

person.printFriends(); // undefined knows BoB , undefined knows Charlie
person.printFriendsArrow() // Alice knows BoB, Alice knows Charlie*/

// 3
/*
const person = {
    name: 'Emma',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const anotherPerson = {
    name: 'Liam'
}

const greet = person.greet; // Сохраняем ссылку на метод greet, но контекст this теряется
greet(); // Hello, my name is undefined, потому что this ссылается на глобальный объект
// (в строгом режиме это undefined)

greet.call(anotherPerson); // Hello, my name is Liam, потому что call() устанавливает контекст this на anotherPerson

greet.bind(anotherPerson); // Ничего не выводится, потому что bind() возвращает новую функцию с привязанным контекстом,
// но не вызывает её
*/

// 4
/*const person = {
    name: 'Oliver',
    outerGreet() {
        console.log(`Outer hello, my name is ${this.name}`)

        function innerGreet() {
            console.log(`Inner hello, my name is ${this.name}`)
        }

        innerGreet()
    }
}

person.outerGreet()*/
//Outer hello, my name is Oliver
//Inner hello, my name is undefined

// TASK_09 -> Написать что выведет консоль (class)

// 1
/*class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`)
    }
}

const dog = new Dog('Rex')
dog.speak() // Rex barks*/

// 2
class Person {
    constructor(name, age) { // Конструктор инициализирует объект с именем и возрастом
        this.name = name;
        this.age = age;
    }

    introduce() { // Метод introduce выводит информацию о человеке
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) { // Вызываем конструктор родительского класса Person для инициализации name и age
        super(name, age); // Инициализируем новый параметр grade для Student
        this.grade = grade;
    }

    introduce() { // Вызываем метод introduce родительского класса Person
        super.introduce(); // Добавляем дополнительную информацию про grade
        console.log(`I am in grade ${this.grade}`);
    }
}

// Создаём объект класса Student с именем 'Alice', возрастом 14 и 8 классом
const student = new Student('Alice', 14, 8);
// Вызываем метод introduce для объекта student, который сначала вызывает метод introduce родителя, а потом выводит дополнительную информацию
student.introduce();
