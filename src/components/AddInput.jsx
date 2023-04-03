import React from 'react';
import Button from './Button';
import '../styles/AddInput.css'
import { useState } from 'react';

const AddInput = ({fc_input}) => {

    const [inputData, setInputData] = useState("")

    const handleAddTaskClick = () => {
        if (inputData.length > 0){
            fc_input(inputData);
            setInputData("");
        }
        else{
            alert("O nome da tarefa precisa ser preenchido.")
        }
    }

    return ( 
        <div className='add-task-container'>
            <input 
                type="text" 
                className='add-task-input'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                name="input_add"
                id="input_add"
            />
            <div className="add-task-button-container">
                <Button fc_btn={handleAddTaskClick} >Adicionar</Button>
            </div>
        </div>
    );
}

export default AddInput;