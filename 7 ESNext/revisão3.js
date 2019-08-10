// ES8: Object.values Object.entries  
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

//melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        console.log('ola')
    }
}
pessoa.ola()
console.log(pessoa.nome)

// class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'auau!'
    }
}
console.log(new Cachorro().falar())