
/**
 * 
 * @param {string} carta El identificador de la carta asignada al jugador
 * @returns {string} El valor numérico de la carta
 */
export const valorCarta = (carta) => {
    if( !carta ) throw new Error('La carta es requerida');

    const valor = carta.substring(0,carta.length-1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : Number(valor);
};

// export default valorCarta;
