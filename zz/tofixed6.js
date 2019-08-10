let somaNeg, somaPos, somaNull

somaNeg=0
somaPos= 0
somaNull = 0
const arr = [0, 1, 1, -1, -1]
let t = arr.length

for (let i = 0; i < t; i++){
    if (arr[i] === 0) {
        somaNull = somaNull +1
    }
    if (arr[i] > 0) {
        somaPos = somaPos +1
    }
    if (arr[i] < 0) {
        somaNeg = somaNeg +1
    }
}
console.log(somaNeg)
console.log(t)
let pos, neg, zero;

pos = (somaPos / t).toFixed(6)
neg = (somaNeg / t).toFixed(6)
zero = (somaNull / t).toFixed(6)

console.log(pos,neg,zero) 