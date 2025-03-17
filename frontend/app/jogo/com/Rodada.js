import React, { useState } from 'react';
import Dado from './Dado';

function Rodada({ jogador1, jogador2, onRodadaCompleta }) {
  const [valorDado1, setValorDado1] = useState(null);
  const [valorDado2, setValorDado2] = useState(null);
  const [jogadorAtivo, setJogadorAtivo] = useState(1); // 1 para Jogador 1, 2 para Jogador 2

  const rolarDado = () => {
    if (jogadorAtivo === 1) {
      setValorDado1(Math.floor(Math.random() * 6) + 1);
      setJogadorAtivo(2);
    } else {
      setValorDado2(Math.floor(Math.random() * 6) + 1);
      setJogadorAtivo(1);
      onRodadaCompleta(valorDado1, valorDado2);
    }
  };

  const botaoDesabilitado = (jogador) => {
    if (jogador === 1) {
      return jogadorAtivo !== 1 || valorDado1 !== null;
    } else {
      return jogadorAtivo !== 2 || valorDado2 !== null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h3>{jogador1}</h3>
        {valorDado1 !== null ? <Dado valor={valorDado1} /> : <button style={{ backgroundColor: 'black', color: 'white' }} onClick={rolarDado} disabled={botaoDesabilitado(1)}>Rolar Dado</button>}
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h3>{jogador2}</h3>
        {valorDado2 !== null ? <Dado valor={valorDado2} /> : <button style={{ backgroundColor: 'black', color: 'white' }} onClick={rolarDado} disabled={botaoDesabilitado(2)}>Rolar Dado</button>}
      </div>
    </div>
  );
}