import React, { useState } from 'react';
import Dado from './Dado';

function Rodada({ jogador1, jogador2, onRodadaCompleta }) {
  const [valorDado1, setValorDado1] = useState(null);
  const [valorDado2, setValorDado2] = useState(null);

  const rolarDados = () => {
    setValorDado1(Math.floor(Math.random() * 6) + 1);
    setValorDado2(Math.floor(Math.random() * 6) + 1);
    onRodadaCompleta(valorDado1, valorDado2);
  };

  return (
    <div>
      <h2>Rodada</h2>
      <div>
        <h3>{jogador1}</h3>
        {valorDado1 !== null ? <Dado valor={valorDado1} /> : <button onClick={rolarDados}>Rolar Dado</button>}
      </div>
      <div>
        <h3>{jogador2}</h3>
        {valorDado2 !== null ? <Dado valor={valorDado2} /> : <button onClick={rolarDados}>Rolar Dado</button>}
      </div>
    </div>
  );
}

export default Rodada;