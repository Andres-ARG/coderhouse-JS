/* PIDO UN NUMERO CON PROMPT Y MUESTRO POR CONSOLA LOS DIVISORES DEL NUMERO INTRODUCIDO*/

const numero = parseInt(prompt("Ingrese un numero"))
for(let i=0; i<=numero; i++){
    if(numero%i == 0){
        console.log("Divisor: " + i)
    }
}