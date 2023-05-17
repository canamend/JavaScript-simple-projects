
class Persona {
    static _conteo = 0;
    static get conteo(){
        return `${Persona._conteo} instancias`
    }
    static mensaje(){
        console.log('Hola, este es un método estático');
    }

    nombre = '';
    clave = '';
    frase = '';
    comida = '';
    constructor( nombre, codigo, frase ) {
        this.nombre = nombre;    
        this.clave = codigo;
        this.frase = frase;
        Persona._conteo += 1;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `mi comida favorita es ${this.comida}`
    }
}

const snow = new Persona('Jon Snow', 'King in the North', 'I know nothing');
snow.setComidaFavorita = 'Emilia Clarke';

console.log(snow);
console.log(snow.getComidaFavorita);
const imp = new Persona('Tyrion Lannister', 'Hand of the Queen', 'That\'s what I do, I drink and I know things');
console.log(Persona.conteo);

Persona.mensaje();
