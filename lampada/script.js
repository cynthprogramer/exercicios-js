var lamp = document.getElementById("lampada");
var liga_desliga = false; 

function ligar_lampada() {
    if (liga_desliga) {
        lamp.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        liga_desliga = false;
    } else {
        lamp.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        liga_desliga = true;
    }
}
