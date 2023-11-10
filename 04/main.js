const todoLisId_1 = "12hg-uy67"  // v1()
const todoLisId_2 = "45hg-jh72"  // cripto.uuid()

const todoLists = [
    {
        id: todoLisId_1, // "id"
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoLisId_2,
        title: "What to buy",
        filter: "all",
    }
]

// const tasks = [
//     [{ todoListId: 1, id: 3, title: "HTML", isDone: false },
//     { todoListId: 1, id: 4, title: "CSS", isDone: false },
//     { todoListId: 1, id: 5, title: "REACT", isDone: true },],

//     [{ todoListId: 2, id: 6, title: "MILK", isDone: false },
//     { todoListId: 2, id: 7, title: "BEER", isDone: false },
//     { todoListId: 2, id: 8, title: "MEAT", isDone: false },]
// ]

const tasks = {
    [todoLisId_1]: [
        {id: 3, title: "HTML", isDone: false},
        {id: 4, title: "CSS", isDone: false},
        {id: 5, title: "REACT", isDone: true},
    ],
    [todoLisId_2]: [
        {id: 6, title: "MILK", isDone: false},
        {id: 7, title: "BEER", isDone: false},
        {id: 8, title: "MEAT", isDone: false},
    ],
}

// console.log(tasks);

const addTodoList = (title) => {
    const todoLisId = crypto.randomUUID()
    const newTodo = {
        id: todoLisId,
        title: title,
        filter: "all"
    }
    //pass to setState: 
    const nextTodosState = [...todoLists, newTodo]
    const nextTasksState = {...tasks, [todoLisId]: []}
}

const deleteTodo = (todoLisId) => {
    //pass to setState:
    const nextTodosState = todoLists.filter(tl => tl.id !== todoLisId)
    const copyTasksState = {...tasks}
    delete copyTasksState[todoLisId]
    //pass to setState:
    const nextTasksState = copyTasksState
}

const addTask = (title, todoLisId) => {
    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        isDone: false
    }
    const todoTasks = tasks[todoLisId]
    //pass to setState:
    const nextTasksState = {
        ...tasks, [todoLisId]: [...tasks[todoLisId], newTask]
    }

}

const changeTaskTitle = (id, todoLisId, newTitle) => {
    //pass to setState:
    const todoTasks = tasks[todoLisId].map(t => t.id === id ? {...t, title: newTitle} : t)
    const nextTasksState = {...tasks, [todoLisId]: todoTasks}
}


const todoListsOk = [
    {
        id: "1", // "id"
        title: "What to learn",
        filter: "all",
    },
    {
        id: "2",
        title: "What to buy",
        filter: "all",
    },
    {
        id: "3",
        title: "What to read",
        filter: "all",
    }
]


const todoListsOkObj = {}
for (let i = 0; i < todoListsOk.length; i++) {
    // 1.
    // todoListsOkObj[todoListsOk[i].id] = {
    //     title: todoListsOk[i].title,
    //     filter: todoListsOk[i].filter
    // }
    // 2.
    todoListsOkObj[todoListsOk[i].id] = todoListsOk[i]
    delete todoListsOkObj[todoListsOk[i].id].id
}

// console.log(todoListsOkObj);


const myObj = todoListsOk.reduce((acc, el) => {
    acc[el.id] = el
    delete acc[el.id].id
    return acc
}, {})


console.log(myObj)

//[1,2,3,4,5]

