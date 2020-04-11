import React from 'react';
import Header from '../header';
import PRONOUNS from '../../constant/PRONOUNS';

const Pronouns = () => {
    return(
        <>
            <Header title="Pronombres"/>
                {
                    PRONOUNS.map(item => (
                        <div key={item.id}>
                            <p>{item.pronouns} - {item.mean}</p>
                        </div>
                    ))
                }
        </>
    )
}

export default Pronouns;