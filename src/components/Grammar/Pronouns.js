import React from 'react';
import Header from '../header';
import PRONOUNS from '../../constant/PRONOUNS';
import './pronouns.css';

const Pronouns = () => {
    return(
        <>
            <Header title="Pronombres"/>
                <div className="container-pronouns-pb">
                    <div className="pronouns-pb">
                    {
                        PRONOUNS.map(item => (
                                <p key={item.id}>
                                    <span>{item.pronouns}</span> - <span>{item.mean}</span>
                                </p>
                        ))
                    }
                    </div>
                    <div className="example-pb">
                        <p>Ejemplo</p>
                        <p><span className="pronouns-personal">I</span> want a new bike for my birthday - <span>Quiero una bicicleta para mi cumpleaños</span></p>
                        <p><span className="pronouns-personal">You</span> play the piano - <span>Tú tocas el piano</span></p>
                    </div>
                </div>
        </>
    )
}

export default Pronouns;