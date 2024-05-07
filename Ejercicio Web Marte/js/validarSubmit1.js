//Esta función devuelve un mensaje por cada campo que no cumple la condición. Si encuentra algún error no continúa con la siguiente validación.

function validarFormulario(){
    //Validar select
   
    if( document.getElementById("region").selectedIndex == null || document.getElementById("region").selectedIndex == 0 ) {
        alert("Seleccionar una region")
        return false;
        }

    // Seleccionar si es particular o profesional  

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
        alert("Seleccionar si es particular o profesional")
        return false;
        }

    /* validar checkbox*/
    let  checkAcepto = document.getElementById("acepto");
    if( !(checkAcepto.checked) ) {
    alert("Aceptar condiciones")
    return false;
    }

}


