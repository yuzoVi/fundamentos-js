const valor = 'global'

function minhaFuncao(){
      console.log(valor) // contexto léxico daonde el foi declarada
}

function exec(){
    const valor = "local"
    minhaFuncao()
}

exec()