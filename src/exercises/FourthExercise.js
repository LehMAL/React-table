import React, { useState } from 'react';

function FourthExercise(){


    function CalculadoraTransporte() {
      const [caminhoes, setCaminhoes] = useState(0);
      const [alqueires, setAlqueires] = useState(0);
      const [viagens, setViagens] = useState(0);
    
    
    const calcularViagens = () => {
        const toneladasProduzidas = alqueires * 250;
        const viagensNecessarias = Math.ceil(toneladasProduzidas / 18);
        setViagens(viagensNecessarias);
    };
    
      return (
        <div>
          <h2>Calculadora de Transporte de Laranjas</h2>
          <div>
            <label>
              Quantidade de Caminhões:
              <input
                type="number"
                value={caminhoes}
                onChange={(e) => setCaminhoes(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Quantidade de Alqueires:
              <input
                type="number"
                value={alqueires}
                onChange={(e) => setAlqueires(parseInt(e.target.value))}
              />
            </label>
          </div>
          <button onClick={calcularViagens}>Calcular Viagens</button>
          {viagens > 0 && (
            <p>
              Serão necessárias {viagens} viagens de caminhão para transportar toda a colheita de laranjas.
            </p>
          )}
        </div>
      );
    }
    
        

}
export default FourthExercise;