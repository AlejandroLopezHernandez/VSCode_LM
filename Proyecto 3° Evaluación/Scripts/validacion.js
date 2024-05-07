function validar_formulario_viajes1(){

    let validar_lista = document.getElementById("opciones_paises").selectedIndex;
    if  ( validar_lista == null || validar_lista == 0 ){
        alert("Debe seleccionar un país de la lista")
        return false;
    }

    let validar_monumento = document.getElementById("monumento").value;
    if (validar_monumento == null || validar_monumento == 0 || /^\s+$/.test(validar_monumento)){
        alert("Debe escribir al menos un monumento")
        return false;
    }
    let validar_comida = document.getElementById("comida").value;
    if (validar_comida == null || validar_comida == 0 || /^\s+$/.test(validar_comida)){
        alert("Debe escribir al menos una comida")
        return false;
    } 
    let fechainput = document.getElementById("fecha").value;
    let fecha_seleccionada = new Date(fechainput);
    let fecha_actual = new Date();
    if (fecha_seleccionada.getTime() >= fecha_actual.getTime()){
        alert("La fecha seleccionada tiene que estar en pasado, no futuro")
        return false;
    }
    return true;
}

function validar_formulario_viaje2(){
    
    let validar_nombre = document.getElementById("nombre").value;
    if (validar_nombre == null || validar_nombre <= 3 || /^\s+$/.test(validar_nombre)){
        alert("El campo nombre es obligatorio")
        return false;
    }

    let validar_apellidos = document.getElementById("apellidos").value;
    if (validar_apellidos == null || validar_apellidos <= 3 || /^\s+$/.test(validar_apellidos)){
        alert("Debe escribir al menos un apellido")
        return false;
    }

    /*let validaremail = document.getElementById("email").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(validaremail)) ){
        return false;*/

    let validar_tel = document.getElementById("phone").value;
    if ( !(/^\d{9}$/.test(validar_tel))){
        alert("El campo teléfono es obligatorio")
        return false;
    }    
        return true;
}


  