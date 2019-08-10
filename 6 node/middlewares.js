//middleware / chain of responsability

const passo1 = (ctxt, next) => {
    ctxt.valor1 = 'mid1'
        next()
}

const passo2 = (ctxt, next) => {
    ctxt.valor2 = 'mid2'
    next()
}

const passo3 = (ctxt) => {
    ctxt.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
         middlewares[indice](ctx, ()=> execPasso(indice+1))
    }
    execPasso(0)
}

const ctxt = {

}

exec(ctxt, passo1, passo2, passo3) //pode alterar a ordem dos passos

console.log(ctxt)