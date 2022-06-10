const verdadeira = true;

// Let tem escopo de bloco {isso é um bloco}//
// Var só tem escopo de função
let nome = 'Luiz'; // aqui criou uma funcão
var nome2 = 'Pedro';

if (verdadeira) {
    let nome = 'Otavio'; // aqui neste bloco foi criado o nome de Otávio, mesmo tendo Luiz no outro, pois este bloco está fechado//
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; //neste caso o console.log procura o let mais proximo que seria desse bloco, se não ele passa para o primeiro bloco, se não achar ele procura fora do bloco.//
        console.log(nome, nome2);
    }
}

