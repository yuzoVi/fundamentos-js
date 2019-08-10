const aprovação = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
        console.log('Quadro de honra')
        break

        case 8: case 7: case 6:
        console.log('aprovado')
        break

        case 5: case 4: case 3: case 2: case 1: case 0: 
        console.log('reprovado')
        break

        default:
        console.log('nota inválida')
        break
    }
    
}
aprovação(10)
aprovação(7)
aprovação(3)
aprovação(-1)
