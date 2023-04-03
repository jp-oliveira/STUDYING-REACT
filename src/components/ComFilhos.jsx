import React from 'react';

const ComFilhos = (props) => {
    return ( 
        <div>
            <h2>Os Filhos: </h2>
            <div>
                {props.children}
            </div>
        </div>
    );
}
 
export default ComFilhos;