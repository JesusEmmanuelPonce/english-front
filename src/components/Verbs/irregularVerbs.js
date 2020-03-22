import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../header';
import TableVerbs from './TableVerbs';
import Loader from '../../loader/loader';

const IrregularVerbs = () => {

    const [irregularVerbs, setIrregularVerbs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const getIrregularVerbs = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/irregular-verbs');
            setIrregularVerbs(resultado.data.IrregularVerbs);
            setLoading(false);
        }
        getIrregularVerbs();
    },[])

    console.log(irregularVerbs)

    return(
        <>
            <Header title="Verbos irregulares"/>
            {
                loading ? <Loader loading={loading}/>
                        : <TableVerbs table={irregularVerbs}
                        />
            }
        </>
    )
} 

export default IrregularVerbs;