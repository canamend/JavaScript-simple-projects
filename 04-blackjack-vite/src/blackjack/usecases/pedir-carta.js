/**
 * 
 * @param {array<string>} deck contiene el deck menos las cartas que se encuentran en el juego
 * @returns {string} retorna el string de la carta que fue extraída del deck
 */
export const pedirCarta = (deck) => {
    if( !deck || deck.length === 0 ){    
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}

// export default pedirCarta;