import './App.scss';
import { useState } from "react";

export default function App() {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [calculo, setCalculo] = useState('Resultado');

  const obtendoValorA = (event) => {
    setValorA(Number(event.target.value));
  };

  const obtendoValorB = (event) => {
    setValorB(Number(event.target.value));
  };

  const camposPreenchidos = () => {
    if(valorA == '' || valorB == ''){
      alert('Preencha os dois campos antes de realizar o cálculo!');
      return false;
    }
    else{
      return true;
    }
  };

  const somar = () => {
    if (camposPreenchidos()) {
      setCalculo(valorA + valorB);
    } 
  };

  const subtrair = () => {
    if (camposPreenchidos()) {
      setCalculo(valorA - valorB);
    }
  };

  const multiplicar = () => {
    if (camposPreenchidos()) {
      setCalculo(valorA * valorB);
    }
  };

  const dividir = () => {
    if (camposPreenchidos()) {
      setCalculo(valorA / valorB);
    }
  };

  const limpar = () => {
    setValorA('');
    setValorB('');
    setCalculo('Resultado');
  };

  return (
    <main>
      <section>
        <h1>Calculadora</h1>

        <input type="number" value={valorA} onChange={obtendoValorA} placeholder="Digite o primeiro valor"/>
        <input type="number" value={valorB} onChange={obtendoValorB} placeholder="Digite o segundo valor"/>

        <div id="todosBotoes">
          <button id="botao" onClick={somar}> + </button>
          <button id="botao" onClick={subtrair}> - </button>
          <button id="botao" onClick={multiplicar}> x </button>
          <button id="botao" onClick={dividir}> / </button>
          <button id="botao" onClick={limpar} > C </button>
        </div>

        <h2>{calculo}</h2>
      </section>
    </main>
  );
}