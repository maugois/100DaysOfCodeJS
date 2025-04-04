/* Aqui será estudado conceitos básicos de JavaScript, como variáveis, operadores e
convenções de nomenclatura. */

// Variáveis
/*
--var, let, e const--
São três formas de declarar uma varíavel.
var: Variáveis declaradas com var têm escopo global ou de função;
     Podem ser atualizadas e declaradas novamente dentro de seu escopo; 
     São inicializadas com o valor de undefined;
     Evite usar var a menos que você esteja lidando com código legado que precisa manter.

let: Variáveis declaradas com let têm escopo de bloco;
     Podem ser atualizadas mas não podem ser declaradas novamente dentro de seu escopo;
     Não são inicializadas;
     Use let quando você precisar de uma variável que pode mudar de valor ao longo do tempo.

const: Variáveis declaradas com const não podem ser atualizadas nem declaradas novamente;
       São utilizadas para valores constantes, como o valor de pi, por exemplo;
       Use const para valores que não devem mudar, como configurações ou valores fixos.

    - Operadores aritméticos: +, -, *, /, %
    - Operadores de atribuição: =, +=, -=, *=, /=
    - Operadores de comparação: ==, ===, !=, !==
    - Operadores lógicos: &&, ||, !
    - Operadores de incremento e decremento: ++, --
    - Operadores de atribuição: =, +=, -=, *=, /=
*/
var a = "Maurício";
let b = 21;
const c = 12;

// Operadores
/*
    - Operadores aritméticos: +, -, *, /, %
    - Operadores de atribuição: =, +=, -=, *=, /=
    - Operadores de comparação: ==, ===, !=, !==
    - Operadores lógicos: &&, ||, !
    - Operadores de incremento e decremento: ++, --
    - Operadores de atribuição: =, +=, -=, *=, /=
*/
var y = 20;
let z = x + y;

// Convenções de nomenclatura
/*
    - Nomenclaturas de variáveis: camelCase, snake_case e PascalCase
*/
var firstName = "John";
var LastName = "Doe";
var full_name = firstName + " " + lastName;