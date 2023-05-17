
const regresaTrue = () => true;

const regresaFalse = () => false;

// ! color, flor, aroma, caricatura, cosa

console.warn("ASIGNACIONES");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo'; //aquí toma el último valor verdadero (la cadena)
const a2 = 'Hola' && 'Mundo' && soyFalso && true; //debido a que hay un valor false, se toma este como el valor (false)
const a3 = soyFalso || 'Ya no soy falso'; // se toma el primer valor verdadero
const a4 = soyFalso || soyUndefined || soyNull || 'Sigo siendo falso' // toda variable inicializada que no es un booleano se toma como verdadera

console.log({a1, a2, a3, a4,})