import styles from './Message.module.css'
import React, { useState, useEffect } from 'react';
 
const Message = ({type, msg}) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg){
            setVisible(false);
            return;
        }
        setVisible(true)
        const timer = setTimeout( () => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer);
    }, [msg])

    return (
        <>
        {
            visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )
        }
        </>
     );
}

// o tipo que vier no argumento será crucial para definir a classe

export default Message;