// if significa se; else if significa se não, por exemplo o const da hora embaixo//
/* const hora = 12;
if (hora <= 12){
    console.log('Bom dia');
}*/
// Entre 0 - 11 - bom dia. entre 12 - 17 - boa tarde. entre 18 - 23 - boa noite.
// Sempre que utilizo a palavra else, preciso de um if antes
// if pode ser usado sozinho como nesse exemplo abaixo.
const hora2 = 5
if(hora2 >= 0 && hora2 <=11){
    console.log('Bom dia');
}


const hora = 12;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}
// Podemos usar condições sem else if, utilizando apenas if e else
// Só posso ter else na checagem exemplo abaixo
const tenhoGrana = true; // aqui chega se for verdadeiro, como é verdadeiro eu vou sair de casa, mas se colocar false ou NaN o else funciona.
if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não sair de casa')
}

const hora3 = 50;
if (hora3 >= 0 && hora3 <= 11) {
    console.log('Bom dia');
} else if (hora3 >= 12 && hora3 <= 17) {
    console.log('Boa tarde');
} else if (hora3 >= 18 && hora3 <= 23){
    console.log('Boa noite');
} else {
    console.log('Olá');
}