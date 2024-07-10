//**Metódos de arreglo */

// Agregar al final con push
// const a = [1, 2, 3, 4, 5, 6]
// a.push("Hola", 7 ,8, 9) //agrego elementos al arreglo; mediante push, siempre al final.
// // Agregar al inicio con unshift
// a.unshift("Hola")
// console.log(a)

// // También con strings
// const superHeroes = ["Ironman", "Superman", "Hawkeye"]
// superHeroes.push("Green Arrow")
// console.log(superHeroes)

// Pop elimina el último elemento del array
// const a = [1, 2, 3, 4, 5, 6]
// a.pop()
// // Shift elimina el primer elemento del array
// a.shift()
// // Reverse muestra el arreglo al revés
// a.reverse()
// console.log(a)

// Agregar elementos a traves de un input
// const formulario = document.querySelector("#form")
// const guestInput = document.querySelector("#new-guest")
// const guestList = document.querySelector("#guests")

// const guests = []

// formulario.addEventListener("submit", (event)=> {
//     console.log(event)
//     event.preventDefault()
//     const guestName = guestInput.value
//     guests.push(guestName)
//     guestInput.value = ""
//     let html = ""
//     // for (let guest of guests) { //usando un ciclo
//     //     html += `
//     //     <li>${guest}</li>
//     //     `
//     // }
//     guests.forEach((guest)=> { //usando "forEach" se puede agregar un segundo argumento. Este es un método dentro del array.
//         html += `
//         <li>${guest}</li>
//         `
//     })
//     // guests.forEach((guest, index)=> { //por ejem: el index
//     //     html += `
//     //     <li>${index + 1}.- ${guest}</li>
//     //     `
//     // })
//     guestList.innerHTML = html
// })

// const formulario = document.querySelector("#form")
// const guestInput = document.querySelector("#new-guest")
// const guestList = document.querySelector("#guests")

// const guests = []

// formulario.addEventListener("submit", (event)=> {
//     console.log(event)
//     event.preventDefault()
//     const guestName = guestInput.value
//     guests.push(guestName)
//     guestInput.value = ""
//     let html = ""
//     // for (let guest of guests) { //usando un ciclo
//     //     html += `
//     //     <li>${guest}</li>
//     //     `
//     // }
//     guests.forEach((guest)=> { //usando "forEach" se puede agregar un segundo argumento. Este es un método dentro del array.
//         html += `
//         <li>${guest}</li>
//         `
//     })
//     // guests.forEach((guest, index)=> { //por ejem: el index
//     //     html += `
//     //     <li>${index + 1}.- ${guest}</li>
//     //     `
//     // })
//     guestList.innerHTML = html
// })

// const formulario = document.querySelector("#form")
// const guestInput = document.querySelector("#new-guest")
// const guestList = document.querySelector("#guests")

// const guests = []

// formulario.addEventListener("submit", (event)=> {
//     console.log(event)
//     event.preventDefault()
//     const guestName = guestInput.value
//     guests.push(guestName)
//     guestInput.value = ""
//     let html = ""
//     // for (let guest of guests) { //usando un ciclo
//     //     html += `
//     //     <li>${guest}</li>
//     //     `
//     // }
//     guests.forEach((guest)=> { //usando "forEach" se puede agregar un segundo argumento. Este es un método dentro del array.
//         html += `
//         <li>${guest}</li>
//         `
//     })
//     // guests.forEach((guest, index)=> { //por ejem: el index
//     //     html += `
//     //     <li>${index + 1}.- ${guest}</li>
//     //     `
//     // })
//     guestList.innerHTML = html
// })

// Eliminando elementos de un arreglo usando "splice"
// const formulario = document.querySelector("#form")
// const taskInput = document.querySelector("#new-task")
// const taskList = document.querySelector("#tasks")

// const tasks = []

// formulario.addEventListener("submit", (event)=> {
//     console.log(event)
//     event.preventDefault()
//     const taskName = taskInput.value
//     tasks.push(taskName)
//     taskInput.value = ""
//     let html = ""
//     // for (let guest of guests) { //usando un ciclo
//     //     html += `
//     //     <li>${guest}</li>
//     //     `
//     // }
//     tasks.forEach((task)=> { //usando "forEach" se puede agregar un segundo argumento. Este es un método dentro del array.
//         html += `
//         <li>${task}</li>
//         `
//     })
//     // guests.forEach((guest, index)=> { //por ejem: el index
//     //     html += `
//     //     <li>${index + 1}.- ${guest}</li>
//     //     `
//     // })
//     taskList.innerHTML = html
// })

//Método "splice" para eliminar elementos de un arreglo
// const cocktails = ["Piñacolada", "Margarita", "Mojito", "Caipirinha"] // Si hay elementos duplicados, la función indexará el primer elemento que encuentre.
// // cocktails.splice(1, 2) // desde el índice 1, elimina 2 elementos
// // console.log(cocktails)

// //Método "findIndex" para encontrar un elemento dentro de un array
// const index = cocktails.findIndex((element) => element == "Piñacolada") //le doy la instrucción de encontrar "Piñacolada". Transformo todos los elementos a minúscula con toLowerCase.
// cocktails.splice(index, 1)
// console.log(index) // muestro en la consola el índice del elemento declarado previamente, si no lo encuentra, mostrará -1 que sirve para hacer lógica condicional
// console.log(cocktails)

//Método "filter" para eliminar elementos de un arreglo
// const cocktails = ["Piñacolada", "Margarita", "Mojito", "Margarita", "Caipirinha"] // 
// // const index = cocktails.findIndex((element) => element == "Margarita") //le doy la instrucción de encontrar "Piñacolada".
// const filteredCocktails = cocktails.filter((element)=> element !== "Margarita")
// console.log(filteredCocktails)

//Método para filtrar objetos de un arreglo
let cocktails = [ //utilizamos un led, porque reasignamos el arreglo con "filter"
    {name: "Piñacolada", precio: 4000 },
    {name: "Margarita", precio: 5000 },
    {name: "Mojito", precio: 4000},
] 
// const index = cocktails.findIndex((element) => element == "Margarita") //le doy la instrucción de encontrar "Piñacolada".
cocktails = cocktails.filter((element)=> element.name !== "Margarita")
// console.log(cocktails)

//Para reemplazar el elemento buscado
// const cocktails = ["Piñacolada", "Margarita", "Mojito", "Margarita", "Caipirinha"] // 
// const index = cocktails.findIndex((element) => element == "Margarita") //le doy la instrucción de encontrar "Piñacolada".
// cocktails[index] = "Hola"
// const filteredCocktails = cocktails.filter((element)=> element !== "Margarita")
// console.log(filteredCocktails)

//Aplicación de Javascrip
const formulario = document.querySelector("#form")
const taskInput = document.querySelector("#new-task")
const taskList = document.querySelector("#tasks")

let tasks = [
    {id: 1, text: "Tarea 1", complete: false},
    {id: 2, text: "Tarea 2", complete: true},
    {id: 3, text: "Tarea 3", complete: false}
]
//Genera la lista de tareas
const renderTask = ()=> {
    let html = "" //guarda el contenido que recorro en esta variable
    tasks.forEach((task)=> { //usando "forEach" se puede agregar un segundo argumento. Este es un método dentro del array.
        html += `
        <li id="${task.id}">
            <span class = "${task.complete ? 'completed' : ''}">${task.text}</span>
            <button class = "complete">Completar</button>
            <button class = "delete">Eliminar</button>
        </li>
        `
    })
    taskList.innerHTML = html
    completeTask() //le da evento al botón completar
    deleteTask() //le da evento al botón eliminar
}

const completeTask = ()=> {
    const buttons = document.querySelectorAll("#tasks .complete")
    buttons.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            const index = tasks.findIndex((element)=> element.id == btn.parentNode.id) //busco la tarea en base al "id"
            tasks[index].complete = !tasks[index].complete //funciona como un toggle para cambiar el estado "complete"
            renderTask() //actualizo el html
        })
    })
}
//para borrar una de las tareas
const deleteTask = ()=> {
    const buttons = document.querySelectorAll("#tasks .delete") //para seleccionar el id de la lista de tareas
    buttons.forEach((btn)=> { //recorro el objeto
        btn.addEventListener("click", ()=> {
            //**Eliminando con splice, es necesario usar const en la variable global */ 
            // const index = tasks.findIndex((element)=> element.id == btn.parentNode.id) //para acceder al id necesito acceder al elemento que contiene al "id"
            // tasks.splice(index, 1)
            //**Eliminando con filter, es necesario usar let en la variable global */
            tasks = tasks.filter((element)=> element.id != btn.parentNode.id)
            // console.log(tasks)
            // console.log("click", li.id)
            renderTask() //actualizo las tareas incluyendo las eliminadas
        })
    })
}
//Rescato la tarea desde el formulario
formulario.addEventListener("submit", (event)=> {
    // console.log(event)
    event.preventDefault() //evito que se actualice la página
    const newTask = { //transforma el valor de taskInput en un objeto y guardo la tarea en un array
        id: Date.now(),
        text: taskInput.value,
        complete: false
    }
    tasks.push(newTask)
    taskInput.value = ""
    renderTask() //muestro la tarea

    // for (let guest of guests) { //usando un ciclo
    //     html += `
    //     <li>${guest}</li>
    //     `
    // }

    // guests.forEach((guest, index)=> { //por ejem: el index
    //     html += `
    //     <li>${index + 1}.- ${guest}</li>
    //     `
    // })
})
renderTask()



