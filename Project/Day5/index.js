/*
    Nessa parte veremos formas de converter dados, ou seja, mudar seu tipo.
    Exemplo: Booleano para string, string para number e etc.
*/

/*
    Existem duas maneiras, de forma explícita e implícita
*/

// Explícita
// para number
let string = "1234"
let conversionNum = Number(string);
conversionNum = parseFloat(string);
conversionNum = parseInt(string); 

// para string
let num = 1234;
let conversionString = num.toString();
conversionString = num.toString(2); // esse dois no final, evidencia a base númerica, no caso binária
// array para string
let arr = [ "Tok", "Digital" ];
let str = arr.toString();

// booleno para string
let bool = true;
str = bool.toString();


// Implícita
// A conversão implícita ocorre quando o compilador atribui automaticamente os tipos de dados
let int = 5 + 2.0; // o float 2.0 será implicitamente convertido para integer