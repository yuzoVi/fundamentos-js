const moduloA = require('../../moduloA') // ../ para voltar uma pasta
console.log(moduloA.ola )


const saudacoes = require('saudacoes')
console.log(saudacoes.bomdia)

const c = require('./pastaC')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req,res)=>{
    res.write('bom dia!')
    res.end()
}).listen(8080) */