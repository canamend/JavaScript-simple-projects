// Turno computadota
import { pedirCarta } from "./pedir-carta";
import { agregarCartas } from './agregar-cartas';
import { acumularPuntos } from "./acumular-puntos";
import { determinarGanador } from "./determinar-ganador";

/**
 * 
 * @param {NodeListOf<Element>} divCartas elemto del dom que muestra las cartas
 * @param {Array<Number>} puntosJugadores arreglo de puntuaciones
 * @param {NodeList} puntuaciones arreglo de elementos del dom que hace referencia a las puntuaciones
 * @param {Number} puntosMinimos puntos mínimos que necesita la computadora para ganar
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( divCartas, puntosJugadores, puntuaciones, puntosMinimos, deck ) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');    
    if( !divCartas ) throw new Error('La referencia al div de las cartas es requerido');
    if( !puntosJugadores || !puntuaciones ) throw new Error('Los arreglos de puntuaciones numéricos y referencias del dom son requeridos');

    let puntosComputadora = 0;

    do{
        let carta = pedirCarta(deck);

        acumularPuntos(puntosJugadores, puntuaciones, carta, puntuaciones.length - 1);
        agregarCartas(divCartas, carta, puntuaciones.length-1)

        puntosComputadora = puntosJugadores[puntuaciones.length-1]

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
    
    determinarGanador(puntosJugadores);
};