//Lexical environment | closure | recursion

/*### Лексическое окружение и хостинг в JavaScript
**Лексическое окружение (Lexical Environment)**:
- Лексическое окружение — это скрытый объект, который создается для каждого блока,
функции или скрипта в JavaScript. Он содержит все переменные, функции и объекты,
определенные в данном контексте выполнения.
**Глобальное лексическое окружение**:
- При запуске скрипта формируется глобальное лексическое окружение, внешняя ссылка (`outer`) которого равна `null`,
так как у глобального окружения нет внешнего окружения.
- Объявленные с помощью `function declaration` функции попадают в глобальное лексическое окружение сразу
на этапе его создания и становятся доступными до выполнения кода.
- Переменные, объявленные с помощью `var`, также попадают в глобальное лексическое окружение при его создании,
но инициализируются значением `undefined` до момента их явного присвоения в коде.

**Хостинг (Hoisting)**:
- Хостинг — это механизм, при котором объявления переменных (`var`) и функций (`function declaration`) "всплывают"
на верх уровня их контекста (функции или глобального окружения).
- Важно: хостинг относится только к объявлениям, а не к присвоению значений.
Переменные `var` инициализируются значением `undefined` до тех пор, пока не произойдет их присвоение в ходе выполнения кода.

* Замыкания - это способность ф-ции в JS запоминать лексическое окружение, в котором она была создана.
* т.е. хранить в себе ссылка на это окружение
* */


/*let сar = 'bmw'

function startEngine() {
    const car = 'kia'
    console.log(`start ${car}`)
}

car = 'audi'

startEngine()*/

// -----------------------------------

// globalLE {foo: Function, bar: Function}

/*const a = 20 // globalLE {foo: Function, bar: Function, a: 20}
const b = 30 // globalLE {foo: Function, bar: Function, a: 20, b: 30}

function foo() {
    // fooLE {} --> globalLE
    const a = 40     // fooLE {a: 40} --> globalLE
    const b = 50     // fooLE {a: 40, b: 50} --> globalLE
    console.log(a)

    bar()
}

foo()

function bar() {
    // barLE {} --> globalLE
    console.log(b)
}*/

// ---------------------------------------

// globalLE {a: undefined, foo: Function} --> null                 var и function foo() - происходит всплытие (хостингу)

/*console.log(a)
// console.log(car)
foo()

let car = 'bmw' // {a: undefined, car: 'bmw'}
let car2 = 'audi' // {a: undefined, car: 'bmw', car2: 'audi'}

console.log(car)

var a = 06-Lexical_Environment_Closure_Recursion // {a: 06-Lexical_Environment_Closure_Recursion, car: 'bmw', car2: 'audi'}

console.log(a)

function foo() {
    console.log('foo')
}

const bar = () => {
    console.log('bar')
}
const arrowF = () => {
    console.log('arrowF')
}*/

// -----------------------------------------

// globalLE {foo: Function} --> null

/*function foo() {
    // когда происходит инициализация ф-ции внутри создается ссылка на globalLE
    // когда вызываем ф-цию, внутри создается лексическое окружение ф-ции
    // fooLE{} --> globalLE
    const b = 20 // fooLE{b: 20} --> globalLE
    console.log(a + b) // (06-Lexical_Environment_Closure_Recursion + 20)
}
const a = 06-Lexical_Environment_Closure_Recursion // globalLE {foo: Function, a: 06-Lexical_Environment_Closure_Recursion} --> null

foo() // globalLE {foo: Function, a: 06-Lexical_Environment_Closure_Recursion} --> null*/

// ---------------------------------------------

// Замыкание (closure) - это способность функции запомнить в каком лексическом окружении ее создали

// globalLE {counterCreator: Function} ----> null
/*const counterCreator = () => {
    // counterCreatorLE1 {count: 0} ---> globalLE
    // counterCreatorLE2 {count: 0} ---> globalLE
    let count = 0
    return () => {
        // {} ---> counterCreatorLE1
        // {} ---> counterCreatorLE2
        console.log(++count)
    }
}

const counter1 = counterCreator()
const counter2 = counterCreator()

counter1()
counter1()
counter1()

counter2()
counter2()
counter2()*/

// ------------------------

// Рекурсия - вызов ф-ции самой себя:
// 1. Условие выхода из рекурсии
// 2. Шаг рекурсии

// globalLE {pow: Func} ---> null

/*const pow = (x, n) => {
    // powLE {x: 2, n: 4} ---> globalLE
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(5, 2))*/


/*const factorial = (num) => {
    if (num === 1) {
        return num
    }
    return num * factorial(num - 1)
    // return num === 1 ? num : num * factorial(num - 1)
}

console.log(factorial(4))*/


/*
const pow = (x, n) => {
    // Базовый случай: если степень равна 1, то результат равен основанию
    if (n === 1) {
        return x;
    } else {
        // Рекурсивный случай: умножаем основание на результат pow для меньшей степени
        return x * pow(x, n - 1);
    }
};
console.log(pow(5, 4))
*/

// Рассмотрим пример вызова функции pow(2, 3)

// Шаг 1: pow(2, 3) - это не базовый случай, поэтому переходим к рекурсивному случаю.
// Шаг 2: 2 * pow(2, 2) - это тоже не базовый случай, снова переходим к рекурсивному случаю.
// Шаг 3: 2 * (2 * pow(2, 1)) - теперь n стало равным 1, это базовый случай.
// Шаг 4: 2 * (2 * 2) - это результат для n = 1 (базовый случай).
// Шаг 5: 2 * 4 - это результат для n = 2 (рекурсивный случай).
// Шаг 6: 8 - это итоговый результат для n = 3 (рекурсивный случай).

// Итоговый результат: 8

// Теперь давайте подытожим:
// pow(2, 3) = 2 * pow(2, 2)
//           = 2 * (2 * pow(2, 1))
//           = 2 * (2 * 2)
//           = 2 * 4
//           = 8


/*const pow = (a, b) => {
    if (b === 1) return a

    return a * pow(a, (b - 1))
}

console.log(pow(2, 4))*/

/*function factorial(n) {
    // Базовый случай: если n равно 0, возвращаем 1
    if (n === 0) {
        return 1;
    }
    // Рекурсивный случай: умножаем n на факториал (n-1)
    return n * factorial(n - 1);
}

// Примеры использования:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1*/

/*function fibonacci(n) {
    // Базовые случаи: если n равно 0 или 1, возвращаем n
    if (n === 0 || n === 1) {
        return n;
    }
    // Рекурсивный случай: сумма двух предыдущих чисел Фибоначчи
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Примеры использования:
console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0*/
