import _ from 'underscore';

// export const miNombre = 'Isaac';

 // * Esta función crea una nueva baraja
 /**
  * 
  * @param {array<string>} tiposDeCarta  Ejemplo: ['H', 'C', 'S', 'D'],
  * @param {array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'K', 'Q'];
  * @returns {array<string>} retorna un nuevo deck de cartas 
  */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if( !tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];
    for( let i = 2; i <= 10; i++){
        for( let tipo of tiposDeCarta){
            deck.push(`${i+tipo}`);
        }
    }
    for( let tipo of tiposEspeciales){
        for( let figura of tiposDeCarta){
            deck.push(tipo+figura)
        }
    }
    return _.shuffle(deck);

};

// export default crearDeck;