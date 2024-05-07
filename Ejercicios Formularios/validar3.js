function validar3(){
    let ciclos = document.getElementsByName("ciclo");

    let seleccionado = false;
    for (var i=0; i<ciclos.length; i++){
        if(ciclos[i].checked){
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado){
        return false;
    }
}