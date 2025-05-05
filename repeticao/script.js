//exercicio 1)
/*
var n = 1;
while (n <= 50){
    if (n % 4 == 0) {
        document.write('multiplo');
    }
    else{
        document.write(n);
    }
    document.write('</br>');
    n++
}
*/

//exercicio 2)
var numero = parseInt(prompt('Digite um numero a ser multiplicado'));
var i = 1;
while(i <= 10){
    resultado = numero * i
    document.write( i + 'x' + numero + '=' + resultado + '</br>');
    i++
}

