
export function Dado({ valor }){
    const imagens = {
      1: "1.jpeg",
      2: "2.jpeg",
      3: "3.jpeg",
      4: "4.jpeg",
      5: "5.jpeg",
      6: "6.jpeg",
    };
  
    return (
      <div className="flex flex-col items-center">
        <img src={imagens[valor]} alt={`Dado ${valor}`} className="w-23 h-24" />
        <p className="text-lg font-semibold mt-2">Valor: {valor}</p>
      </div>
    );
  };