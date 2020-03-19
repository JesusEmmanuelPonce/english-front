import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../header';
import TableVerbs from './TableVerbs';


const IrregularVerbs = () => {

    const [irregularVerbs, setIrregularVerbs] = useState([]);

    useEffect(()=> {
        const getIrregularVerbs = async() =>{
            const resultado = await axios.get('http://localhost:4000/irregular-verbs');
            setIrregularVerbs(resultado.data.IrregularVerbs);
        }
        getIrregularVerbs();
    },[])

    console.log(irregularVerbs)

    return(
        <>
            <Header title="Verbos irregulares"/>
            <TableVerbs
                table={irregularVerbs}
            />
        </>
    )
} 

export default IrregularVerbs;