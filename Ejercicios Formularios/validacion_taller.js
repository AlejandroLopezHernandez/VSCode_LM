function validar_taller(){
let validar_nombre = document.getElementById("nombre").value;
if( validar_nombre == null || validar_nombre.length == 0 || /^\s+$/.test(validar_nombre)){
    alert("El campo nombre es obligatorio")
    return false;
}

let validar_matricula = document.getElementById("anyomatricula").value;
if( isNaN(validar_matricula) ){
    return false;
}
let opcion_seguro = document.getElementsByName("seguro");
let seleccionado = false;
for (var i=0; i<opcion_seguro.length;i++ ){
    if(opcion_seguro[i].checked){
        seleccionado = true;
        break;
    }
}
if (!seleccionado){
    alert("Tiene que indicar su tipo de seguro")
    return false;
}

let validar_telefono = document.getElementById("phone").value;
if ( !(/^\d{9}$/.test(validar_telefono))){
    alert("El campo teléfono es obligatorio")
    return false;
}

let opcion_horario = document.getElementsByName("horario");
let seleccionado2 = false;
for (var i=0; i<opcion_horario.length;i++ ){
    if(opcion_horario[i].checked){
        seleccionado2 = true;
        break;
    }
}
if (!seleccionado2){
    alert("Tiene que indicar a qué hora puede llamar")
    return false;
}

let validar_reparacion = document.getElementById("intervencion").selectedIndex;
if ( validar_reparacion == null || validar_reparacion == 0){
    alert("Debe indicar qué tipo de reparación necesita")
    return false;
}
return true;
}
