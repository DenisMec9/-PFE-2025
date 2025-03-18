import React, { useState } from "react";
import Dado from "./components/Dado";

const App = () => {
  const [rodada, setRodada] = useState(1);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [vencedor, setVencedor] = useState(null);

  const rolarDados = () => {
    if (rodada <= 5) {
      const valor1 = Math.floor(Math.random() * 6) + 1;
      const valor2 = Math.floor(Math.random() * 6) + 1;

      setDadoJogador1(valor1);
      setDadoJogador2(valor2);

      if (valor1 > valor2) {
        setVitoriasJogador1(vitoriasJogador1 + 1);
      } else if (valor2 > valor1) {
        setVitoriasJogador2(vitoriasJogador2 + 1);
      }

      setRodada(rodada + 1);
    }

    if (rodada === 5) {
      if (vitoriasJogador1 > vitoriasJogador2) {
        setVencedor("Jogador 1 venceu!");
      } else if (vitoriasJogador2 > vitoriasJogador1) {
        setVencedor("Jogador 2 venceu!");
      } else {
        setVencedor("Empate!");
      }
    }
  };

  const reiniciarJogo = () => {
    setRodada(1);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setVencedor(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Jogo de Dados 🎲</h1>
      <h2>Rodada: {rodada <= 5 ? rodada : "Fim do jogo"}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        <div>
          <h3>Jogador 1</h3>
          <Dado valor={dadoJogador1} />
          <p>Vitórias: {vitoriasJogador1}</p>
        </div>
        <div>
          <h3>Jogador 2</h3>
          <Dado valor={dadoJogador2} />
          <p>Vitórias: {vitoriasJogador2}</p>
        </div>
      </div>

      {rodada <= 5 ? (
        <button onClick={rolarDados} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Jogar Rodada 🎲
        </button>
      ) : (
        <>
          <h2>{vencedor}</h2>
          <button onClick={reiniciarJogo} style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>
            Jogar Novamente 🔄
          </button>
        </>
      )}
    </div>
  );
};

export default App;