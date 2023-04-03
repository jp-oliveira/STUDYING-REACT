import './Card.css'
import React from 'react';

const Card = (props) => {
    return ( 
        <div className="Card">
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
    );
}
 
export default Card;