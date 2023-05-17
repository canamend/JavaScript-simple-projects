

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if( dia === 0 || dia === 6){

// if( [6,0].includes( dia )){
//     console.log("Es fin de semana");
//     horaApertura = 9;
// }else{
//     console.log("Día de semana");
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes( dia )) ? 9 : 11 ;

// if( horaActual >= horaApertura){
//     mensaje = "Esta abierto";
// }else {
//     mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura) ? "Esta abierto" : `Está cerrado hoy abrimos a las ${horaApertura}`;

console.log( {horaApertura, mensaje} );