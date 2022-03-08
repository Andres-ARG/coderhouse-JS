const libros = [
    {
        nombre: "La invención de Morel",
        autor: "Norah Borges",
        publicacion: 1940,
        idioma: "Español",
    },
    {
        nombre: "El túnel",
        autor: "Ernesto Sábato",
        publicacion: 1948,
        idioma: "Español",
    },
    {
        nombre: "Sobre héroes y tumbas",
        autor: "Ernesto Sábato",
        publicacion: 1961,
        idioma: "Español",
    }
]
const nombreBienvenida = prompt("Hola, cual es tu nombre?")
const contenedor = document.createElement("div")
contenedor.style.display = "block"
contenedor.style.textAlign = "center"
contenedor.style.padding = "20px"
contenedor.style.fontWeight = "bold"
contenedor.style.fontSize = "20px"
contenedor.innerHTML = `Bienvenido/a ${nombreBienvenida}`
const header = document.querySelector(".header")
header.appendChild(contenedor)

const opciones = parseInt(prompt(
    `Elija la opcion deseada:
    1- Listar libros de la biblioteca
    2- Agregar libro a la biblioteca
    3- Buscar libro de la biblioteca
    4- Filtrar
    5- Salir
    `
    ))
    class libro{
        constructor(nombre, autor, publicacion, idioma){
            this.nombre = prompt("Ingrese el nombre del libro")
            this.autor = prompt("Ingrese el autor del libro")
            this.publicacion = parseInt(prompt("Ingrese el anio de publicacion del libro"))
            this.idoma = prompt("Ingrese el idioma del libro")
        }
    }
        switch(opciones){
            case 1:{
            listarLibros()
            break
        }case 2:{
            const nuevoLibro = new libro
            libros.push(nuevoLibro)
            break
        }case 3:{
            buscarLibro()
            break
        }case 4:{
            filtrar()
            break
        }
    }
function listarLibros(){
    libros.forEach(libro => {
        console.log(libro)
    });
}
function buscarLibro(){
    const filtro = prompt("Ingrese el nombre del libro a buscar")
    const busqueda = libros.find((libro) => libro.nombre === filtro)
    console.log(busqueda)
    if(busqueda != undefined){
        console.log("El libro si existe")
    }else{
        console.log("El libro no existe en la biblioteca")
    }
}
function filtrar(){
    /* SOLO VA A FILTRAR LOS LIBROS CON ANIOS DE PUBLICACION MAYORES A 1950*/
    
    const filtrado = libros.filter((libro) => libro.publicacion > 1950)
    console.log(filtrado)
}