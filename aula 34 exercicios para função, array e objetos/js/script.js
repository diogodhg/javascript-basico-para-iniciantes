function meuEscopo () {
    const form = document.querySelector('.form'); // (é obrigatorio colocar o .form)este código serve para selecionar a class form action="form" no index.//
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // este fica vazio pois quem vai preencher é os dados digitados como nome etc//

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);//

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;

    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo ();