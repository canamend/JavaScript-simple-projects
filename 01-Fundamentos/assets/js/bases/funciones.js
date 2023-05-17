

function saludar() {
    console.log('Hola mundo')
}

const saludarCorrecto = function(){
    console.log('Hola mundo');
} //  Correcto

const saludadFecha = () => {
    console.log('Este es un saludo desde una función de flecha');
}

const saludoFlechaCArgumentos = ( nombre ) => {
    console.log(`Hola ${nombre}!, este es un saludo desde una función de flecha`);
}

const getAleatorio2 = () => Math.random();

saludarCorrecto();
saludadFecha();
saludoFlechaCArgumentos( 'Don Pendejo');
console.log(`Aleatorio: ${getAleatorio2()}`)