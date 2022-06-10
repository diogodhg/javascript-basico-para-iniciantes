function getDiaSemanaTexto3(diaSemana3) {
    let diaSemanaTexto3; // aqui usa let para poder alterar o valor das variavel com as condições

    switch (diaSemana3) {
        case 0:
            diaSemanaTexto3 = 'Domingo';
            return diaSemanaTexto3;
        case 1:
            diaSemanaTexto3 = 'Segunda';
            return diaSemanaTexto3;
        case 2:
            diaSemanaTexto3 = 'Terça';
            return diaSemanaTexto3;
        case 3:
            diaSemanaTexto3 = 'Quarta';
            return diaSemanaTexto3;
        case 4:
            diaSemanaTexto3 = 'Quinta';
            return diaSemanaTexto3;
        case 5:
            diaSemanaTexto3 = "Sexta";
            return diaSemanaTexto3;
        case 6:
            diaSemanaTexto3 = 'Sábado';
            return diaSemanaTexto3;
    }
}
const data = new Date('1998-01-11');
const diaSemana3 = data.getDay();
const diaSemanaTexto3 = getDiaSemanaTexto3(diaSemana3);
console.log(diaSemana3, diaSemanaTexto3);



const data2 = new Date('1987-04-02');
let diaSemana2 = data2.getDay();
let diaSemanaTexto2;

switch (diaSemana2) {
    case 0:
        diaSemanaTexto2 = 'Domingo';
        break;
    case 1:
        diaSemanaTexto2 = 'Segunda';
        break;
    case 2:
        diaSemanaTexto2 = 'Terça';
        break;
    case 3:
        diaSemanaTexto2 = 'Quarta';
        break;
    case 4:
        diaSemanaTexto2 = 'Quinta';
        break;
    case 5:
        diaSemanaTexto2 = 'Sexta';
        break;
    case 6:
        diaSemanaTexto2 = 'Sábado';
        break;
    default:
        diaSemanaTexto2 = '';
}
console.log(diaSemana2, diaSemanaTexto2);

const data1 = new Date('1987-04-06');
let diaSemana1 = data1.getDay();
let diaSemanaTexto1;

if (diaSemana1 === 0) {
    diaSemanaTexto1 = 'Domingo';
} else if (diaSemana1 === 1) {
    diaSemanaTexto1 = 'Segunda';
} else if (diaSemana1 === 2) {
    diaSemanaTexto1 = 'Terça';
} else if (diaSemana1 === 3) {
    diaSemanaTexto1 = 'Quarta';
} else if (diaSemana1 === 4) {
    diaSemanaTexto1 = 'Quinta';
} else if (diaSemana1 === 5) {
    diaSemanaTexto1 = 'Sexta';
} else if (diaSemana1 === 6) {
    diaSemanaTexto1 = 'Sábado'
} else {
    diaSemanaTexto1 = '' // este else serve para se nenhum dai da semana não cair até o 6, aparercer apenas os ''//
}
console.log(diaSemana1, diaSemanaTexto1);

