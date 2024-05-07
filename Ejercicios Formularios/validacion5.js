function validar5(){

let validarNombre = document.getElementById("nombre").value;
if ( validarNombre == null || validarNombre.length == 0 || /^\s+$/.test(validarNombre) ){
    alert("El campo nombre es obligatorio")
    return false;
}

let validarTelefono = document.getElementById("telefono").value;
if ( !(/^\d{9}$/.test(validarTelefono))){
    alert("El campo telefono es obligatorio")
    return false;
}
    return true;
}