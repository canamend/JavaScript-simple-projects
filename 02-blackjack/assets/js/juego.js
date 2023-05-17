const modulo = (() => {
    'use strict'
    let deck = [];
    const tiposCarta = ['H', 'C', 'S', 'D'],
          especiales = ['A', 'J', 'K', 'Q'];

    let puntosJugadores = [];

    // * Referencias a elementos HTML
    const btnPedir      = document.querySelector('#btnPedir'),
          btnStop       = document.querySelector('#btnStop'),
          btnIniciar    = document.querySelector('#btnIniciar');

    const divsCartas    = document.querySelectorAll('.divCartas');

    const 
        //   cartasJugador         = document.querySelector('#jugador-cartas'),
        //   cartasComputadora     = document.querySelector('#computadora-cartas'),
          puntuaciones          = document.querySelectorAll('small');
    
    // * Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        btnPedir.disabled = false;
        btnStop.disabled = false;
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
            puntuaciones[i].innerHTML = 0;
            puntosJugadores[i] = 0;
            divsCartas[i].innerHTML = '';
        }
    };

    // * Esta función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        for( let i = 2; i <= 10; i++){
            for( let tipo of tiposCarta){
                deck.push(`${i+tipo}`);
            }
        }
        for( let tipo of especiales){
            for( let figura of tiposCarta){
                deck.push(tipo+figura)
            }
        }
        return _.shuffle(deck);
    
    };
    
    const pedirCarta = () => {
        if( deck.length > 0 )
            return deck.pop();
        else{
            throw ('No hay cartas en el deck');
        }
    }
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0,carta.length-1);
        return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : Number(valor);
    };
    
    const acumularPuntos = ( carta, jugadorEnTurno ) => {
        puntosJugadores[jugadorEnTurno] += valorCarta(carta);
        puntuaciones[jugadorEnTurno].innerHTML = puntosJugadores[jugadorEnTurno];
    };

    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;

        do{
            let carta = pedirCarta();
    
            acumularPuntos(carta, puntuaciones.length - 1);
            agregarCartas(carta, puntuaciones.length-1)

            puntosComputadora = puntosJugadores[puntuaciones.length-1]

        }while((puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
        
        determinarGanador();
    };

    const agregarCartas = ( carta, jugadorEnTurno ) => {
        const nuevaCarta = document.createElement('img');
        nuevaCarta.classList.add('carta');
        nuevaCarta.src = `assets/cartas/${carta}.png`;
    
        divsCartas[jugadorEnTurno].append(nuevaCarta);
    }

    const determinarGanador = () =>{
        setTimeout(() => {

            const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        
            if(puntosComputadora == puntosMinimos){
                alert('Nadie gana');
            }else if(puntosMinimos > 21){
                alert('Computadora gana');
            }else if(puntosComputadora > 21){
                alert('Jugador gana');
            }else {
                alert('Computadora gana');
            }
    
        }, 100); 
    }
    
    //eventos
    btnPedir.addEventListener('click', () =>{
        let carta = pedirCarta();
        acumularPuntos(carta, 0);
        
        let puntosJugador = puntosJugadores[0];
        agregarCartas(carta, 0);
    
        if(puntosJugador > 21){
            console.warn('Lo siento, perdiste');
            btnPedir.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador);
        } else if( puntosJugador === 21 ){
            btnPedir.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador);
            console.warn('21, ¡Genial!')
        }
    });
    
    btnStop.addEventListener('click', ()=>{
        btnPedir.disabled = true;
        btnStop.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });
    
    btnIniciar.addEventListener('click', ()=>{
        inicializarJuego();
    });

    return {
        iniciar : inicializarJuego
    };
})();
