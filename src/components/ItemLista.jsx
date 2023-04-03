import React from 'react';

const ItemLista = (props) => {
    return(
        <li>
            <a 
                target="_blank" 
                href={props.link}
            >
                <img 
                    src={props.imgLink}
                    alt={props.alt}
                />
            </a>
        </li>
    )
}

export default ItemLista;