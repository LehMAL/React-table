import { useState } from "react";
import { Button, Table, } from "react-bootstrap";


function PriceListComponents() {
    let id_1 = 1;
    let id_2 = 2;
    let id_3 = 3;
    let produto1 = "produto 1";
    let produto2 = "produto 2";
    let produto3 = "produto 3";
    let categoria1 = "categoria 1";
    let categoria2 = "categoria 2";
    let categoria3 = "categoria 3";
    let qntd1 = 5;
    let qntd2 = 4;
    let qntd3 = 3;
    let qntd4 = 12;
    let precoun1 = 10.00;
    let precoun2 = 35.00;
    let precoun3 = 41.00;
    let precoun4 = 86.00;
    let total1 =  (qntd1) * (precoun1);
    let total2 =  (qntd2) * (precoun2) ;
    let total3 =  (qntd3) * (precoun3) ;
    let total4 =  (total1) + (total2) + (total3) ;




    return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="6" className="text-center"><h4>Vendas</h4></th>
        </tr>
      </thead>

      <tbody>
        <tr>
            <td>#</td>
            <td>Produto</td>
            <td>Categoria</td>
            <td>Quantidade</td>
            <td>Preço Unitário</td>
            <td>Total</td>
      
        </tr>
        <tr>
        
            <td>{id_1}</td>
            <td>{produto1}</td>
            <td>{categoria1}</td>
            <td>{qntd1}</td>
            <td>R${precoun1}</td>
            <td>R${total1}</td>
            
        </tr>
        <tr>

        <td>{id_2}</td>
        <td>{produto2}</td>
        <td>{categoria2}</td>
        <td>{qntd2}</td>
        <td>R${precoun2}</td>
        <td>R${total2}</td>
        
        </tr>
        <tr>
        
        <td>{id_3}</td>
        <td>{produto3}</td>
        <td>{categoria3}</td>
        <td>{qntd3}</td>
        <td>R${precoun3}</td>
        <td>R${total3}</td>
        
        </tr>
        <tr>

        <td colSpan="3"></td>
        <td>{qntd4}</td>
        <td>R${precoun4}</td>
        <td>R${total4}</td>

        </tr>

      </tbody>
    </Table>
  
    
     </>
    );
  }
  
  export default PriceListComponents;
