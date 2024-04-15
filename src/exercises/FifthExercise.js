import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function FifthExercise() {
    const [isLoading, setLoading] = useState(false);
    const [mercadoria, setMercadoria] = useState('');
    const [preco, setPreco] = useState('');
    const [porcentagem, setPorcentagem] = useState(0.0);
    const [mostrarLabel, setMostrarLabel] = useState(false);

    const handleClick = () => {
        setMostrarLabel(true);
        setLoading(true);
        setTimeout(() => {
            const precoFloat = parseFloat(preco);
            const porcentagemCalculada = precoFloat + (precoFloat * (5 / 100));
            setPorcentagem(porcentagemCalculada.toFixed(2));
            setLoading(false);
        }, 2000);
    };

    const printMercadoria = (elemento) => {
        setMercadoria(elemento.target.value);
    };

    const printPreco = (elemento) => {
        setPreco(elemento.target.value);
    };

    const limparCampos = () => {
        setMercadoria('');
        setPreco('');
        setPorcentagem(0.0);
        setMostrarLabel(false);
    };

    return (
        <div className="card mx-3 mb-3"> 
            <div className="card-header h4">
                <b>Exercício 5</b>
            </div>
            <div className="card-body mt-2">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-4">
                        <label><b>Mercadoria:</b></label>
                        <input className="form-control"
                            type="text"
                            maxLength={25}
                            placeholder="Insira sua mercadoria aqui!"
                            value={mercadoria}
                            onChange={printMercadoria} />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label className="label-control"><b>Preço:</b></label>
                        <input className="form-control"
                            type="number"
                            disabled={!mercadoria}
                            maxLength={10}
                            placeholder="Insira o preço aqui!"
                            value={preco}
                            onChange={printPreco} />
                    </div>
                    <div className="col-sm-12 col-md-4 mt-4">
                        <Button
                            disabled={isLoading || !mercadoria || !preco}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Calculando…' : 'Calcular'}
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="secondary" className="ml-2" onClick={limparCampos}>Limpar</Button> 
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                        {mostrarLabel && <label className="border rounded p-2 ml-2">{mercadoria}</label>}   
                        <Alert><b>Resultado:</b> R${porcentagem}</Alert>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FifthExercise;
