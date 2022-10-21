// Exercicio 01

let numInt1 = parseInt(prompt("Digite um numero"));
let numInt2 = parseInt(prompt("Digite um numero"));

let resultado1 = numInt1 - numInt2;
let resultado2 = numInt2 - numInt1;
if(numInt1 > numInt2){
    alert (`o maior numero é ${numInt1} e a diferença é ${resultado1}`);

}else{ 
    alert (`o maior numero é ${numInt2} e diferença é ${resultado2}`);
};