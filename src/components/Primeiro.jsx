import React from 'react'; //reparemos que ele só deixa de ficar cinza quando eu uso
// "sintaxe" html dentro do js, que é a característica do jsx

const Primeiro = () => {
    return(
        <>
            <h2> Primeiro Componente</h2>
            <h3>Exemplo de um componente React</h3>
        </>
    )
}

export default Primeiro;

/* MANEIRA MAIS ENXUTA DE FAZER
export default () => 
    
    <>
        <h1> Primeiro Componente</h1>
        <h2>Exemplo de um componente React</h2>
    </>
*/