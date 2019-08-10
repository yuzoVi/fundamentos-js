//sem callback
const notas = [6.6, 8.6, 5.4, 9.2, 4.2, 6, 4]

const notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callBack
const notasAltas = notas.filter(function(nota){
    return nota>7
})

console.log(notasAltas)