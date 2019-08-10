// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// se for apenas um atributo nao precisa de parenteses, se tiver {} precisa de return
const imprimir = a => {
    a = 5
    return console.log(a)
}


//arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) //nao funciona, arrow function tem preferencia
lexico1()

// parametro default
function log(texto = 'node'){
    console.log(texto)
}

log()
log(undefined)
log(null)
log('sou mais forte')


//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n=>total +=n)
    return total
}

console.log(total(1,2,3,4,5,6,7))