let varA = 'A'; // tem que virar B
let varB = 'B'; // tem que virar C
let varC = 'C'; // tem que virar A

[varA, varB, varC] = [varB, varC, varA] //solução do professor

console.log(varA, varB, varC);

// solução antiga//
let varAA = 'AA' ; // tem que virar BB
let varBB = 'BB' ; // tem que virar CC
let varCC = 'CC' ; // tem que virar AA

const varAATemp = varAA; // foi necessario colocar o Temp para o varCC conseguir ler o varAA
varAA = varBB;
varBB = varCC;
varCC = varAATemp;

console.log(varAA, varBB, varCC);