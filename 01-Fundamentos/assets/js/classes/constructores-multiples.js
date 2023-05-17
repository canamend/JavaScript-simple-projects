
class Persona {
    
    static porObjeto({ nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor( nombre, apellido, pais) {
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }

    getInfo() {
        console.log(`info: nombre ${this.nombre}, apellido: ${this.apellido}, pais: ${this.pais}`);
    }

}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1      = 'Honduras';

const persona1 = new Persona( nombre1, apellido1, pais1);

persona1.getInfo();

const isaac = {
    nombre:     'Isaac',
    apellido:   'Canalizo',
    pais:       'Mexico'
}

const persona2 = Persona.porObjeto(isaac);

persona2.getInfo();