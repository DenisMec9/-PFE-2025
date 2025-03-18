
import React from 'react';

const Dado = ({ valor }) => {
  if (valor === null) {
    return <div style={{ width: '100px', height: '100px', backgroundColor: '#eee' }}></div>; // Exibe um espaço vazio ou um placeholder
  }

  return (
    <img src={`/images/dado-${valor}.png`} alt={`Dado ${valor}`} style={{ width: '100px', height: '100px' }} />
  );
};

export default Dado;
  const imagens = {
    1: "1.jpeg",
    2: "2.jpeg",
    3: "3.jpeg",
    4: "4.jpeg",
    5: "5.jpeg",
    6: "6.jpeg",
  };

  