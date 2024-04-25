import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Row } from 'react-bootstrap';



function FourthExecise(){

  let[caminhao, setCaminhao] = useState(null);
  let[alqueire, setAlqueire] = useState(null);
  let calcular = (parseFloat (alqueire * 250) / (caminhao * 18));
  const [mostrarLabel, setMostrarLabel] = useState(false);


  function printCaminhao(element){
    setCaminhao(element.target.value)
  }

  function printAlqueire(element){
    setAlqueire(element.target.value)
  }

  const handleClick = () => setMostrarLabel(true);

  

    return(

      <div className="pt-4">

        <div className="card mx-5 mt-3">

          <div className="card-header h4">
            Exercício 4
          </div>

          <div className="card-body mt-2">

            <label> <b>Quantidade de caminhões:</b></label>
            <input className="form-control"
            type="number"
            onChange={printCaminhao}
            /> <br/>

            <label> <b>Quantidade de alqueires:</b></label>
            <input className="form-control"
            type="number"
            onChange={printAlqueire}
            /><br/>

           <Row className="justify-content-md-center">
           <Button
            className="w-50 " variant="outline-primary"
            disabled={!caminhao || !alqueire}
            onClick={handleClick}
            >Calcular </Button>
           </Row><br/>

           {mostrarLabel && <label className="form-control text-align-center">Serão necessárias para transportar toda a colheita de laranjas 
           &nbsp; {Math.ceil(calcular)} &nbsp;
           viagens de caminhões</label>}

          </div>


        </div>

      </div>

    );


}
export default FourthExecise;