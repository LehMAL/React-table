import { useState } from "react";

function FirstExercise(){
    let [distacia, setDistancia]    = useState();
    let [velocidade, setVelocidade] = useState();
    let resultado  = distacia / velocidade;

function changeDistancia(element){
    setDistancia(element.target.value)
}

function changeVelocidade(element){
    setVelocidade(element.target.value)
}

    return(
        <div className="pt-4">
            <div className="card mx-5 mb-3">
                <div className="card-header h4 ">
                    Exercício 1
                </div>
                <div className="card-body mt-2">
                    <label>Distancia:</label>
                    <input className="form-control"
                    onChange={changeDistancia}/><br/>

                    <label>Velocidade:</label>
                    <input className="form-control"
                    onChange={changeVelocidade}/><br/>

                    <label className="form-control">
                        KM/HR: {resultado}
                    </label>

                </div>

            </div>
        
        </div>
    );
}

export default FirstExercise;