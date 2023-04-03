import React from 'react';
import product from './data/product';

const Repeticao = () => {

    function getProdutos() {
        return product.map(prod => {
            return <li key={prod.id}> {prod.id} - {prod.name} - R$ {prod.Price} </li>
        })
    }
    /* O atributo key no li evita o warning que ocorre em loops sem uma key no elemento */
    return ( 
        <div>
            <h2>Repetição</h2>

            <ul>
                {getProdutos()}
            </ul>
        </div>
     );
}
 
export default Repeticao