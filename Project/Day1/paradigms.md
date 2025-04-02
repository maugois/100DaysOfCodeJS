## Paradigmas de Programação Suportados pelo JavaScript
JavaScript é uma linguagem multiparadigma, o que significa que ela suporta diferentes estilos de programação. Os principais paradigmas que o JavaScript permite são:

# 1. Paradigma Imperativo
## 📌 Definição
O paradigma imperativo foca em como uma tarefa deve ser realizada, usando uma sequência de instruções para manipular o estado do programa.
## ✅ Características
* Uso explícito de variáveis, estruturas de controle (```loops```, ```if-else```) e mutação de estado.
* Código sequencial e estruturado.
## 📝 Exemplo de Código
```js
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total += i;  // Soma números de 1 a 5
    }
    console.log(total); // Saída: 15
```

# 2. Paradigma Declarativo
## 📌 Definição
No paradigma declarativo, descrevemos o que queremos que aconteça, sem especificar como o computador deve fazer isso.
## ✅ Características
* Código mais legível e conciso.
* Uso de funções de alta ordem como ```map()```, ```filter()```, ```reduce()```.
* Evita a mutação de estado.
## 📝 Exemplo de Código
```js
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Saída: 15
```
Aqui, usamos ```reduce()``` para somar os números sem criar loops ou modificar variáveis.

# 3. Paradigma Estruturado
## 📌 Definição
A programação estruturada enfatiza o uso de estruturas de controle (```if```, ```for```, ```while```, ```switch```) para organizar o fluxo do programa.
## ✅ Características
* Uso de blocos (```{}```) para organizar código.
* Evita goto, tornando o código mais previsível.
## 📝 Exemplo de Código
```js
    function verificaIdade(idade) {
        if (idade >= 18) {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
    }
    verificaIdade(20); // Saída: Maior de idade
```

# 4. Paradigma Funcional
## 📌 Definição
A programação funcional trata funções como valores de primeira classe e evita mutação de estado.
## ✅ Características
* Funções puras (sem efeitos colaterais).
* Uso de funções de alta ordem (```map()```, ```reduce()```, ```filter()```).
* Imutabilidade (não modifica variáveis originais).
* Uso de currying e composição.
## 📝 Exemplo de Código
```js
    const dobrar = num => num * 2;
    const numeros = [1, 2, 3, 4];
    const dobrados = numeros.map(dobrar);
    console.log(dobrados); // Saída: [2, 4, 6, 8]
```
Aqui, ```map()``` aplica a função ```dobrar``` a cada elemento sem alterar o array original.

# 5. Paradigma Orientado a Objetos (OOP)
## 📌 Definição
A programação orientada a objetos organiza o código em objetos, que possuem estado (atributos) e comportamentos (métodos).
## ✅ Características
* Uso de classes e instâncias.
* Encapsulamento (dados privados).
* Herança (reutilização de código).
* Polimorfismo (métodos flexíveis para diferentes tipos de dados).
## 📝 Exemplo de Código
```js
    class Animal {
        constructor(nome) {
            this.nome = nome;
        }
        emitirSom() {
            console.log("Som genérico");
        }
    }

    class Cachorro extends Animal {
        emitirSom() {
            console.log("Au Au!");
        }
    }

    const dog = new Cachorro("Rex");
    dog.emitirSom(); // Saída: Au Au!
```
Aqui, a classe ```Cachorro``` herda de ```Animal``` e sobrescreve (```override```) o método ```emitirSom()```.

# 6. Paradigma Baseado em Prototipagem
## 📌 Definição
Ao contrário das linguagens baseadas em classes, JavaScript usa prototipagem, onde objetos podem ser extendidos dinamicamente.
## ✅ Características
* Em vez de classes, usa protótipos (Object.prototype).
* Permite a herança prototipal.
## 📝 Exemplo de Código
```js
    function Pessoa(nome) {
        this.nome = nome;
    }

    Pessoa.prototype.falar = function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    };

    const maria = new Pessoa("Maria");
    maria.falar(); // Saída: Olá, meu nome é Maria
```
Aqui, ```Pessoa.prototype.falar``` adiciona um método a todos os objetos ```Pessoa```.

# Conclusão
JavaScript é uma linguagem flexível que suporta múltiplos paradigmas, permitindo que os desenvolvedores escolham a abordagem que melhor se adapta ao seu projeto. Ao dominar esses paradigmas, você escreve códigos mais eficientes, reutilizáveis e fáceis de manter. 🚀