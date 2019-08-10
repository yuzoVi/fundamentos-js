const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (x, y, operação = soma) {
    console.log(operação(x, y))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const obj = {
    falar : function(){
        console.log("falar")
    }
}
obj.falar()