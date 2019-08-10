const alunos =  [
    { nome : 'João', nota: 7.3, bolsista: true},
    { nome : 'Maria', nota: 9.2, bolsista: false},
    { nome : 'Pedro', nota: 9.8, bolsista: false},
    { nome : 'Ana', nota: 8.7, bolsista: false},
]

// 1: todos os alunos são bolsistas?

// 2: algum aluno é bolsista?

const desafio1 = function(acumulador, atual){
    console.log(acumulador, atual)
    if( atual === false){
        return false
    }
    else{
        if(atual === acumulador ){
            return true
        }
        else{
            return false
        }
    }
}

const resultado1 = alunos.map(a => a.bolsista).reduce(desafio1,true)

console.log(resultado1)
console.log('\n')

const desafio2 = function(acumulador,atual){
    console.log(acumulador, atual)
    if( atual === true || acumulador === true){
        return true
    }
    else{
    return false
    }
}

const resultado2 = alunos.map(a => a.bolsista).reduce(desafio2,false)

console.log(resultado2)