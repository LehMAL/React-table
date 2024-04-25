import { useState } from "react";

function SecondExercise(){

    let [nome, setNome] = useState();
    let [salario, setSalario] = useState();
    let [reajuste, setReajuste] = useState();
  
   
    let total = (parseFloat(salario) + salario * (reajuste/100));

function alterarNome(elemento){
    setNome(elemento.target.value)
}
function alterarSalario(valor){
    setSalario(valor.target.value)
}
function alterarReajuste(reaj){
    setReajuste(reaj.target.value)
}


    return(
        <div className="pt-4">
            <div className="card mx-5 mb-3">
            <div className="card-header h4">Exercício 2</div>
            <div className="card-body mt-2">

            <b>Nome:{nome}</b>
            <input className="form-control" 
            onChange={alterarNome}></input><br/>

            <b>Salário:{salario}</b>
            <input className="form-control"
            onChange={alterarSalario}></input><br/>

            <b>Reajuste percentual:{reajuste}</b>
            <input className="form-control"
            onChange={alterarReajuste}></input><br/>

            <p>Total:{total}</p>

            </div>
            </div>
        </div>
    );

}

export default SecondExercise;