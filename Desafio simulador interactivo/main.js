/* Pido un monto a pagar y luego en que cantidad de cuotas quiere pagar. Muestro por consola el monto elegido, el interes y el total a pagar*/

let monto = parseInt(prompt("Ingrese el total del monto a pagar"))
let cuotas = parseInt(prompt("En cuantas cuotas desea pagar el monto?" + "\n" + "En 1 cuota no tiene interes" + "\n" + "En 3 cuotas tiene 5% de interes" + "\n" + "En 6 cuotas tiene 10% de interes" + "\n" + "En 9 cuotas tiene 15% de interes" + "\n" + "En 12 cuotas tiene 20% de interes"))
const interes5 = 5*monto/100
const interes10 = 10*monto/100
const interes15 = 15*monto/100
const interes20 = 20*monto/100
if(cuotas === 1){
    console.log("Total a pagar: " + monto)
}else if(cuotas === 3){
    console.log("Monto a pagar: $" + monto + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes5 + "\n" + "Total: $" + (monto + interes5))
}else if(cuotas === 6){
    console.log("Monto a pagar: $" + monto + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes10 + "\n" + "Total: $" + (monto + interes10))
}else if(cuotas === 9){
    console.log("Monto a pagar: $" + monto + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes15 + "\n" + "Total: $" + (monto + interes15))
}else if(cuotas === 12){
    console.log("Monto a pagar: $" + monto + "\n" + "En " + cuotas + " cuotas" + "\n" + "Interes por cuotas elegidas: $" + interes20 + "\n" + "Total: $" + (monto + interes20))
}

while(monto <= 0 || cuotas < 1 || isNaN(monto) || isNaN(cuotas)){
    monto = parseInt(prompt("Ingrese el total del monto a pagar"))
    cuotas = parseInt(prompt("En cuantas cuotas desea pagar el monto?" + "\n" + "En 1 cuota no tiene interes" + "\n" + "En 3 cuotas tiene 5% de interes" + "\n" + "En 6 cuotas tiene 10% de interes" + "\n" + "En 9 cuotas tiene 15% de interes" + "\n" + "En 12 cuotas tiene 20% de interes"))
}