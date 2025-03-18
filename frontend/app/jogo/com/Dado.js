import React, { useState, useEffect } from 'react';

function Dado({ valor }) {
  const [valorExibido, setValorExibido] = useState(6); // Estado inicial: 6

  useEffect(() => {
    // Após um curto período, atualiza o valor exibido para o valor real
    const timeoutId = setTimeout(() => {
      setValorExibido(valor);
    }, 1000); // 1000 milissegundos (1 segundo)

    // Limpa o timeout se o componente for desmontado ou o valor mudar
    return () => clearTimeout(timeoutId);
  }, [valor]);

  const imagens = {
    1: "1.jpeg",
    2: "2.jpeg",
    3: "3.jpeg",
    4: "4.jpeg",
    5: "5.jpeg",
    6: "6.jpeg",
  };

  return (
    <img
      src={imagens[valorExibido - 1]}
      alt={`Dado ${valorExibido}`}
      style={{ width: '100px', height: '100px' }}
    />
  );
}

export default Dado;