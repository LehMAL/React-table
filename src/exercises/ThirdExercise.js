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
            <div style={{ textAlign: 'center' }}>

                <Container>
                <Row>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label><b>Time:</b></label>

                    <input class="form-control" 
                    type="text" 
                    maxLength={25} 
                    placeholder="Insira o time aqui!"
                    onChange={alterarTime}/>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label><b>Nº de vitórias:</b></label>

                    <input 
                    class="form-control" 
                    type="number" 
                    maxLength={3} 
                    placeholder="Nº Vitórias"
                    disabled={!time}
                    onChange={alterarVitorias}/>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-12">

                    <label ><b>Nº de empates:</b></label>

                    <input
                    class="form-control" 
                    type="number" 
                    maxLength={3} 
                    placeholder="Nº Empates"
                    disabled={!vitorias}
                    onChange={alterarEmpates}/>
                </div>

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
        );

}

export default ThirdExercise;
