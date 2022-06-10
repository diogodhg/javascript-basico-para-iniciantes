/*
Operadores lógicos
&& -> AND -> todas as expressões tem que ser verdadeiro ser true ou todas falsa para ser false
|| -> OR -> OU só vai retoranr false se todas forem false, só precisa de 1 expressão verdadeira para todas serem verdadeiras.//
! -> NOT -> NÃO // ele inverte o que está digitado dentro do () exemplso console.log(!false); vai dar positivo
*/
const expressaoAnd = true && true && true && true; // todos tem que ser o mesmo
const expressaoOr = false || false || true || false; // só vai retoranr false se todas forem false.//
console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Diogo';
const senha = "123456";
const vaiLogar = usuario ==='Diogo' && senha ==='123456';
console.log(vaiLogar);


console.log(!true);