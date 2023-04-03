import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css'

const LinkButton = ({destino, texto} ) => {
    return ( 
        <Link className={styles.btn} to={destino}>
            {texto}
        </Link>
    );
}
 
export default LinkButton;