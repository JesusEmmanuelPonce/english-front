import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './phrasalVerbs.css';

const Get = () => {

    const [getPhrasal, setGetPhrasal] = useState([]);

    useEffect(()=> {
        const getGetPhrasal = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/get-phrases');
            setGetPhrasal(resultado.data.GetPhrases);
        }
        getGetPhrasal();
    },[])

    // console.log(getPhrasal);

    return(
        
        <div className="container-phrasal-pb">
            { getPhrasal.map(item => (
                <div className="site-card-border-less-wrapper card-pb">
                    <Card title={item.phrase} bordered={false} >
                        <span className="label-card-pb">Significado</span>
                        <p>{item.mean_spanish}</p>
                        <span className="label-card-pb">Ejemplo en ingles</span>
                        <p>{item.example_english}</p>
                        <span className="label-card-pb">Ejemplo en español</span>
                        <p>{item.example_spanish}</p>
                    </Card>
                </div>
                ))
            }
        </div>
    )
}

export default Get;