//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatStringFor = (str, quantity, separator) => {
    let result = str;

    for (let i = 1; i < quantity; i++) {
        result += separator + str;
    }
    return result
    // return str + (separator + str).repeat(quantity - 1)
}

console.log(repeatStringFor('yo', 10, ','))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str, sub) => {
    // return str.toLowerCase().includes(sub)
    // return Boolean(str.toLowerCase().indexOf(sub) + 1)
    // return str.toLowerCase().startsWith(sub.toLowerCase())
    return str.slice(0, sub.length).toLowerCase() === sub.toLowerCase()
}

console.log(checkStart('Incubator', 'inc'))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, quantity) => {
    // return str.slice(0, quantity) + '...'
    return str.substring(0, quantity) + '...'
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => {
    return str.split(' ').sort((a, b) => a.length - b.length)[0] || null
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

const setUpperCase = (str) => {
    return str ? str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : ''
}

console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'))

//6. Реализуйте функцию, которая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в строке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, substring) => {
    return substring.toLowerCase().split('').every(char => str.toLowerCase().includes(char));

    // const strLowerCase = str.toLowerCase();
    // const substringLowerCase = substring.toLowerCase();
    //
    // for (const char of substringLowerCase) {
    //     if (!strLowerCase.includes(char)) {
    //         return false;
    //     }
    // }
    //
    // return true;
}

console.log(isIncludes("Incubator", "inbbbba"))



