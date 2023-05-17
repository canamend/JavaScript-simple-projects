
let personaje = {
    nombre: 'Tyrion Lannister',
    apodo: 'Imp',
    vivo: true,
    edad: '45',
    reino: {
        origen: 'Westeros',
        destino: 'Volantis'
    },
    hermanos: [
        'Cersei Lannister',
        'Jamie Lannister'
    ]
};


delete personaje.apodo
console.log('Char ', personaje);