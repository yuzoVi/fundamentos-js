const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

//recurso do ES8, objetivo é simplificar o uso do promise



let obterAlunos = async() =>{
    let turmaA = await getTurma('A')
    let turmaB = await getTurma('B')
    let turmaC = await getTurma('C')

    turmaA = turmaA.map(a => `A: ${a.nome}`)
    turmaB = turmaB.map(a => `B: ${a.nome}`)
    turmaC = turmaC.map(a => `C: ${a.nome}`)
    
    return [].concat(turmaA, turmaB, turmaC)
}// retorna um objeto asyncFunction

obterAlunos()
    .then(alunos => console.log(alunos))