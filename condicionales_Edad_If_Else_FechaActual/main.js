let edad = prompt('Por favor digite la edad de la persona')

if(edad<0){
    console.warn(`Dato no válido. Ha digitado ${edad} años (número menor que cero).`);
}else if(edad<18){
    console.log(`Ha digitado ${edad} años. La persona es MENOR de edad.`)
}else if(edad<125){
    console.log(`Ha digitado ${edad} años. La persona es MAYOR de edad.`)
}else{
    console.warn(`Posible dato errado. Ha digitado ${edad} años (La persona más longeva de la historia tenía 122 años).`);
}