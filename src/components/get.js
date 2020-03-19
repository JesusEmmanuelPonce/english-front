import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import 'antd/dist/antd.css';

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
        
        <div className="container-phrasal-pb">
            { getPhrasal.map(item => (
                <div className="site-card-border-less-wrapper">
                    <Card title={item.phrase} bordered={false} >
                        <p>{item.mean_spanish}</p>
                        <p>{item.mean_french}</p>
                        <p>{item.example_english}</p>
                        <p>{item.example_spanish}</p>
                        <p>{item.example_french}</p>
                    </Card>
                </div>
                ))
            }
        </div>
    )
}

export default Get;