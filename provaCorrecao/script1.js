var x = parseFloat(prompt('digite um numero:'));

function calcular(x){
    if (x > 2){
        return calcular(x - 1);
    } else {
        return x;
    }
}

console.log(calcular(x));