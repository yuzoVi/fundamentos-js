const num2 = [1, 2, 3, 4]

dobro = (num) => num *2

const num2Dobrado = num2.map(dobro)

console.log(num2Dobrado)



Array.prototype.map2 = function (callback) {
    const newArray = []
    for ( i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

console.log(num2.map(dobro))

