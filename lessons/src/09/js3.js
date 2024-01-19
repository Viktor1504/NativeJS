// const smallDiv = document.querySelector('#small');
// const mediumDiv = document.querySelector('#divGreen');
// const bigDiv = document.querySelector('#divRed');
//
// function handler(event) {
//     event.stopPropagation()
//     console.log('Click', event.currentTarget.id)
// }
//
// // smallDiv.addEventListener('click', handler, {capture: true})
// // mediumDiv.addEventListener('click', handler, {capture: true})
// // bigDiv.addEventListener('click', handler, {capture: true})
//
// smallDiv.addEventListener('click', handler)
// mediumDiv.addEventListener('click', handler)
// bigDiv.addEventListener('click', handler)
//
// document.querySelector('#linkId').addEventListener('click', buttonHandler)
//
// function buttonHandler(event) {
//     event.preventDefault()
//     alert('another action')
// }


//publisher/subscriber

button.addEventListener('click', function subscriber() {
})

setTimeout(function subscriber() {
}, 1000)
store.subscribe(function subscriber() {
})

// subscriber === handler = observer === watcher

const button = {
    subscribers: {
        'click': [],
        'focus': [],
        'doubleClick': []
    },
    addEventListener(event, subscriber) {
        this.subscribers[event].push(subscriber)
    }
}