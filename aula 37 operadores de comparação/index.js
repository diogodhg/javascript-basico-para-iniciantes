/*
operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que o ou igual a
== igualdade (valor) usar o debaixo
=== igualdade estrita (valor e tipo)
!= diferente (valor) usar o debaixo
!== diferente estrito (valor e tipo)
*/
/*const comp = 10 > 5;
console.log(comp); explicando neste caso o 10 é maior que 5 o código diz que é true verdadeiro com essa afirmação, estou usando essa informação no console.log(comp); */

const num1 = 10; // number
const num2 = '10' // string
const comp = num1 === num2;
console.log(comp); // da false pq o num2 é string, se for um número vai dar true

const num3 = 10;
const num4 = '10';
const comp2 = num3 !== num4; // da true pq esse sinal !== checa tanto o tipo e o valor se for 2 número da false pq não são diferente
console.log(comp2);