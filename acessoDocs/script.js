function limpar(){
    var divTabela = document.getElementByIdById('divTabela');
    divTabela.innerHTML="";
};

function IniciarCriacaoTabela(){
    limpar();
    var numLinhas = parseInt(document.getElementById('linha').value)
    var numColunas = parseInt(document.getElementById(coluna).value)
    var tabela = criarTabela(numLinhas, numColunas);
    var divTabela = document.getElementById('divTabela');
    divTabela.appendChild(tabela);
}

function criarTabela(numLinhas, numColunas){
    var tabela = document.createElement('table')
    table.setAttribute('border', '1');
	tabela = criarLinhas(table, numLinhas, numColunas);
	return tabela;
}

function criarLinhas(table, numLinhas, numColunas){
    for (var i = 1; i<numLinhas; i++){
        var tr = document.createElement('tr');
        tr = criarColuna(tr, numColunas);
        tabela.appendChild(tr);
    }
    return tabela;
}