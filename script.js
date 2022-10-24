// Exercicio 01

let num1 = parseInt(prompt("Digite um numero"));
let num2 = parseInt(prompt("Digite um numero"));

let resultado1 = numInt1 - numInt2;
let resultado2 = numInt2 - numInt1;
if(numInt1 > numInt2){
    alert (`o maior numero é ${numInt1} e a diferença é ${resultado1}`);

}else{ 
    alert (`o maior numero é ${numInt2} e diferença é ${resultado2}`);
};


// Exercicio 02

let numIt1 = parseInt(prompt("Digite um numero"));
let numIt2 = parseInt(prompt("Digite um numero"));

if(numInt1 > numInt2){
    alert (`O número ${numInt1} é maior que número ${numInt2}`);

}else if(numInt1 == numInt2){ 
    alert (`Números iguais`);

}else{
    alert(`Resultado Invalido`);
};


// Exercicio 03

let numInt1 = parseInt(prompt("Digite seu sálario"));
let numInt2 = parseInt(prompt("Digite o valor da prestação"));

let result = parseFloat((numInt1 * 30) / 100);
if(result < numInt2 ){

    alert(`Empréstimo não concedido`);

}else if(result > numInt2){
    alert(`Empréstimo concedido`);
};


// Exercicio 04

let valor1 = parseInt(prompt("Digite um número de verificação"));

if(valor1 % 3  == 0 || valor1 % 5 == 0) {
    alert(`Valor inválido`);

}else if(valor1 % 3 == 0){
    alert(`Valor divisível por 3`);
    
}else if (valor1 % 5 == 0) {
    alert(`Valor divisível por 5`);

}else if(valor1 % 2 == 0){
    alert(`É par`);
}


// Exercicio 05


// Exercicio 06

let salario = parseInt(prompt("Digite seu salario"));
let reajusteSalarial = parseInt(prompt("Digite o ajuste do salario"));

let caulculo1 = parseFloat((reajusteSalarial / 5));
let caulculo2 = parseFloat((salario + caulculo1)); 
alert(`O salário do funcionário corrigido é de:${caulculo2}`)




