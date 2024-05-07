function validarFormulario(){


    let vApellido=document.getElementById('apellidos').value
    if(vApellido == null || vApellido.length <= 2 || /^\s+$/.test(vApellido) ){
        alert("El apellido no puede ser vacio o blanco, y tener más de dos caracteres")
        return false;
    }

    //Validar select
    
    if( document.getElementById("ciudad").selectedIndex == null || document.getElementById("ciudad").selectedIndex == 0 ) {
        alert("Seleccione una ciudad")
        return false;
        }

    /* validar checkbox*/
        let  checkSi = document.getElementById("informacionSi");
        let  checkNo = document.getElementById("informacionNo");
        if( !(checkSi.checked)  && !(checkNo.checked) ) {
            alert("Seleccione si va a desear o no el envío de información adicional")
            return false;
        }

    /*validar radio-button*/
        let opciones = document.getElementsByName("pregunta");
        let seleccionado = false;
        for(let i=0; i<opciones.length; i++) {
            if(opciones[i].checked) {
                seleccionado = true;
                break;
            }
        }
        if(!seleccionado) {
        alert("Seleccione un rango de edad")
        return false;
        }

}


