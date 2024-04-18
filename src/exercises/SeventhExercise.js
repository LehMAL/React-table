import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function SeventhExercise() {
    const [alertColor, setAlertColor] = useState(null);
    const [moedaOrigem, setMoedaOrigem] = useState('');
    const [moedaDestino, setMoedaDestino] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [resultado, setResultado] = useState(null);

    const opcoesDeMoeda = [
        { sigla: 'USD', nome: 'Dólar Americano' },
        { sigla: 'EUR', nome: 'Euro' },
        { sigla: 'JPY', nome: 'Iene Japonês' },
        { sigla: 'BRL', nome: 'Real Brasileiro' },
        { sigla: 'AED', nome: 'Dirham dos Emirados Árabes Unidos'},
        { sigla: 'BOB', nome: 'Boliviano da Bolívia' },
        { sigla: 'CHF', nome: 'Franco Suiço' },

    ];

    function converterMoeda() {
        axios.get(`https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`)
            .then(function (response) {
                console.log(response.data);
                const taxaDeCambio = response.data[`${moedaOrigem}${moedaDestino}`].bid;
                const resultadoDaConversao = (parseFloat(quantidade) * parseFloat(taxaDeCambio)).toFixed(2);
                setResultado(resultadoDaConversao);
            })
            .catch(function (error) {
                console.log(error);
                setAlertColor('danger');
            });
    }

    function handleMoedaOrigemChange(event) {
        setMoedaOrigem(event.target.value);
    }

    function handleMoedaDestinoChange(event) {
        setMoedaDestino(event.target.value);
    }

    function handleQuantidadeChange(event) {
        setQuantidade(event.target.value);
    }

    const limparCampos = () => {
        setMoedaOrigem('');
        setMoedaDestino('');
        setQuantidade(0.0);      
    };


    return (
        <div className="pt-4">
            <div className="card mx-5 mb-3">
                <div className="card-header h4">Exercício 7</div>
                <div className="card-body mt-2">
                    <select
                        className="form-select"
                        value={moedaOrigem}
                        onChange={handleMoedaOrigemChange}
                    >
                        <option value="">Selecione a moeda de origem</option>
                        {opcoesDeMoeda.map((opcao) => (
                            <option key={opcao.sigla} value={opcao.sigla}>{opcao.nome} ({opcao.sigla})</option>
                        ))}
                    </select>

                    <select
                        className="form-select mt-3"
                        value={moedaDestino}
                        onChange={handleMoedaDestinoChange}
                    >
                        <option value="">Selecione a moeda de destino</option>
                        {opcoesDeMoeda.map((opcao) => (
                            <option key={opcao.sigla} value={opcao.sigla}>{opcao.nome} ({opcao.sigla})</option>
                        ))}
                    </select>

                    <br />

                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Quantidade a ser convertida"
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                    />

                    <br />

                    <div>
                        <Button variant="primary" onClick={converterMoeda}>
                            Buscar
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Button variant="secondary" onClick={limparCampos}>
                            Limpar
                        </Button>
                    </div>

                    <br />

                    {resultado && (
                        <div className={`alert alert-success`} role="alert">
                            Resultado da conversão: {resultado}
                        </div>
                    )}

                    {alertColor && (
                        <div className={`alert alert-${alertColor}`} role="alert">
                            {alertColor === 'success' ? 'Busca bem-sucedida!' : 'Ocorreu um erro na busca.'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SeventhExercise;