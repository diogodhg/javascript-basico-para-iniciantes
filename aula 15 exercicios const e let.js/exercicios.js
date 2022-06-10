/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924 */
const nome = "Luiz Otávio" ;
const sobrenome = "Miranda" ;
const idade = 30;
const peso = 84;
const altura = 1.80;
// exercicio é descobrir o imc formula : peso / (altura * altura) e descobrir o ano de nascimento//
//let imc = peso / (altura * altura);//
//resolução do professor //

//colocando o `${nome}` serve para dar espaço//
imc = peso / (altura * altura) ; 

anoNascimento = 2022 - idade ;
console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem, ${altura}, de altura e seu IMC é de, ${imc}`);
console.log(`${nome} ${sobrenome}, nasceu em ${anoNascimento}.`);