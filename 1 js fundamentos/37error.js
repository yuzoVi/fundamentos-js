function tratarErroLancar(erro){
    //throw new error('...')
    //throw 10
    //throw true
    //throw ' mensagem '
    throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + ' !!!!!')
    }catch (e){
        tratarErroLancar(e)
    }
}
const obj={ nome : 'roberto'}
imprimirNomeGritado(obj)