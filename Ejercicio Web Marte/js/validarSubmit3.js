// Función para mostrar el error
function mostrar_error(texto_error)
{
    // Obtener el párrafo donde mostrar el error.
    let error = document.getElementById("error");
    error.innerHTML=texto_error;
} 
 
// Función para validadr input's del formulario
function validarFormulario(){
    //Validar select

     let vRegion=document.getElementById("region");
     if( vRegion.selectedIndex == null || vRegion.selectedIndex == 0 ) {
         mostrar_error("Debe seleccionar una región"); // Llama a la función mostrar error 
         vRegion.focus(); // envía el foco al campo que ha dado error.
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
        mostrar_error("Debe seleccionar si es particular o profesional");
        return false;
    }

    /* validar checkbox*/
    let  checkAcepto = document.getElementById("acepto");
    if( !(checkAcepto.checked) ) {
      mostrar_error("Debe aceptar las condiciones")
      return false;
    }

}


