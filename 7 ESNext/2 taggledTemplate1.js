//taggledTemplate - processa o template dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'gui'
const situação = 'aprovado'

console.log(tag `${aluno} está ${situação}.`)