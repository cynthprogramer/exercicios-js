function calculoArea(){
    var span = document.getElementById('resultado');
    var comprimtento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var area = largura*comprimtento;
    span.innerHTML=' A área é de ' + area + ' m²';

}


