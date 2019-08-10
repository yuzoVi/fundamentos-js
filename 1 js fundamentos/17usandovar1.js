{
    {
        {
            {
                var sera = 'sera?'
                console.log(sera)
            }
        }
    }
}

// dentro, ou fora de um bloco ela é global

console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}
teste()

// variavel é global ou dentro de uma função