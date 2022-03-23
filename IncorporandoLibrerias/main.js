//INGRESAR EN EL INPUT EL EJERCICIO A AGREGAR A LA LISTA DE EJERCICIOS, SE AGREGARA ABAJO EL NUEVO ITEM.
//SE PODRA TILDAR EL ITEM PARA MARCAR COMO REALIZADO Y TAMBIEN BORRARLO DE LA LISTA
//USE LOCALSTORAGE

// VOY A SEPARAR EL CODIGO EN TRES PARTES : VARIABLES, FUNCIONES, EVENTOS

// VARIABLES

const formulario = document.querySelector("#form")
const listaEjercicios = document.querySelector("#listaEjercicios")
let arrayEjercicios = []

//FUNCIONES

const crearEjercicio = (ejercicio) => {
    let itemEjercicio = {
        ejercicio: ejercicio,
        estado: false
    }
    arrayEjercicios.push(itemEjercicio)
}

let guardar = () => {
    localStorage.setItem("rutina", JSON.stringify(arrayEjercicios))
    pintar()
}

let pintar = () => {
    listaEjercicios.innerHTML = ""
    arrayEjercicios = JSON.parse(localStorage.getItem("rutina"))
    arrayEjercicios === null
    ? arrayEjercicios= []
    : arrayEjercicios.forEach(element => {
        element.estado
        ? listaEjercicios.innerHTML += `<div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
        <i class="material-icons">accessibility</i>
        <b>${element.ejercicio}</b> - ${element.estado}
        <span>
            <i class="material-icons">done</i>
            <i class="material-icons">delete</i>
        </span>
        </div>`
        : listaEjercicios.innerHTML += `
        <div class="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
        <i class="material-icons">accessibility</i>
        <b>${element.ejercicio}</b> - ${element.estado}
        <span>
            <i class="material-icons">done</i>
            <i class="material-icons">delete</i>
        </span>
        </div>`
    })
}

let eliminar = (ejercicio) => {
    let indexArray;
    arrayEjercicios.forEach((elemento, index) => {
        if(elemento.ejercicio === ejercicio){
            indexArray = index
        }
    })
    arrayEjercicios.splice(indexArray,1)
    guardar()
}

let editar = (ejercicio) => {
    let indexArray = arrayEjercicios.findIndex((elemento) => elemento.ejercicio === ejercicio)
    arrayEjercicios[indexArray].estado = true
    guardar()
}

//EVENTOS

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    let ejercicio = document.querySelector("#ejercicio").value
    crearEjercicio(ejercicio)
    guardar()
    formulario.reset()
})

document.addEventListener("DOMContentLoaded", pintar)
listaEjercicios.addEventListener("click", (e) => {
    e.preventDefault()
    if(e.target.innerHTML === "done" || e.target.innerHTML === "delete"){
        let texto = e.path[2].childNodes[3].innerHTML
        if(e.target.innerHTML === "delete"){
            eliminar(texto)
        }
        if(e.target.innerHTML === "done"){
            editar(texto)
        }
    }
})



// TEMPORIZADOR

const temporizador = () => {
    const tiempoTemporizador = document.querySelector(".temporizador")
    const inputTemporizador = document.querySelector('.inputTemporizador').value
    const botonPauseTemporizador = document.querySelector(".botonPauseTemporizador")
    
    if(inputTemporizador <= 0) return alertaToastify()
    let segundos = inputTemporizador
    const x = setInterval(() => {
        tiempoTemporizador.innerHTML = segundos
        segundos--
        if(segundos<0){
            clearInterval(x)
        }
        botonPauseTemporizador.addEventListener('click', () => {
            clearInterval(x)
        })
    }, 1000)
}

const alertaToastify = () => {
        const botonPlayTemporizador = document.querySelector(".botonPlayTemporizador")
        botonPlayTemporizador.addEventListener("click", () => {
            Toastify({
                text: "Ingresa un numero mayor que 0",
                duration: 3000
            }).showToast();
        })
}