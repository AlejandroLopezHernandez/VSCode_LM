/*Esta función comprueba cada uno de los campos y devuelve false en caso de que alguno no sea correcto.
Al final devuelve un mensaje de ha habido errores.  
*/
function validarFormulario(){
    /*Variable de tipo booleano que en principio tendrá un valor true(verdadero),
    y que se convertirá en false(falso) cuando la condición no se cumpla*/
    var todo_correcto = true;

    //Valida select
    if( document.getElementById("region").selectedIndex == null || document.getElementById("region").selectedIndex == 0 ) {
        todo_correcto = false;
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
        todo_correcto = false;

        }

    /* validar checkbox*/
    let  checkAcepto = document.getElementById("acepto");
    if( !(checkAcepto.checked) ) {
        todo_correcto = false;
    }

    /*Por último, y como aviso para el usuario, si no está todo bien, es decir, si la variable
    todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo
    al usuario de que algunos datos ingresados no son los que esperamos.*/
    if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }

    return todo_correcto;
}
