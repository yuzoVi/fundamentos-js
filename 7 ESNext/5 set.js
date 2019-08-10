//não aceita repetição e não é indexado
const times = new Set()
times.add('vasco')
times.add('sãoPaulo').add('palmeiras').add('vasco')
times.add('flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))

times.delete('palmeiras')
console.log(times.has('palmeiras'))

const nomes = ['raquel', 'lucas', 'lucas', 'julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)