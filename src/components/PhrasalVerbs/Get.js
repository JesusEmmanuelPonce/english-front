import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './phrasalVerbs.css';

import TablePharasalVerbs from './TablePhrasalVerbs';

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
        <TablePharasalVerbs 
            table={getPhrasal}
        />
    )
}

export default Get;