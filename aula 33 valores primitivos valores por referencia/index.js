/* dados Referencia (mutável) - array, object, function - Passado por referencia*/
/* dados Primitivos (imutáveis) - string, number boolean, undefined,
null bigint, symbol) - Valores copiados*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;
//const b = {...a}; // para b ter o seu proprio valor e não pegar de referencia do a
a.nome = 'João';
console.log(a);
console.log(b); // neste caso o b tem o valor de a, por isso está o nome João se quiser resolver isso, fazer const b = {...a};

/* exemplo de copiar a primeira parte do let a let b
let a = [1 , 2, 3];
let b = [...a]; // esse ...a serve para o b copiar o a
let c = b;
console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
*/
/* exemplo de referencia
let a = [1 , 2, 3];
let b = a; // neste caso o b está referenciando o a na memória ou seja o b aponta o mesmo valor que o a
let c = b;
console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
*/
/*let nome ='Luiz'; // Luiz é o valor
nome[0] = 'R';
console.log(nome[0], nome); exemplo de imutável*/
/*
let a = 'A';
let b = a; // basicamente está copiando o resultado do let a
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); neste caso o b mante o seu valor */