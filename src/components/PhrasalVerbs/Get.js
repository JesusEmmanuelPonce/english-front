import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './phrasalVerbs.css';
import TablePharasalVerbs from './TablePhrasalVerbs';
import Loader from '../../loader/loader';

const Get = () => {

    const [getPhrasal, setGetPhrasal] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getGetPhrasal = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/get-phrases');
            setGetPhrasal(resultado.data.GetPhrases);
            setLoading(false);
        }
        getGetPhrasal();
    },[]) 

    // console.log(getPhrasal);

    return(
        <div>
            {
                loading ? <Loader loading={loading}/> 
                        : <TablePharasalVerbs table={getPhrasal}/>
            }
        </div>
    )
}

export default Get;