/* PONGO UNA LISTA DE PRODUCTOS EN UN PROMPT Y EL USUARIO DEBE ESCRIBIR EXACTAMENTE PRODUCTO1, PRODUCTO2 ETC PARA SUMARLO AL CARRITO. LUEGO DOY LA OPCION DE PAGAR EL MONTO TOTAL EN CUOTAS Y MUESTRO LOS RESULTADOS POR CONSOLA*/

const carrito = []
const producto1 = 5000
const producto2 = 3000
const producto3 = 2000
const producto4 = 7000
let total = 0
let listaProductos = prompt("LISTA DE PRODUCTOS DISPONIBLES:" + "\n" + "producto1" + "\n" + "producto2" + "\n" + "producto3" + "\n" + "producto4" + "\n" + "ESCRIBA EL PRODUCTO QUE DESEA AGREGAR AL CARRITO")
carrito.push(listaProductos)
while(confirm("Desea agregar algo mas al carrito?")){
    listaProductos = prompt("LISTA DE PRODUCTOS DISPONIBLES:" + "\n" + "producto1" + "\n" + "producto2" + "\n" + "producto3" + "\n" + "producto4" + "\n" + "ESCRIBA EL PRODUCTO QUE DESEA AGREGAR AL CARRITO")
    carrito.push(listaProductos)
}
for(i=0; i<carrito.length; i++){
    if(carrito[i] == "producto1"){
        total += producto1
    }else if(carrito[i] == "producto2"){
        total += producto2
    }else if(carrito[i] == "producto3"){
        total += producto3
    }else if(carrito[i] == "producto4"){
        total += producto4
    }else{
        console.log("Introduce exactamente 'producto1' 'producto2' etc")
    }
}
let cuotas = parseInt(prompt("En cuantas cuotas desea pagar el monto?" + "\n" + "En 1 cuota no tiene interes" + "\n" + "En 3 cuotas tiene 5% de interes" + "\n" + "En 6 cuotas tiene 10% de interes" + "\n" + "En 9 cuotas tiene 15% de interes" + "\n" + "En 12 cuotas tiene 20% de interes"))
const interes5 = 5*total/100
const interes10 = 10*total/100
const interes15 = 15*total/100
const interes20 = 20*total/100
if(cuotas === 1){
    console.log("Total a pagar: " + total)
}else if(cuotas === 3){
    console.log("Monto a pagar: $" + total + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes5 + "\n" + "Total: $" + (total + interes5))
}else if(cuotas === 6){
    console.log("Monto a pagar: $" + total + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes10 + "\n" + "Total: $" + (total + interes10))
}else if(cuotas === 9){
    console.log("Monto a pagar: $" + total + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes15 + "\n" + "Total: $" + (total + interes15))
}else if(cuotas === 12){
    console.log("Monto a pagar: $" + total + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes20 + "\n" + "Total: $" + (total + interes20))
}