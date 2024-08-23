/*1. Реализуйте функцию, которая принимает параметром подстроку, число повторов и разделитель, а возвращает строку,
состоящую из указанного количества повторов подстроки с использованием разделителя.
repeatString("yo", 3, " ") => "yo yo yo"
repeatString("yo", 3, ",") => "yo,yo,yo"
for или str.repeat()*/

const repeatString = (substring, quentity, separator) => {
    let result = substring
    for (let i = 1; i < quentity; i++) {
        result += separator + substring
    }
    return result
}

const repeatString2 = (substring, quentity, separator) => {
    return substring + (separator + substring).repeat(quentity - 1)
}

console.log(repeatString('yo', 3, ' '))
console.log(repeatString2('yo', 4, ' '))

/*2. Реализуйте функцию, которая принимает параметром строку и подстроку, а возвращает true,
если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
checkStart("Incubator", "inc") => true
checkStart("Incubator", "yo") => false
str.startWith() slice indexOF*/

const checkStart = (str, substring) => {
    return !!(str.toLowerCase().indexOf(substring) + 1)
    // return str.toLowerCase().startsWith(substring)
    // return str.toLowerCase().slice(0, substring.length) === substring
}

console.log(checkStart("Incubator", "inc"))

/*3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
truncateString("Всем студентам инкубатора желаю удачи!", 06-Lexical_Environment_Closure_Recursion) => "Всем студе..."*/

const truncateString = (str, quentity) => {
    // return str.slice(0, quentity) + '...'
    return str.substring(0, quentity) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

/*4. Реализуйте функцию, которая принимает параметром строку (предложение)
и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
getMinLengthWord("") => null
split()*/

const getMinLengthWord = (str) => {
    return str.split(' ').sort((a, b) => a.length - b.length)[0] || null
}

console.log(getMinLengthWord(''))

/*5. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает то же предложение,
 где все слова написаны строчными, но начинаются с заглавных букв.
setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"*/

const setUpperCase = (str) => {
    return str.toLowerCase().split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'))

/*6. Реализуйте функцию, которая принимает параметрами строку и подстроку. Если все
символы подстроки содержаться в строке - возвращает true, если нет -
возвращает false. Проверка проводится без учёта регистра и без учёта повторяющихся символов.
!* попробовать учитывать повтор символов в подстроке*!/
isIncludes("Incubator", "Cut") => true
isIncludes("Incubator", "table") => false
isIncludes("Incubator", "inbba") => true
isIncludes("Incubator", "inba") => true
isIncludes("Incubator", "Incubatorrr")=> true*/

const isIncludes = (str, substring) => {
    return substring.toLowerCase().split('').every(char => str.toLowerCase().includes(char))
}

console.log(isIncludes("Incubator", "inbbbba"))