import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, agregarCartas, turnoComputadora, acumularPuntos } from './usecases/index';

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
      deck = crearDeck(tiposCarta, especiales);
      btnPedir.disabled = false;
      btnStop.disabled = false;
      for(let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
          puntuaciones[i].innerHTML = 0;
          puntosJugadores[i] = 0;
          divsCartas[i].innerHTML = '';
      }
  };
  
  //eventos
  btnPedir.addEventListener('click', () =>{
      let carta = pedirCarta(deck);
      acumularPuntos(puntosJugadores, puntuaciones, carta, 0);
      
      let puntosJugador = puntosJugadores[0];
      agregarCartas(divsCartas, carta, 0);
  
      if(puntosJugador > 21){
          console.warn('Lo siento, perdiste');
          btnPedir.disabled = true;
          btnStop.disabled = true;
          turnoComputadora(divsCartas, puntosJugadores, puntuaciones, puntosJugador, deck);
      } else if( puntosJugador === 21 ){
          btnPedir.disabled = true;
          btnStop.disabled = true;
          turnoComputadora(divsCartas, puntosJugadores, puntuaciones, puntosJugador, deck);
          console.warn('21, ¡Genial!')
      }
  });
  
  btnStop.addEventListener('click', ()=>{
      btnPedir.disabled = true;
      btnStop.disabled = true;
      turnoComputadora(divsCartas, puntosJugadores, puntuaciones, puntosJugadores[0], deck);
  });
  
  btnIniciar.addEventListener('click', ()=>{
      inicializarJuego();
  });

  return {
      iniciar : inicializarJuego
  };
})();
