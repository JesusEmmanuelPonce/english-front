import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../header';
import Loader from '../../../loader/loader';
import TableFamily from './tableFamily';
 
const Family = () => {

    const [family, setFamily] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getFamily = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/family');
            setFamily(resultado.data.family);
            setLoading(false);
        }

        getFamily();
    },[]);

    return(
        <>
            <Header
                title="Familia"
            />

            {
                loading ? <Loader loading={loading}/>
                        : <TableFamily 
                            table={family}
                        />
            }
        </>

    )
}

export default Family;