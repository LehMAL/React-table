import { useState } from "react";
import { Button, Table, } from "react-bootstrap";


function PriceListComponents() {
   
   

    let produto_1= {

        id: 1,
        produto: "produto 1",
        categoria: "categoria 1",
        qntd: 5,
        precoun: 10.00,
        total: (2) * (4),

    }

    let produto_2= {

        id: 2,
        produto: "produto 2",
        categoria: "categoria 2",
        qntd: 4,
        precoun: 35.00,
        total: (4) * (4),

    }

    let produto_3= {

        id: 3,
        produto: "produto 3",
        categoria: "categoria 3",
        qntd: 5,
        precoun: 10.00,
        total: (4) * (4),

    }

    let lista_produtos=[
        produto_1,
        produto_2,
        produto_3

    ];




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
                {
                    lista_produtos.map(
                        function(produto_1){
                        return
                        <tr>
        
            <td>{produto_1.id}</td>
            <td>{produto_1.produto}</td>
            <td>{produto_1.categoria}</td>
            <td>{produto_1.qntd}</td>
            <td>R${produto_1.precoun}</td>
            <td>R${produto_1.total}</td>
            
                        </tr>

                        }
                    )

                }

        </tr>
        <tr>
        
            <td>{produto_1.id}</td>
            <td>{produto_1.produto}</td>
            <td>{produto_1.categoria}</td>
            <td>{produto_1.qntd}</td>
            <td>R${produto_1.precoun}</td>
            <td>R${produto_1.total}</td>
            
        </tr>
        <tr>

        <td>{produto_2.id}</td>
        <td>{produto_2.produto}</td>
        <td>{produto_2.categoria}</td>
        <td>{produto_2.qntd}</td>
        <td>R${produto_2.precoun}</td>
        <td>R${produto_2.total}</td>
        
        </tr>
        <tr>
        
        <td>{produto_3.id}</td>
        <td>{produto_3.produto}</td>
        <td>{produto_3.categoria}</td>
        <td>{produto_3.qntd}</td>
        <td>R${produto_3.precoun}</td>
        <td>R${produto_3.total}</td>
        
        </tr>
        <tr>

        <td colSpan="3"></td>
        <td>{0}</td>
        <td>R${0}</td>
        <td>R${0}</td>

        </tr>

      </tbody>
    </Table>
  
    
     </>
    );
  }
  
  export default PriceListComponents;
