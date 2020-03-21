import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header';
import TableVerbs from './TableVerbs';

const RegularVerbs = () => {

    const [regularVerbs, setRegularVerbs] = useState([]);

    useEffect(()=> {
        const getRegularVerbs = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/regular-verbs');
            setRegularVerbs(resultado.data.RegularVerbs);
        }
        getRegularVerbs();
    },[])

    console.log(regularVerbs);

    return(
        <>
            <Header title="Verbos regulares"/>
            <TableVerbs
                table={regularVerbs}
                regular
            />
        </>            
    )
} 

export default RegularVerbs;