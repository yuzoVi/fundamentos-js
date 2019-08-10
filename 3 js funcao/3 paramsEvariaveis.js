function soma()
{
    let soma = 0 
    for(let i in arguments)
    {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(10,20,30,40))
console.log("\n"+ soma("teste1", "teste2"))
console.log("\n" + soma())