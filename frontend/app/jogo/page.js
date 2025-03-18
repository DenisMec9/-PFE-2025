"use client";
import React, { useState } from "react";
import Dado from "./com/Dado";

const App = () => {
  const [rodada, setRodada] = useState(1);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(null); // Inicializado como null
  const [dadoJogador2, setDadoJogador2] = useState(null); // Inicializado como null
  const [vencedor, setVencedor] = useState(null);

  const rolarDados = () => {
    if (rodada <= 5) {
      setDadoJogador1(6); // Definido como 6 na rolagem
      setDadoJogador2(6); // Definido como 6 na rolagem

      if (6 > 6) {
        setVitoriasJogador1(vitoriasJogador1 + 1);
      } else if (6 > 6) {
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
    setDadoJogador1(null); // Reinicializado como null
    setDadoJogador2(null); // Reinicializado como null
    setVencedor(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Jogo de Dados </h1>
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
          Jogar Rodada 
        </button>
      ) : (
        <>
          <h2>{vencedor}</h2>
          <button onClick={reiniciarJogo} style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>
            Jogar Novamente 
          </button>
        </>
      )}
    </div>
  );
};

export default App;