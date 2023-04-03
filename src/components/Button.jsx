import React from 'react';
import '../styles/Button.css'

const Button = ({children, fc_btn}) => {

    //no onclick, não bota handleClick() pois o react vai executar assim que carregar o componente
    return ( 
        <button onClick={fc_btn} className='btn_cls'>
            {children}
        </button>
    );
}
 
export default Button;