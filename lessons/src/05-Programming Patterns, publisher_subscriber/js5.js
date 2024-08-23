/*
const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const linkElement = document.querySelector('#link')

// subscriber, listener, watcher
const handlerForSmallDiv = (e) => {
    e.stopPropagation() // для предотвращения всплытия
    console.log('small', e.currentTarget)
}
const handlerForMediumDiv = (e) => {
    console.log('medium', e.currentTarget)
}
const handlerForBigDiv = (e) => {
    console.log('big', e.currentTarget)
}
const handlerForLink = (e) => {
    e.preventDefault()
    alert('another action')
}

/!*const handler2 = () => {
    console.log('handler2')
}*!/

// smallDiv.addEventListener('click', handler2)

// smallDiv.removeEventListener('click', handler2) // отписка

/!*smallDiv.addEventListener('click', handlerForSmallDiv)
mediumDiv.addEventListener('click', handlerForMediumDiv, true)
bigDiv.addEventListener('click', handlerForBigDiv, {capture: true, once: true})*!/
// третий параметр:
// capture - указывает на то, что событие будет обработано на этапе перехвата (сверху вниз),
// once - указывает, что слушатель на bigDiv выполнится только один раз и затем удалится.

smallDiv.addEventListener('click', handlerForSmallDiv)
mediumDiv.addEventListener('click', handlerForMediumDiv)
bigDiv.addEventListener('click', handlerForBigDiv)
linkElement.addEventListener('click', handlerForLink)*/

// Патерны!!!!!!!!!!!!!
// Устоявшиеся правила программирования

// Подписчик
/*button.addEventListener('click', function subscriber() {})
setTimeout(function subscriber1() {}, 1000)
promise.then(function subscriber2() {})*/

// ПСЕВДОКОД
/*
const button = {
    subscribers: {
        'click': [handler1, handler2],
        'focus': [],
        'dbClick': []
    },
    addEventListener(eventName, subscriber) {
        this.subscribers[eventName].push(subscriber)
    },
    click() {
        const event = new PointerEvent()
        this.subscribers['click'].forEach(subscriber => subscriber(event))
    },
    focus() {
        this.subscribers['focus'].forEach(subscriber => subscriber())
    },
    dbClick() {
        this.subscribers['dbClick'].forEach(subscriber => subscriber())
    },
    removeEventListener(eventName, subscriber) {
        this.subscribers[eventName] = this.subscribers[eventName].filter((sub) => sub !== subscriber)
    }
}

const foo = () => {
    console.log('click')
}

button.addEventListener('click', foo)
button.removeEventListener('click', foo)*/

