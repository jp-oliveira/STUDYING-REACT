import {Link} from 'react-router-dom'
import styles from './Container.module.css'

const Container = (props) => {
    return (   
        <div className={`${styles.Container} ${styles[props.customClass]}`}>    
            {props.children}
        </div>
    );
}
 
export default Container;

//sem props.children nada seria mostrado.