/* 
    O js tem alguns tipos de dados para se trabalhar
    Por exemplo:
*/
// String - caracteres alfanúmericos
let string = "Maurício"

// Number - Dados númerais, sendo inteiros e com pontos flutuantes
let number = 8978127921;

// Boolean - São dados lógicos, sendo falso ou verdadeiro
let boolean = false;

// Null - São dados declarados com valor nulu, ou seja, vazio
let nulo = null;
let nuloAlt = "";

// Undefined - São dados declarados sem um valor inicial, nem vazio
let unde = undefined;
let undeAlt;

/* 
    o Symbol é um tipo primitivo no JavaScript, ele é usado para criar valores, 
    funções privadas e até mesmo para interceptar um comportamento padrão de um objeto 
    no JavaScript.
*/
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
Symbol("foo") === Symbol("foo"); // false
typeof Symbol("foo") === "symbol"; // true

/*
    BigIntvalores representam valores inteiros que 
    são muito altos ou muito baixos para serem representados pelo number primitivo 
*/
const intBig = BigInt(9007199254740991);
