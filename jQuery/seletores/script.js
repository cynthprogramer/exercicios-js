/*Usando JQuery, adicione uma classe às linhas pares e
outra classe às linhas ímpares da tabela.*/

$(document).ready(function(){
    $('table tr:even').addClass('table2');
    $('table tr:odd').addClass('table3');
});