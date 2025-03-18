import React from "react";
import dado1 from "dado1.png";
import dado2 from "dado2.png";
import dado3 from "dado3.png";
import dado4 from "dado4.png";
import dado5 from "dado5.png";
import dado6 from "dado6.png";

const Dado = ({ valor }) => {
  const imagens = { 1: dado1, 2: dado2, 3: dado3, 4: dado4, 5: dado5, 6: dado6 };

  return (
    <div>
      <img src={imagens[valor]} alt={`Dado ${valor}`} width={100} height={100} />
    </div>
  );
};

export default Dado;