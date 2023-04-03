import React     from 'react';
import { Link }  from 'react-router-dom';

import Container from './Container';

import styles    from './Navbar.module.css';
import logo      from '../../img/costs_logo.png'; //voltou 2 pastas

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="costs"/>
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contacts</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">About Me</Link>
                    </li>
                </ul>
            </Container>
        </nav>
     );
}
 
export default Navbar;