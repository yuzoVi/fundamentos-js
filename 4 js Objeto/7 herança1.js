const ferrari = {
    modelo: 'f40',
    velocidade: 324
}

const volvo = {
    modelo: 'v40',
    velmax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function meuObjeto() {

}

console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)