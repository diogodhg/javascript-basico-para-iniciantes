// data é um funcão construtura
const tresHoras = 60 * 60 * 3 * 1000;
const data3 = new Date(0 + tresHoras);
console.log(data3.toString());

const umDia = 60 * 60 * 24 * 1000;
const data2 = new Date(0 + tresHoras - umDia); //isso retira um dia
console.log(data2.toString());

//                    ano   mês dia hora minutos segundos milésimo de segundos
const data = new Date(2022, 0, 19, 20, 10, 5, 999);
console.log(data.toString());

const data4 = new Date('2022-05-20 20:20:59')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começo do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - domingo, 6 é sábado
console.log(data4.toString())

function zeroAEsquerda (num) { // esse codigo é para aparecer o 0 na frente do 9//
    return num >= 10 ? num : `0${num}`; // o motivo de colocar o 10 é que se for maior ou igual a 10 vai ter um 0 na frente//
}

function formataData(data) {
    const dia = zeroAEsquerda(data5.getDate())
    const mes = zeroAEsquerda(data5.getMonth() + 1)
    const ano = zeroAEsquerda(data5.getFullYear())
    const hora = zeroAEsquerda(data5.getHours())
    const min = zeroAEsquerda(data5.getMinutes())
    const seg = zeroAEsquerda(data5.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data5 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);