console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logthis(){
    console.log('dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    this.perigo = 'aponta pra global'
}
this.perigo = 'aponta para exports'

logthis()