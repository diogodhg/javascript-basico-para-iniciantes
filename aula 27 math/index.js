let num1 = 9.54578;
let num2 = Math.floor(num1); //arrendonda para baixo
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num3); //arrendonda para cima
console.log(num4);

let num5 = 9.50001;
let num6 = Math.round(num5); // se passar de da metade 0.50 arrendonda para cima
console.log(num6);

let num7 = 9.49999;
let num8 = Math.round(num7); // se ficar abaixo de 0.50 arrendonda para baixo
console.log(num8);

let num9 = 9.77777;
console.log(Math.max(1,2,3,4,5, -10, -50, 1500, 9,8,7,6)); // serve para achar o maior número

let num10 = 9.77777;
console.log(Math.min(1,2,3,4,5, -10, -50, 1500, 9,8,7,6)) // serve para achar o menor número

let num11 = 9.49;
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // serve para gerar um número aleatorio
console.log(aleatorio);

let num12 = 9.49;
console.log(Math.PI);

console.log(Math.pow(2, 10)); // serve para elevar o número
console.log(2 ** 10);

let num13 = 9;
console.log(num13 ** (1/2)); // serve para achar a raiz quadrada

console.log(100/0);

console.log(100/0.10000000000000000000000001);