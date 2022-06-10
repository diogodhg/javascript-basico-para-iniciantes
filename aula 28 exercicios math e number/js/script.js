const numero = Number(prompt('Digite um número:')); // neste caso o usuario digita o número que vai para o prompt que vai para a função Number e retorna para o numero
/*let numero = prompt('Digite um número:'); se for colocar let, tem que fazer isso para a parte do texto.innerHTML conseguir ler como um número
numero = Number(numero); */
const numeroTitulo = document.getElementById('numero-titulo'); // o getElementById serve para puxar o id do index, numeroTitulo serve para salvar o document na memoria.//
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; //usar o += pois assim adiciona mais coisas no texto.innerHML//

texto.innerHTML = ''; // foi necessario colocar pois o = sozinho ele zera e com isso a palavra texto sumiu
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


