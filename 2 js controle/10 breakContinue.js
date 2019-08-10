const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in num) {
    if (i == 5) {
        break
    }
    console.log("Num : " + num[i])
}

console.log("\n")

for(let i in num)
{
    if( i == 5)
    {
        continue //pula o indice 5 e continua
    }
    console.log("Num : " + num[i])
}

console.log("\n")

externo: for(let i in num)
{
    for(let j in num){
        if(i == 2 && j == 3) break externo
        console.log("Par:" + num[i] + ", " + num[j])
    }
}