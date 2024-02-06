
function numberOfLifes (win, lose){
    const scorelifes = win - lose;
    let nivel;
    let mensagem;    
if (scorelifes > 0 && scorelifes < 10) {
   nivel = `Ferro.`;
}else if(scorelifes >= 10 && scorelifes <= 20 ){
   nivel = `Bronze`;    
}else if (scorelifes > 20 && scorelifes <= 50){
   nivel = `Prata.`; 
}else if(scorelifes > 50 && scorelifes <= 80){
    nivel = `Ouro`;
}else if(scorelifes > 80 && scorelifes <= 90){
   nivel = `Diamante.`;
}else if(scorelifes > 90 && scorelifes < 100){
    nivel = `Lendário.`;
}else if(scorelifes >=100){
   nivel = `Imortal`;
}else{
   mensagem = `Seu nivel está a baixo de ${scorelifes}\nvolte a vencer!` 
}
if(nivel){
    mensagem = `Nível do Heroi:${nivel}\nSaldo de vitórias:${scorelifes} `
}
console.log(mensagem)
}


numberOfLifes(90, 40);