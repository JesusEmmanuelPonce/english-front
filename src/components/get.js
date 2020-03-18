import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Get = () => {

    const [getPhrasal, setGetPhrasal] = useState([]);

    useEffect(()=> {
        const getGetPhrasal = async() =>{
            const resultado = await axios.get('http://localhost:4000/get-phrases');
            setGetPhrasal(resultado.data.GetPhrases);
        }
        getGetPhrasal();
    },[])

    console.log(getPhrasal);

    return(
        
        <div>
            {
                getPhrasal.map(item => (
                    <>
                        <p>{item.phrase}</p>
                        <p>{item.mean_spanish}</p>
                        <p>{item.mean_french}</p>
                        <p>{item.example_english}</p>
                        <p>{item.example_spanish}</p>
                        <p>{item.example_french}</p>
                    </>
                ))
            }
        </div>
        
    )
}

export default Get;