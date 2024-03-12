// const smallDiv = document.querySelector('#small');
// const mediumDiv = document.querySelector('#divGreen');
// const bigDiv = document.querySelector('#divRed');

//event.stopPropagation() - это метод в JavaScript,
// который используется в обработчиках событий для предотвращения
// дальнейшего всплытия (bubbling) или захвата (capturing)
// события в DOM (Document Object Model).

// const handler = (event) => {
//     // event.stopPropagation()
//     console.log('currentTarget ', event.currentTarget.id)
//     console.log('target: ', event.target.id)
// }

// {capture: true} - от родителя к дочернему

// smallDiv.addEventListener('click', handler, {capture: true})
// mediumDiv.addEventListener('click', handler, {capture: true})
// bigDiv.addEventListener('click', handler, {capture: true})

// smallDiv.addEventListener('click', handler)
// mediumDiv.addEventListener('click', handler)
// bigDiv.addEventListener('click', handler)

document.querySelector('#linkId').addEventListener('click', buttonHandler)

function buttonHandler(event) {
    event.preventDefault() //блокирует дефолтное поведение
    alert('another action')
}

//publisher/subscriber

button.addEventListener('click', function subscriber() {
})

setTimeout(function subscriber() {
}, 1000)

store.subscribe(function subscriber() {
})

// subscriber === handler === observer === watcher === listener

const button = {
    subscribers: {
        'click': [], 'focus': [], 'doubleClick': []
    },
    addEventListener(event, subscriber) {
        this.subscribers[event].push(subscriber)
    },
    click() {
        this.subscribers['click'].forEach(sub => sub())
    },
    doubleClick() {
        this.subscribers['doubleClick'].forEach(sub => sub())
    },
    removeEventListener(event, subscriber) {
        this.subscribers[event] = this.subscribers[event].filter(sub => sub !== subscriber)
    }
}