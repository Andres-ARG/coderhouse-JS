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
const opciones = parseInt(prompt(
    `Elija la opcion deseada:
    1- Listar libros de la biblioteca
    2- Agregar libro a la biblioteca
    3- Borrar libro de la biblioteca
    4- Buscar libro de la biblioteca
    5- Filtrar
    6- Salir
    `
))
switch(opciones){
    case 1:{
        listarLibros()
        break
    }case 2:{
        agregarLibro()
        break
    }case 3:{
        borrarLibro()
        break
    }case 4:{
        buscarLibro()
        break
    }case 5:{
        filtrar()
        break
    }
    default:{
        alert("OPCION INVÁLIDA");
        break;
    }
}
function listarLibros(){
    libros.forEach(libro => {
        console.log(libro)
    });
}
function agregarLibro(nombre,autor,publicacion,idioma){
    nombre = prompt("Ingrese el nombre del libro")
    autor = prompt("Ingrese el autor del libro")
    publicacion = parseInt(prompt("Ingrese el anio de publicacion del libro"))
    idioma = prompt("Ingrese el idioma del libro")
    const libroAgregado = {
        nombre,
        autor,
        publicacion,
        idioma
    }
    libros.push(libroAgregado)
}
function borrarLibro(){
    for(i=0; i<libros.length; i++){
        console.log(libros[i].nombre + " | Indice: " + i)
    }
    const borrar = parseInt(prompt("Introduce el indice del libro a borrar"))
    delete libros[borrar]
    console.log(libros)
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
