// function declaration
console.log(soma(3,2)) // como o leitor do js , lê todas a funções primeiro, este metodo pode usar console.log antes
function soma(x, y){
    return x+y 
}

//function expression

const subtracao = function(a, b){
    return a-b
}

//named function expression
const mult = function mult(i, j){
    return i*j
}

console.log(mult(3,4))