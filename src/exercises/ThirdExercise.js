import { useState } from "react";
import { Container, Row } from "react-bootstrap";

function ThirdExercise(){

    let [time, setTime]= useState();
    let[vitorias, setVitorias]= useState();
    let [empates, setEmpates]= useState();

    let totalpontos = (parseFloat(vitorias) * 3) + (parseFloat(empates));


function alterarTime(elemento){
    setTime(elemento.target.value)
}

function alterarVitorias(valor){
    setVitorias(valor.target.value)
} 

function alterarEmpates(emp){
    setEmpates(emp.target.value)
}





        return(
            <div className="pt-4" style={{ textAlign: 'center' }}>
                <div className="card mx-5 b-3">
                    <div className="card-header h4">
                        Exercício 3
                    </div>
                    <div className="card-body mt-2">

                    <Container>
                <Row>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label><b>Time:</b></label>

                    <input class="form-control" 
                    type="text" 
                    maxLength={25} 
                    placeholder="Insira o time aqui!"
                    onChange={alterarTime}/>
                </div><br/>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label><b>Nº de vitórias:</b></label>

                    <input 
                    class="form-control" 
                    type="number" 
                    maxLength={3} 
                    placeholder="Nº Vitórias"
                    disabled={!time}
                    onChange={alterarVitorias}/>
                </div><br/>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label ><b>Nº de empates:</b></label>

                    <input
                    class="form-control" 
                    type="number" 
                    maxLength={3} 
                    placeholder="Nº Empates"
                    disabled={!vitorias}
                    onChange={alterarEmpates}/>
                </div><br/>

                </Row>
                </Container>
                
                <div class="col-sm-12 col-md-6 col-lg-12">
                    <br/><br/>
                    <p><b>{time}</b></p>

                    <button 
                    disabled={!time || !vitorias || !empates}
                    className={totalpontos}
                    >Total de Pontos:{totalpontos}</button>

                </div>

                    </div>

                </div>

             

            </div>
        );

}

export default ThirdExercise;
