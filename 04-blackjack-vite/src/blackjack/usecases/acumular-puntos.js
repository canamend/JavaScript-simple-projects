import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosJugadores arreglo de puntuaciones
 * @param {String} puntuacionesHTML arreglo de elementos del dom que hace referencia a las puntuaciones
 * @param {String} carta cadena identificadora de la carta
 * @param {Number} jugadorEnTurno numero identificador del turno de determinado jugador  
 */
export const acumularPuntos = ( puntosJugadores, puntuacionesHTML, carta, jugadorEnTurno ) => {
    if( !puntosJugadores || !puntuacionesHTML ) throw new Error('Los arreglos de puntuaciones numéricos y referencias del dom son requeridos');
    if( !carta ) throw new Error('El string de la carta es requerido');
    // if (!jugadorEnTurno) throw new Error('El identificador del jugador en turno es requerido');
    puntosJugadores[jugadorEnTurno] += valorCarta(carta);
    puntuacionesHTML[jugadorEnTurno].innerHTML = puntosJugadores[jugadorEnTurno];
};
