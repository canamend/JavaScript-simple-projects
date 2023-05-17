
class Rectangulo {
    #area;
    base;
    altura;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;
        this.calcularArea();
    }

    calcularArea(){
        this.#area = this.altura * this.base;
    }
}

const figura1 = new Rectangulo(10, 15);
console.log(figura1);
