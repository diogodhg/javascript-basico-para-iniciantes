/* Aritméticos + - * / 
+ Adição ou Concatenação (concatenação seria unir 2 valores como no exemplo de 510 tem que colocar o "")
* se colocar dois ** faz potenciação
o % resto da divisão
incremento = ++
decremento = --
operadores de atribuição += *= -=
*/
const num1 = "5";
const num2 = 10;
console.log(num1 + num2);

const num3 = 2;
const num4 = 10;
console.log(num3 ** num4);

const num5 = 10;
const num6 = 5;
console.log(num5 % num6);

//exemplo de código para somar//
const num7 = 5;
const num8 = 2;
const num9 = 10;
console.log((num7 + num8) * num9);

let contador = 1;
++contador; // 2
++contador; // 3
++contador; // 4
console.log(contador);

let contador2 = 1;
contador2++; //
contador2++; //
contador2++; //
contador2++; //
console.log(contador2);

const passo = 2; //fica pulando de 2 em 2, são operadores de atribuição//
let contador3 = 0;
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);

let contador4 = 0; //outra forma de fazer a parte de cima
contador4 += 2;
contador4 += 2;
console.log(contador4);

let contador5 = 2
contador5 *= 2;
contador5 *= 2;
console.log(contador5);

let contador6 = 2
contador6 **= 10;
console.log(contador6);

//transformar o ('5') em números, tem 3 formas
const num10 = 10;
const num11 = parseInt('5'); 
console.log(num10 + num11);

const num12 = 10;
const num13 = parseFloat('5.2');
console.log(num12 + num13);

const num14 = 10;
const num15 = Number('5.2');
console.log(num14 + num15);

const num16 = 10;
const num17 = Number('5');
console.log(num16 + num17);