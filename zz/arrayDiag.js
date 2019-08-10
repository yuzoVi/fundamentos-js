let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let i ,j
    let diag1, diag2;
    let x = arr.length
    for (i = 0; i <= x; i++){
        diag1 = diag1 + arr[i,i]
    }

    let arr2 = arr.reverse()
    for (j = 0; j <= x; j++){
        diag2 = diag2 + arr2[i-1,i-1]
    }

    let resultado = Math.abs(diag1 - diag2)
console.log(resultado)