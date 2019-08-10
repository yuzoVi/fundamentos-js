function area(largura, altura) {
    const area = largura * altura
    if (area >= 20) {
        console.log("area maior que o permitido")
    }
    else {
        return area
    }
}

console.log(area(2) + "\n")
console.log(area(2, 2) + "\n")
console.log(area(5, 5) + "\n")
console.log(area(5, 5, 2, 1, 2) + "\n")
console.log(area() + "\n")
console.log('\n')
