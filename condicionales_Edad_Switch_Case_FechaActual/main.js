//USANDO EL SWITCH
let edad = prompt('Por favor digite la edad de la persona');

switch(mayor_edad()){
    case '18':
        console.log(`Ha digitado ${edad} años. La persona es mayor de edad.`);
        break;
    default:
        console.log(`Ha digitado ${edad} años. La edad ingresada no cumple con los parámetros`);
        break;
}

function mayor_edad(){
    if(edad >= 18 && edad <= 125){
        return '18';
    }else {
        return '0';
    }
}