//               0       1        2       3        4
//const alunos = ['Luiz', 'Maria', 'João']; //Luiza  Eduardo const descreve uma variável que não pode ser reatribuída (com o operador de atribuição //

let alunos = ['Luiz', 'Maria', 'João']; //Luiza  Eduardo
alunos = 123;

console.log(typeof alunos); // serve para ver se é um objeto e objeto é array
console.log(alunos instanceof Array); // serve para ver pertence ao Array


/*alunos.push('Luiza'); 
alunos.push('Eduardo');
console.log(alunos.slice(0, -2)); serve para deletar */

//console.log(alunos[50]); quando não acha nada na memoria aparece undefined //

/*delete alunos [1]; serve para deletar
console.log(alunos);*/

/*const removido = alunos.pop(); serve para remover o ultimo
const removido = alunos.shift(); serve para remover o primeiro
console.log(removido);
console.log(alunos);*/

/*alunos.unshift('Luiza'); // serve para adicionar antes do Luiz ou no começo
console.log(alunos);*/

//alunos.push('Pedro'); // adiciona no fim

/*alunos[alunos] = 'Luiza'; adiciona no fim, outra forma alem de alunos.push
alunos[alunos] = 'Fábio';
alunos[alunos] = 'Luana';
console.log(alunos.length); // serve para contar quantos alunos tem*/

/*console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);*/