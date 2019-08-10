class Lançamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }

}

class cicloFinanceiro {
    constructor(mês, ano) {
        this.mês = mês
        this.ano = ano
        this.lancamentos = []
    }
    addLançamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lançamento('salario', 45000)
const contaDeLuz = new Lançamento('luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())