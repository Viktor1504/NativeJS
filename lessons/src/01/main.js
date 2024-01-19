// обработчкий, слушатель, подписяик, handler, listener, subscriber => function
// function() (вызывает браузер) => callback
// {....} => сведения о событии => Event => event => ev => e
// new Array(), new Object(), new Event()
// function(Event)

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

function handler(e) {
    //e.stopPropagation()
    console.log('yo!!!')
}

// function handler2(params) {
//     console.log(params)
// }

function double(params) {
    handler(params)
    handler2(params)
}

// sm.onclick = handler
// sm.onclick = double

sm.addEventListener('click', handler, {once: true}) // лучше потому как можно вешать неограниченное кол-во обработчиков
md.addEventListener('click', handler) // лучше потому как можно вешать неограниченное кол-во обработчиков
bg.addEventListener('click', handler) // лучше потому как можно вешать неограниченное кол-во обработчиков

// sm.removeEventListener('click', handler)

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.preventDefault()
    alert('hey!')
})