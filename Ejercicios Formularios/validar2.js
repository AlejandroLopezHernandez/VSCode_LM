function validar2(){

let validar_nombre = document.getElementById("nombre").value;
if( validar_nombre == null || validar_nombre.length == 0 || /^\s+$/.test(validar_nombre) ){
    return false;
}

let validar_apellido = document.getElementById("apellidos").value;
if ( validar_apellido == null || validar_apellido.length == 0 || /^\s+$/.test(validar_apellido)){
    return false;
}
let validar_direccion = document.getElementById("direccion").value;
if ( validar_direccion == null || validar_direccion.length == 0 || /^\s+$/.test(validar_direccion)){
    return false;
}
let validar_sexo = document.getElementById("mujer");
if( !validar_sexo.checked ){
    return false;
}

let validar_radio = document.getElementsByName("asignatura");
let seleccionado = false;
for (var i=0; i<validar_radio.length;i++ ){
    if (validar_radio[i].checked){
        seleccionado = true;
        break;
    }
}
if (!seleccionado){
    return false;
}
return true;
}