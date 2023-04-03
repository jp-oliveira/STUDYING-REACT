import Message   from '../Layout/Message';
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import styles from './Projects.module.css'

const Projects = () => {

    const [projects, setProjects] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/projects",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( resposta => resposta.json())
        .then ( data => {
            setProjects(data)
        })
        .catch( (err) => console.log(err))
    },[])  //bota [] para ser executado uma única vez - assim que carregar a página.

    console.log(projects)

    let location = useLocation();  //pégar parametros passados por navigate
    var message = "";
    
    if (location.state) {
        message = location.state.message
    }
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton destino="/newproject" texto="Criar um novo Projeto" />
            </div>
            {message && <Message msg={message} type="success"/>}
            <Container customClass="start">
                <a>Projetos...</a>
            </Container>
        </div>
     );
}
 
export default Projects