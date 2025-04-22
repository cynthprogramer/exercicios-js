//Exercicio 1)
/*
var idade = parseInt(prompt('Qual sua idade?'));
 if (idade >=0 && idade <15){
    document.write('VC É CRIANÇA!!! SAIA DA INTERNET!!')
 }
 else if (idade >=15 && idade <30){
    document.write('Olá, jovem! Como vai? Bem vindo a internet.')
 }
 else if (idade >= 30 && idade <60){
    document.write('Olá, sr.Adulto, como vai a familia?')
 }


else if (idade >=60){
    document.write('Olá, sr.Idoso! Como vc entrou aqui?')
}
*/

//Exercicio 2)
/*
var nome = prompt('Digite seu nome:');
var altura = parseFloat(prompt('Digite sua altura em centimetros:'));
var peso = parseFloat(prompt('Digite seu peso em KG:'));

//altura em metros
altura = parseFloat(altura/100);

function calculo_IMC(){
    var massa = peso/(altura*altura);
    document.write('Olá ' + nome + ', sua massa corporal equivale a  ' + massa.toFixed(2));
}

calculo_IMC();
*/

//Exercicio 3)
/* var altura = parseFloat(prompt('Digite sua altura em centimetros:'));
var peso = parseFloat(prompt('Digite seu peso em KG:'));

//altura em metros
altura = parseFloat(altura/100);

function calculo_IMC(){
    var massa = peso/(altura*altura);
    if(massa < 16){
        document.write(massa.toFixed(2) + ' baixo peso muito grave');
    }
    else if (massa >= 16 && massa <= 16.99){
        document.write(massa.toFixed(2) + ' baixo peso grave');
    }
    else if(massa >= 17 && massa <= 18.49){
        document.write(massa.toFixed(2) + ' baixo peso');
    }
    else if(massa >= 18.50 && massa <= 24.99){
        document.write(massa.toFixed(2) + ' peso normal');
    }
    else if(massa >= 25 && massa <= 29.99){
        document.write(massa.toFixed(2) + ' sobrepeso');
    }
    else if(massa >= 30 && massa <= 34.99){
        document.write(massa.toFixed(2) + ' obesidade grau I');
    }
    else if(massa >= 35 && massa <= 39.99){
        document.write(massa.toFixed(2) + ' obesidade grau II');
    }
    else {
        document.write(massa.toFixed(2) + ' obesidade grau III');
    }
      
}

calculo_IMC();
*/

//Exercicio 4)
var nome = prompt('Digite seu nome:');
var altura = parseFloat(prompt('Digite sua altura em centimetros:'));
var peso = parseFloat(prompt('Digite seu peso em KG:'));
var classicacao = "";

//altura em metros
altura = parseFloat(altura/100);

function calc_imc(){
   var massa = peso/(altura * altura);

   if(massa < 16) {
    classicacao = "Baixo peso muito grave";
    }
    else if (massa >= 16 && massa <= 16.99) {
        classicacao = "Baixo peso grave";
    }
    else if(massa >= 17 && massa <= 18.49) {
        classicacao = "Baixo peso";
    }
    else if(massa >= 18.50 && massa <= 24.99) {
        classicacao = "Peso normal";
    }
    else if(massa >= 25 && massa <= 29.99){
        classicacao = 'sobrepeso';
    }
    else if(massa >= 30 && massa <= 34.99){
        classicacao = 'obesidade grau I';
    }
    else if(massa >= 35 && massa <= 39.99){
        classicacao = 'obesidade grau II';
    }
    else {
        classicacao = 'obesidade grau III';
    }
    document.write(nome + ' possui índice de massa corporal igual a  '  + massa.toFixed(2) + ', sendo classificado como: ' + classicacao);
}

calc_imc();