/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924 */
const nome = "Luiz Otávio" ;
const sobrenome = "Miranda" ;
const idade = 30;
const peso = 84;
const peso2 = 90;
const altura2= 1.90;
const altura = 1.80;
// exercicio é descobrir o imc formula : peso / (altura * altura) e descobrir o ano de nascimento//
//Minha solução//
//let imc = peso / (altura * altura);//
let anoNascimento = 2022 - idade ;
console.log(anoNascimento);

//resolução do professor //
//usei o ${imc2.toFixed(2)} para arredondar o imc com 2 casas decimais
//colocando o `${nome}` serve para dar espaço//
imc = peso / (altura * altura) ; 
imc2 = peso2 / (altura2 * altura2);
console.log(`tem, ${altura2}, de altura e seu IMC é de, ${imc2.toFixed(2)}`);
anoNascimento = 2022 - idade ;
console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem, ${altura}, de altura e seu IMC é de, ${imc}`);
console.log(`${nome} ${sobrenome}, nasceu em ${anoNascimento}.`);