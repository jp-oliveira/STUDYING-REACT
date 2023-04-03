import React   from 'react';
import styles  from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton';

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton destino="/newproject" texto="Criar um novo Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    );
}
 
export default Home;

//state lift, usado com o componente saudaco. Nesse, ele só exibe o conteúdo.