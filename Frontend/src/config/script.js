function validar(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz.,";
    if(letras.indexOf(teclado) == -1){
        return false;
    }
}