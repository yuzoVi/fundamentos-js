console.log(typeof Object)
console.log(typeof String)
console.log(typeof Array)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first(), ['a', 'b', 'c', 'd', 'e'].first())

//cuidado em mexer funções que ja existem