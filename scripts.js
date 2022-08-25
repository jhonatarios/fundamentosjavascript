console.log("Batatinha")

// Console
console.error("Este é um erro")
console.warn("Este é um aviso!")
console.log("Esta é uma mensagem")

// Variáveis
var x = 10
// Maneiras mais modernas
let y = 15
const z = 20

if(1){
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

y = 25

console.log(y)

// Tipos de dados
const name = "Jhow" // String
console.log(name)
console.log(typeof name) // Validando variavel 

const shirtsQty = 4 // Number (Int/Float)
console.log(shirtsQty)
console.log(typeof shirtsQty) // Validando variavel 

const decimal = 12.4 // JS não diferencia int de float
console.log(decimal)
console.log(typeof decimal) // Validando variavel 

const isApproved = false // True or false
console.log(isApproved)
console.log(typeof isApproved) // Validando variavel 

let surname = null // Nulo
console.log(surname)
console.log(typeof surname) // Validando variavel Null = Object 

surname = "Rios" // Alterando de nulo para string
console.log(surname)
console.log(typeof surname) // Validando variavel

let age // Variavel indefinida, let null é o correto
console.log(age)
console.log(typeof age) // Validando variavel 

age = 30 // Definindo variavel que antes estava nula do jeito incorreto
console.log(age)
console.log(typeof age) // Validando variavel 
