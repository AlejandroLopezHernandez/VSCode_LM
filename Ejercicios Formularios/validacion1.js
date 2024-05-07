function validar1(){
let validar_nombre = document.getElementById("name").value;
    if( validar_nombre == 0 || validar_nombre.length == null || /^\s+$/.test(validar_nombre)){
        return false;
    }

let validar_apellido = document.getElementById("surname").value;
    if(validar_apellido == 0 || validar_apellido.length == null || /^\s+$/.test(validar_apellido)){
        return false;
    } 

let validar_lista = document.getElementById("sexo").selectedIndex;
if (validar_lista == null || validar_lista == 0){
    return false;
}
return true;
}