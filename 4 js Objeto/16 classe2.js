class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = ' professor') {
        super(sobrenome)
        this.profissão = profissão   
    }
}

class Filho extends Pai {
    constructor() {
        super("silva")
    }
}

const victor = new Filho()
console.log(victor)

const luciano = new Pai()
console.log(luciano)