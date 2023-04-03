import React from 'react';
import If from './If';

const Condicional = (props) => {
    return ( 
        <div>
            <h2> O número {props.numero} é: </h2>
            {/*
            <If teste={props.numero % 2 == 0}>
                <span>Par</span>
            </If>
            <If teste={props.numero % 2 != 0}>
                <span>Ímpar</span>
            </If>
            */
            }
            {props.numero % 2 == 0 ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    );
}
 
export default Condicional;