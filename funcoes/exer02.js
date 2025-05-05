function calcular(num01, num02, operacao){
    if (operacao === 'soma'){
       return num01 + num02
    }

    else if(operacao === 'subtração'){
       return num01 - num02
    }

    else{
        return 'operação inválida'
    }
        
}
function execCalculo(){
    var operacao = document.getElementById('operacao').value.toLowerCase();
    var  num01 = parseFloat(document.getElementById('num01').value);
    var num02 = parseFloat(document.getElementById('num02').value);
    var resultado = calcular(num01, num02, operacao);
    
    alert(resultado);
}
