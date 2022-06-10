const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {// o this represta o const pessoa1
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); 
    }
};
pessoa1.fala();
/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 35);
const pessoa3 = criaPessoa('João', 'Moreira', 30);
const pessoa4 = criaPessoa('Junior', 'Lara', 21);
const pessoa5 = criaPessoa('Jean', 'Otávio', 10);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
*/

/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;
console.log(nome01, sobrenome01, idade01);
const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;
console.log(nome02, sobrenome02, idade02);
*/

/*let array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra';
console.log(array); mexeu no array e o resultado apareceu só Outra
*/
/*const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra';
console.log(array); da erro no array = 'Outra' pois está sendo usado no começo, já a do luiz da certo pq tem o [0].
*/