const valores =  [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[5] = 10
console.log(valores[5])
console.log(valores)

valores.push({id: 3}, false, null, 'teste')// coloca no final  do código
console.log(valores)

console.log(valores.pop()) // exclui o ultimo 
delete valores[0] // exclui e deixa a posição sem nada
console.log(valores)

typeof(valores)