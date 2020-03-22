import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header';
import TableVerbs from './TableVerbs';
import Loader from '../../loader/loader';

const RegularVerbs = () => {

    const [regularVerbs, setRegularVerbs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getRegularVerbs = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/regular-verbs');
            setRegularVerbs(resultado.data.RegularVerbs);
            setLoading(false);
        }
        getRegularVerbs();
    },[])

    console.log(regularVerbs);

    return(
        <>
            <Header title="Verbos regulares"/>
            {
                loading ? <Loader loading={loading}/>
                        : <TableVerbs table={regularVerbs}
                                      regular
                        />
            }
        </>            
    )
} 

export default RegularVerbs;