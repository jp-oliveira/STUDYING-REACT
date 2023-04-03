import React, { useState } from 'react';
import { v4 as uuidv4 }    from 'uuid';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import './styles/App.css'

import Tasks from './components/Tasks';
import AddInput from './components/AddInput';
import TaskDetails from './components/TaskDetails';
import { useEffect } from 'react';

function App() {
  
  const [alltasks, setTasks] = useState([]);
  useEffect( () => {
    const fetch = async () => {
      const response = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=15')
      setTasks(response.data)
      //se quiser, dê um console.log aqui para ver o resultado
    };
    fetch();
  },[]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...alltasks, {
      id: uuidv4(),
      title:taskTitle,
      completed: false, 
    }];
    setTasks(newTasks)
  }

  const handleTaskClick = (task_id, arg2) => {

    if(arg2 === "comp"){

      //const elemento = alltasks.findIndex(item => item.id == task_id) //ESTÁ CORRETO
      const newTasks = alltasks.map(
        (item) => {
          if(item.id === task_id){
            return {...item, completed: !item.completed};
          }
          else{
            return item;
          }  
        })
        setTasks(newTasks)
    }
    else{
      if(window.confirm("Tem certeza que deseja excluir essa tarefa?")){
        const newTasks = alltasks.filter(item => item.id != task_id)
        setTasks(newTasks);
      }
    }
  }

  return (
    <Router>
      <div className="container">
        <h1>Minhas Tarefas</h1>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <AddInput fc_input={handleTaskAddition}/>
                <Tasks fc_task={handleTaskClick} tasklist={alltasks}/>
              </>
            }
          />
          <Route
            path="/:taskTitle"
            element={
              <React.Fragment>
                <TaskDetails/>                
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App