
/**
 * 
 * @param {Array<Number>} puntosJugadores arreglo numérico de puntuaciones
 */
export const determinarGanador = ( puntosJugadores ) =>{
    if( !puntosJugadores ) throw new Error('El array de puntuaciones es requerido');
    setTimeout(() => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
    
        if(puntosComputadora == puntosMinimos){
            alert('Nadie gana');
        }else if(puntosMinimos > 21){
            alert('Computadora gana');
        }else if(puntosComputadora > 21){
            alert('Jugador gana');
        }else {
            alert('Computadora gana');
        }

    }, 100); 
}