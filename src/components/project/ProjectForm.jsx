import React, { useState, useEffect }  from 'react';
import Input  from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';
import styles from  './ProjectForm.module.css';

const ProjectForm = ({handleSubmit,btnText, projectData}) => {
    
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( resposta => resposta.json())
        .then ( data => {
            setCategories(data.sort((a, b) => a.name.localeCompare(b.name)))
        })
        .catch( (err) => console.log(err))
    },[])  //bota [] para ser executado uma única vez - assim que carregar a página.

    const submit_form = (e) => {
        e.preventDefault();
        var valores = [document.getElementById('name').value,document.getElementById('budget').value, document.getElementById("category_id").value];
        (valores.some(item => item == "")) ? alert("Você deve preencher todos os campos para criar um novo projeto!") : handleSubmit(project);
    }

    function handleChange(e){
        setProject({...project,[e.target.name] : e.target.value})
    }

    function handleCategory(e){
        setProject({ 
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit_form} className={styles.form_projeto}>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number" 
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira por favor o orçamento total."
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                text="Categoria do Projeto"
                name="category_id"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : '' }
            />
           <Submit 
                text={btnText}
            />
        </form>
    );
}
 
export default ProjectForm;