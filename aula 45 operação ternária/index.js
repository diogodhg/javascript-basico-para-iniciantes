// operador ternária é ? o interrogação// o interrogação ? serve para valor verdeiro e valor falso como no exemplo abaixo
const pontuacaoUSuario = 999;

if (pontuacaoUSuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

                             //a condição é o ? valor para verdadeiro, valor para falso //
const pontuacaoUSuario2 = 1000;
const nivelUsuario = pontuacaoUSuario2 >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const pontuacaoUSuario3 = 1000;
const nivelUsuario4 = pontuacaoUSuario3 >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario4 = 'Pink'; // passar a ser a cor pink pois o usuario escolheu esta cor nesta linha se não iria ser corPadrao, 
const corPadrao = corUsuario4 || 'Preta';

console.log(nivelUsuario4, corPadrao);