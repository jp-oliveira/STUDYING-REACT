import React from 'react';
import Button from './Button';
import {useNavigate, useParams} from "react-router-dom";

import '../styles/TaskDetails.css'

const TaskDetails = () => {
    
    const params = useParams();
    //console.log(params) // - os parâmetros que vêm pela url
    const history = useNavigate();

    const handleBackClick = () => {
        history("/");
    }

    return (
        <>
            <div className="back-button-container">
                <Button fc_btn={handleBackClick}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dicta deserunt! Nostrum architecto qui voluptatem, voluptatibus assumenda necessitatibus, vero laudantium animi iure esse blanditiis quaerat dolorem voluptates accusantium aliquam hic!</p>
            </div>
        </>
    );
}
 
export default TaskDetails;