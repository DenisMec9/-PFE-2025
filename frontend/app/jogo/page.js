"use client"
import React, { useState } from 'react';
import Rodada from './com/Rodada';
import Placar from './Placar';

function Jogo() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);
  const [vencedor, setVencedor] = useState(null);

  const handleRodadaCompleta = (valorDado1, valorDado2) => {
    if (valorDado1 > valorDado2) {
      setPlacarJogador1(placarJogador1 + 1);
    } else if (valorDado2 > valorDado1) {
      setPlacarJogador2(placarJogador2 + 1);
    }

    if (rodadaAtual < 5) {
      setRodadaAtual(rodadaAtual + 1);
    } else {
      if (placarJogador1 > placarJogador2) {
        setVencedor('Jogador 1');
      } else if (placarJogador2 > placarJogador1) {
        setVencedor('Jogador 2');
      } else {
        setVencedor('Empate');
      }
    }
  };

  return (
    <div>
      <h1>Jogo de Dados</h1>
      {rodadaAtual <= 5 && (
        <Rodada
          jogador1="Jogador 1"
          jogador2="Jogador 2"
          onRodadaCompleta={handleRodadaCompleta}
        />
      )}
      <Placar placarJogador1={placarJogador1} placarJogador2={placarJogador2} />
      {vencedor && <h2>Vencedor: {vencedor}</h2>}
    </div>
  );
}

export default Jogo;