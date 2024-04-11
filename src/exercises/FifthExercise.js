import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function FifthExercise() {
    const [isLoading, setLoading] = useState(false);
    const [mercadoria, setMercadoria] = useState('');
    const [preco, setPreco] = useState('');
    const [porcentagem, setPorcentagem] = useState(0.0);

    const handleClick = () => {
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

    return (
        <div className="card">
            <div className="card-header h4">
                <b>Exercício 5</b>
            </div>
            <div className="card-body mt-2">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <label><b>Mercadoria:</b></label>
                        <input className="form-control"
                            type="text"
                            maxLength={25}
                            placeholder="Insira sua mercadoria aqui!"
                            onChange={printMercadoria} />
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label className="label-control"><b>Preço:</b></label>
                        <input className="form-control"
                            type="number"
                            disabled={!mercadoria}
                            maxLength={10}
                            placeholder="Insira o preço aqui!"
                            onChange={printPreco} />
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3 mt-4">
                        <Button
                            disabled={isLoading || !mercadoria || !preco}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Calculando…' : 'Calcular'}
                        </Button>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Alert className="mt-2" variant="info">Resultado R${porcentagem}</Alert>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FifthExercise;
