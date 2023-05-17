
/**
 * 
 * @param { NodeListOf<Element> } divsCartas elemento div del dom al que se agregaran las cartas
 * @param {String} carta string identificador de la carta
 * @param {Number} jugadorEnTurno identificador numérico del jugador
 */
export const agregarCartas = ( divsCartas, carta, jugadorEnTurno ) => {
    
    if( !carta ) throw new Error('El string de la carta es requerido');
    if( !divsCartas ) throw new Error('La referencia al div de las cartas es requerido');

    const nuevaCarta = document.createElement('img');
    nuevaCarta.classList.add('carta');
    nuevaCarta.src = `assets/cartas/${carta}.png`;

    divsCartas[jugadorEnTurno].append(nuevaCarta);
}