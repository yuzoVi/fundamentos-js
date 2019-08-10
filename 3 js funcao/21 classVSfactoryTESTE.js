function pessoa(nome){ // funcao construtora
  this.nome = nome
  this.falar = () => console.log("oi, meu nome é " + this.nome)

}

const victor = new pessoa('victor')
victor.falar()
