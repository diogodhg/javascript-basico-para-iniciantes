// Neste caso como o if estava no maximo até o número 5, pois o if estava com a função de verdade, como que deu falso apareceu a mensagem do else
// if Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// else Se não faça isso {o código}
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else {
    console.log('O número não está entre 0 e 5')
}
const numero2 = 5
if (numero2 >= 0 && numero2 <=5) {
    console.log('O número está entre 0 e 5.');
} else if (numero2 >= 6 && numero2 <= 8){
    console.log('O número está entre 6 e 8.');
} else if (numero2 >= 9 && numero2 <= 11) { // aqui deu verdadeiro, com isso o else não foi executado.
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}