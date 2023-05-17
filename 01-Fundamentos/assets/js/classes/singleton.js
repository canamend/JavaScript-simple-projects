class Singleton {
    static instancia; //undefined
    nombre = '';

    constructor( nombre = '' ){
        if( !!Singleton.instancia ){ //la doble negación permite devolver false sin necesidad de hacer una comparación con null
            return Singleton.instancia
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman')

console.log(instancia1);
console.log(instancia2);
