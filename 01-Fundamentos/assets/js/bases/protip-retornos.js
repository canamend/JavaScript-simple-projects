
// function persona( nombre, apellido ){
//     return {
//         nombre,
//         apellido
//     }
// }

const persona = (nombre, apellido) => ({nombre, apellido});

const imprimeArgumentos = ({nombre, apodo, vivo, edad, reino, hermanos, padre = 'Twin Lannister'}) => {
    console.log({nombre});
    console.log({apodo});
    console.log({padre});
    console.log({vivo});
    console.log({edad});
    console.log({reino});
    console.log({hermanos});
    console.log({padre});
};

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
console.log( persona('Isaac', 'Canalizo') );
// const [nombre, edad, genero, vivo] = imprimeArgumentos('Isaac', 20, 'Male', true);
// console.log({nombre, edad, genero, vivo});

const {apellido} = persona('Isaac', 'Canalizo')

imprimeArgumentos(personaje);