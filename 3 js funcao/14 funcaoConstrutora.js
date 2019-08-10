function carro(velocidadeMaxima =200, delta = 5){  //serve   como uma classe
//atributo privado
    let velocidadeAtual = 0
//metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual = velocidadeAtual+delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

//metodo público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
 }

 const uno = new carro()  //instanciando um objeto á partir de uma "classe"
 uno.acelerar()
 console.log(uno.getVelocidadeAtual())

 const ferrari = new carro(350, 20) //instanciando um objeto á partir de uma "classe"
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.getVelocidadeAtual())