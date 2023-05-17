
const elMayor = (a, b) =>  (a > b) ? a : b;

const esMiembro = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares'


console.log(elMayor( 15, 20 ));
console.log(esMiembro(false));

amigo = false;

amigos = [
    'Clari',
    'Rosa',
    'Gama',
    amigo ? 'Chris' : 'Johny',
    (() => 'nick fury')() // ! FUNCIÓN ANONIMA AUTO INVOCADA
]

console.log(amigos);

const nota = 85;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' :
              nota >= 65 ? 'D+' : 'F';

console.log({ nota, grado });


