import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../phrasalVerbs.css';
import CardPharasalVerbs from '../CardPharasalVerbs';
import Loader from '../../../loader/loader';

const Put = () => {

    const [putPhrasal, setPutPhrasal] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getPutPhrasal = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/put-phrases');
            setPutPhrasal(resultado.data.putPhrases);
            setLoading(false);
        }
        getPutPhrasal();
    },[]) 

    return(
        <div>
            {
                loading ? <Loader loading={loading}/> 
                        : <CardPharasalVerbs table={putPhrasal}/>
            }
        </div>
    )
}

export default Put;