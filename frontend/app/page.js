import { useState } from "react"

const Dado = ({ valor }) => {
  const imagens = {
    1: "https://www.google.com/imgres?q=imagem%20de%20naruto&imgurl=https%3A%2F%2Fobservatoriodocinema.com.br%2Fwp-content%2Fplugins%2Fseox-image-magick%2Fimagick_convert.php%3Fwidth%3D1200%26height%3D675%26format%3D.jpg%26quality%3D91%26imagick%3Duploads-observatoriodocinema.seox.com.br%2F2023%2F09%2Fnaruto-capa.jpg&imgrefurl=https%3A%2F%2Fobservatoriodocinema.com.br%2Fanimes%2Fnaruto-se-inspira-mais-na-vida-real-do-que-voce-pensa%2F&docid=J7JFXejMFiOdAM&tbnid=WeNJ6LmRQprqAM&vet=12ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECH0QAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECH0QAA",
    2: "https://www.google.com/imgres?q=imagem%20de%20naruto&imgurl=https%3A%2F%2Fbitsebaits.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fnaruto-shippuden_zy11.jpg&imgrefurl=https%3A%2F%2Fbitsebaits.com%2F2023%2F08%2F06%2F10-verdades-de-naruto-que-ninguem-aceita%2F&docid=ENB03XNIy_DdtM&tbnid=D_PCzylB87AWzM&vet=12ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECH4QAA..i&w=1268&h=713&hcb=2&ved=2ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECH4QAA",
    3: "https://www.google.com/imgres?q=imagem%20de%20naruto&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2F8a%2Fa3%2F428aa3d71e8c04ac470aeea7b0091d19.jpg&imgrefurl=https%3A%2F%2Fbr.pinterest.com%2Fjeremoraes%2Fnaruto-uzumaki%2F&docid=tVtjaVu2Ho-SCM&tbnid=r2-5gCdCy1_78M&vet=12ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECDAQAA..i&w=1080&h=1920&hcb=2&ved=2ahUKEwjT4sj90IWMAxWJqpUCHZosMjcQM3oECDAQAA",
    4: "https://www.google.com/imgres?q=imagem%20de%20one%20piece&imgurl=https%3A%2F%2Fsm.ign.com%2Ft%2Fign_br%2Ftv%2Fo%2Fone-piece-%2Fone-piece-2_1xby.1200.jpg&imgrefurl=https%3A%2F%2Fbr.ign.com%2Fone-piece-2&docid=MpyxMmChcRyTEM&tbnid=rjNm9gFztNN8ZM&vet=12ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oECBcQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oECBcQAA",
    5: "https://www.google.com/imgres?q=imagem%20de%20one%20piece&imgurl=https%3A%2F%2Frecreio.com.br%2Fmedia%2F_versions%2F2024%2F02%2Fone-piece-red_capa_widelg.jpg&imgrefurl=https%3A%2F%2Frecreio.com.br%2Fnoticias%2Fentretenimento%2Fquais-sao-todos-os-filmes-animados-de-one-piece.phtml&docid=syyMaVX-2YuyMM&tbnid=yqWjz9t7U_Pg4M&vet=12ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oFCIQBEAA..i&w=800&h=450&hcb=2&ved=2ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oFCIQBEAA",
    6: "https://www.google.com/imgres?q=imagem%20de%20one%20piece&imgurl=https%3A%2F%2Ftm.ibxk.com.br%2F2023%2F08%2F11%2F11115053447089.jpg%3Fims%3D750x&imgrefurl=https%3A%2F%2Fwww.tecmundo.com.br%2Fminha-serie%2F267467-one-piece-conheca-transformacoes-luffy-anime.htm&docid=iaNM0clBhc2I_M&tbnid=ZFUwPOtFQKz-gM&vet=12ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oECDEQAA..i&w=750&h=422&hcb=2&ved=2ahUKEwjy98Ca0YWMAxXirpUCHWVvIeEQM3oECDEQAA",
  };

  return (
    <div className="flex flex-col items-center">
      <img src={imagens[valor]} alt={`Dado ${valor}`} className="w-23 h-24" />
      <p className="text-lg font-semibold mt-2">Valor: {valor}</p>
    </div>
  );
};

export default function App() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Dado valor={valorDado} />
      <Button onClick={rolarDado} className="px-4 py-2 text-lg">
        Rolar Dado
      </Button>
    </div>
  );
}
