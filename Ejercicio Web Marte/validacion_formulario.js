function validar_formulario(){
    let validad_mail = document.getElementById("email").value;
    if (validad_mail ==null || validad_mail.length ==0 || /^\s+$/.test(validad_mail) ){
        return false;
    }
    
    let validar_nombre = document.getElementById("nombre_y_apellidos").value;
    if (validar_nombre == null || validar_nombre.length == 0 || /^\s+$/.test(validar_nombre) ){
        return false;
    }

    let validar_lista = document.getElementById("ccaa").selectedIndex;
    if (validar_lista == null || validar_lista == 0 || validar_lista =="seleccionar")
    return false;

    let validar_telefono = document.getElementById("tel").value;
    if( !(/^\d{9}$/.test(validar_telefono))){
        return false;
    }
    let validar_condiciones = document.getElementById("aceptar");
    if ( !validar_condiciones.checked ){
        return false;
    }
    return true;
    }



