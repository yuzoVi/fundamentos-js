// cadeia de prototipos
Object.prototype.atr0 = '0'// n é recomendado

const avo = { atr1: 'a' }

const pai = {
    __proto__: avo,
    atr2: 'b'
}

const filho = {
    atr3: 'c',
    __proto__: pai
}
console.log(avo === pai.__proto__)

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro={
    velAtual:0,
    velMaxima:200,
    acelerarMais(delta){
        if(this.velAtual + delta <=this.velMaxima){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMaxima}km/h`

    }
}

const ferrari = {
    modelo : 'f40',
    velMaxima: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(300)
console.log(volvo.status())