
export function Texto1(){
  return <p>um outro parágrafo de texto!</p>;
} 
export default function Home() {
  const aula=1;
    return( 
      <div>
        <h1>Olá mundo</h1> 
        <p>aula {aula} teste com react</p>
        <Texto1/>
      </div>
      
  );
  
}
// import home, {Texto1}  from'.page;