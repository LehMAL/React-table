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
        <div>
            <p>Nome:{nome}</p>
            <input onChange={alterarNome}></input>
            <p>Salário:{salario}</p>
            <input onChange={alterarSalario}></input>
            <p>Reajuste percentual:{reajuste}</p>
            <input onChange={alterarReajuste}></input>
            <p>Total:{total}</p>
        </div>
    );

}

export default SecondExercise;