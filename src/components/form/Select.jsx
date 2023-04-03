import React  from 'react';
import styles from './Select.module.css'

const Select = ({text, name, options, handleOnChange, value}) => {
    return ( 
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleOnChange} value={value || ''} name={name} defaultValue="" id={name}>
                <option disabled value="">Selecione uma opção</option>
                
                {options.map( (opcao) => (
                    <option value={opcao.id} key={opcao.id}>
                        {opcao.name}
                    </option>
                )

                )}
            </select>
        </div>
     );
}
 
export default Select;