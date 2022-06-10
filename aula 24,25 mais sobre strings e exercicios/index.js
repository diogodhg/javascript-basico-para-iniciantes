let umaString = "Um \"texto\""; //let umaString = "Um \"texto\""; colocando \ com " serve para colocar algum texto dentro dos aspas.
let umaString2 = "Um \\texto"; //let umaString2 = "Um \\texto"; colocando duas \\ serve para umas das 2 \ aparecer //
let umaString3 = "Um texto" //console.log(umaString3[4]); serve para escolher a letra de número quatro que seria a letra E //
let umaString4 = "O rato roeu a roupa do rei de roma";


console.log(umaString); 
console.log(umaString2);
console.log(umaString3[4]); 
console.log(`${umaString3} em um lindo dia.`); // concatenação para dar espaço
console.log(umaString4.replace(/r/g, "#"));// serve para substituir a letra r por # detalhe precisa colocar a letra g depois do / para funcionar //