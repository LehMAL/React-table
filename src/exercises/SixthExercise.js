import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function SixthExercise() {

    let [cep, setCep] = useState();
    let [endereco, setEndereco] = useState();
    let [alertColor, setAlertColor] = useState(null);

    function buscarCep() {
        axios.get("https://viacep.com.br/ws/" + cep + "/json/")
            .then(function (response) {
                console.log(response.data);
                setEndereco(response.data);
                setAlertColor('success');
            })
            .catch(function (error) {
                console.log(error);
                setAlertColor('danger');
            });
    }

    function changeCep(elemento) {
        setCep(elemento.target.value)
    }
    

    return (
        <div className="pt-4">

            <div className="card mx-5 mb-3">

                <div className="card-header">
                <h4>Exercício 6</h4>
                </div>

                    <div className="card-body mt-2">

                        <input className="form-control"
                            type="number"
                            max="99999999" 
                            maxLength="8" 
                            placeholder="Insira seu CEP aqui!"
                            onChange={changeCep} />
                        <br />

                        <div className="card">
                            <Button variant="primary" onClick={buscarCep}>Buscar CEP</Button>
                        </div><br />

                        {alertColor && (
                            <div className={`alert alert-${alertColor}`} role="alert">
                                {alertColor === 'success' ? 'Busca de CEP bem-sucedida!' : 'Ocorreu um erro na busca de CEP.'}
                            </div>
                        )}

                        {endereco && (
                            <div className="row">

                                <table className="table table-border table-hover">

                                        <tr>
                                            <th>CEP:</th>
                                            <td>{endereco.cep}</td>
                                        </tr>
                                        <tr>
                                            <th>UF:</th>
                                            <td>{endereco.uf}</td>
                                        </tr>
                                        <tr>
                                            <th>Cidade:</th>
                                            <td>{endereco.localidade}</td>
                                        </tr>
                                        <tr>
                                            <th>Bairro:</th>
                                            <td>{endereco.bairro}</td>
                                        </tr>
                                        <tr>
                                            <th>Rua:</th>
                                            <td>{endereco.logradouro}</td>
                                        </tr>
                                        <tr>
                                            <th>DDD:</th>
                                            <td>{endereco.ddd}</td>
                                        </tr>
                                        <tr>
                                            <th>IBGE:</th>
                                            <td>{endereco.ibge}</td>
                                        </tr>

                                </table>
                                
                            </div>
                        )}
                    </div>
            </div>
        </div>
    );
}

export default SixthExercise;
