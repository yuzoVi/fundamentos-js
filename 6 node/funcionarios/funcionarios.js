const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// china, mulher e 
daChina = (objeto) => objeto.pais === 'China'
sexoFemino = (objeto) => objeto.genero === 'F'
menorSalario = (objeto, objetoAtual) => objeto.salario > objetoAtual.salario? objetoAtual :objeto

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulherMalPaga = funcionarios
    .filter(daChina)
    .filter(sexoFemino)
    .reduce(menorSalario)

    console.log(mulherMalPaga)
})


