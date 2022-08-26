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

const languages = ["JavaScript", "PHP", "Phyton"] // Definindo um array
console.log(languages)
console.log(typeof languages) // Validando variavel 

const user = {email: "jhow@teste.com", password: "1234", age: 30} // Object literals
console.log(user)
console.log(typeof user) // Validando variavel 

// Métodos de string
const fullName = "Jhonata Rios"

console.log(fullName.length)

const stringToArray = fullName.split(' ')

console.log(stringToArray)

console.log(fullName.toUpperCase())

console.log(fullName.toLowerCase())

console.log('fullName'.indexOf("Rios"))

console.log(fullName.slice(0, 7))

// Métodos de Arrays
const list = ["a", "b", "c", "d", "e"] // Começam a contar de 0

console.log(list.length)

console.log(list[2])

list[5] = "f"

console.log(list)

console.log(list[list.length - 1]) // Resgatando ultimo elemento da lista

list.push("g") // Adiciona elemento ao final da lista

console.log(list)

list.pop() // Remove um elemento do final da lista

console.log(list)

list.shift() // Apaga o primeiro indice da lista

console.log(list)

list.unshift('a') // Adiciona um primeiro indice a lista

console.log(list)

// Objetos
const product = {
    name: "Camisa",
    price: 15.99,
    inStock: true,
    sizes: ["P", "M", "G"],
    'Main Color': 'Azul',
}

console.log(product.name)

console.log(product['name'])

console.log(product["Main Color"])

// Destructuring
const {price, inStock} = product

console.log(price)
console.log(inStock)

const [n1, n2] = list
console.log(n1)
console.log(n2)

// JSON - JavaScript Object Notation
const dog ={
    name: "Shark",
    age: 10
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj)

// const jsonErrado = '{"name":"Teste", "surname":Testando,}'

// const obj2 = JSON.parse(jsonErrado)

// console.log(obj2)

// Estruturas condicionais
const a = 10

if(a > 8){
    console.log("A é maior que 8")
}

// >, <, >=, <=

const b = "Jhow"

if (b === "Batata"){ // === Valida tipo e conteudo iguais
    console.log("O nome é batata")
} else if (b === "Jungle"){
    console.log("O nome é Jungle")
} else{
    console.log("Não encontramos o nome do usuário")
}

const someNumber = 24

// if ternário
let testingANumber = someNumber < 20 ? "Yes" : "No"

console.log(testingANumber)

// Estruturas de repetição - loop
const myList = [1, 2, 3, 4, 5]
let counter = 0

while(counter < myList.length){
    console.log('Imprimindo: ' + myList[counter])
    counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for(let counter = 0; counter < mySecondList.length; counter++){
    console.log(`Imprimindo2: ${mySecondList[counter]}`) // Template literals
}

// Métodos de array -> Repetição

