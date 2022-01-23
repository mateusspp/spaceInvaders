// Exemplo de uma calculadora do IMC feita apenas com JS.


class Pessoa {
    constructor (nome, altura, peso) {
        this.nome = nome,
        this.altura = altura,
        this.peso = peso  
    }
}


const pessoa = new Pessoa ("Pietro", 1.95, 85);


let imc = pessoa.peso / Math.pow(pessoa.altura, 2); 


console.log(`Indivíduo ${pessoa.nome}, sua altura é ${pessoa.altura}, seu peso é ${pessoa.peso}, então seu imc é: ${imc} .`)


