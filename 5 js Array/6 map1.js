const num = [1, 2, 3]

let num2 = num.map(function (e) {
    return e * 2
})

console.log(num, num2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const num3 = num.map(soma10)
const num4 = num.map(triplo)
const num5 = num.map(paraDinheiro)  

console.log(num3,num4,num5)


const num6 = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(num6)