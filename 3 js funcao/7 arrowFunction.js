let dobro = function(a){
    a *= 2
    return a
}
console.log(dobro(2))

dobro = (a) => {
    a*=2
    return a
}
console.log("\n" + dobro(3))


dobro = a => a*=2
console.log(dobro(4))

let ola = function(){
    return 'ola'
}

ola = a => 'ola'

console.log(ola())