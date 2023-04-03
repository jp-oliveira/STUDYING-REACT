import React from 'react';
import {MdDelete} from 'react-icons/md'
import {CgMoreO} from 'react-icons/cg'
import '../styles/Tasks.css'
import {useNavigate} from "react-router-dom";

//só quero pegar tasklist do objeto props
const Tasks = ({fc_task,tasklist}) => {

    const history = useNavigate();

    const changePage = (titulo) => {
        const site = '/' + titulo
        history(site);
    }

    return (
        tasklist.map( item =>{
            return (
                <div 
                    key={item.id}
                    className='task-container'
                    style={item.completed ?
                        {borderLeft: '6px solid chartreuse'} :
                         {}
                    }
                >
                    <div className="task-container-title" onClick={() => fc_task(item.id,"comp")} >
                        {item.title}
                    </div>

                    <div className="buttons-container">
                        <button 
                            className='img_info'
                            onClick={() => changePage(item.title)}
                        >
                            <CgMoreO/>
                        </button>
                        
                        <button 
                            className='img_delete' 
                            onClick={() => fc_task(item.id,"del")}>
                            <MdDelete/>
                        </button>
                    </div>
                </div>
           )
        })
    );
}
 
export default Tasks;