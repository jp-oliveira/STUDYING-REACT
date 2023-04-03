import React from 'react';

const Section = (props) => {
    return(
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                
                <ul className={props.classeUL}>
                    {props.children}
                </ul>
            </div>
        </section>
    )
}

export default Section;